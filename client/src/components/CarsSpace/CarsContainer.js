import React, { Component } from 'react';

import { range } from 'lodash';
import CarsList from './CarsList';
import { fetchFiltredCars } from '../../actions'
import { connect } from 'react-redux';
import $ from 'jquery';
import CarList from './CarsList';


class CarsContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activePage: 1,
            pageSize: 6,
            displayType: 'cards',
            fetchedCars: {},
            renderedCars :{},
            buttonSearchClicked: false,
            condition: '',
            body: '',
            make: '',
            model: '',
            year: '',
            transition: '',
            priceRange: ''
        };
        this.setCarCondition = this.setCarCondition.bind(this);
        this.setCarBody = this.setCarBody.bind(this);
        this.setCarMake = this.setCarMake.bind(this);
        this.setCarYear = this.setCarYear.bind(this);
        this.setCarTransition = this.setCarTransition.bind(this);
        this.renderCars = this.renderCars.bind(this);
    }

    buttonSearchClicked() {
        if (this.state !== null) {
            var { condition, body, make, model, year, transition, priceRange } = this.state;
            var filter = {};
            priceRange = $("#priceslider").val();
            filter = { condition, body, make, model, year, transition, priceRange };
            this.props.fetchFiltredCars(filter);
            
        }
        else (this.getallCars());
        this.setState({buttonSearchClicked : true});
        console.log(this.state);
    }

    setCarCondition(event) {
        this.setState({ condition: event.target.id });
    }
    setCarBody(event) {
        this.setState({ body: event.target.id });
    }
    setCarMake(event) {
        this.setState({ make: event.target.id });
    }
    setCarYear(event) {
        this.setState({ year: event.target.id });
    }
    setCarTransition(event) {
        this.setState({ transition: event.target.id });
    }

    setActivePage(activePage) {
        this.setState({ activePage: activePage });
    }
    setPageSize(size) {
        this.setState({ activePage: 1, pageSize: size });
    }
    setDisplayType(displayType) {
        this.setState({ displayType });
    }
    getallCars() {
        this.props.fetchFiltredCars({});
    }
    viewAllCars(){
        this.setState({buttonSearchClicked : false})
    }

    renderCars() {
        var cars = this.props.fetchedCars.length !== 0 ? this.props.fetchedCars : this.props.carsList;
        var { fetchedCars } = this.props;
        if (fetchedCars.length == 0 && this.state.buttonSearchClicked) {
            
            return <div className="banner-item banner-2x no-bg ">
                <h2 className="f-weight-300"><i className="fa fa-search m-r-lg-10"> </i>No Result</h2>
                <a className="ht-btn ht-btn-default ht-btn-2x m-t-lg-35" onClick={()=>this.viewAllCars()}>
                    View all cars
                        </a>
            </div>;
        }
        else {
            return <CarsList displayType={this.state.displayType} carslist={cars.slice((this.state.activePage - 1) * this.state.pageSize, (this.state.activePage - 1) * this.state.pageSize + this.state.pageSize)} />
        }


    }




    
    render() {
        const table = range(1, Math.ceil(this.props.carsList.length / this.state.pageSize) + 1, 1);
        
        var cars = this.props.fetchedCars.length !== 0 ? this.props.fetchedCars : this.props.carsList;
        if(this.props.fetchedCars.length == 0 && this.state.buttonSearchClicked) cars= {} ;
        
        const { condition, body, make, year, transition, priceRange } = this.props.filters;
        const { filters } = this.props;
        if (priceRange !== undefined) {
            console.log(priceRange.slice(1, priceRange.indexOf(",")));
            console.log(priceRange.slice(priceRange.indexOf("-") + 3, priceRange.indexOf(",", priceRange.indexOf("-"))));

            var min = 1000 * priceRange.slice(1, priceRange.indexOf(","));
            var max = 1000 * priceRange.slice(priceRange.indexOf("-") + 3, priceRange.indexOf(",", priceRange.indexOf("-")));
            window.reRenderRangeSliderOther(min, max);
        }else(window.reRenderRangeSlider())
        return (
            <section className="m-t-lg-30 m-t-xs-0">
                <div className="row">
                    <div className="col-sm-5 col-md-4 col-lg-3">
                        <div className="search-option m-b-lg-50 p-lg-20">
                            <div className="select-wrapper m-b-lg-15">
                                <div className="dropdown">
                                    <button className="dropdown-toggle form-item" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                        {(filters !== undefined && condition !== undefined && condition !== '') ? condition.toUpperCase() : 'Condition'}
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                        <li id="" onClick={this.setCarCondition}>Any State</li>
                                        <li id="new" onClick={this.setCarCondition}>New Car (4,500)</li>
                                        <li id="used" onClick={this.setCarCondition} >Used Cars (6,540)</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="select-wrapper m-b-lg-15">
                                <div className="dropdown">
                                    <button className="dropdown-toggle form-item" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                        {filters !== undefined && body !== undefined && body !== '' ? body.toUpperCase() : 'Body'}
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                        <li id="" onClick={this.setCarBody} >Any Body</li>
                                        <li id="sedan" onClick={this.setCarBody} >Sedan</li>
                                        <li id="suv" onClick={this.setCarBody}>SUV</li>
                                        <li id="truck" onClick={this.setCarBody}>Truck</li>
                                        <li id="coupe" onClick={this.setCarBody}>Coupe</li>
                                        <li id="minivan" onClick={this.setCarBody}>Minivan</li>
                                        <li id="compact" onClick={this.setCarBody}>Compact</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="select-wrapper m-b-lg-15">
                                <div className="dropdown">
                                    <button className="dropdown-toggle form-item" type="button" id="dropdownMenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                        {filters !== undefined && make !== undefined && make !== '' ? make.toUpperCase() : 'Make'}
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu3">
                                        <li id="" onClick={this.setCarMake} >Any Car Make</li>
                                        <li id="ford" onClick={this.setCarMake} >Ford</li>
                                        <li id="huyndai" onClick={this.setCarMake}>Huyndai</li>
                                        <li id="nissan" onClick={this.setCarMake}>Nissan</li>
                                        <li id="chevrolet" onClick={this.setCarMake}>Chevrolet</li>
                                        <li id="kia" onClick={this.setCarMake}>Kia</li>
                                        <li id="mazda" onClick={this.setCarMake}>Mazda</li>
                                        <li id="bmw" onClick={this.setCarMake}>BMW</li>
                                        <li id="toyota" onClick={this.setCarMake}>Toyota</li>
                                        <li id="mercedes" onClick={this.setCarMake}>Mercedes Benz</li>
                                        <li id="ford" onClick={this.setCarMake}>FOrd</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="select-wrapper m-b-lg-15">
                                <div className="dropdown">
                                    <button className="dropdown-toggle form-item" type="button" id="dropdownMenu4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                        Model
                                </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu4">
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
                                        {filters !== undefined && year !== undefined && year !== '' ? year.toUpperCase() : 'Year'}
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu5">
                                        <li id="" onClick={this.setCarYear}>Any Year</li>
                                        <li id="2016" onClick={this.setCarYear}>2016</li>
                                        <li id="2015" onClick={this.setCarYear}>2015</li>
                                        <li id="2014" onClick={this.setCarYear}>2014</li>
                                        <li id="2013" onClick={this.setCarYear}>2013</li>
                                        <li id="2012" onClick={this.setCarYear}>2012</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="select-wrapper m-b-lg-15">
                                <div className="dropdown">
                                    <button className="dropdown-toggle form-item" type="button" id="dropdownMenu6" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                        {filters !== undefined && transition !== undefined && transition !== '' ? transition.toUpperCase() : 'Tranmission'}
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu6">
                                        <li id="" onClick={this.setCarTransition}>Any Type</li>
                                        <li id="automatic" onClick={this.setCarTransition}>Automatic</li>
                                        <li id="manual" onClick={this.setCarTransition}>Manual</li>
                                        <li id="semi_automatic" onClick={this.setCarTransition}>Semi-automatic</li>
                                    </ul>
                                </div>
                            </div>
                            <input type="text" disabled className="slider_amount m-t-lg-10" value={filters != undefined && priceRange != undefined ? priceRange.range : '$60,000 - $130,000'} />
                            <div id="spanrange" className="slider-range"></div>
                            <button type="button" className="ht-btn ht-btn-default m-t-lg-30" onClick={() => this.buttonSearchClicked()}><i className="fa fa-search"></i>Search Now</button>
                        </div>
                        <div className="clearfix"></div>
                        <div className="banner-item banner-bg-4 banner-1x color-inher">
                            <h5>Lorem ipsum dolor</h5>
                            <h3 className="f-weight-300"><strong>Interior</strong> Accessories</h3>
                            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel</p>
                            <a className="ht-btn ht-btn-default">Shop now</a>
                        </div>
                    </div>
                    <div className="col-sm-7 col-md-8 col-lg-9">
                        <div className="product product-grid product-grid-2 car">
                            <div className="heading heading-2 m-b-lg-0">
                                <h3 className="p-l-lg-20">New Cars (45)</h3>
                            </div>
                            <div className="product-filter p-t-xs-20 p-l-xs-20">
                                <div className="m-b-xs-10 pull-left">
                                    <a onClick={() => this.setDisplayType('cards')} className={this.state.displayType === 'cards' ? 'active' : ''}>
                                        <i className="fa fa-th" />
                                    </a>
                                    <a onClick={() => this.setDisplayType('list')} className={this.state.displayType === 'list' ? 'active' : ''}>
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

                                {this.renderCars()}

                                {/* <CarsList displayType={this.state.displayType} carslist={cars.slice((this.state.activePage - 1) * this.state.pageSize, (this.state.activePage - 1) * this.state.pageSize + this.state.pageSize)} /> */}

                                {/* <div className="banner-item banner-2x no-bg ">
                                    <h2 className="f-weight-300"><i className="fa fa-search m-r-lg-10"> </i>No Result</h2>
                                    <a className="ht-btn ht-btn-default ht-btn-2x m-t-lg-35">
                                        View all cars
                                    </a>
                                </div> */}

                            </div>
                            <nav aria-label="Page navigation">
                                <ul className="pagination ht-pagination">
                                    <li>
                                        <a aria-label="Previous" style={this.state.activePage === 1 ? { display: 'none' } : { display: 'block' }}>
                                            <span aria-hidden="true" >
                                                <i className="fa fa-chevron-left" onClick={() => { this.setActivePage(this.state.activePage - 1) }} />
                                            </span>
                                        </a>
                                    </li>
                                    {table.map(i => {
                                        if(table.length<=1) return ''
                                        else{
                                            return <li key={i} className={this.state.activePage === i ? "active" : ""}>
                                                    <a onClick={() => { this.setActivePage(i) }}>{i}</a>
                                                </li>;
                                        }
                                        
                                    })}
                                    <li>
                                        <a aria-label="Next" style={this.state.activePage === Math.ceil(cars.length / this.state.pageSize) ? { display: 'none' } : { display: 'block' }}>
                                            <span aria-hidden="true">
                                                <i className="fa fa-chevron-right" onClick={() => { this.setActivePage(this.state.activePage + 1) }} />
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

function mapStateToProps({ fetchedCars }) {
    return { fetchedCars };
}

export default connect(mapStateToProps, { fetchFiltredCars })(CarsContainer);