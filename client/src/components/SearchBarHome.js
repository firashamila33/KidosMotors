import React, {Component} from 'react';
import axios from "axios";

class SearchBarHome extends Component {

    buttonClicked(){
        console.log('I am going to send to server');
        var prod={firo:'asma',mama:'fasya'};
         async function  fetchthis(p){
             const res = await axios.get('/api/carfilter',(p));
             console.log(JSON.parse(res));
         }
         fetchthis(prod);
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
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                              <li>Condition</li>
                              <li>New Car (4,500)</li>
                              <li>Used Cars (6,540)</li>
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
                      </div>
                      <div className="col-sm-4 col-md-4 col-lg-4 m-b-lg-15 p-r-lg-0 p-r-xs-15">
                        <div className="select-wrapper">
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
                              <li>2016</li>
                              <li>2015</li>
                              <li>2014</li>
                              <li>2012</li>
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
                              <li>Automatic</li>
                              <li>Manual</li>
                              <li>Semi-automatic</li>
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
                    <button type="button" className="ht-btn ht-btn-default m-t-lg-30 m-t-sm-10 pull-right pull-left-xs" onClick={this.buttonClicked.bind(this)}><i className="fa fa-search"></i> Search</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }




}

export default SearchBarHome;