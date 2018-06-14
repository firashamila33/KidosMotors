import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  fetchSingleProduct,
  addToBasket,
  addToWhishList,
  removeFromWhishList
} from "../../actions";

class ProductItemList extends Component {

  constructor(props) {
    super(props);
    this.state = { isInWhishList: false, product: props.product, isHovered:false };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  ToggleProductWhishlist(event) {

    var product = JSON.parse(event.target.id);
    if (!this.state.isInWhishList) {
      this.props.addToWhishList(product);
      this.setState({ isInWhishList: true });
    } else {
      this.props.removeFromWhishList(product);
      this.setState({ isInWhishList: false });
    }

  }

  componentDidMount() {
    var product = this.props.product;

    if (
      this.props.whishlistproducts.filter(function(e) {
        return e._id === product._id;
      }).length === 1
    ) {
      this.setState({ isInWhishList: true });
    }
  }

  mouseHover(event){
    this.setState({isHovered:true});  
  }

  mouseUnHover(event){
      this.setState({isHovered:false});  
  }

  render() {
    var heartStyle = {};
        if(!this.state.isHovered){
            heartStyle = {
                color: '#d11717',
                fontWeight: 'bold'
            };
        }
    const {product} = this.props;
    return (
      <div className="product-item hover-img">
        <div className="row">
          <div className="col-sm-6 col-md-5 col-lg-4">
            <a className="product-img">
              <img
                src={`${process.env.PUBLIC_URL}/images/${product
                  .imageName}`}
                style={{ width: "197.5px", height: "197.5px" }}
                alt=""
              />
            </a>
          </div>
          <div className="col-sm-6 col-md-7 col-lg-8 static-position">
            <div className="product-caption">
              <h4 className="product-name">
                <a>{product.name}</a>
              </h4>
              <ul className="rating">
                <li className="active">
                  <i className="fa fa-star" />
                </li>
                <li className="active">
                  <i className="fa fa-star" />
                </li>
                <li className="active">
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
              </ul>
              <div className="product-price-group">
                <span className="product-price">
                  ${product.price}
                </span>
              </div>
              <p className="product-txt">
                Nunc facilisis sagittis ullamcorper. Proin lectus ipsum
              </p>
              <a
                className="ht-btn ht-btn-default"
                onClick={() => {
                  this.props.addToBasket(product, 1);
                }}
              >
                Add to cart
              </a>
              <ul className="absolute-caption">
                <li>
                    <i id={JSON.stringify(product)} className={this.state.isInWhishList ? "fa fa-heart" : "fa fa-heart-o"} 
                    style={heartStyle} 
                    onClick={this.ToggleProductWhishlist.bind(this)}
                    onMouseEnter={this.mouseHover.bind(this)}
                    onMouseLeave={this.mouseUnHover.bind(this)}
                    />
                </li>
                <li>
                  <i
                    className="fa fa-shopping-basket"
                    onClick={() => {
                      this.props.addToBasket(product, 1);
                    }}
                  />
                </li>
                <li onClick={()=>this.props.fetchSingleProduct(product)}>
                  <Link to={`/products/singlproduct`}>
                    <i className="fa fa-search" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ whishlistproducts }) {
  return { whishlistproducts };
}

export default connect(mapStateToProps, {fetchSingleProduct, addToBasket, addToWhishList, removeFromWhishList })(ProductItemList);
