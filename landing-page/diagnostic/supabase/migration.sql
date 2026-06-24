-- ============================================================
-- Content Engine Diagnostic — storage (anon-INSERT-only)
-- PREPARED, NOT APPLIED. Apply only after owner approval, against the
-- chosen Supabase project. Every endpoint is a pure INSERT (split tables),
-- so no UPDATE/DELETE policy is ever needed. Reads happen via the service
-- role / dashboard only.
--
-- RLS controls WHICH rows; GRANT controls WHETHER the statement is allowed.
-- You need BOTH the policy and the GRANT for anon inserts to work.
-- ============================================================

-- 1) One row per completed diagnostic ------------------------------------
create table if not exists diagnostic_submissions (
  id              uuid primary key default gen_random_uuid(),
  created_at      timestamptz not null default now(),
  session_id      uuid not null,
  responses       jsonb not null,   -- { q1..q10, gate }
  computed        jsonb not null,   -- { tier, grade, coherence, breadth, flags, dimensionGrades }
  referrer        text,
  user_agent_hash text
);
alter table diagnostic_submissions enable row level security;
create policy "diagnostic_submissions public insert"
  on diagnostic_submissions for insert to public with check (true);
grant insert on diagnostic_submissions to anon;

-- Editorial cross-tab indexes (queried via service role only)
create index if not exists diagnostic_submissions_tier_grade_idx
  on diagnostic_submissions ((computed->>'tier'), (computed->>'grade'));
create index if not exists diagnostic_submissions_created_idx
  on diagnostic_submissions (created_at);

-- 2) Email opt-ins, linked to a submission --------------------------------
create table if not exists diagnostic_contacts (
  id                  uuid primary key default gen_random_uuid(),
  created_at          timestamptz not null default now(),
  submission_id       uuid references diagnostic_submissions(id),
  email               text not null,
  name                text,
  archetype           text,   -- denormalized for fast segment queries
  grade               text,
  -- tiered opt-ins (none pre-checked in the UI)
  wants_strategy_call boolean not null default false,  -- primary ask
  wants_product_news  boolean not null default false,  -- demand signal
  wants_resource_list boolean not null default false,  -- lowest friction
  consent_to_outreach boolean not null default true    -- true on submit
);
alter table diagnostic_contacts enable row level security;
create policy "diagnostic_contacts public insert"
  on diagnostic_contacts for insert to public with check (true);
grant insert on diagnostic_contacts to anon;

create index if not exists diagnostic_contacts_archetype_idx
  on diagnostic_contacts (archetype, grade);

-- 3) Funnel telemetry -----------------------------------------------------
create table if not exists diagnostic_events (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  session_id  uuid not null,
  event_type  text not null,   -- 'start' | 'complete' | 'optin'
  metadata    jsonb
);
alter table diagnostic_events enable row level security;
create policy "diagnostic_events public insert"
  on diagnostic_events for insert to public with check (true);
grant insert on diagnostic_events to anon;

-- NO select/update/delete policies anywhere. Insert-only by design.
