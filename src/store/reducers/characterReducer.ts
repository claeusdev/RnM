import { ActionTypes } from "store/actions/types";
import { Action, State } from "types";

const initialState = {
    loading: false,
    error: null,
    characters: []
}

const reducer = (state: State = initialState, action: Action) => {
    switch (action.type) {
        case ActionTypes.LOAD_CHARACTERS:
            return {loading: true, error: null, characters: []}
        case ActionTypes.LOAD_CHARACTERS_SUCCESS:
            return {loading: false, error: null, characters: action.payload}
        case ActionTypes.LOAD_CHARACTERS_ERROR:
            return {loading: false, error: action.payload, characters: []}
        case ActionTypes.FILTER_CHARACTERS:
            return {loading: true, error: null, characters: []}
        case ActionTypes.FILTER_CHARACTERS_SUCCESS:
            return {loading: false, error: null, characters: action.payload}
        case ActionTypes.FILTER_CHARACTERS_ERROR:
            return {loading: false, error: action.payload, characters: []}
        default:
            return state;
    }
}

export default reducer;