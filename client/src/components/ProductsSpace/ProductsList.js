import React,{Component} from 'react';
import ProductItem from './ProductItem';


function renderProduct(product){
    return(
        <ProductItem key={product.name} product={product} />
    );
}

const ProductList = (props)=>{
    
        return(
            <div>
            {props.productslist.map(product=>renderProduct(product))}
            </div>
    );
    

}

export default ProductList;
