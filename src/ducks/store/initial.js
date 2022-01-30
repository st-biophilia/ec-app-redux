// アプリで使う state を全て記述する
const initialState = {
    users: {
        isSignedIn: false,
        uid: '',
        username: ''
    },

    products: {
        products: 'none'
    }
}

export default initialState;