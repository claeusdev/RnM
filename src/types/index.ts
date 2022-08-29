import { ActionTypes } from 'store/actions/types';

export interface State {
  characters: CharactersResponse | null;
  loading: boolean;
  error: string | null;
  character: Character | null;
  episodes: Episode[]
}

export type Action =
  | FetchCharacterAction
  | FetchCharacterErrorAction
  | FetchCharacterSuccessAction
  | FetchCharactersAction
  | FetchCharactersSuccessAction
  | FetchCharactersErrorAction
  | SetEpisodesAction

export interface SetEpisodesAction {
  type: ActionTypes.SET_EPISODES,
  payload: Episode[]
}
export interface FetchCharactersAction {
  type: ActionTypes.LOAD_CHARACTERS;
}
export interface FetchCharacterAction {
  type: ActionTypes.LOAD_CHARACTER;
}
export interface FetchCharactersSuccessAction {
  type: ActionTypes.LOAD_CHARACTERS_SUCCESS;
  payload: CharactersResponse;
}

export interface FetchCharacterSuccessAction {
  type: ActionTypes.LOAD_CHARACTER_SUCCESS;
  payload: Character;
}

export interface FetchCharactersErrorAction {
  type: ActionTypes.LOAD_CHARACTERS_ERROR;
  payload: string;
}

export interface FetchCharacterErrorAction {
  type: ActionTypes.LOAD_CHARACTER_ERROR;
  payload: string;
}
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

export type GetCharacterParams = {
  status?: string;
  species?: string;
  pageNumber?: number;
  gender?: string;
};
export interface Location {
  name: string;
  url: string;
}

export interface CharactersResponse {
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
  characters: Character[];
  url: string;
  created: string;
};
