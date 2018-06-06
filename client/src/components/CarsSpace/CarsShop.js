import React , {Component} from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from "react-router-dom";
import { fetchCars } from '../../actions';

import CarDetails from './CarDetails';
import CarsContainer from './CarsContainer';

class CarShop extends Component{
    componentDidMount(){
        window.reRenderRangeSlider();
        this.props.fetchCars();
    }
   render(){
    return(
        <div className="wrap-body-inner">
            <BrowserRouter>
                <div>
                    <Route exact path="/cars" render={()=><CarsContainer  carsList={this.props.cars}/>} />
                    <Route exact path="/cars/singlproduct" component={CarDetails} />
                </div>
            </BrowserRouter>
        </div>
    );

   }
}   



function mapStateToProps({ cars }) {
    return { cars };
}
  
export default connect(mapStateToProps,{fetchCars})(CarShop);