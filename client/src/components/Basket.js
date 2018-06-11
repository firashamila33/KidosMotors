import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import BasketItem from './BasketItem';


class Basket extends Component {
  constructor(props) {
    super(props);
    this.state = { basketproducts: {} };
  }
  renderItem(item) {
     return(
        <BasketItem key={item.product._id} item={item}/>
     );
  }

  getTotalPrice(){
      if(this.props.basketproducts.length===0){
          return'0';
      }
      var total=0;
       this.props.basketproducts.map(e=>total=total+(parseInt(e.product.price,10)*e.quantity));
       return total;
    }

  render() {
    return (
      <li className="cart-icon">
        <a>
          <i className="fa fa-shopping-basket" />
          <span className="badge">{this.props.basketproducts.length}</span>
        </a>
        <ul className="cart-dropdown">
          <li className="bg-white bg1-gray-15 color-inher">
             {this.props.basketproducts.map(e=>this.renderItem(e))} 
            <div className="p-t-lg-15 p-b-lg-10">
              Total : <strong className="pull-right price">${this.getTotalPrice()} </strong>
            </div>
            <div className="clearfix" />
            {/* <Link to={"/products_cart"} className="ht-btn">
              Check out
            </Link> */}
            <Link to={"/products_cart"} className="ht-btn pull-right">
              View Cart
            </Link>
          </li>
        </ul>
      </li>
    );
  }
}

function mapStateToProps({ basketproducts }) {
  return { basketproducts };
}

export default connect(mapStateToProps)(Basket);
