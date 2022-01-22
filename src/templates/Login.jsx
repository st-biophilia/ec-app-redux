import React from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { signInAction } from '../ducks/users/actions';

const Login = () => {
    const dispatch = useDispatch();

    return(
        <React.Fragment>
            <h2>ログイン</h2>

            {/* ログインするとルートのパスに遷移する */}
            <button onClick={ ()=> {
                dispatch(signInAction({uid:'0001',userName:'taiki'}));

                // home の url に飛ぶ
                dispatch(push('/')) 
            }}>
                ログイン
            </button>
        </React.Fragment>
    );
}

export default Login;