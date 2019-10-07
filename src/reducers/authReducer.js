import {
    EMAIL_CHANGED ,
    PASSWORD_CHANGED,
    LOGIN_USER,
    LOGIN_USER_ERROR,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_2FA,
    LOGIN_2FA,
    LOGIN_2FA_SUCCESS,
    LOGIN_2FA_FAIL,
    NAME_CHANGED,
    CONFIRM_PASSWORD_CHANGED,
    SIGNUP_USER,
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER_FAIL,
    PASSWORD_CHANGED_FUNCTION,
    PASSWORD_CHANGED_SUCCESS,
    PASSWORD_CHANGED_FAIL,
    SET_EMAIL,
    SET_PASSWORD,
    SET_JWT,
    SET_USERNAME,
    SET_GLOBAL_ID,
    FORGOT_PASSWORD,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAIL,
    TWO_FA_CHANGED,
    CHANGE_EMAIL,
    CHANGE_EMAIL_FAIL,
    CHANGE_EMAIL_SUCCESS,
    GENERATE_TWO_FA,
    ENABLE_TWO_FA_REQUESTED,
    ENABLE_TWO_FA_SUCCESS,
    DISABLE_TWO_FA_REQUESTED,
    DISABLE_TWO_FA_SUCCESS,
    SET_TWOFA_FLAG,
    ADD_PROFILE,
    ADD_LOGOUT,
    SET_KYC_STATUS,
    SET_TOKEN
} from '../actions/types'


const INITIAL_STATE = {
    email: null,
    password: null,
    loading: false,
    error: '',
    isLoggedIn: false,
    token: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case LOGIN_USER:
        return { ...state, error: "", loading: true };
      case LOGIN_USER_SUCCESS:
        return { ...state, ...INITIAL_STATE, email: action.email, password: action.password ,profile:{email:action.email, password: action.password} ,loading: false, isLoggedIn:true};
      case LOGIN_USER_ERROR:
        return { ...state, error: action.error, password: "", email: "", loading: false };
      case SET_EMAIL:
        return { ...state, email: action.payload };
      case SET_PASSWORD:
       return { ...state, password:action.password}  
       case SET_TOKEN:
       return { ...state, token:action.token}  
      case ADD_LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
      }; 
    default:
        return state;
    }
}