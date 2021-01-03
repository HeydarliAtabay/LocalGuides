import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import MainPage from "./MainPage";
import Login from "./Login";



function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/main" component={MainPage}/>
                {/* <Route component={NotFound}/> */}
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;