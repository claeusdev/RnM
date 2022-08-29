import { combineReducers } from "redux";
import charactersReducer from "./characterReducer"

const reducers = combineReducers({
    characters: charactersReducer
})

export default reducers;

export type RootState = ReturnType<typeof reducers>