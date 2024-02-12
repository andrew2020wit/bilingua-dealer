import { computeMorphologyRule } from './compute-morphology-rule';
import {TMorphologyReplaceRulesIds} from "./compute-morphology-rule-ids.type";
import {morphologyReplaceRules} from "./morphology-replace-rules";

function computedNewTerm(ruleId: TMorphologyReplaceRulesIds, term: string): string {
  const rule = morphologyReplaceRules.find(item => item.ruleId === ruleId)!;

  return computeMorphologyRule(term, rule)!;
}

describe('computeMorphologyRule', () => {

  it('PluralNounS: books => book', () => {
    const ruleId: TMorphologyReplaceRulesIds = 'PluralNounS';
    const term = 'books';
    const newTerm = 'book';

    expect(computedNewTerm(ruleId, term)).toBe(newTerm);
  });

  it('PluralNounES: boxes => box', () => {
    const ruleId: TMorphologyReplaceRulesIds = 'PluralNounES';
    const term = 'boxes';
    const newTerm = 'box';

    expect(computedNewTerm(ruleId, term)).toBe(newTerm);
  });

  it('PluralNounIES: universities => university', () => {
    const ruleId: TMorphologyReplaceRulesIds = 'PluralNounIES';
    const term = 'universities';
    const newTerm = 'university';

    expect(computedNewTerm(ruleId, term)).toBe(newTerm);
  });

  it('Adverb: calmly => calm', () => {
    const ruleId: TMorphologyReplaceRulesIds = 'Adverb';
    const term = 'calmly';
    const newTerm = 'calm';

    expect(computedNewTerm(ruleId, term)).toBe(newTerm);
  });

  it('VerbEd: opened => open', () => {
    const ruleId: TMorphologyReplaceRulesIds = 'VerbEd';
    const term = 'opened';
    const newTerm = 'open';

    expect(computedNewTerm(ruleId, term)).toBe(newTerm);
  });

  it('VerbEEd: moved => move', () => {
    const ruleId: TMorphologyReplaceRulesIds = 'VerbEEd';
    const term = 'moved';
    const newTerm = 'move';

    expect(computedNewTerm(ruleId, term)).toBe(newTerm);
  });

  it('VerbIed: studied => study', () => {
    const ruleId: TMorphologyReplaceRulesIds = 'VerbIed';
    const term = 'studied';
    const newTerm = 'study';

    expect(computedNewTerm(ruleId, term)).toBe(newTerm);
  });

  it('VerbIng: looking => look', () => {
    const ruleId: TMorphologyReplaceRulesIds = 'VerbIng';
    const term = 'looking';
    const newTerm = 'look';

    expect(computedNewTerm(ruleId, term)).toBe(newTerm);
  });

  it('VerbEIng: moving => move', () => {
    const ruleId: TMorphologyReplaceRulesIds = 'VerbEIng';
    const term = 'moving';
    const newTerm = 'move';

    expect(computedNewTerm(ruleId, term)).toBe(newTerm);
  });


  it('Comparative: richer => rich', () => {
    const ruleId: TMorphologyReplaceRulesIds = 'Comparative';
    const term = 'richer';
    const newTerm = 'rich';

    expect(computedNewTerm(ruleId, term)).toBe(newTerm);
  });

  it('ComparativeE: nicer => nice', () => {
    const ruleId: TMorphologyReplaceRulesIds = 'ComparativeE';
    const term = 'nicer';
    const newTerm = 'nice';

    expect(computedNewTerm(ruleId, term)).toBe(newTerm);
  });

  it('ComparativeY: busier => busy', () => {
    const ruleId: TMorphologyReplaceRulesIds = 'ComparativeY';
    const term = 'busier';
    const newTerm = 'busy';

    expect(computedNewTerm(ruleId, term)).toBe(newTerm);
  });

  it('Superlative: richest => rich', () => {
    const ruleId: TMorphologyReplaceRulesIds = 'Superlative';
    const term = 'richest';
    const newTerm = 'rich';

    expect(computedNewTerm(ruleId, term)).toBe(newTerm);
  });

  it('SuperlativeE: nicest => nice', () => {
    const ruleId: TMorphologyReplaceRulesIds = 'SuperlativeE';
    const term = 'nicest';
    const newTerm = 'nice';

    expect(computedNewTerm(ruleId, term)).toBe(newTerm);
  });

  it('SuperlativeY: busiest => busy', () => {
    const ruleId: TMorphologyReplaceRulesIds = 'SuperlativeY';
    const term = 'busiest';
    const newTerm = 'busy';

    expect(computedNewTerm(ruleId, term)).toBe(newTerm);
  });

  it('MentSuffix:  => ', () => {
    const ruleId: TMorphologyReplaceRulesIds = 'MentSuffix';
    const term = 'government';
    const newTerm = 'govern';

    expect(computedNewTerm(ruleId, term)).toBe(newTerm);
  });

});
