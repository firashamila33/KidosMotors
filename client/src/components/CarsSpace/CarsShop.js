import React , {Component} from 'react';
import { connect } from 'react-redux';
import { fetchCars } from '../../actions';


import CarList from './CarsList';

class CarShop extends Component{
    componentDidMount(){
        window.reRenderRangeSlider();
        this.props.fetchCars();
    }
   render(){
    return(
        <div className="wrap-body-inner">
            
            <section className="m-t-lg-30 m-t-xs-0">
                <div className="row">
                    <div className="col-sm-5 col-md-4 col-lg-3">
                        <div className="search-option m-b-lg-50 p-lg-20">
                            <div className="select-wrapper m-b-lg-15">
                                <div className="dropdown">
                                    <button className="dropdown-toggle form-item" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                        Condition
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                        <li>Condition</li>
                                        <li>New Car (4,500)</li>
                                        <li>Used Cars (6,540)</li>
                                        <li>Car Rental(9,960)</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="select-wrapper m-b-lg-15">
                                <div className="dropdown">
                                    <button className="dropdown-toggle form-item" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                        Body
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                        <li>Body</li>
                                        <li>Sedan</li>
                                        <li>SUV</li>
                                        <li>Truck</li>
                                        <li>Coupe</li>
                                        <li>Minivan</li>
                                        <li>Compact</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="select-wrapper m-b-lg-15">
                                <div className="dropdown">
                                    <button className="dropdown-toggle form-item" type="button" id="dropdownMenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                        Make
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu3">
                                        <li>Make</li>
                                        <li>Ford</li>
                                        <li>Huyndai</li>
                                        <li>Nissan</li>
                                        <li>Chevrolet</li>
                                        <li>Kia</li>
                                        <li>Mazda</li>
                                        <li>BMW</li>
                                        <li>Toyota</li>
                                        <li>Mercedes Benz</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="select-wrapper m-b-lg-15">
                                <div className="dropdown">
                                    <button className="dropdown-toggle form-item" type="button" id="dropdownMenu4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                        Model
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu4">
                                        <li>Model</li>
                                        <li>Versa</li>
                                        <li>Cruze</li>
                                        <li>Malibu</li>
                                        <li>Civic</li>
                                        <li>Genesis</li>
                                        <li>Pilot</li>
                                        <li>Optima</li>
                                        <li>CX-5</li>
                                        <li>3 Serie</li>
                                        <li>Atima</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="select-wrapper m-b-lg-15">
                                <div className="dropdown">
                                    <button className="dropdown-toggle form-item" type="button" id="dropdownMenu5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                        Year
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu5">
                                        <li>Year</li>
                                        <li>2016</li>
                                        <li>2015</li>
                                        <li>2014</li>
                                        <li>2012</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="select-wrapper m-b-lg-15">
                                <div className="dropdown">
                                    <button className="dropdown-toggle form-item" type="button" id="dropdownMenu6" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                        Tranmission
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu6">
                                        <li>Transition</li>
                                        <li>Automatic</li>
                                        <li>Manual</li>
                                        <li>Semi-automatic</li>
                                    </ul>
                                </div>
                            </div>
                            <input type="text" disabled className="slider_amount m-t-lg-10" />
                            <div className="slider-range"></div>
                            <button type="button" className="ht-btn ht-btn-default m-t-lg-30"><i className="fa fa-search"></i>Search Now</button>
                        </div>
                        <div className="clearfix"></div>
                        <div className="banner-item banner-bg-4 banner-1x color-inher">
                            <h5>Lorem ipsum dolor</h5>
                            <h3 className="f-weight-300"><strong>Interior</strong> Accessories</h3>
                            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel</p>
                            <a   className="ht-btn ht-btn-default">Shop now</a>
                        </div>
                    </div>
                    <div className="col-sm-7 col-md-8 col-lg-9">
                        <div className="product product-grid product-grid-2 car">
                            <div className="heading heading-2 m-b-lg-0">
                                <h3 className="p-l-lg-20">New Cars (45)</h3>
                            </div>
                            <div className="product-filter p-t-xs-20 p-l-xs-20">
                                <div className="m-b-xs-10 pull-left">
                                    <a href="car_grid.html" className="active "><i className="fa fa-th"></i></a>
                                    <a href="car_list.html"><i className="fa fa-th-list"></i></a>
                                </div>
                                <div className="pull-right">
                                    <div className="m-b-xs-10 m-r-lg-20 pull-left">
                                        <label className="pull-left p-t-lg-10 m-r-lg-5"><i className="fa fa-sort-alpha-asc"></i>Filter : </label>
                                        <div className="select-wrapper pull-left">
                                            <div className="dropdown pull-left">
                                                <button className="dropdown-toggle form-item w-130" type="button" id="dropdownMenu7" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                                    Latest
                                                </button>
                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenu7">
                                                    <li>Offer</li>
                                                    <li>Best Seller</li>
                                                    <li>Featured</li>
                                                    <li>Latest</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pull-left">
                                        <label className="pull-left p-t-lg-10 m-r-lg-5"><i className="fa fa-sort-alpha-asc"></i>Show : </label>
                                        <div className="select-wrapper pull-left">
                                            <div className="dropdown pull-left">
                                                <button className="dropdown-toggle form-item w-80" type="button" id="dropdownMenu8" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                                    6
                                                </button>
                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenu8">
                                                    <li>6</li>
                                                    <li>12</li>
                                                    <li>24</li>
                                                    <li>All</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                            <div className="row">
                                {/* <div className="col-sm-12 col-md-6 col-lg-6">
                                    <div className="product-item hover-img">
                                        <a   className="product-img">
                                            <img src="images/b-img-13.jpg" alt="" />
                                        </a>	
                                        <div className="product-caption">
                                            <h4 className="product-name">
                                                <a  >HYUNDAI ELANTRA 2016 NEW MODEL / <b>New</b></a><span className="f-18"> $201,000</span>
                                            </h4>
                                        </div>
                                        <ul className="absolute-caption">
                                            <li><i className="fa fa-clock-o"></i>2016</li>
                                            <li><i className="fa fa-car"></i>Auto</li>
                                            <li><i className="fa fa-road"></i>Gas</li>
                                        </ul>
                                    </div>
                                </div> */}
                                
                                <CarList carslist={this.props.cars}/>
                                
                            </div>
                            <nav aria-label="Page navigation">
                                <ul className="pagination ht-pagination">
                                    <li>
                                        <a   aria-label="Previous">
                                            <span aria-hidden="true"><i className="fa fa-chevron-left"></i></span>
                                        </a>
                                    </li>
                                    <li className="active"><a  >1</a></li>
                                    <li><a  >2</a></li>
                                    <li><a  >3</a></li>
                                    <li><a  >4</a></li>
                                    <li><a  >5</a></li>
                                    <li>
                                        <a   aria-label="Next">
                                            <span aria-hidden="true"><i className="fa fa-chevron-right"></i></span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );

   }
}   



function mapStateToProps({ cars }) {
    return { cars };
}
  
export default connect(mapStateToProps,{fetchCars})(CarShop);