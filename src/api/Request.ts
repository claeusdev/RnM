import { Character, CharacterResponse } from "types";
import { BASE_CHARACTER_URL, BASE_URL } from "utils";

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
      console.log("RES", url)
      const response = await fetch(url);
      const data = response.json();
      return data
    },
  };
};

export default Api;
