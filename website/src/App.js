import React from 'react';
import Main from './pages/Main'; 
import NotFound from './pages/404';
import AboutMe from './pages/AboutMe';
import {AnimatePresence, motion} from 'framer-motion';
import ContactMe from './pages/ContactMe';

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
    useLocation
}   from 'react-router-dom';

function App(){
        const location = useLocation();
        return(
                <AnimatePresence exitBeforeEnter>
                    <Switch location={location}>
                        <Route exact path='/' component={Main} />
                        <Route path='/AboutMe' component={AboutMe} />
                        <Route path='/ContactMe' component={ContactMe} />
                        <Route path='/404' component={NotFound} />
                        <Redirect to='/404' />
                    </Switch>
                </AnimatePresence>
        )
}

export default App;