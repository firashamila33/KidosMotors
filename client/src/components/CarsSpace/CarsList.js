import React from 'react';
import CarItemCard from './CarItemCard';
import CarItemList from './CarItemList';




function renderCarCards(car){
   
    return(
        <CarItemCard key={car._id} car={car} />
    );
    
}

function renderCarList(car){
    
     return(
         <CarItemList key={car.name} car={car} />
     );
     
 }

const CarsList = (props)=>{
    if (props.displayType ==='cards')
        return(
            <div>
            {props.carslist.map(car=>renderCarCards(car))}
            </div>
    );
    else if(props.displayType ==='list')
         return(
            <div>
            {props.carslist.map(car=>renderCarList(car))}
            </div>
    );
    console.log('props.carslist');
    

}

export default CarsList;
