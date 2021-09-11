import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import JubelMoto from "./pages/JubelMoto";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/jubelmoto">
                    <JubelMoto />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
