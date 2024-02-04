import { computeMorphologyRule } from './compute-morphology-rule';
import { IMorphologyReplaceRule } from '../models/dictionary.interface';

describe('computeMorphologyRule', () => {
  type RulesKeys = 's => empty' | 'ed => empty' | 'ing => e' | 'prefix' | 'middle';

  const rules: Record<RulesKeys, IMorphologyReplaceRule> = {
    's => empty': {
      index: -1,
      pattern: 's',
      replace: '',
    },

    'ed => empty': {
      index: -2,
      pattern: 'ed',
      replace: '',
    },

    'ing => e': {
      index: -3,
      pattern: 'ing',
      replace: 'e',
    },

    'prefix': {
      index: 0,
      pattern: 'pre',
      replace: 'replace',
    },

    'middle': {
      index: 2,
      pattern: 'middle',
      replace: 'replace',
    },
  };

  it('books => book (s => empty)', () => {
    const ruleKey: RulesKeys = 's => empty';
    const term = 'books';
    const newTerm = 'book';

    expect(computeMorphologyRule(term, rules[ruleKey])).toBe(newTerm);
  });

  it('books => book (ed => empty)', () => {
    const ruleKey: RulesKeys = 'ed => empty';
    const term = 'acted';
    const newTerm = 'act';

    expect(computeMorphologyRule(term, rules[ruleKey])).toBe(newTerm);
  });

  it('books => book (ing => e)', () => {
    const ruleKey: RulesKeys = 'ing => e';
    const term = 'baking';
    const newTerm = 'bake';

    expect(computeMorphologyRule(term, rules[ruleKey])).toBe(newTerm);
  });

  it('pre01234 => replace01234 (prefix)', () => {
    const ruleKey: RulesKeys = 'prefix';
    const term = 'pre01234';
    const newTerm = 'replace01234';

    expect(computeMorphologyRule(term, rules[ruleKey])).toBe(newTerm);
  });

  it('01middle777 => 01replace777 (middle)', () => {
    const ruleKey: RulesKeys = 'middle';
    const term = '01middle777';
    const newTerm = '01replace777';

    expect(computeMorphologyRule(term, rules[ruleKey])).toBe(newTerm);
  });
});
