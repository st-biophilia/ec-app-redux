import { push } from "connected-react-router";
import { signInAction } from "./actions";


export const signIn = (/* email, password */) => {

    return async (dispatch, getState) => {

        // 今 sign in しているかどうか確認
        const state = getState();
        const isSignedIn = state.users.isSignedIn

        if (!isSignedIn) {


            // const userData = await emailSignIn(email, signIn);
            const url = 'https://api.github.com/uesrs/deatiger'
            const response = await fetch(url).then(res => res.json()).catch(() => null);

            const username = response.login;

            // 非同期にしないと、そのまま空の値が渡される
            dispatch(signInAction({
                isSignedIn: true,
                uid: "00001",
                username: username
            }));

            dispatch(push('/'));
        }
    }
}