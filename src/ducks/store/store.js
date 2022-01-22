// redux modules
import { createStore as reduxCreateStore } from 'redux';
import { combineReducers } from 'redux';
import { applyMiddleware } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';

// reducers
// import { ProductsReducer } from '../products/reducer';
import { UsersReducer } from '../users/reducer';

// このアプリケーションはなんの state を使っていて、その初期状態はなんなのかを定義している
export default function createStore(history) {

    // returns redux' createStore()
    return reduxCreateStore (
        // reducer をまとめたもの
        combineReducers({
            //products: ProductsReducer,
            router: connectRouter(history),
            users: UsersReducer
        }),
        applyMiddleware(
            routerMiddleware(history)
        )
    );
}