import React from 'react';

const  Sell = () => {
    return(
        <div className="wrap-body-inner">
            <div className="hidden-xs">
                <div className="row">
                    <div className="col-lg-6">
                        <ul className="ht-breadcrumb pull-left">
                        <li className="home-act"><a  ><i className="fa fa-home"></i></a></li>
                        <li className="home-act"><a  >Car</a></li>
                        <li className="active">Sell a car</li>
                        </ul>
                    </div>
                </div>
            </div>
            <section className="m-t-lg-30 m-t-xs-0 m-b-lg-50">
                <div>
                    <div className="row">
                        <div className="col-md-9 col-lg-9">
                            <div className="bg-gray-f5 bg1-gray-15 p-lg-30 p-xs-15">
                                <div className="m-b-lg-10">
                                    <div className="heading-1">
                                        <h3>Car Infomation</h3>
                                    </div>
                                    <p className="m-b-lg-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit et dolore magna aliqua</p>
                                    <div className="row">
                                        <div className="col-sm-12 col-md-12 col-lg-12">
                                            <div className="form-group">
                                                <input type="email" className="form-control form-item" placeholder="Title"/>
                                                <p className="color1-8 m-t-lg-5 f-14">Maximum 100 characters</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-6">
                                            <div className="form-group">
                                                <input type="email" className="form-control form-item" placeholder="Price"/>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-6">
                                            <div className="form-group">
                                                <input type="email" className="form-control form-item" placeholder="Price old"/>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-12">
                                            <div className="form-group">
                                                <textarea className="form-control h-200 form-item m-b-lg-5" placeholder="Description" rows="3"></textarea>
                                                <p className="color1-8 m-t-lg-5 f-14">Maximum 500 characters</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="m-b-lg-40">
                                    <div className="heading-1">
                                        <h3>Upload Images</h3>
                                    </div>
                                    <p className="m-b-lg-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit et dolore magna aliqua</p>
                                    <div className="row">
                                        <div className="col-sm-4 col-md-4 col-lg-3 m-b-lg-20 text-left">
                                            <img src="images/b-img-1.jpg" alt=""/>
                                            <label htmlFor="file-upload" className="placeholder-img choose-file-upload ">
                                                <i className="fa fa-link m-r-lg-5"></i>Choose file
                                                <input id="file-upload" type="file" className="display-none"/>
                                            </label>
                                            <i className="remove-img fa fa-remove"></i>
                                        </div>
                                        <div className="col-sm-4 col-md-4 col-lg-3 m-b-lg-20 text-left">
                                            <img src="images/b-img-1.jpg" alt="" />
                                            <label htmlFor="file-upload1" className="placeholder-img choose-file-upload ">
                                                <i className="fa fa-link m-r-lg-5"></i>Choose file
                                                <input id="file-upload1" type="file" className="display-none"/>
                                            </label>
                                            <i className="remove-img fa fa-remove"></i>
                                        </div>
                                        <div className="col-sm-4 col-md-4 col-lg-3 m-b-lg-20 text-left">
                                            <img src="images/b-img-1.jpg" alt="" />
                                            <label htmlFor="file-upload2" className="placeholder-img choose-file-upload ">
                                                <i className="fa fa-link m-r-lg-5"></i>Choose file
                                                <input id="file-upload2" type="file" className="display-none"/>
                                            </label>
                                            <i className="remove-img fa fa-remove"></i>
                                        </div>
                                        <div className="col-sm-4 col-md-4 col-lg-3 m-b-lg-20 text-left">
                                            <img src="images/b-img-1.jpg" alt="" />
                                            <label htmlFor="file-upload3" className="placeholder-img choose-file-upload ">
                                                <i className="fa fa-link m-r-lg-5"></i>Choose file
                                                <input id="file-upload3" type="file" className="display-none"/>
                                            </label>
                                            <i className="remove-img fa fa-remove"></i>
                                        </div>
                                    </div>
                                    <a  className="ht-btn ht-btn-default"><i className="fa fa-plus"></i>Add image</a>
                                </div>
                                <div className="m-b-lg-20">
                                    <div className="heading-1">
                                        <h3>Car Details </h3>
                                    </div>
                                    <p className="m-b-lg-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit et dolore magna aliqua</p>
                                    <div className="row">
                                        <div className="col-sm-6 col-md-4 col-lg-4 m-b-lg-20">
                                            <div className="select-wrapper">
                                                <div className="dropdown">
                                                    <button className="dropdown-toggle form-item" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                                        Condition
                                                    </button>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                                        <li>New Car</li>
                                                        <li>Used Cars</li>
                                                        <li>Car Rental</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-4 m-b-lg-20">
                                            <div className="select-wrapper">
                                                <div className="dropdown">
                                                    <button className="dropdown-toggle form-item" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                                        Make
                                                    </button>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                                        <li>Ford</li>
                                                        <li>Huyndai</li>
                                                        <li>Nissan</li>
                                                        <li>Chevrolet</li>
                                                        <li>Kia</li>
                                                        <li>Mazda</li>
                                                        <li>BMW</li>
                                                        <li>Toyota</li>
                                                        <li>Mercedes Benz</li>
                                                        <li>All</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-4 m-b-lg-20">
                                            <div className="select-wrapper">
                                                <div className="dropdown">
                                                    <button className="dropdown-toggle form-item" type="button" id="dropdownMenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                                        Model
                                                    </button>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu3">
                                                        <li>Versa</li>
                                                        <li>Cruze</li>
                                                        <li>Malibu</li>
                                                        <li>Civic</li>
                                                        <li>Genesis</li>
                                                        <li>Pilot</li>
                                                        <li>Optima</li>
                                                        <li>CX-5</li>
                                                        <li>3 Serie</li>
                                                        <li>Atima</li>
                                                        <li>All</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-4 m-b-lg-20">
                                            <div className="select-wrapper">
                                                <div className="dropdown">
                                                    <button className="dropdown-toggle form-item" type="button" id="dropdownMenu4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                                        Year
                                                    </button>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu4">
                                                        <li>2016</li>
                                                        <li>2015</li>
                                                        <li>2014</li>
                                                        <li>2012</li>
                                                        <li>All</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-4 m-b-lg-20">
                                            <div className="select-wrapper">
                                                <div className="dropdown">
                                                    <button className="dropdown-toggle form-item" type="button" id="dropdownMenu5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                                        Body
                                                    </button>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu5">
                                                        <li>Body</li>
                                                        <li>Sedan</li>
                                                        <li>SUV</li>
                                                        <li>Truck</li>
                                                        <li>Coupe</li>
                                                        <li>Minivan</li>
                                                        <li>Compact</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-4 m-b-lg-20">
                                            <div className="select-wrapper">
                                                <div className="dropdown">
                                                    <button className="dropdown-toggle form-item" type="button" id="dropdownMenu6" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                                        Transition
                                                    </button>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu6">
                                                        <li>Automatic</li>
                                                        <li>Manual</li>
                                                        <li>Semi-automatic</li>
                                                        <li>All</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-4 m-b-lg-20">
                                            <div className="select-wrapper">
                                                <div className="dropdown">
                                                    <button className="dropdown-toggle form-item" type="button" id="dropdownMenu7" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                                        Fuel Type
                                                    </button>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu7">
                                                        <li>Hybrid</li>
                                                        <li>Gasoline</li>
                                                        <li>Electric</li>
                                                        <li>Diesel</li>
                                                        <li>Ethanol</li>
                                                        <li>All</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-4 m-b-lg-20">
                                            <div className="select-wrapper">
                                                <div className="dropdown">
                                                    <button className="dropdown-toggle form-item" type="button" id="dropdownMenu8" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                                        Engine
                                                    </button>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu8">
                                                        <li>Action</li>
                                                        <li>Another action</li>
                                                        <li>Something else here</li>
                                                        <li>Separated link</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-4 m-b-lg-20">
                                            <div className="select-wrapper">
                                                <div className="dropdown">
                                                    <button className="dropdown-toggle form-item" type="button" id="dropdownMenu9" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                                        Color
                                                    </button>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu9">
                                                        <li>Red</li>
                                                        <li>Gray</li>
                                                        <li>White</li>
                                                        <li>Black</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-4 m-b-lg-20">
                                            <div className="select-wrapper">
                                                <div className="dropdown">
                                                    <button className="dropdown-toggle form-item" type="button" id="dropdownMenu10" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                                        Door
                                                    </button>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu10">
                                                        <li>2</li>
                                                        <li>3</li>
                                                        <li>4</li>
                                                        <li>5</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-4 m-b-lg-20">
                                            <div className="select-wrapper">
                                                <div className="dropdown">
                                                    <button className="dropdown-toggle form-item" type="button" id="dropdownMenu11" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                                        Mileage
                                                    </button>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu11">
                                                        <li>0 - 1,000</li>
                                                        <li>1,000 - 10,000</li>
                                                        <li>10,000 - 20,000</li>
                                                        <li>20,000 - 30,000</li>
                                                        <li>30,000 - 40,000</li>
                                                        <li>40,000 - 50,000</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-4 m-b-lg-20">
                                            <div className="select-wrapper">
                                                <div className="dropdown">
                                                    <button className="dropdown-toggle form-item" type="button" id="dropdownMenu12" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                                        Warranty
                                                    </button>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu12">
                                                        <li>1 year</li>
                                                        <li>2 year</li>
                                                        <li>3 year</li>
                                                        <li>4 year</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="m-b-lg-30">
                                    <div className="heading-1">
                                        <h3>Features & Options</h3>
                                    </div>
                                    <p className="m-b-lg-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit et dolore magna aliqua</p>
                                    <div className="row">
                                        <div className="col-lg-4 text-left">
                                            <div className="checkbox">
                                                <input type="checkbox" value="" id="check0"/>
                                                <label htmlFor="check0" className="fa fa-check"></label>
                                                Auxiliary heating
                                            </div>
                                        </div>
                                        <div className="col-lg-4 text-left">
                                            <div className="checkbox">
                                                <input type="checkbox" value="" id="check1"/>
                                                <label htmlFor="check1" className="fa fa-check"></label>
                                                Head-up display
                                            </div>
                                        </div>
                                        <div className="col-lg-4 text-left">
                                            <div className="checkbox">
                                                <input type="checkbox" value="" id="check2"/>
                                                <label htmlFor="check2" className="fa fa-check"></label>
                                                Alloy wheels
                                            </div>
                                        </div>
                                        <div className="col-lg-4 text-left">
                                            <div className="checkbox">
                                                <input type="checkbox" value="" id="check3"/>
                                                <label htmlFor="check3" className="fa fa-check"></label>
                                                MP3 interface
                                            </div>
                                        </div>
                                        <div className="col-lg-4 text-left">
                                            <div className="checkbox">
                                                <input type="checkbox" value="" id="check4"/>
                                                <label htmlFor="check4" className="fa fa-check"></label>
                                                Bluetooth
                                            </div>
                                        </div>
                                        <div className="col-lg-4 text-left">
                                            <div className="checkbox">
                                                <input type="checkbox" value="" id="check5"/>
                                                <label htmlFor="check5" className="fa fa-check"></label>
                                                MP3 interface
                                            </div>
                                        </div>
                                        <div className="col-lg-4 text-left">
                                            <div className="checkbox">
                                                <input type="checkbox" value="" id="check6"/>
                                                <label htmlFor="check6" className="fa fa-check"></label>
                                                Electric side mirror
                                            </div>
                                        </div>
                                        <div className="col-lg-4 text-left">
                                            <div className="checkbox">
                                                <input type="checkbox" value="" id="check7"/>
                                                <label htmlFor="check7" className="fa fa-check"></label>
                                                Navigation system
                                            </div>
                                        </div>
                                        <div className="col-lg-4 text-left">
                                            <div className="checkbox">
                                                <input type="checkbox" value="" id="check8"/>
                                                <label htmlFor="check8" className="fa fa-check"></label>
                                                CD player
                                            </div>
                                        </div>
                                        <div className="col-lg-4 text-left">
                                            <div className="checkbox">
                                                <input type="checkbox" value="" id="check9"/>
                                                <label htmlFor="check9" className="fa fa-check"></label>
                                                Navigation system
                                            </div>
                                        </div>
                                        <div className="col-lg-4 text-left">
                                            <div className="checkbox">
                                                <input type="checkbox" value="" id="check10"/>
                                                <label htmlFor="check10" className="fa fa-check"></label>
                                                Sports package
                                            </div>
                                        </div>
                                        <div className="col-lg-4 text-left">
                                            <div className="checkbox">
                                                <input type="checkbox" value="" id="check11"/>
                                                <label htmlFor="check11" className="fa fa-check"></label>
                                                Panoramic roof
                                            </div>
                                        </div>
                                        <div className="col-lg-4 text-left">
                                            <div className="checkbox">
                                                <input type="checkbox" value="" id="check12"/>
                                                <label htmlFor="check12" className="fa fa-check"></label>
                                                Central locking
                                            </div>
                                        </div>
                                        <div className="col-lg-4 text-left">
                                            <div className="checkbox">
                                                <input type="checkbox" value="" id="check13"/>
                                                <label htmlFor="check13" className="fa fa-check"></label>
                                                Sports suspension
                                            </div>
                                        </div>
                                        <div className="col-lg-4 text-left">
                                            <div className="checkbox">
                                                <input type="checkbox" value="" id="check14"/>
                                                <label htmlFor="check14" className="fa fa-check"></label>
                                                Parking sensors
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="m-b-lg-20">
                                    <div className="heading-1">
                                        <h3>TECHNICAL SPECIFICATIONS</h3>
                                    </div>
                                    <p className="m-b-lg-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit et dolore magna aliqua</p>
                                    <div className="row">
                                        <div className="col-lg-4 text-left">
                                            <div className="checkbox">
                                                <input type="checkbox" value="" id="check15"/>
                                                <label htmlFor="check15" className="fa fa-check"></label>
                                                Auxiliary heating
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="m-b-lg-20">
                                    <div className="heading-1">
                                        <h3>Contact Details</h3>
                                    </div>
                                    <p className="m-b-lg-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit et dolore magna aliqua</p>
                                    <form>
                                        <div className="row">
                                            <div className="col-md-6 col-lg-6">
                                                <div className="form-group">
                                                    <input type="email" className="form-control form-item" placeholder="Your Name"/>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-6">
                                                <div className="form-group">
                                                    <input type="email" className="form-control form-item" placeholder="Email"/>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-6">
                                                <div className="form-group">
                                                    <input type="email" className="form-control form-item" placeholder="Phone"/>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-6">
                                                <div className="form-group">
                                                    <input type="email" className="form-control form-item" placeholder="Address"/>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-6">
                                                <div className="form-group">
                                                    <input type="email" className="form-control form-item" placeholder="Website"/>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-6">
                                                <div className="form-group">
                                                    <input type="email" className="form-control form-item" placeholder="Other link"/>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-6">
                                                <div className="form-group">
                                                    <input type="email" className="form-control form-item" placeholder="Country"/>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-6">
                                                <div className="form-group">
                                                    <input type="email" className="form-control form-item" placeholder="City"/>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-6">
                                                <div className="form-group">
                                                    <input type="email" className="form-control form-item" placeholder="Location"/>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-6">
                                                <div className="form-group">
                                                    <input type="email" className="form-control form-item" placeholder="Location"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 m-t-lg-10"><button type="submit" className="ht-btn ht-btn-default">Go next process</button></div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="m-t-xs-30">
                                <div className="heading-1">
                                    <h3>Trouble Uploading?</h3>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                                </p>
                                <ul className="list-default">
                                    <li><a  ><i className="fa fa-angle-right"></i>Lorem ipsum dolor sit amet</a></li>
                                    <li><a  ><i className="fa fa-angle-right"></i>Lorem ipsum dolor sit amet</a></li>
                                    <li><a  ><i className="fa fa-angle-right"></i>Lorem ipsum dolor sit amet</a></li>
                                    <li><a  ><i className="fa fa-angle-right"></i>Lorem ipsum dolor sit amet</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );

};


export default Sell ;
