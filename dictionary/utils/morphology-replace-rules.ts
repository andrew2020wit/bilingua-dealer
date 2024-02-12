import { IMorphologyReplaceRule } from './morphology-replace-rule.interface';

export const morphologyReplaceRules: IMorphologyReplaceRule[] = [
  {
    ruleId: 'PluralNounS',
    index: -1,
    pattern: 's',
    replace: '',
  },
  {
    ruleId: 'PluralNounES',
    index: -2,
    pattern: 'es',
    replace: '',
  },
  {
    ruleId: 'PluralNounIES',
    index: -3,
    pattern: 'ies',
    replace: 'y',
  },

  {
    ruleId: 'Adverb',
    index: -2,
    pattern: 'ly',
    replace: '',
  },

  {
    ruleId: 'VerbEd',
    index: -2,
    pattern: 'ed',
    replace: '',
  },
  {
    ruleId: 'VerbEEd',
    index: -2,
    pattern: 'ed',
    replace: 'e',
  },
  {
    ruleId: 'VerbIed',
    index: -3,
    pattern: 'ied',
    replace: 'y',
  },
  {
    ruleId: 'VerbIng',
    index: -3,
    pattern: 'ing',
    replace: '',
  },
  {
    ruleId: 'VerbEIng',
    index: -3,
    pattern: 'ing',
    replace: 'e',
  },

  {
    ruleId: 'Comparative',
    index: -2,
    pattern: 'er',
    replace: '',
  },
  {
    ruleId: 'ComparativeE',
    index: -2,
    pattern: 'er',
    replace: 'e',
  },
  {
    ruleId: 'ComparativeY',
    index: -3,
    pattern: 'ier',
    replace: 'y',
  },
  {
    ruleId: 'Superlative',
    index: -3,
    pattern: 'est',
    replace: '',
  },
  {
    ruleId: 'SuperlativeE',
    index: -3,
    pattern: 'est',
    replace: 'e',
  },
  {
    ruleId: 'SuperlativeY',
    index: -4,
    pattern: 'iest',
    replace: 'y',
  },

  {
    ruleId: 'MentSuffix',
    index: -4,
    pattern: 'ment',
    replace: '',
  },
];
