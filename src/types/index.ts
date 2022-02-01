export interface Character {
    id: string;
  name: string;
  species: string;
  image: string;
  status: string;
  origin: Location;
  location: Location;
  gender: string;
  episode: Episode[];
}

export interface Location {
  name: string;
  url: string;
  created: string | null;
  dimension: string | null;
  id: string | null;
  residents: string[] | null;
  type: string | null;
}

export interface Episode {
  air_date: string;
  characters: string[];
  created: string;
  episode: string;
  id: number;
  name: string;
  url: string;
}

export interface CharacterResponse {
  info: {
    count: string;
    pages: number;
    next: string;
    prev: null;
  };
  results: Character[];
}
