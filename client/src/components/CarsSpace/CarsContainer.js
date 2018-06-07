import React,{Component} from 'react';

import {range} from 'lodash';
import CarsList from './CarsList';
import { connect } from 'react-redux' ;

class CarsContainer extends Component {

    constructor(props){
        super(props);
        this.state={
          activePage:1,
          pageSize:6,
          displayType:'cards',
          fetchedCars:{}
        }
      }
      setActivePage(activePage){
          this.setState({activePage:activePage});  
      }    
      setPageSize(size){
        this.setState({activePage:1,pageSize:size});
      }
      setDisplayType(displayType){
        this.setState({displayType});
        console.log(this.props.filters);
      }


    render(){
        const table = range(1, Math.ceil(this.props.carsList.length / this.state.pageSize)+1 ,1);
        const cars = this.props.fetchedCars.length !== 0 ? this.props.fetchedCars : this.props.carsList;
        const {filters} = this.props;
        return(
            <section className="m-t-lg-30 m-t-xs-0">
            <div className="row">
                <div className="col-sm-5 col-md-4 col-lg-3">
                    <div className="search-option m-b-lg-50 p-lg-20">
                        <div className="select-wrapper m-b-lg-15">
                            <div className="dropdown">
                                <button className="dropdown-toggle form-item" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                    {(filters!==undefined &&filters.condition!==undefined)? filters.condition.toUpperCase() : 'Condition'}      
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                    <li>Condition</li>
                                    <li>New Car (4,500)</li>
                                    <li>Used Cars (6,540)</li>
                                </ul>
                            </div>
                        </div>
                        <div className="select-wrapper m-b-lg-15">
                            <div className="dropdown">
                                <button className="dropdown-toggle form-item" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                {filters!==undefined && filters.body!==undefined ? filters.body.toUpperCase() : 'Body'}     
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
                                {filters!==undefined && filters.make!==undefined ? filters.make.toUpperCase() : 'Make'}
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
                                {filters!==undefined && filters.year!==undefined ? filters.year.toUpperCase() : 'Year'}
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
                                {filters!==undefined && filters.transition!==undefined ? filters.transition.toUpperCase() : 'Tranmission'}
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
                            <a onClick={()=>this.setDisplayType('cards')} className={this.state.displayType === 'cards' ? 'active' :''}>
                                <i className="fa fa-th" />
                            </a>
                            <a onClick={()=>this.setDisplayType('list')} className={this.state.displayType === 'list'  ? 'active' : ''}>
                                <i className="fa fa-th-list" />
                            </a>
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
                                            <li>
                                                <a onClick={() => this.setPageSize(4)}>4</a>
                                            </li>
                                            <li>
                                                <a onClick={() => this.setPageSize(6)}>6</a>
                                            </li>
                                            <li>
                                                <a
                                                onClick={() =>
                                                    this.setPageSize(
                                                    cars.length
                                                    )}
                                                >
                                                All
                                                </a>
                                            </li>
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
                            
                            <CarsList displayType={this.state.displayType} carslist={cars.slice((this.state.activePage - 1) * this.state.pageSize, (this.state.activePage - 1) * this.state.pageSize + this.state.pageSize)} />

                            
                        </div>
                        <nav aria-label="Page navigation">
                            <ul className="pagination ht-pagination">
                                <li>
                                    <a aria-label="Previous" style={this.state.activePage === 1 ? {display:'none'} : {display:'block'}}>
                                    <span aria-hidden="true" >
                                        <i className="fa fa-chevron-left" onClick={()=>{this.setActivePage(this.state.activePage-1)}} />
                                    </span>
                                    </a>
                                </li>
                                {table.map(i => {
                                    return <li key={i} className={this.state.activePage === i ? "active" : ""}>
                                        <a onClick={() => {this.setActivePage(i)}}>{i}</a>
                                    </li>;
                                })}
                                <li>
                                    <a aria-label="Next"  style={this.state.activePage === Math.ceil(cars.length / this.state.pageSize) ? {display:'none'} : {display:'block'}}>
                                    <span aria-hidden="true">
                                        <i className="fa fa-chevron-right"  onClick={()=>{this.setActivePage(this.state.activePage+1)}} />
                                    </span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </section>


        );
    }
}

function mapStateToProps({fetchedCars}){
    return {fetchedCars};
}

export default connect(mapStateToProps)(CarsContainer);