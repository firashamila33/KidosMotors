import React,{Component} from 'react';
import CarItem from './CarItem';


class CarsList extends Component{

    renderProduct(car){
        return(
            <CarItem key={car.name} car={car} />
        );
}

    render(){
        return(
            <div>
            {this.props.carslist.map(car=>this.renderProduct(car))}
            </div>
    );
    }

}

export default CarsList;
