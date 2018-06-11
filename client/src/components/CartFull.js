import React,{Component} from 'react';
import { connect } from "react-redux";
import { removeFromBasket, addToBasket, changeBasketItem} from '../actions';
import * as $ from 'jquery';




class  CartFull extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      basketproducts: {}
  };
  }


  getTotalPrice(){
    if(this.props.basketproducts.length===0){
        return'0';
    }
    var total=0;
     this.props.basketproducts.map(e=>total=total+(parseInt(e.product.price,10)*e.quantity));
     return total;
  }

  handleIncrease(event){
    var toChangeProduct = JSON.parse(event.target.id).product;
    var quantity = JSON.parse(event.target.id).quantity+1;
    $(`.${toChangeProduct._id}`).textContent=quantity;     
    this.props.changeBasketItem(toChangeProduct,quantity);
  }
  handleDecrease(event){
    var toChangeProduct = JSON.parse(event.target.id).product;
    var quantity = JSON.parse(event.target.id).quantity-1;
    if(quantity>0){
      $(`.${toChangeProduct._id}`).textContent=quantity;     
      this.props.changeBasketItem(toChangeProduct,quantity);
    }
    
  }
 

  renderItem(item){
    return(
      <div key={item.product._id} className="row m-lg-0 overl bor-r" >
        <div className="col-sm-5 col-md-5 col-lg-5 cart-item">
          <div className="row">
            <div className="col-sm-3 col-md-3 col-lg-3">
              <a href=" " className="cart-img-prev">
                <img src={`${process.env.PUBLIC_URL}/images/${item.product.imageName}`} alt="" />
              </a>
            </div>
            <div className="col-sm-9 col-md-9 col-lg-9 p-lg-0">
              <div className="product-name">
                <h5>
                  <a href=" ">{item.product.name}</a>
                </h5>
                <span className="price">${item.product.price}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-2 col-md-2 col-lg-2 cart-item">
          <p className="color-green">In stock</p>
        </div>


        <div id="containerqtparent" className="col-sm-2 col-md-2 col-lg-2 cart-item "  >      
            <div className="containerqt" >
              <span id={JSON.stringify(item)} className="qt-minus" onClick={this.handleDecrease.bind(this)}>-</span>
              <span id={JSON.stringify(item)} type="number" min="1" className="qt">{item.quantity}</span>
              <span id={JSON.stringify(item)} className="qt-plus"  onClick={this.handleIncrease.bind(this)}>+</span>	
            </div>
        </div>


        <div className="col-sm-2 col-md-2 col-lg-2 cart-item">
          <p>
            <strong>${item.quantity*item.product.price}</strong>
          </p>
        </div>  
        <div className="col-sm-1 col-md-1 col-lg-1 cart-item">
          <i className="fa fa-remove cart-remove-btn" onClick={()=>this.props.removeFromBasket(item.product._id)}/>
        </div>
      </div>
      
      );
      
  };

  render(){
    return <div className="wrap-body-inner">
    <div className="hidden-xs">
      <div className="row">
        <div className="col-lg-6">
          <ul className="ht-breadcrumb pull-left">
            <li className="home-act">
              <a href=" ">
                <i className="fa fa-home" />
              </a>
            </li>
            <li className="home-act">
              <a href=" ">Shop</a>
            </li>
            <li className="active">Wishlist</li>
          </ul>
        </div>
      </div>
    </div>
    <section className="block-cart m-b-lg-50 m-t-lg-30 m-t-xs-0">
      <div>
        <div className="heading">
          <h3>Cart</h3>
        </div>
        <div className="display-inline-block width-100">

          {this.props.basketproducts.map((e)=>this.renderItem(e))}
          
          <div className="clearfix" />
          <div className="cart-total">
            Total : <strong>${this.getTotalPrice()}</strong>
          </div>
          <div className="clearfix" />
          {/*
            <a href=" " className="ht-btn ht-btn-default pull-right">
            Proceed to check out
          </a>
          */}
         

         
          
        </div>
      </div>
    </section>
  </div>;
  }
   

};
function mapStateToProps({ basketproducts }) {
  return { basketproducts };
}

export default connect(mapStateToProps,{removeFromBasket,addToBasket,changeBasketItem})(CartFull);

