import axios from 'axios';
import {combineReducers,createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';


// action

export const onUserLogin = ({userName,password}) =>{
    const url ='https://avicennatest.patientheal.com/Services/api/Token';
    const body = `grant_type=password&username=${userName.trim()}&password=${password}&scope=Staff,Admin,Doctor,SuperAdmin,Pharmacy`;
    return async (dispatch) =>{
        try{
            const response = await axios.post(url,body)
            dispatch({type:'DO_LOGIN',payload:response.data})
        }
        catch(error){
            dispatch({type:'DO_ERROR',payload:error})
        }
       
    }
}




// reducers
const userReducer =(state = {},action) =>{

    switch(action.payload){
        case 'DO_LOGIN':
            return{
                ...state,
                user: action.payload
            };
            case 'DO_ERROR':
            return{
                ...state,
                appError: action.payload
            };
            default:
                return state;
    }
}





// rootReducer

export const rootReducer = combineReducers({
    userReducer,
});




// store
export const store = createStore(rootReducer,applyMiddleware(thunk));