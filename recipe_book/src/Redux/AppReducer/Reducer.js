import { GET_RECIPE_FAILURE, GET_RECIPE_REQUEST, GET_RECIPE_SUCCESS } from '../actionTypes';

const initialData={

    isLoading:false,
    isError:false,
    recipe_Data:[]
}

export const Reducer = (state=initialData, {type,payload}) => {

    switch(type){

        case GET_RECIPE_REQUEST:
            return {...state, isLoading:true}
        case GET_RECIPE_SUCCESS:
            return {...state, isLoading:false, recipe_Data:payload} 
        case GET_RECIPE_FAILURE:
            return {...state, isLoading:false, isError:true}       
        default:
            return state;
    }

}
