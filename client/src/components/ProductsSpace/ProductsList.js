import React from 'react';
import ProductItemCard from './ProductItemCard';
import ProductItemList from './ProductItemList';




function renderProductCards(product){
   
    return(
        <ProductItemCard key={product._id} product={product} />
    );
    
}

function renderProductList(product){
    
     return(
         <ProductItemList key={product.name} product={product} />
     );
     
 }

const ProductList = (props)=>{
    if (props.displayType ==='cards')
        return(
            <div>
            {props.productslist.map(product=>renderProductCards(product))}
            </div>
    );
    else if(props.displayType ==='list')
         return(
            <div>
            {props.productslist.map(product=>renderProductList(product))}
            </div>
    );
    console.log('props.productslist');
    

}

export default ProductList;
