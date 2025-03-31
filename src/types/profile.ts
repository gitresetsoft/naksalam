export interface Dalil {
  maleUser?: string;
  femaleUser?: string;
}

export interface Profile {
  id: string;
  name: string;
  age: number;
  dalil?: Dalil | string | undefined;
  interests: string[];
  imageUrl: string;
  detailImageUrls: string[];
  hint?: string;
  relationship?: string;
  
  //legacy
  location?: string;
  distance?: number;
  bio?: string;
  compatibility?: number;
}

export type Direction = 'left' | 'right' | 'up' | 'down';

export type SwipeAction = 'correct' | 'wrong';

export interface Score {
  correct: number;
  wrong: number;
  streak: number;
  longestStreak: number;
}
