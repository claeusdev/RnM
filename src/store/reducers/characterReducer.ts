import { ActionTypes } from 'store/actions/types';
import { Action, State } from 'types';

const initialState = {
  loading: false,
  error: null,
  characters: {
      info: {
          count: 0, pages: 0, next: "", prev: ""
      },
      results: []
  },
  character: null,
  episodes: []
};

const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.LOAD_CHARACTERS:
      return { ...state, loading: true, error: null };
    case ActionTypes.LOAD_CHARACTERS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        characters: action.payload, 
      };
    case ActionTypes.LOAD_CHARACTERS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ActionTypes.LOAD_CHARACTER:
      return { ...state, loading: true, error: null };
    case ActionTypes.LOAD_CHARACTER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        character: action.payload,
      };
    case ActionTypes.LOAD_CHARACTER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ActionTypes.SET_EPISODES:
      return {
        ...state,
        loading: false,
        episodes: action.payload
      };
    // case ActionTypes.FILTER_CHARACTERS:
    //   return { ...state, loading: true, error: null, characters: [] };
    // case ActionTypes.FILTER_CHARACTERS_SUCCESS:
    //   return {
    //     ...state,
    //     loading: false,
    //     error: null,
    //     characters: action.payload,
    //   };
    // case ActionTypes.FILTER_CHARACTERS_ERROR:
    //   return {
    //     ...state,
    //     loading: false,
    //     error: action.payload,
    //     characters: [],
    //   };
    default:
      return state;
  }

};

export default reducer;
