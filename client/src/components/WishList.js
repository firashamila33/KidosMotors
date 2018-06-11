import React,{Component} from 'react';
import { connect } from "react-redux";
import { removeFromWhishList,addToBasket} from '../actions';




class  WhishList extends Component {

  constructor(props) {
    super(props);
    this.state = { 
        whishlistproducts: {}
  };
  }

  renderItem(product){
    return(
      <div key={product._id} className="row m-lg-0 overl bor-r"    >
        <div className="col-sm-5 col-md-5 col-lg-5 cart-item">
          <div className="row">
            <div className="col-sm-3 col-md-3 col-lg-3">
              <a href=" " className="cart-img-prev">
                <img src={`${process.env.PUBLIC_URL}/images/${product.imageName}`} alt="" />
              </a>
            </div>
            <div className="col-sm-9 col-md-9 col-lg-9 p-lg-0">
              <div className="product-name">
                <h5>
                  <a href=" ">{product.name}</a>
                </h5>
                <span className="price">${product.price}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-2 col-md-2 col-lg-2 cart-item">
        <p>P-09484</p>
        </div>
        <div className="col-sm-1 col-md-1 col-lg1 cart-item">
        <p className="color-green">In stock</p>
        </div>

        <div className="col-sm-2 col-md-2 col-lg-2 cart-item">
        <p>
            <strong>${product.price}</strong>
        </p>
        </div>

        <div className="col-sm-1 col-md-1 col-lg-1 cart-item">
        <i className="fa fa-cart-plus cart-remove-btn" style={product.body !== undefined ? {pointerEvents: 'none'} : {}} onClick={()=>{this.props.addToBasket(product,1); }}></i>
        </div>
        
        <div className="col-sm-1 col-md-1 col-lg-1 cart-item">
          <i className="fa fa-remove cart-remove-btn" onClick={()=>this.props.removeFromWhishList(product)}/>
        </div>
        
      </div>



      );
      
  };

  render(){
    const parentStyle={
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      
    }

    return <div className="wrap-body-inner"  >
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
            <li className="active">WishList</li>
          </ul>
        </div>
      </div>
    </div>
    <section className="block-cart m-b-lg-50 m-t-lg-30 m-t-xs-0" >
      <div>
        <div className="heading">
          <h3>Wishlist</h3>
        </div>
        <div style={parentStyle}>
          <div className="display-inline-block width-100" >

            {this.props.whishlistproducts.map((e)=>this.renderItem(e))}
            
            
            {/*
              <a href=" " className="ht-btn ht-btn-default pull-right">
              Proceed to check out
            </a>
            */}
          

          
            
          </div>
        </div>
        
      </div>
    </section>
  </div>;
  }
   

};
function mapStateToProps({ whishlistproducts }) {
  return { whishlistproducts };
}

export default connect(mapStateToProps,{addToBasket,removeFromWhishList})(WhishList);

