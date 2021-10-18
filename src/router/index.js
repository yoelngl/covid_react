import React from 'react';
import { Switch, Route } from 'react-router';
import About from '../pages/About';
import Home from '../pages/Home';

function Router(props) {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About} />
            </Switch>
        </div>
    );
}

export default Router;