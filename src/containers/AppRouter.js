import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from '../pages/Home';


const AppRouter = () => {
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                {/* <Route exact path="" component={} />
                <Route exact path="" component={} />
                <Route exact path="" component={} />
                <Route exact path="" component={} />
                <Route exact path="" component={} /> */}
            </Switch>
        </Router>
    );
};



export default AppRouter;