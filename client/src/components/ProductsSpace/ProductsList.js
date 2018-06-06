import React,{Component} from 'react';
import ProductItemCard from './ProductItemCard';
import ProductItemList from './ProductItemList';


class ProductList extends Component{

    constructor(props){
        super();

    }
    renderProductCards(product){
        
         return(
             <ProductItemCard  key={product._id} product={product} />
         );
         
    }
     
    renderProductList(product){
         
          return(
              <ProductItemList key={product.name} product={product} />
          );
          
    }
    
    render(){
        if (this.props.displayType ==='cards')
        return(
            <div>
            {this.props.productslist.map(product=>this.renderProductCards(product))}
            </div>
        );
        else if(this.props.displayType ==='list')
            return(
                <div>
                {this.props.productslist.map(product=>this.renderProductList(product))}
                </div>
        );
    }
    
    

}

export default ProductList;
