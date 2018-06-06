import React , {Component} from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions';

import ProductsContainer from './ProductsContainer';
import ProductDetails from './ProductDetails';

class ProductsShop extends Component{

    constructor(props){
        super(props);
        this.state={
          activePage:'TYRES&WHEELS',
        }
    }

    componentDidMount() {
        this.props.fetchProducts('TYRES&WHEELS');
    }

    renderFiltredProducts(activePage){
        this.setState({activePage});
        this.props.fetchProducts(activePage);
    }
    
    
    render(){
       
        return(
            <div className="wrap-body-inner">
                
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
                                       
                                        <li className={this.state.activePage === 'TYRES&WHEELS' ? 'active' : ''}><a onClick={()=>this.renderFiltredProducts('TYRES&WHEELS')} >Tyres & Wheels<i className="fa fa-chevron-right pull-right"></i></a></li>
                                        <li  className={this.state.activePage === 'BRAKES&DISCS' ? 'active' : ''}><a onClick={()=>this.renderFiltredProducts('BRAKES&DISCS')} >Brakes discs<i className="fa fa-chevron-right pull-right"></i></a></li>
                                        <li><a >Exhaust tips<i className="fa fa-chevron-right pull-right"></i></a></li>
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
                                    <Route exact path="/products" render={()=><ProductsContainer productsCategory={this.state.activePage} productsList={this.props.products}/>} />
                                    <Route exact path="/products/singlproduct" component={ProductDetails} />
                                    </div>
                            </BrowserRouter>

                        </div>
                </section>
            </div>
        );
    }
}   



function mapStateToProps({ products }) {
    return { products };
}
  
export default connect(mapStateToProps,{fetchProducts})(ProductsShop);
