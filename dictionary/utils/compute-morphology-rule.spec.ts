import { computeMorphologyRule } from './compute-morphology-rule';
import { IMorphologyReplaceRule } from '../dictionary.interface';

describe('computeMorphologyRule', () => {
  type RulesKeys = 's => empty' | 'ed => empty' | 'ing => e';

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
});
