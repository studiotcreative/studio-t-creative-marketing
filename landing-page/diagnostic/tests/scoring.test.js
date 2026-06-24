/* Run: node --test  (from landing-page/diagnostic) */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { scoreTool, SCORING_KEYS, lookupGrade } from '../js/scoring.js';

/* ---- fixtures ---- */
function allOf(tier, gate = 'signal') {
  const a = {};
  for (const k of SCORING_KEYS) a[k] = tier;
  a.gate = gate;
  return a;
}

// A coherent-but-not-monoculture pattern: 7 of one tier, spread across all
// 5 dimensions, 3 of a secondary tier. coherence 0.7, breadth 1.0.
function coherentSpread(primary, secondary) {
  // dims: strategy q1,q2 | cadence q3,q4 | voice q5,q6 | distribution q7,q8 | conversion q9,q10
  return {
    q1: primary, q2: secondary,   // strategy: 1 hit
    q3: primary, q4: primary,     // cadence: 2 hits
    q5: primary, q6: secondary,   // voice: 1 hit
    q7: primary, q8: primary,     // distribution: 2 hits
    q9: primary, q10: secondary,  // conversion: 1 hit
    gate: 'signal',
  }; // primary count = 7 → coherence 0.7, breadth 5/5 = 1.0
}

function scattered() {
  return {
    q1: 'storyteller', q2: 'educator', q3: 'connector', q4: 'amplifier',
    q5: 'closer', q6: 'storyteller', q7: 'educator', q8: 'connector',
    q9: 'amplifier', q10: 'closer', gate: 'signal',
  }; // 2 of each → coherence 0.2
}

/* ---- tier identification ---- */
test('coherent primary tier wins the plurality', () => {
  assert.equal(scoreTool(coherentSpread('educator', 'closer')).tier, 'educator');
});

test('a clean storyteller pattern is identified as storyteller', () => {
  assert.equal(scoreTool(allOf('storyteller')).tier, 'storyteller');
});

/* ---- grade behaviour ---- */
test('monoculture (10/10 one tier) caps at B, never A', () => {
  const r = scoreTool(allOf('closer'));
  assert.equal(r.monocultureFlag, true);
  assert.equal(r.grade, 'B');
});

test('coherent spread (0.7, breadth 1.0, no drift) earns an A', () => {
  const r = scoreTool(coherentSpread('storyteller', 'connector'));
  assert.equal(r.coherence, 0.7);
  assert.equal(r.dimensionBreadth, 1);
  assert.equal(r.grade, 'A');
});

test('scattered answers grade D or F', () => {
  assert.ok(['D', 'F'].includes(scoreTool(scattered()).grade));
});

/* ---- drift gate ---- */
test('drift gate caps the grade when primary is the drift-prone tier', () => {
  const a = coherentSpread('amplifier', 'closer');
  a.gate = 'drift';
  const r = scoreTool(a);
  assert.equal(r.driftFlag, true);
  assert.equal(r.cappingDrift, true);
  assert.equal(r.grade, 'B'); // would be A without the drift trip
});

test('drift gate does NOT cap when primary is a non-prone tier', () => {
  const a = coherentSpread('educator', 'closer');
  a.gate = 'drift';
  const r = scoreTool(a);
  assert.equal(r.driftFlag, true);
  assert.equal(r.cappingDrift, false);
  assert.equal(r.grade, 'A'); // soft caveat shown by UI, but no cap
});

/* ---- dimension sub-grades ---- */
test('dimension with both items on primary scores A; mixed scores B', () => {
  const r = scoreTool(coherentSpread('educator', 'closer'));
  assert.equal(r.dimensionGrades.cadence, 'A');      // q3,q4 both educator
  assert.equal(r.dimensionGrades.strategy, 'B');     // q1 educator, q2 closer
});

test('two different non-primary picks in a dimension score D', () => {
  const a = allOf('storyteller');
  a.q9 = 'educator'; a.q10 = 'closer'; // conversion: two different non-primary
  const r = scoreTool(a);
  assert.equal(r.dimensionGrades.conversion, 'D');
});

/* ---- lookupGrade unit edges ---- */
test('lookupGrade boundaries', () => {
  assert.equal(lookupGrade({ coherence: 0.29, dimensionBreadth: 1, monocultureFlag: false, cappingDrift: false }), 'F');
  assert.equal(lookupGrade({ coherence: 0.40, dimensionBreadth: 1, monocultureFlag: false, cappingDrift: false }), 'D');
  assert.equal(lookupGrade({ coherence: 0.60, dimensionBreadth: 0.6, monocultureFlag: false, cappingDrift: false }), 'B');
  assert.equal(lookupGrade({ coherence: 0.60, dimensionBreadth: 0.6, monocultureFlag: false, cappingDrift: true }), 'C');
  assert.equal(lookupGrade({ coherence: 0.95, dimensionBreadth: 1, monocultureFlag: true, cappingDrift: false }), 'B');
});
