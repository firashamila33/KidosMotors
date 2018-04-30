import { BASKET_ADD } from '../actions/types';

export default function(state = [], action) {
  
  switch (action.type) {
    case BASKET_ADD:
        var exist=false
        var currentQuentity=0;
        var product=action.payload;    

        state.forEach((e)=>{
            if(e.product._id===product._id){
                currentQuentity=e.quantity;
                exist= true;
            }
        });
        
        if(exist){
            state=state.filter(function(e){
                    return e.product._id!==product._id ;
                });
            currentQuentity++;
            //console.log('____');
            //console.log({product,quantity:currentQuentity},...state);
            //console.log('____');
            return([{product,quantity:currentQuentity},...state]);
        }else{
            //console.log('****');
            //console.log({product,quantity:1},...state);
            //console.log('****');
            return([{product,quantity:1},...state]);            
        }

    default:
      return state;
  }
}


