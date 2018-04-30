import React from 'react';


const ContactUs = () =>{

    return(
        <div className="wrap-body-inner">
        <div className="hidden-xs">
            <div className="row">
                <div className="col-lg-6">
                    <ul className="ht-breadcrumb pull-left">
                        <li className="home-act"><a href=" "><i className="fa fa-home"></i></a></li>
                        <li className="active">Contact</li>
                    </ul>
                </div>
            </div>
        </div>
        <section className="block-contact m-t-lg-30 m-t-xs-0 p-b-lg-50">
            <div className="">
                <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-6 m-b-xs-30">
                        <div className="heading">
                            <h3>Contact info</h3>
                        </div>
                        <div className="contact-info p-lg-30 p-xs-15 bg-gray-fa bg1-gray-2">
                            <div className="content">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod temp incidunt ut labore et dolore magna aliqua uat enim ad minim veniama quis nostrud ullamco lab oris nisi ut aliqu.</p>
                                <ul className="list-default">
                                    <li><i className="fa fa-clock-o"></i>123 Holding, Busan, Korea</li>
                                    <li><i className="fa fa-phone"></i>0123-456-789</li>
                                    <li><i className="fa fa-envelope-o"></i>Support@htmlcs.com</li>
                                    <li><i className="fa fa-globe"></i>www.htmlcs.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <div className="heading">
                            <h3>Contact Form</h3>
                        </div>
                        <div className="contact-form p-lg-30 p-xs-15 bg-gray-fa bg1-gray-2">
                            <form>
                                <div className="form-group">
                                    <input type="email" className="form-control form-item" placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control form-item" placeholder="Phone"/>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control form-item" placeholder="Adress"/>
                                </div>
                                <textarea className="form-control form-item h-200 m-b-lg-10" placeholder="Content" rows="3"></textarea>
                                <button type="submit" className="ht-btn ht-btn-default">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    );

};


export default ContactUs;