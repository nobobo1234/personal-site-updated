import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import Admin from '../../pages/Admin';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/admin" component={Admin} />
    </Switch>
);

export default Routes;
