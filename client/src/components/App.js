import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";


import Home from "./Home";
import SharedLayout from "./SharedLayout";
import CarShop from './CarsSpace/CarsShop';
import ProductsShop from "./ProductsSpace/ProductsShop";
import SellA_Car from "./sellA_Car"
import ContactUs from "./contactUs"
import CartFull from "./CartFull";
import CarDetails from './CarsSpace/CarDetails';
import WhishList from './WishList'




class App extends Component {


  render() {
    return (
         <BrowserRouter >
            <SharedLayout>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/products" component={ProductsShop} />
                    <Route exact path="/product/:id"  component={ProductsShop} />
                    <Route exact path="/cars" component={CarShop} />
                    <Route exact path="/carso" component={CarDetails} />                    
                    <Route exact path="/sellacar" component={SellA_Car} />
                    <Route exact path="/contactus" component={ContactUs} />
                    <Route exact path="/products_cart" component={CartFull} />
                    <Route exact path="/whishlist" component={WhishList} />                    
              </SharedLayout>
         </BrowserRouter>
      
 
    );
  }
}

export default connect(null, actions)(App);
