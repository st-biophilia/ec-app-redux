import React from 'react';
import { useSelector } from 'react-redux';
import { getUserId } from '../ducks/users/selectors';

const Home = () => {

    // store 全体の state を selector という定数に入れる
    const selector = useSelector(state => state);
    // store の state.users.uid をもらう
    const uid = getUserId(selector);

    return(
        <React.Fragment>

            <h2>home</h2>
            <p>{uid}</p>
        </React.Fragment>
    );
}

export default Home;