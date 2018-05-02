import React,{Component} from 'react' ;
import { connect } from 'react-redux';
import { addToBasket } from '../../actions';


class CartItem extends Component{
    render(){
        return(
            <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="product-item hover-img">
                    <a className="product-img">
                        <img src={`${process.env.PUBLIC_URL}/images/${this.props.car.imageName}`} alt="" />
                    </a>
                    <div className="product-caption">
                        <h4 className="product-name">
                        <a>
                        {this.props.car.name} / <b>NEW</b>
                        </a>
                        <span className="f-18"> ${this.props.car.price},000</span>
                        </h4>
                    </div>
                    <ul className="absolute-caption">
                        <li>
                        <i className="fa fa-clock-o" />2016
                        </li>
                        <li>
                        <i className="fa fa-car" />Auto
                        </li>
                        <li>
                        <i className="fa fa-road" />Gas
                        </li>
                    </ul>   
                </div>
            </div>
        );
    } 

};



export default connect(null,{addToBasket})(CartItem) ;