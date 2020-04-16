import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from '../pages/Home';
import Appointment from '../pages/Appointment';
import Services from '../pages/Services';
import Contacts from '../pages/Contacts';


const AppRouter = () => {
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Appointment" component={Appointment} />
                <Route exact path="/Services" component={Services} />
                <Route exact path="/Contacts" component={Contacts} />
            </Switch>
        </Router>
    );
};



export default AppRouter;