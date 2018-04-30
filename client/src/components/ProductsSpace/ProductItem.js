import React,{Component} from 'react' ;
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToBasket } from '../../actions';


class ProductItem extends Component{
    render(){
        return(
            <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="product-item hover-img">
                    <a href="product_detail.html" className="product-img">
                        <img src={this.props.product.imagePath} alt="" />
                    </a>
                    <div className="product-caption">
                        <h4 className="product-name">
                        <a>{this.props.product.name}</a>
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
                        <span className="product-price">${this.props.product.price}</span>
                        </div>
                        <a className="ht-btn ht-btn-default">Add to cart</a>
                        <ul className="absolute-caption">
                        <li>
                            <i className="fa fa-heart-o" />
                        </li>
                        <li>
                            <i className="fa fa-shopping-basket" onClick={()=>{
                                    this.props.addToBasket(this.props.product);
                                    }}/>
                        </li>
                        <li>
                            <Link to={`/product/:${this.props.product._id}`}>
                            <i className="fa fa-search" />
                            </Link>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    } 
    


};

function mapStateToProps({ basketproducts }) {
    return { basketproducts };
}

export default connect(mapStateToProps,{addToBasket})(ProductItem) ;