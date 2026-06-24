/* ============================================================
   Content Engine Diagnostic — pure scoring engine
   No DOM, no fetch, no globals. Inputs in, result out.
   Tested by tests/scoring.test.js before any UI exists.

   The instrument is UNGAMEABLE by design: every answer option is the
   mature, defensible expression of its own content-operator archetype.
   The grade does not come from "right" answers — it emerges from how
   COHERENT the respondent's pattern is across dimensions, with caps for
   monoculture (too clean → unexamined/gamed) and for tripping the domain's
   known failure mode (vanity-metric fixation).
   ============================================================ */

/* ---- Schema: the source of truth for structure ----------------------------
   questions.json mirrors these ids. Keeping the structure here lets scoring
   be unit-tested with plain objects, no JSON load required.
-------------------------------------------------------------------------- */
export const TIERS = ['storyteller', 'educator', 'connector', 'amplifier', 'closer'];

export const DIMENSIONS = {
  strategy:     ['q1', 'q2'],
  cadence:      ['q3', 'q4'],
  voice:        ['q5', 'q6'],
  distribution: ['q7', 'q8'],
  conversion:   ['q9', 'q10'],
};

export const SCORING_KEYS = Object.values(DIMENSIONS).flat(); // q1..q10
export const GATE_KEY = 'gate';

/* The archetype most prone to the domain's failure mode (vanity-metric
   fixation): the reach-led Amplifier. Tripping the gate caps the grade only
   when the respondent's primary tier is this one. */
export const DRIFT_PRONE_TIER = 'amplifier';
export const DRIFT_VALUE = 'drift';

/* ---- helpers ---- */
function tally(answers) {
  const counts = Object.create(null);
  for (const t of TIERS) counts[t] = 0;
  for (const key of SCORING_KEYS) {
    const v = answers[key];
    if (v && counts[v] !== undefined) counts[v] += 1;
  }
  return counts;
}

function plurality(counts) {
  // Deterministic: ties broken by TIERS order (stable, documented).
  let best = TIERS[0];
  for (const t of TIERS) {
    if (counts[t] > counts[best]) best = t;
  }
  return best;
}

function answeredScoringCount(answers) {
  return SCORING_KEYS.filter((k) => TIERS.includes(answers[k])).length;
}

function hitDimensions(answers, primary) {
  let hit = 0;
  for (const keys of Object.values(DIMENSIONS)) {
    if (keys.some((k) => answers[k] === primary)) hit += 1;
  }
  return hit;
}

/* Per-dimension sub-grade (PLAYBOOK §1.5) */
function perDimension(answers, primary) {
  const grades = {};
  for (const [dim, keys] of Object.entries(DIMENSIONS)) {
    const picks = keys.map((k) => answers[k]);
    const matches = picks.filter((p) => p === primary).length;
    if (matches === 2) grades[dim] = 'A';
    else if (matches === 1) grades[dim] = 'B';
    else if (picks[0] && picks[0] === picks[1]) grades[dim] = 'C'; // consistent secondary tier
    else grades[dim] = 'D'; // two different non-primary tiers
  }
  return grades;
}

/* ---- grade lookup (PLAYBOOK §1.4). First match wins. ---- */
export function lookupGrade({ coherence, dimensionBreadth, monocultureFlag, cappingDrift }) {
  if (coherence < 0.30) return 'F';
  if (coherence < 0.50) return 'D';
  if (monocultureFlag) return 'B'; // coherence >= 0.90 → monoculture cap
  if (coherence <= 0.89 && coherence >= 0.70 && dimensionBreadth >= 0.80) {
    return cappingDrift ? 'B' : 'A'; // drift cap, else top grade
  }
  if (coherence <= 0.69 && coherence >= 0.50 && dimensionBreadth >= 0.60 && !cappingDrift) {
    return 'B';
  }
  if (coherence <= 0.69 && coherence >= 0.50 && cappingDrift) {
    return 'C';
  }
  return 'C';
}

/* ---- public API ---- */
export function scoreTool(answers = {}) {
  const counts = tally(answers);
  const primary = plurality(counts);
  const answered = answeredScoringCount(answers) || SCORING_KEYS.length;

  const coherence = counts[primary] / answered;
  const dimensionBreadth = hitDimensions(answers, primary) / Object.keys(DIMENSIONS).length;
  const monocultureFlag = coherence >= 0.90;

  const driftFlag = answers[GATE_KEY] === DRIFT_VALUE;
  const cappingDrift = driftFlag && primary === DRIFT_PRONE_TIER;

  const grade = lookupGrade({ coherence, dimensionBreadth, monocultureFlag, cappingDrift });

  return {
    tier: primary,
    grade,
    coherence: Number(coherence.toFixed(3)),
    dimensionBreadth: Number(dimensionBreadth.toFixed(3)),
    monocultureFlag,
    driftFlag,
    cappingDrift,
    counts,
    dimensionGrades: perDimension(answers, primary),
  };
}
