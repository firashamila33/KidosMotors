import React,{Component} from 'react';
import ProductItem from './ProductItem';


class ProductList extends Component{

    renderProduct(product){
        return(
            <ProductItem key={product.name} product={product} />
        );
}

    render(){
        return(
            <div>
            {this.props.productslist.map(product=>this.renderProduct(product))}
            </div>
    );
    }

}

export default ProductList;
