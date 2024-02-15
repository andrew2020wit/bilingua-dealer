import {IMorphologyReplaceRule} from "./utils/morphology-replace-rule.interface";

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
  level?: string;
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

export interface IFavoriteExample {
  timestamp?: number; // id, must be unique
  toDoTimestamp?: number;
  updateTimestamp?: number;
  term: string;
  partOfSpeech: string;
  definition: string;
  original: string;
  translation?: string;
  transcription?: string;
  synonym?: string;
  antonym?: string;
  showDetails?: boolean;
}

export interface IFavoriteExampleCollection {
  favoriteExamples: IFavoriteExample[]
}
