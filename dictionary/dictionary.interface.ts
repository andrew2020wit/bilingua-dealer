export interface IMorphology {
  i: string;
  o: string;
}

export interface IDictionaryTerm {
  term: string;
  articles: IArticle[];
}

export interface IArticle {
  term: string;
  partOfSpeech: string;
  transcription: string;
  definitions: IDefinition[];
}

export interface IDefinition {
  definition: string;
  showDetails?: boolean;
  synonym?: string;
  antonym?: string;
  examples?: IExample[];
}

export interface IExample {
  original: string;
  translation?: string;
}
