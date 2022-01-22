import React from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { useSelector } from 'react-redux';

const Login = () => {
    const dispatch = useDispatch();
    const selector = useSelector(state => state);

    // Store の router の値を取り出す
    console.log(selector.router);

    return(
        <React.Fragment>
            <h2>ログイン</h2>

            {/* ログインするとルートのパスに遷移する */}
            <button onClick={ ()=> dispatch( push('/') ) }>
                ログイン
            </button>
        </React.Fragment>
    );
}

export default Login;