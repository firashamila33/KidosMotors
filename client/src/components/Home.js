import React,{Component} from 'react';

class Home extends Component{

    componentDidMount(){
       window.updateCarousel();
       window.reRenderRangeSlider();
    }
    
    render(){
        return(
            <div className="wrap-body-inner">
                <div className="product product-grid product-grid-2 car m-t-lg-90 p-t-sm-35 m-b-lg-20">
                    <div className="heading">
                        <h3>RECENT CARS</h3>
                    </div>
                    <div className="row">
                        <div
                        id="fifi"
                        className="owl"
                        data-items="3"
                        data-itemsdesktop="2"
                        data-itemsdesktopsmall="2"
                        data-itemstablet="2"
                        data-itemsmobile="1"
                        data-pag="false"
                        data-buttons="true"
                        >
                        <div className="col-lg-12">
                            <div className="product-item hover-img">
                            <a   className="product-img">
                                <img
                                src={`${process.env.PUBLIC_URL}/images/b-img-2.jpg`}
                                alt=""
                                />
                            </a>
                            <div className="product-caption">
                                <h4 className="product-name">
                                <a  >
                                    HYUNDAI ELANTRA 2016 NEW MODEL / <b>new</b>
                                </a>
                                <span className="f-18"> $201,000</span>
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
                        <div className="col-lg-12">
                            <div className="product-item hover-img">
                            <a   className="product-img">
                                <img
                                src={`${process.env.PUBLIC_URL}/images/b-img-1.jpg`}
                                alt=""
                                />
                            </a>
                            <div className="product-caption">
                                <h4 className="product-name">
                                <a  >
                                    KIA SOUL, BRAND NEW MODEL 2016 > <b>used</b>
                                </a>
                                <span className="f-18"> $201,000</span>
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
                        <div className="col-lg-12">
                            <div className="product-item hover-img">
                            <a   className="product-img">
                                <img
                                src={`${process.env.PUBLIC_URL}/images/b-img-10.jpg`}
                                alt=""
                                />
                            </a>
                            <div className="product-caption">
                                <h4 className="product-name">
                                <a  >
                                    FORD MUSTANG 2016 TURBO / <b>used</b>
                                </a>
                                <span className="f-18"> $201,000</span>
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
                        <div className="col-lg-12">
                            <div className="product-item hover-img">
                            <a   className="product-img">
                                <img
                                src={`${process.env.PUBLIC_URL}/images/b-img-4.jpg`}
                                alt=""
                                />
                            </a>
                            <div className="product-caption">
                                <h4 className="product-name">
                                <a  >
                                    HYUNDAI VELOSTER TURBO SPORT / <b>used</b>
                                </a>
                                <span className="f-18"> $201,000</span>
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
                        <div className="col-lg-12">
                            <div className="product-item hover-img">
                            <a   className="product-img">
                                <img
                                src={`${process.env.PUBLIC_URL}/images/b-img-10.jpg`}
                                alt=""
                                />
                            </a>
                            <div className="product-caption">
                                <h4 className="product-name">
                                <a  >
                                    HYUNDAI ELANTRA 2016 NEW MODEL / <b>used</b>
                                </a>
                                <span className="f-18"> $201,000</span>
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
                        <div className="col-lg-12">
                            <div className="product-item hover-img">
                            <a   className="product-img">
                                <img
                                src={`${process.env.PUBLIC_URL}/images/b-img-11.jpg`}
                                alt=""
                                />
                            </a>
                            <div className="product-caption">
                                <h4 className="product-name">
                                <a  >
                                    BMW , NAVI, LEATHER, ABS / <b>used</b>
                                </a>
                                <span className="f-18"> $201,000</span>
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
                        </div>
                    </div>
                </div>
                <div className="banner-item banner-2x banner-bg-9 color-inher m-b-lg-50">
                <h3 className="f-weight-300">
                    Start Selling With <strong>AutoShop</strong> Now!
                </h3>
                <p>No hidden fees or costs, you pay what you need.</p>
                <a className="ht-btn ht-btn-default">
                    Click to sell your car
                </a>
                </div>   
            </div>
        ); 
    }
}

export default Home ;