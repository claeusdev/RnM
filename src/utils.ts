import { Character } from 'types';

export const STATUSES: {
  [key: string]: string;
} = {
  Dead: 'danger',
  Alive: 'success',
};

export const BASE_URL = `https://rickandmortyapi.com/api`;
export const BASE_CHARACTER_URL = `https://rickandmortyapi.com/api/character`;

/**
 * @param  {string[]=[]} urls
 * @returns number[]
 */

export const getEpisodeIds = (urls: string[] = []): number[] => {
  const ids = urls.map((url) => Number(url.split('/episode/')[1]));
  return ids;
};

/**
 * @param  {number[]|string[]|Character[]} list
 * @returns boolean
 */

export const isEmpty = (list: number[] | string[] | Character[] = []): boolean => {
  return list.length > 0;
};
