import React,{Component} from 'react' ;
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSingleCar,addToWhishList,removeFromWhishList } from '../../actions';

class CarItemCard extends Component{


    constructor(props) {
        super(props);
        this.state={isInWhishList:false,
                    car:props.car,
                    isHovered:false
                    };
    };
    ToggleCarWhishlist(event){
        var car = JSON.parse(event.target.id);
        if(!this.state.isInWhishList){
            this.props.addToWhishList(car);
            this.setState({isInWhishList:true});
        }
        else{  
            this.props.removeFromWhishList(car);
            this.setState({isInWhishList:false});
            
        }
    }
    componentDidMount(){
        var car= this.props.car;
        
        if(this.props.whishlistproducts.filter(function(e){return e._id === car._id}).length===1){
            this.setState({isInWhishList:true})
        }
    }
    mouseHover(event){
        this.setState({isHovered:true});  
    }

    mouseUnHover(event){
        this.setState({isHovered:false});  
    }



    render(){

        var heartStyle = {};
        if(!this.state.isHovered){
            heartStyle = {
                color: '#d11717',
                fontWeight: 'bold'
            };
        }

        const {car} = this.props;
        return(
            <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="product-item hover-img">
                <a className="product-img">
                    <img src={`${process.env.PUBLIC_URL}/images/${car.imageName}`} alt="" />
                </a>
                <div className="product-caption">
                    <h4 className="product-name">
                    <a>
                    {car.name} / <b>{car.condition.toUpperCase()}</b>
                    </a>
                    <span className="f-18"> ${car.price},000</span>
                    </h4>
                </div>
                <ul className="absolute-caption">
                    <li>
                    <i className="fa fa-clock-o" />{car.year}
                    </li>
                    
                    <li onClick={()=>this.props.fetchSingleCar(car)}>
                        <Link to={`/cars/singlproduct`}>
                        <i className="fa fa-search" />View
                        </Link>
                    </li>
                     
                    <li onMouseEnter={this.mouseHover.bind(this)} onMouseLeave={this.mouseUnHover.bind(this)}>
                            <i id={JSON.stringify(car)} className={this.state.isInWhishList ? "fa fa-heart" : "fa fa-heart-o"} 
                            style={heartStyle} 
                            onClick={this.ToggleCarWhishlist.bind(this)}      
                            />WishList
                    </li>
                                     
                </ul>   
            </div>
        </div>

        );
    } 

};





function mapStateToProps({ whishlistproducts }) {
    return { whishlistproducts };
}


export default connect(mapStateToProps,{ fetchSingleCar, addToWhishList, removeFromWhishList})(CarItemCard) ;