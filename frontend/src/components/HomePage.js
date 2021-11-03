import React, {Component} from "react";
import { render } from "react-dom";
import ResultPage from "./ResultPage";
import AnalysisPage from "./AnalysisPage";
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";

export default class HomePage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (<Router>
            <Switch>
                <Route exact path='/'><p>This is the home page</p></Route>
                <Route path='/result' component={ResultPage} />
                <Route path='/analysis' component={AnalysisPage} />
            </Switch>
        </Router>);
    }
}