export interface Character {
  id: number;
  name: string;
  species: string;
  image: string;
  status: string;
  origin: Location;
  location: Location;
  gender: string;
  episode: string[];
  url: string;
}

export interface Location {
  name: string;
  url: string;
}

export interface CharacterResponse {
  info: Info;
  results: Character[];
}

export type Info = {
  count: number;
  pages: number;
  next: string;
  prev: string | null;
};


export type Episode = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: Character[],
  url: string;
  created: string;
}