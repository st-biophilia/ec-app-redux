import React from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../ducks/users/operations';

const Login = () => {
    const dispatch = useDispatch();

    return(
        <React.Fragment>
            <h2>ログイン</h2>

            {/* ログインするとルートのパスに遷移する */}
            <button onClick={ ()=> {dispatch(signIn())} }>
                ログイン
            </button>
        </React.Fragment>
    );
}

export default Login;