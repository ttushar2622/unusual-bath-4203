import {applyMiddleware, combineReducers, legacy_createStore,compose} from "redux"
import thunk from "redux-thunk";
import {reducer as MenReducer} from "./MenReducer/reducer"
import {AuthReducer} from "../redux/authReducer/reducer"



import {reducer as AuthReducer} from "./authreducer/reducer"
const rootReducer = combineReducers({
   MenReducer,
   AuthReducer
  });
  
  export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


// import {AuthReducer} from "../redux/authReducer/reducer"


const middleware = applyMiddleware(thunk);

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    
    // auth: AuthReducer,
});
  
  export const store = legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));
