import Api from 'api';
import { Dispatch } from 'react';
import { Action, GetCharacterParams } from 'types';
import { ActionTypes } from '../types';

export const fetchCharacters = ({
  status,
  species,
  pageNumber,
  gender,
}: GetCharacterParams) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.LOAD_CHARACTERS,
    });

    try {
      const data = await Api().getCharacters({
        status,
        gender,
        species,
        pageNumber,
      });
      dispatch({
        type: ActionTypes.LOAD_CHARACTERS_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionTypes.LOAD_CHARACTERS_ERROR,
        payload: error.message,
      });
    }
  };
};

export const fetchCharacter = (id: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.LOAD_CHARACTER,
    });

    try {
      const data = await Api().getSingleCharacter(id);
      dispatch({
        type: ActionTypes.LOAD_CHARACTER_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionTypes.LOAD_CHARACTER_ERROR,
        payload: error.message,
      });
    }
  };
};
