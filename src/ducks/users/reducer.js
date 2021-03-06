import * as Actions from './actions';
import initialState from '../store/initial';

/**
 * reducer
 * @param {object} state store の state
 * @param {object} action Actions が return した値
 * @returns 新しいstate
 */
export const UsersReducer = (state = initialState.users, action) => {
    switch(action.type) {
        case Actions.SIGN_IN:
            // console.log('state: ', state);
            // console.log('state.users: ', state.users)
            // console.log('action.payload: ', action.payload);


            return {
                // 現在の Store の状態を spread
                ...state,
                // Actions の payload で変更点を上書き
                ...action.payload
            }
        default:
             return state
    }
}