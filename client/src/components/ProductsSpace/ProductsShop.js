import React , {Component} from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Products from './Products';
import ProductDetails from './ProductDetails';

class ProductsShop extends Component{

    

    render(){
       
        return(
            <div className="wrap-body-inner">
                <div className="hidden-xs">
                    <div className="row">
                        <div className="col-lg-6">
                            <ul className="ht-breadcrumb pull-left">
                                <li className="home-act"><a  ><i className="fa fa-home"></i></a></li>
                                <li className="home-act"><a  >Product</a></li>
                                <li className="active">Tyres & Wheels</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <section className="m-t-lg-30 m-t-xs-0">
                        <div className="row">
                            <div className="col-sm-4 col-md-3 col-lg-3">
                                <div className="category m-b-lg-50 ">
                                    <div className="heading m-b-lg-0">
                                        <h3 className="p-l-lg-20" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                                <i className="fa fa-bars"></i>Caterory
                                        </h3>
                                    </div>
                                    <ul className="collapse in" id="collapseExample">
                                        <li className="active"><a  >Tyres & Wheels<i className="fa fa-chevron-right pull-right"></i></a></li>
                                        <li><a  >Brakes discs<i className="fa fa-chevron-right pull-right"></i></a></li>
                                        <li><a  >Exhaust tips<i className="fa fa-chevron-right pull-right"></i></a></li>
                                        <li><a  >Car covers<i className="fa fa-chevron-right pull-right"></i></a></li>
                                        <li><a  >Seat covers<i className="fa fa-chevron-right pull-right"></i></a></li>
                                        <li><a  >Mirrors<i className="fa fa-chevron-right pull-right"></i></a></li>
                                        <li><a  >Bumpers<i className="fa fa-chevron-right pull-right"></i></a></li>
                                        <li><a  >Floor mats<i className="fa fa-chevron-right pull-right"></i></a></li>
                                        <li><a  >Calipers<i className="fa fa-chevron-right pull-right"></i></a></li>
                                        <li><a  >Hand brakes<i className="fa fa-chevron-right pull-right"></i></a></li>
                                    </ul>
                                </div>
                                <div className="banner-item banner-bg-4 banner-1x color-inher">
                                    <h5>Lorem ipsum dolor</h5>
                                    <h3 className="f-weight-300"><strong>Interior</strong> Accessories</h3>
                                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel</p>
                                    <a   className="ht-btn ht-btn-default">Shop now</a>
                                </div>
                            </div>
                            <BrowserRouter>
                                    <div>
                                    <Route exact path="/products" component={Products} />
                                    <Route exact path="/product/:id" component={ProductDetails} />
                                    </div>
                            </BrowserRouter>

                        </div>
                </section>
            </div>
        );
    }
}   

export default ProductsShop;