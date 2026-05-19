export type Category = "GENERAL" | "PROGRAMMING" | "KNOCK_KNOCK" | "DAD";

export interface Joke {
  id: number;
  setup: string;
  punchline: string;
  category: Category;
  rating: number;
}

