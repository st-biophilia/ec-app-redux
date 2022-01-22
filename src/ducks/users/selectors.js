import { createSelector } from 'reselect';


const usersSelector = (state) => state.users;

export const getUserId = createSelector(
    [usersSelector], 
    state => state.uid // store の state.users.uid を返す
);