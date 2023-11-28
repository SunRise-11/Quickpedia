export type UserData = {
  email: string;
  username: string;
  bookmarks: Article[];
};

export type DynamicUrl = {
  params: { topic: string };
};

export type Article = {
  id: string;
  question: string;
  answer: string;
  topic: string;
  rank: number;
}