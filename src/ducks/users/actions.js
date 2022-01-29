// action types (S)
export const SIGN_IN = 'SIGN_IN';
export const SGIN_OUT = 'SIGN_OUT';

export const signInAction = (userState) => {
    // actions always returns plane object
    return {
        type: SIGN_IN,
        payload: {
            isSignedIn: true,
            uid: userState.uid,
            username: userState.username
        }
    }
}

export const signOutAction = () => {
    return { 
        type: SGIN_OUT,
        payload: {
            isSignedIn: false,
            uid: '',
            username: ''
        }
    }
}