import { Character, CharacterResponse, Episode, GetCharacterParams } from 'types';
import { BASE_CHARACTER_URL, BASE_URL, getEpisodeIds } from 'utils';



const Api = () => {
  return {
    /**
     * @param  {string} id
     */
    getSingleCharacter: async (id: string): Promise<Character> => {
      const response = await fetch(`${BASE_URL}/character/${id}`);
      const data = response.json();
      return data;
    },
    /**
     * @param  {GetCharacterParams} params
     */
    getCharacters: async ({status, species, pageNumber, gender}: GetCharacterParams): Promise<CharacterResponse> => {
      const response = await fetch(
        `${BASE_CHARACTER_URL}/?page=${pageNumber}&status=${status}&gender=${gender}&species=${species}`
      );
      const data = await response.json();
      return data;
    },
    /**
     * @param  {string[]} episodes
     */
    getEpisodes: async (episodes: string[]): Promise<Episode[]> => {
      const episodeIds = getEpisodeIds(episodes);
      const response = await fetch(`${BASE_URL}/episode/${episodeIds}`);
      const data = await response.json();
      if (!Array.isArray(data)) return [data];
      return [...data];
    },
    /**
     * @param  {string} term
     */
    searchCharacters: async (term: string): Promise<CharacterResponse> => {
      const response = await fetch(`${BASE_CHARACTER_URL}/?name=${term}`);
      const data = await response.json();
      return data;
    },
  };
};

export default Api;
