export interface Story {
    created_at: string;
    title: string;
    url: string;
    author: string;
    points: number;
    story_text?: null;
    comment_text?: null;
    num_comments: number;
    story_id?: null;
    story_title?: null;
    story_url?: null;
    parent_id?: null;
    created_at_i: number;
    relevancy_score: number;
    _tags?: (string)[] | null;
    objectID: string;
    _highlightResult: HighlightResult;
  }
  export interface HighlightResult {
    title: TitleOrUrlOrAuthor;
    url: TitleOrUrlOrAuthor;
    author: TitleOrUrlOrAuthor;
  }
  export interface TitleOrUrlOrAuthor {
    value: string;
    matchLevel: string;
    matchedWords?: (null)[] | null;
  }
  