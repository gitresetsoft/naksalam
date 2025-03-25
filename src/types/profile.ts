
export interface Profile {
  id: string;
  name: string;
  age: number;
  location: string;
  distance: number;
  bio: string;
  interests: string[];
  imageUrl: string;
  detailImageUrls?: string[];
  compatibility?: number;
  isFamily?: boolean;
}

export type Direction = 'left' | 'right' | 'up' | 'down';

export type SwipeAction = 'correct' | 'wrong';

export interface Score {
  correct: number;
  wrong: number;
  streak: number;
  longestStreak: number;
}
