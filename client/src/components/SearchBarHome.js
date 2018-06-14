import React, {Component} from 'react';
import {connect} from 'react-redux';
import { fetchFiltredCars,turnOnHomefilter  } from '../actions';  
import { withRouter } from 'react-router';
import $ from 'jquery';
class SearchBarHome extends Component {

    constructor(props){
      super(props);
      this.state = {
          condition : '',
          body : '',
          make : '',
          model : '',
          year : '',
          transition : '',
          priceRange:''
      };
      this.setCarCondition=this.setCarCondition.bind(this);
      this.setCarBody=this.setCarBody.bind(this);
      this.setCarMake=this.setCarMake.bind(this);
      this.setCarYear=this.setCarYear.bind(this);
      this.setCarTransition=this.setCarTransition.bind(this);
    }
  buttonSearchClicked() {
    if (this.state !== null) {
      var { condition, body, make, model, year, transition, priceRange } = this.state;
      var filter = {};
      priceRange = $("#priceslider").val();

      // priceRange = {
      //   range: $("#priceslider").val(),
      //   width: $('#spanrange')[0].childNodes[0].style.width,
      //   left: $('#spanrange')[0].childNodes[0].style.left
      // }

      
      filter = { condition, body, make, model, year, transition, priceRange };
      this.props.fetchFiltredCars(filter);
      this.props.turnOnHomefilter();
    }


    this.props.history.push('/cars');
    this.props.filters(filter);         

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
    

    render(){
        return(
            <div className="search-1 m-t-sm-40">
            <div className="container">
              <div className="search-option p-lg-30 p-b-lg-15 p-b-sm-30 p-r-sm-45 p-xs-15">
                <div className="row">
                  <div className="col-sm-12 col-md-7 col-lg-7">
                    <div className="row">
                      <div className="col-sm-4 col-md-4 col-lg-4 m-b-lg-15 p-r-lg-0 p-r-xs-15">
                        <div className="select-wrapper">
                          <div className="dropdown">
                            <button className="dropdown-toggle form-item" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                              Condition
                            </button>
                            <ul id="firas" className="dropdown-menu" aria-labelledby="dropdownMenu1">
                              <li id="new" onClick={this.setCarCondition}>New Cars</li>
                              <li id="used" onClick={this.setCarCondition} >Used Cars</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                        <div className="col-sm-4 col-md-4 col-lg-4 m-b-lg-15 p-r-lg-0 p-r-xs-15">
                        <div className="select-wrapper">
                          <div className="dropdown">
                            <button className="dropdown-toggle form-item" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                              Body
                            </button>
                            <ul  className="dropdown-menu" aria-labelledby="dropdownMenu2">
                              <li id="sedan" onClick={this.setCarBody} >Sedan</li>
                              <li id="suv" onClick={this.setCarBody}>SUV</li>
                              <li id="truck" onClick={this.setCarBody}>Truck</li>
                              <li id="coupe" onClick={this.setCarBody}>Coupe</li>
                              <li id="minivan" onClick={this.setCarBody}>Minivan</li>
                              <li id="compact" onClick={this.setCarBody}>Compact</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4 col-md-4 col-lg-4 m-b-lg-15 p-r-lg-0 p-r-xs-15">
                        <div className="select-wrapper">
                          <div className="dropdown">
                            <button className="dropdown-toggle form-item" type="button" id="dropdownMenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                              Make
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenu3">
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
                      </div>
                        <div className="col-sm-4 col-md-4 col-lg-4 m-b-lg-15 p-r-lg-0 p-r-xs-15">
                        <div className="select-wrapper">
                          <div className="dropdown">
                            <button className="dropdown-toggle form-item" type="button" id="dropdownMenu4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                              Model
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenu4">
                              {/* <li>Versa</li>
                              <li>Cruze</li>
                              <li>Malibu</li>
                              <li>Civic</li>
                              <li>Genesis</li>
                              <li>Pilot</li>
                              <li>Optima</li>
                              <li>CX-5</li>
                              <li>3 Serie</li>
                              <li>Atima</li> */}
                            </ul>
                          </div>
                        </div>
                      </div>
                        <div className="col-sm-4 col-md-4 col-lg-4 m-b-lg-15 p-r-lg-0 p-r-xs-15">
                        <div className="select-wrapper">
                          <div className="dropdown">
                            <button className="dropdown-toggle form-item" type="button" id="dropdownMenu5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                              Year
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenu5">
                              <li id="2016" onClick={this.setCarYear}>2016</li>
                              <li id="2015" onClick={this.setCarYear}>2015</li>
                              <li id="2014" onClick={this.setCarYear}>2014</li>
                              <li id="2013" onClick={this.setCarYear}>2013</li>
                              <li id="2012" onClick={this.setCarYear}>2012</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4 col-md-4 col-lg-4 m-b-lg-15 p-r-lg-0 p-r-xs-15">
                        <div className="select-wrapper">
                          <div className="dropdown">
                            <button className="dropdown-toggle form-item" type="button" id="dropdownMenu6" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                              Transition
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenu6">
                              <li id="automatic" onClick={this.setCarTransition}>Automatic</li>
                              <li id="manual" onClick={this.setCarTransition}>Manual</li>
                              <li id="semi_automatic" onClick={this.setCarTransition}>Semi-automatic</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-5 col-md-3 col-lg-3">
                    <input id="priceslider" type="text" disabled className="slider_amount m-t-lg-30 m-t-xs-0 m-t-sm-10"/>
                    <div id='spanrange' className="slider-range"></div>
                  </div>
                  <div className="col-sm-3 col-md-2 col-lg-2 p-r-sm-0 pull-right pull-left-xs">
                    <button type="button" className="ht-btn ht-btn-default m-t-lg-30 m-t-sm-10 pull-right pull-left-xs" onClick={this.buttonSearchClicked.bind(this)}><i className="fa fa-search"></i> Search</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }




}

export default connect(null,{fetchFiltredCars, turnOnHomefilter})(withRouter(SearchBarHome));