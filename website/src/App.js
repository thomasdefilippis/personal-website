import React from 'react';
import Main from './pages/Main'; 
import NotFound from './pages/404';
import AboutMe from './pages/AboutMe';
import ContactMe from './pages/ContactMe';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Lin,
    Redirect,
    withRouter
}   from 'react-router-dom';

class App extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path='/' component={Main} />
                    <Route path='/AboutMe' component={AboutMe} />
                    <Route path='/ContactMe' component={ContactMe} />
                    <Route path='/404' component={NotFound} />
                    <Redirect to='/404' />
                </Switch>
            </Router>
        )
    }
}

export default App;