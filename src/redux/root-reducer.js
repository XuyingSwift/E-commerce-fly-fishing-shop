import {combineReducers} from 'redux';
import userReducer from './userReducer/userReducer';
import cartReducer from './cart/cart.reducer'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';// local storage in the window

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer =  combineReducers({
    user: userReducer, 
    cart: cartReducer
});

export default persistReducer(persistConfig, rootReducer);