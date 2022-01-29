import LoginClass from "../templates/LoginClass";
import { compose } from "redux";
import { connect } from "react-redux";
import * as Actions from "../ducks/users/operations" 


// store の state を第一引数に受け取る
const mapStateToProps = state => {
    // 接続先 componenet で使う state をフィルタリング
    return {
        users: state.users
    }
}

// Store から dispatch する関数( = Actions )を第一引数に受け取る
const mapDispatchToProps = dispatch =>  {
    return {
        // わかりやすいように key を指定してあげる
        actions: {
            signIn() {
                dispatch(Actions.signIn())
            }
        }
    }
};

export default compose (
    connect (
        mapStateToProps,
        mapDispatchToProps
    )
)(LoginClass)