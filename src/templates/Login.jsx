import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../ducks/users/operations';

const Login = () => {
    const dispatch = useDispatch();
    const selector =  useSelector((state) => state)
    console.log(selector);

    return(
        <React.Fragment>
            <h2>ログイン</h2>

            {/* ログインするとルートのパスに遷移する */}
            <button onClick={ () => { dispatch(signIn()) } }>
                ログイン
            </button>
        </React.Fragment>
    );
}

export default Login;