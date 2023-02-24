import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, SIGNIN_SUCCESS } from "../actionTypes"

export const loginRequestAction=()=>{
    return {type:LOGIN_REQUEST}
}
export const loginSuccessAction=(payload)=>{
    return {type:LOGIN_SUCCESS,payload}
}
export const loginFailureAction=()=>{
    return {type:LOGIN_FAILURE}
}

export const signinSuccessAction=(payload)=>{
    return {type:SIGNIN_SUCCESS,payload}
}