export interface IBilingua {
  id: string;
  title: string;
  description: string;
  content: IBilinguaContent[];

  markedItems: IBilinguaContent['id'][];
  headers: IBilinguaHeader[];
  fragments: IBilinguaFragment[];
}

export interface IBilinguaContent {
  id: number;
  original: string;
  translation: string;
}

export type IBilinguaHeader = {
  id: IBilinguaContent['id'];
  isMarked: boolean;
  text: string;
};

export type IBilinguaFragment = { text: string; id: IBilinguaContent['id'] };

export interface IDBBilinguaContent {
  id: IBilingua['id'];
  content: IBilingua['content'];
}

export interface IDBBilinguaTitle {
  id: IBilingua['id'];
  title: IBilingua['title'];
  description: IBilingua['description'];
  lastOpenedTime: number;
  currentContentItemId: number;
  showAllTranslations: boolean;
}

export interface IDBBilinguaMarks {
  id: IBilingua['id'];
  markedItems: IBilingua['markedItems'];
}

export interface IDBBilinguaHeaders {
  id: IBilingua['id'];
  headers: IBilingua['headers'];
}

export interface IDBBilinguaFragments {
  id: IBilingua['id'];
  fragments: IBilingua['fragments'];
}
