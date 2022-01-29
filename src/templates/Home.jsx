import React from 'react';
import { useSelector } from 'react-redux';
import { getUserId, getUsername } from '../ducks/users/selectors';


const Home = () => {

    // store 全体の state を selector という定数に入れる
    const selector = useSelector(state => state);
    // store の state.users.uid をもらう
    const uid = getUserId(selector);
    const username = getUsername(selector);

    return(
        <React.Fragment>
            <h2>home</h2>
            <p>こんにちは</p>
            <p>ユーザーID: {uid}</p>
            <p>ユーザー名: {username}</p>
        </React.Fragment>
    );
}

export default Home;