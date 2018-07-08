import React, {Component} from "react";
import '../../node_modules/grommet-css';
import App from 'grommet/components/App'
import {BrowserRouter} from 'react-router-dom';

import Navigation from "./Navigation";

class Main extends Component {


    render() {
        return (
            <BrowserRouter basename='/admin'>
                <App centered={false}>
                    <Navigation/>
                </App>
            </BrowserRouter>
        );
    }
}

export default Main;