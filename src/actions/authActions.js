import { Actions } from 'react-native-router-flux';
import {
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  SET_EMAIL,
  SET_PASSWORD,
  SET_TOKEN
} from "./types";
import { AsyncStorage, Alert } from 'react-native';


//Whenever email changes this action will be  called and update the email prop in AuthReducer

  export const setEmail = (Email) =>{
      return(dispatch)=>{
          dispatch({
              type: SET_EMAIL,
              payload: Email
          })
      }
  }
  export const setToken = (token) =>{
    return(dispatch)=>{
        dispatch({
            type: SET_TOKEN,
            payload: token
        })
    }
}

  export const getUserEmail = async () => {
    try {
        
      let email = await AsyncStorage.getItem('email');
    return email
    } catch(error) {
        console.log("Something went wrong");
    }
  }


 
  export const storeEmail = (email) => {   
    AsyncStorage.setItem('email', email, (err)=> {
      if(err){
        console.log("an error");
        throw err;
      }
    }).catch((err)=> {
        console.log("error is: " + err);
    });
  }

  export const storePassword = (password) => {
      
    AsyncStorage.setItem('password', password, (err)=> {
      if(err){
        console.log("an error");
        throw err;
      }
    }).catch((err)=> {
        console.log("error is: " + err);
    });
  }

  export const storeToken= (isLoggedIn)=>{
    AsyncStorage.setItem('token', isLoggedIn, (err)=> {
        if(err){
          console.log("an error");
          throw err;
        }
      }).catch((err)=> {
          console.log("error is: " + err);
      });
  }

//When User press Login This Action Will Be Called
export const loginUser = ({ nav, email, password }) => {
    //dispatch function will be pass the type of action to the all the reducers ..>the dispatch is used for Async Functions
    console.log('fop', nav)

    return (dispatch) => {
    //dispatch Type of LOGIN_USER
    dispatch({
        type:LOGIN_USER
    });
    const CREDENTIALS= {
        "username":"hruday@gmail.com",
        "password" :'hruday123'
        };
        // if(email!==null && password!==null){
        if(email.toLowerCase()===CREDENTIALS.username && password===CREDENTIALS.password){
                storeEmail(email);
                storePassword(password);
                storeToken('true')
                dispatch({
                       type: LOGIN_USER_SUCCESS,
                       email:email,
                       password:password 
                 })
                //  Actions.pop()
                console.log('fop', this)
                nav.navigate('App');

            }else if(email.toLowerCase()===CREDENTIALS.username && password!== CREDENTIALS.password){
                //error
                dispatch({
                                type: LOGIN_USER_ERROR,
                                error: "Incorrect password"
                            })
            }else if(email.toLowerCase()!==CREDENTIALS.username && password===CREDENTIALS.password){
           //error
           dispatch({
                        type: LOGIN_USER_ERROR,
                        error: 'Incorrect username or password'
                    })
        }else{
            dispatch({
                type: LOGIN_USER_ERROR,
                error: 'Incorrect username or password'
            })
        }
    // }else{
    //     dispatch({
    //         type: LOGIN_USER_ERROR,
    //         error: 'Please enter email and password.'
    //     })
    // }
    }  
    };
    

