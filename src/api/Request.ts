import { Character, CharacterResponse } from "types";

const Api = () => {
  const BASE_URL = `https://rickandmortyapi.com/api`;
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
    getCharacters: async (): Promise<CharacterResponse> => {
      const response = await fetch(`${BASE_URL}/character`);
      const data = response.json();
      return data
    },
  };
};

export default Api;
