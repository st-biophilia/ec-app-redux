import React from 'react';
import { Switch, Route } from 'react-router';
import { Login, Home } from './templates';


// パスに応じて表示するコンポーネントを変える
const Router = () => {
    return(
        <Switch>
            <Route exact path={'/login'} component={Login} />

            {/* ドメイン名そのままのURL。スラッシュがあってもなくても良い */}
            <Route exact path={'(/)?'} component={Home} /> 
        </Switch>
    );
   
}

export default Router;