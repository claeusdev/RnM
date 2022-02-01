import { Character, CharacterResponse, Episode } from "types";
import { BASE_CHARACTER_URL, BASE_URL, getEpisodeIds } from "utils";

const Api = () => {
  
  return {

    getSingleCharacter: async (id: string): Promise<Character> => {
      const response = await fetch(`${BASE_URL}/character/${id}`);
      const data = response.json();
      return data
    },
    /**
     * Method to get all characters from Api
     * @returns Promise
     */
    getCharacters: async (url: string = BASE_CHARACTER_URL): Promise<CharacterResponse> => {
      const response = await fetch(url);
      const data = await response.json();
      return data
    },

    getEpisodes: async (episodes: string[]): Promise<Episode[]> => {
      const episodeIds = getEpisodeIds(episodes)
      const response = await fetch(`${BASE_URL}/episode/${episodeIds}`)
      const data = await response.json()
      if(!Array.isArray(data)) return [data]
      return [...data]
    }
  };
};

export default Api;
