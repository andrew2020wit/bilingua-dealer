export interface IMorphologyReplaceRulesDictionary {
  morphologyReplaceRules: IMorphologyReplaceRule[];
  language?: string;
  updateDate?: string;
  formatDescriptor?: 'JSONMorphologyReplaceRulesDictionary';
}

export interface IMorphologyDictionary {
  rules: IMorphologyRule[];
  language?: string;
  source?: string;
  updateDate?: string;
  formatDescriptor?: 'JSONMorphologyDictionary';
}

export interface IMorphologyRule {
  i: string;
  o: string;
}

export interface IDictionary {
  terms: IDictionaryTerm[];
  dictionaryName?: string;
  dictionaryTermLanguage?: string;
  dictionaryLicense?: string;
  updateDate?: string;
  formatDescriptor?: 'JSONDictionary';
  isShortVersion?: boolean;
}

export interface IDictionaryTerm {
  term: string;
  articles: IArticle[];
}

export interface IArticle {
  dictionaryName?: string;
  partOfSpeech: string;
  transcription?: string;
  definitions: IDefinition[];
}

export interface IDefinition {
  definition: string;
  lexicalUnit?: string;
  showDetails?: boolean;
  synonym?: string;
  antonym?: string;
  examples?: IExample[];
}

export interface IExample {
  original: string;
  translation?: string;
}

export interface IMorphologyReplaceRule {
  index: number,
  pattern: string,
  replace: string
}
