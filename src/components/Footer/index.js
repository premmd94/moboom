import './style.scss';
import paymentImg from '../../assets/images/payment-icon.jpg';
const Footer = () => {
    return (<footer className='footer'>
        <div className="container">
            <div className="row mb-5">
                <div className="col-md-7">
                    <div className='row'>
                        <div className="col-md-4">
                            <h4 className='mb-2 f-18 fw-600'>Company Info</h4>
                            {/* <h4>Help Support Customer Care Socials Sign Up We Accept</h4> */}
                            <ul className='list-unstyled'>
                                <li><a href='/#'>About</a></li>
                                <li><a href='/#'>Social Responsibility</a></li>
                                <li><a href='/#'>Affliate</a></li>
                                <li><a href='/#'>Fashion Blogger</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h4 className='mb-2 f-18 fw-600'>Help & Support</h4>
                            <ul className='list-unstyled'>
                                <li><a href='/#'>Shipping Info</a></li>
                                <li><a href='/#'>Returns</a></li>
                                <li><a href='/#'>How to order</a></li>
                                <li><a href='/#'>How to track</a></li>
                                <li><a href='/#'>Size chart</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h4 className='mb-2 f-18 fw-600'>Customer Care </h4>
                            <ul className='list-unstyled'>
                                <li><a href='/#'>Contact Us</a></li>
                                <li><a href='/#'>Payment</a></li>
                                <li> <a href='/#'>Bonus Point</a></li>
                                <li><a href='/#'>Notice</a></li>
                                <li><a href='/#'>About</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <h4 className='mb-2 f-18 fw-600'>Socials </h4>
                    <div className='row'>
                        <div className='col-8'>
                            <ul className='list-unstyled social-icons'>
                                <li>
                                    <a href='/#'><i className='fa fa-facebook'></i></a>
                                </li>
                                <li>
                                    <a href='/#'><i className='fa fa-twitter'></i></a>
                                </li>
                                <li>
                                    <a href='/#'><i className='fa fa-instagram'></i></a>
                                </li>
                                <li>
                                    <a href='/#'><i className='fa fa-linkedin'></i></a>
                                </li>
                            </ul>
                        </div>
                        <div className='col-4'>
                            <ul className='list-unstyled social-icons end'>
                                <li>
                                    <a href='/#'><i className='fa fa-facebook'></i></a>
                                </li>
                                <li>
                                    <a href='/#'><i className='fa fa-twitter'></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='row subscribe'>
                        <div className='col-md-12'>
                            <h4 className='mb-2 f-18 fw-600'> Sign Up </h4>
                        </div>
                        <div className='col-8'>
                            <input type='email' placeholder='Your Email' />
                        </div>
                        <div className='col-4'>
                            <button className='btn btn-primary btn-lg'>Subscribe</button>
                        </div>
                        <div className='col-md-12 mt-2'>
                            <h5 className='mb-2 fw-600 text-text2 f-16'> By Clicking the SUBSCRIBE button,you are agree to our <a href='/#'>Privacy & Cookie Policy</a> </h5>
                        </div>
                    </div>

                </div>
            </div>
            <div className="row ">
                <div className='col-md-6'>
                    <h4 className='mb-2 f-18 fw-600 text-text2'>2010-2022 All Rights Reserved </h4>
                    <ul className='list-inline second-part'>
                        <li><a href='/#'>Privacy Center</a></li>
                        <li><a href='/#'>Privacy & Cooking Policy</a></li>
                        <li><a href='/#'>Manage Cookies</a></li>
                        <li><a href='/#'>Terms & conditions</a></li>
                        <li><a href='/#'>Imprint</a></li>
                    </ul>
                </div>
                <div className='col-md-1'></div>
                <div className='col-md-5'>
                    <h4 className='mb-2 f-18 fw-600'>We Accept </h4>
                    <div className='img'>
                        <img className='img-fluid' src={paymentImg} />
                    </div>
                </div>
            </div>
        </div>
    </footer>);
}

export default Footer;