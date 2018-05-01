import React,{Component} from 'react';
import { connect } from "react-redux";
import { removeFromBasket } from '../actions';




class  CartFull extends Component {

  constructor(props) {
    super(props);
    this.state = { basketproducts: {} };
  }

 

  renderItem(item){
    return(
      <div key={item.product._id} className="row m-lg-0 overl bor-r">
        <div className="col-sm-5 col-md-5 col-lg-5 cart-item">
          <div className="row">
            <div className="col-sm-3 col-md-3 col-lg-3">
              <a href=" " className="cart-img-prev">
                <img src={`../${item.product.imagePath}`} alt="" />
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
        <div className="col-sm-2 col-md-2 col-lg-2 cart-item">
          <input type="text" className="form-item form-qtl" defaultValue={item.quantity} />
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
              <a href=" ">Product</a>
            </li>
            <li className="active">Authentication</li>
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
            Total : <strong>$249.000</strong>
          </div>
          <div className="clearfix" />
          <a href=" " className="ht-btn ht-btn-default pull-right">
            Proceed to check out
          </a>
          {/* <a href=" " className="ht-btn ht-btn-default pull-left">
            Update cart
          </a> */}
        </div>
      </div>
    </section>
  </div>;
  }
   

};
function mapStateToProps({ basketproducts }) {
  return { basketproducts };
}

export default connect(mapStateToProps,{removeFromBasket})(CartFull);

