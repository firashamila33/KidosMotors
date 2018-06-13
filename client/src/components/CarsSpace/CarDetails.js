import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';


class CarDetails extends React.Component {

	componentDidMount(){
		console.log(this.props.selectedCar);
	}

	
    render(){
		console.log(this.props.selectedCar);
		var {name,price,imageName,condition}=this.props.selectedCar;
        return (
            <div className="wrap-body-inner">
						<div className="hidden-xs">
							<div className="row">
								<div className="col-lg-6">
									<ul className="ht-breadcrumb pull-left">
									<li className="home-act"><a><i className="fa fa-home"></i></a></li>
									<li className="home-act"><Link to={"/cars"}>Cars</Link></li>
									
									<li className="active">{name}</li>
									</ul>
								</div>
								<div className="col-lg-6">
									<Link to={"/cars"} style={{width:25}} className="col-sm-1 col-md-1 col-lg-1 p-lg-0 ht-btn ht-btn-default pull-right">
										<i  style={{marginLeft:7}} className="fa fa-remove center"/>
									</Link> 								
								</div>
							</div>
						</div>
						<section className="m-t-lg-30 m-t-xs-0">
							<div className="product_detail no-bg p-lg-0">
								<h3 className="product-name color1-f">{name} / 
									<span className="product-price color-red">${price}000.00 <i className="color-9 color1-9"> ( Plus Taxes & Licensing ) </i></span>
									<span className="car-status m-l-lg-10">{condition !==undefined ? condition.toUpperCase() : ''}</span>
								</h3>
								<div className="row">
									<div className="col-md-7 col-lg-8">
										<div className="product-img-lg bg-gray-f5 bg1-gray-15">
											<div className="image-zoom row m-t-lg-5 m-l-lg-ab-5 m-r-lg-ab-5">
												<div className="col-md-12 col-lg-12 p-lg-5">
													<a  href={`${process.env.PUBLIC_URL}/images/${imageName}`}>
														<img  src={`${process.env.PUBLIC_URL}/images/${imageName}`} alt=""/>
													</a>
												</div>
												<div className="col-sm-3 col-md-3 col-lg-3 p-lg-5">
													<a href="images/b-img-2.jpg">
														<img src="../images/b-img-2.jpg" alt=""/>
													</a>
												</div>
												<div className="col-sm-3 col-md-3 col-lg-3 p-lg-5">
													<a href="images/b-img-1.jpg">
														<img src="../images/b-img-1.jpg" alt=""/>
													</a>
												</div>
												<div className="col-sm-3 col-md-3 col-lg-3 p-lg-5">
													<a href="images/b-img-5.jpg">
														<img src="../images/b-img-5.jpg" alt=""/>
													</a>
												</div>
												<div className="col-sm-3 col-md-3 col-lg-3 p-lg-5">
													<a href="images/b-img-10.jpg">
														<img src="../images/b-img-10.jpg" alt=""/>
													</a>
												</div>
											</div>
										</div>
									</div>
									<div className="col-md-5 col-lg-4">
										<ul className="product_para-1 p-lg-15 bg-gray-f5 bg1-gray-15">
											<li><span>Make :</span>Nissan</li>
											<li><span>Model :</span>Civic</li>
											<li><span>Body :</span>Sedan</li>
											<li><span>Fuel :</span>Mileage</li>
											<li><span>Engine :</span>3.4L Mid-Engine V6</li>
											<li><span>Transmision :</span>Automatic</li>
											<li><span>Color :</span>Gray</li>
											<li><span>Door :</span>2</li>
											<li><span>Mileage :</span>1,000 Miles</li>
											<li><span>Warranty :</span>2 years</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="row m-t-lg-30 m-b-lg-50">
								<div className="col-md-8">
									<div className="m-b-lg-30">
										<div className="heading-1"><h3>Overview</h3></div>
											<div className="m-b-lg-30 bg-gray-fa bg1-gray-2 p-lg-30 p-xs-15">
											<p className="color1-9">
												Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. 
											</p>
										</div>
									</div>
									<div className="m-b-lg-30">
										<div className="heading-1"><h3>Features & Options</h3></div>
										<div className="bg-gray-fa bg1-gray-2 p-lg-30 p-xs-15">
											<ul className="list-feature">
												<li><i className="fa fa-check"></i>Auxiliary heating</li>
												<li><i className="fa fa-check"></i>Head-up display</li>
												<li><i className="fa fa-check"></i>Alloy wheels</li>
												<li><i className="fa fa-check"></i>MP3 interface</li>
												<li><i className="fa fa-check"></i>Bluetooth</li>
												<li><i className="fa fa-check"></i>MP3 interface</li>
												<li><i className="fa fa-check"></i>Electric side mirror</li>
												<li><i className="fa fa-check"></i>Navigation system</li>
												<li><i className="fa fa-check"></i>CD player</li>
												<li><i className="fa fa-check"></i>Navigation system</li>
												<li><i className="fa fa-check"></i>Sports package</li>
												<li><i className="fa fa-check"></i>Panoramic roof</li>
												<li><i className="fa fa-check"></i>Central locking</li>
												<li><i className="fa fa-check"></i>Sports suspension</li>
												<li><i className="fa fa-check"></i>Parking sensors</li>
											</ul>
										</div>
									</div>
									<div className="m-b-lg-0">
										<div className="heading-1"><h3>Technical Specifications</h3></div>
										<div className="bg-gray-fa bg1-gray-2 p-lg-30 p-xs-15">
											<div className="heading-1"><h3 className="f-18">Engine</h3></div>
											<ul className="product_para-1">
												<li><span>Layout / number of cylinders :</span>Nissan</li>
												<li><span>Displacement :</span>Civic</li>
												<li><span>Engine Layout :</span>Sedan</li>
												<li><span>Horespower :</span>Mileage</li>
												<li><span>@ rpm :</span>3.4L Mid-Engine V6</li>
												<li><span>Torque :</span>3.4L Mid-Engine V6</li>
												<li><span>Compression ratio :</span>3.4L Mid-Engine V6</li>
											</ul>
											<div className="heading-1 m-t-lg-20"><h3 className="f-18">Performance</h3></div>
											<ul className="product_para-1">
												<li><span>Top Track Speed :</span>Nissan</li>
												<li><span>0 - 60 mph :</span>Civic</li>
											</ul>
											<div className="heading-1 m-t-lg-20"><h3 className="f-18">Transmission</h3></div>
											<ul className="product_para-1">
												<li><span>Manual Gearbox :</span>6-speed with dual-mass flywheel</li>
											</ul>
											<div className="heading-1 m-t-lg-20"><h3 className="f-18">Fuel consumption</h3></div>
											<ul className="product_para-1">
												<li><span>City (estimate) :</span>Nissan</li>
												<li><span>Highway (estimate) :</span>Civic</li>
											</ul>
											<div className="heading-1 m-t-lg-20"><h3 className="f-18">Body</h3></div>
											<ul className="product_para-1">
												<li><span>Length :</span>Nissan</li>
												<li><span>Width :</span>Civic</li>
												<li><span>Height :</span>Sedan</li>
												<li><span>Wheelbase :</span>Mileage</li>
												<li><span>Maximum payload :</span>3.4L Mid-Engine V6</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="col-sm-12 col-md-4 col-lg-4">
									<div className="heading-1">
										<h3><i className="fa fa-info-circle"></i>Dealer Infomation</h3>
									</div>
									<a href="" className="bg-gray-fa bg1-gray-2 p-lg-15 text-center m-b-lg-20 display-block">
										<img src="../images/logo_w.png" alt=""/>
									</a>
									<h4 className="p-t-lg-0"><a href="">UK car supermarket</a></h4>
									<div className="clearfix"></div>
									<ul className="list-default m-t-lg-0">
										<li><i className="fa fa-user-circle-o m-r-lg-10  icon"></i>Mr. Janhn</li>
										<li><i className="fa fa-phone m-r-lg-10 icon"></i>0123-456-789</li>
										<li><i className="fa fa-envelope-o m-r-lg-10 icon"></i>Sale@cardealer.com</li>
										<li><i className="fa fa-home m-r-lg-10 icon"></i>123 Holding, Busan, Korea</li>
										<li className="view-map"><i className="fa fa-map-marker m-r-lg-10 icon"></i>Click to view Map</li>
										<li><a href="http://www.autotrader.com/"><i className="fa fa-globe m-r-lg-10 icon"></i>http://www.autotrader.com</a></li>
									</ul>
									<div className="m-t-lg-30">
										<div className="heading-1">
											<h3><i className="fa fa-envelope-o"></i>Send messenge</h3>
										</div>
										<div className="bg-gray-fa bg1-gray-2 p-lg-20">
											<form>
												<div className="form-group">
													<input type="email" className="form-control form-item" placeholder="Email"/>
												</div>
												<div className="form-group">
													<input type="text" className="form-control form-item" placeholder="Phone"/>
												</div>
												<div className="form-group">
													<input type="text" className="form-control form-item" placeholder="Adress"/>
												</div>
												<textarea className="form-control form-item h-200 m-b-lg-10" placeholder="Content" rows="3"></textarea>
												<button type="submit" className="ht-btn ht-btn-default">Send</button>
											</form>
										</div>
									</div>
								</div>
							</div>	
							<div className="product product-grid product-grid-2 car m-b-lg-15">
								<div className="heading">
									<h3>Other Cars</h3>
								</div>
								<div className="row">
									<div className="col-sm-12 col-md-6 col-lg-4">
										<div className="product-item hover-img">
											<a href="" className="product-img">
												<img src="../images/b-img-13.jpg" alt=""/>
											</a>	
											<div className="product-caption">
												<h4 className="product-name">
													<a href="">HYUNDAI ELANTRA 2016 NEW MODEL / <b>New</b></a><span className="f-18"> $201,000</span>
												</h4>
											</div>
											<ul className="absolute-caption">
												<li><i className="fa fa-clock-o"></i>2016</li>
												<li><i className="fa fa-car"></i>Auto</li>
												<li><i className="fa fa-road"></i>Gas</li>
											</ul>
										</div>
									</div>
									<div className="col-sm-12 col-md-6 col-lg-4">
										<div className="product-item hover-img">
											<a href="" className="product-img">
												<img src="../images/b-img-1.jpg" alt=""/>
											</a>	
											<div className="product-caption">
												<h4 className="product-name">
													<a href="">HYUNDAI ELANTRA 2016 NEW MODEL / <b>New</b></a><span className="f-18"> $201,000</span>
												</h4>
											</div>
											<ul className="absolute-caption">
												<li><i className="fa fa-clock-o"></i>2016</li>
												<li><i className="fa fa-car"></i>Auto</li>
												<li><i className="fa fa-road"></i>Gas</li>
											</ul>
										</div>
									</div>
									<div className="col-sm-12 col-md-6 col-lg-4">
										<div className="product-item hover-img">
											<a href="" className="product-img">
												<img src="../images/b-img-2.jpg" alt=""/>
											</a>	
											<div className="product-caption">
												<h4 className="product-name">
													<a href="">HYUNDAI ELANTRA 2016 NEW MODEL / <b>New</b></a><span className="f-18"> $201,000</span>
												</h4>
											</div>
											<ul className="absolute-caption">
												<li><i className="fa fa-clock-o"></i>2016</li>
												<li><i className="fa fa-car"></i>Auto</li>
												<li><i className="fa fa-road"></i>Gas</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</section>
					</div>
        );
    }
};
function mapStateToProps({selectedCar}) {
    return { selectedCar };
}

export default connect(mapStateToProps)(withRouter(CarDetails)) ;


