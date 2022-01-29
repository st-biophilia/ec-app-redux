import React from 'react';
import { Switch, Route } from 'react-router';
import { Login, Home } from './templates';
import { LoginContainer } from './containers';

const Router = () => {
    return(
        <Switch>
            {/* <Route exact path={'/login'} component={Login} /> */}
            <Route exact path={'/login'} component={LoginContainer} />

            {/* ドメイン名そのままのURL。スラッシュがあってもなくても良い */}
            <Route exact path={'(/)?'} component={Home} /> 
        </Switch>
    );
   
}

export default Router;