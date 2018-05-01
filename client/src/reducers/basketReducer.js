import { BASKET_ADD ,BASKET_REMOVE_ITEM} from '../actions/types';

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
            return([{product,quantity:currentQuentity},...state]);
        }else{
            return([{product,quantity:1},...state]);            
        }
    case BASKET_REMOVE_ITEM:
        state=state.filter(function(item){
            return item.product._id!==action.payload ;
        });
        return state;
        
    default:
      return state;
  }
}


