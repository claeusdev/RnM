import Api from "api"
import { Dispatch } from "react"
import { Action, GetCharacterParams } from "types"
import { ActionTypes } from "../types"

export const fetchCharacters = ({status, species, pageNumber, gender}: GetCharacterParams) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionTypes.FILTER_CHARACTERS
        })

        try {
            const data = await Api().getCharacters({
                status,
                gender,
                species,
                pageNumber,
              })
              dispatch({
                  type: ActionTypes.FILTER_CHARACTERS_SUCCESS,
                  payload: data
              })
        } catch (error: any) {
            dispatch({
                type: ActionTypes.FILTER_CHARACTERS_ERROR,
                payload: error.message
            })
        }
    }
}