// redux modules
import { 
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware

} from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';


// reducers
// import { ProductsReducer } from '../products/reducer';
import { UsersReducer } from '../users/reducer';
import { ProductsReducer } from '../products/reducer';

// このアプリケーションはなんの state を使っていて、その初期状態はなんなのかを定義している
export default function createStore(history) {

    // returns redux' createStore()
    return reduxCreateStore (
        // reducer をまとめたもの
        combineReducers({
            router: connectRouter(history), // store に、パスの情報を router というキーで入れる
            users: UsersReducer,
            products: ProductsReducer,
        }),

        // 使う middleware の宣言
        applyMiddleware(
            routerMiddleware(history),
            thunk
        )
    );
}