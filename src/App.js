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
                <Route exact path="/" component={Home} />
                <Route exact path="/jubelmoto" component={JubelMoto} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    );
}

export default App;
