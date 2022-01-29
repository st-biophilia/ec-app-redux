import React, { Component } from 'react';


// store と接続された container component
export default class LoginClass extends Component {



    render() {
        console.log(this.props.users)
        
        return(
            <React.Fragment>
                <h2>ログイン</h2>
    
                {/* container から 渡された dispatch 関数を利用 */}
                <button onClick={ ()=> {this.props.actions.signIn()} }>
                    ログイン
                </button>
            </React.Fragment>
        );
    }

}