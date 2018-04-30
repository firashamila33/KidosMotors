import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";


import Home from "./Home";
import SharedLayout from "./SharedLayout";
import Cars from "./Cars";
import Products from "./Products";
import SellA_Car from "./sellA_Car"
import ContactUs from "./contactUs"
import CartFull from "./CartFull";




class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
         <BrowserRouter >
         <SharedLayout>
                <Route exact path="/" component={Home} />
                <Route exact path="/cars" component={Cars} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/products" component={Products} />
                <Route exact path="/sellacar" component={SellA_Car} />
                <Route exact path="/contactus" component={ContactUs} />
                <Route exact path="/products_cart" component={CartFull} />
                <Route exact path="/product/:id"  component={Products} />
          </SharedLayout>
         </BrowserRouter>
      
 
    );
  }
}

export default connect(null, actions)(App);
