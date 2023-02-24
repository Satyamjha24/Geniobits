import { GET_RECIPE_FAILURE, GET_RECIPE_REQUEST, GET_RECIPE_SUCCESS } from "../actionTypes"

export const getRecipeRequestAction=()=>{
    return {type:GET_RECIPE_REQUEST}
}
export const getRecipeSuccessAction=(payload)=>{
    return {type:GET_RECIPE_SUCCESS, payload}
}
export const getRecipeFailureAction=()=>{
    return {type:GET_RECIPE_FAILURE}
}