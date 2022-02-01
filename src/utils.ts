import { Character } from "types";

export const STATUSES: {
    [key: string]: string
  } = {
    "Dead": "danger",
    "Alive": "success",
  };

export const BASE_URL = `https://rickandmortyapi.com/api`;
export const BASE_CHARACTER_URL = `https://rickandmortyapi.com/api/character`;

export const getEpisodeIds = (urls: string[] = []) => {
  const ids = urls.map(url => Number(url.split("/episode/")[1]))
  console.log(ids)
  return ids
}

export const isEmpty = (list: number[] | string[] | Character[]): boolean => {
  return list.length > 0;
}