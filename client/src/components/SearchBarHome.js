import React, {Component} from 'react';
import {connect} from 'react-redux'
import { fetchFiltredCars } from '../actions'  
import { withRouter } from 'react-router'
class SearchBarHome extends Component {

    constructor(props){
      super(props);
      this.sate = {
          condition : 'condition',
          body : 'body',
          make : 'make',
          model : 'model',
          year : 'year',
          transition : 'transition'
      };
      this.setCarCondition=this.setCarCondition.bind(this);
      this.setCarBody=this.setCarBody.bind(this);
      this.setCarMake=this.setCarMake.bind(this);
      this.setCarYear=this.setCarYear.bind(this);
      this.setCarTransition=this.setCarTransition.bind(this);
    }
    buttonSearchClicked(){
      if(this.state!==null){
        var {condition,body,make,model,year,transition}=this.state;
        var filter = {};
        filter = {condition,body,make,model,year,transition};        
        this.props.fetchFiltredCars(filter);
      }
      this.props.history.push('/cars');
        
    }
    setCarCondition(event){
     this.setState({consition : event.target.id});
    }
    setCarBody(event){
     this.setState({body : event.target.id});
    }
    setCarMake(event){
     this.setState({make : event.target.id});
    }
    setCarYear(event){
     this.setState({year : event.target.id});
    }
    setCarTransition(event){
     this.setState({transition : event.target.id});
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
                              <li>Condition</li>
                              <li id="new_car" onClick={this.setCarCondition}>New Car (4,500)</li>
                              <li id="used_car" onClick={this.setCarCondition} >Used Cars (6,540)</li>
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
                              <li>Body</li>
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
                              <li>Make</li>
                              <li id="ford" onClick={this.setCarMake} >Ford</li>
                              <li id="huyndai" onClick={this.setCarMake}>Huyndai</li>
                              <li id="nissan" onClick={this.setCarMake}>Nissan</li>
                              <li id="chevrolet" onClick={this.setCarMake}>Chevrolet</li>
                              <li id="kia" onClick={this.setCarMake}>Kia</li>
                              <li id="mazda" onClick={this.setCarMake}>Mazda</li>
                              <li id="bmw" onClick={this.setCarMake}>BMW</li>
                              <li id="toyota" onClick={this.setCarMake}>Toyota</li>
                              <li id="mercedes" onClick={this.setCarMake}>Mercedes Benz</li>
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
                      </div>
                        <div className="col-sm-4 col-md-4 col-lg-4 m-b-lg-15 p-r-lg-0 p-r-xs-15">
                        <div className="select-wrapper">
                          <div className="dropdown">
                            <button className="dropdown-toggle form-item" type="button" id="dropdownMenu5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                              Year
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenu5">
                              <li>Year</li>
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
                              <li>Transition</li>
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
                    <input type="text" disabled className="slider_amount m-t-lg-30 m-t-xs-0 m-t-sm-10" />
                    <div className="slider-range"></div>
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

export default connect(null,{fetchFiltredCars})(withRouter(SearchBarHome));