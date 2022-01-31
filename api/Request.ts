import { BASE_URL } from 'utils';

const Api = () => {
  return {
    /** 
     * Method to get all products from Api
     * @param  {string} token
     * @returns Promise
     */
    getCharacters: async (token: string): Promise<> => {
      return window
        .fetch(`${BASE_URL}/products?token=${token}`)
        .then(res => res.json());
    },
  };
};

export default Api;