import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, SIGNIN_SUCCESS } from "../actionTypes";

const initialState={
    isAuth:false,
    token:'',
    isLoading:false,
    isError:false,
    signin:false,
    signinToken:''
}

export const reducer=(state=initialState,{type,payload})=>{
    switch(type){
        case LOGIN_REQUEST:
            return {...state, isLoading:true}
        case LOGIN_SUCCESS:
            return {...state, isLoading:false, token:payload,isAuth:true} 
        case LOGIN_FAILURE:
            return {...state,isLoading:false,isError:true} 
        case SIGNIN_SUCCESS:
            return {...state, isLoading:false, signinToken:payload,signin:true}          
        default:
            return state;
    }
}