import React from "react";

const Footer = () => {
  return (
   <>
   <footer className="position-relative footer-section z_index1">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-4">
                    <div className="footer-contact-detail">
                        <div className="footer-logo"><img alt="Footer Logo" height="47" src="/assets/image/Qmax.jpg" width="197"/></div>
                        <div className="footer-contact">
                            <div className="single-details overflow-hidden time-widget">
                                <p className="m-0"><span className="desc-widget-title">Monday - Friday:</span></p>
                                    <p><span className="text-color fw-semibold desc-time">10:00 AM to 07:00 PM</span></p>
                            </div>
                            <div className="footer-social mb-3">
                                <ul className="m-0 p-0">
                                    <li className="d-inline-block"><a href="https://www.facebook.com/ezulixsoftware" rel="noopener noreferrer" target="_blank" title="Facebook Icon"><i className="ezulix-facebook"></i></a></li>
                                    <li className="d-inline-block"><a href="https://www.instagram.com/ezulix/" rel="noopener noreferrer" target="_blank" title="Instagram Icon"><i className="ezulix-instagram"></i></a></li>
                                    <li className="d-inline-block"><a href="https://www.linkedin.com/company/ezulix-software-private-limited/" rel="noopener noreferrer" target="_blank" title="Linkedin Icon"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                    <li className="d-inline-block twiter-icon"><a href="http://www.twitter.com/ezulix_software" rel="noopener noreferrer" target="_blank" title="Twitter Icon"><i className="fa-brands fa-x-twitter"></i></a></li>
                                    <li className="d-inline-block"><a href="https://in.pinterest.com/ezulix" rel="noopener noreferrer" target="_blank" title="Pintrest Icon"><i className="fa-brands fa-pinterest-p"></i></a></li>
                                    <li className="d-inline-block"><a href="https://www.youtube.com/@ezulixsoftware4252" rel="noopener noreferrer" target="_blank" title="Youtube Icon"><i style={{fontSize: "20px"}} className="ezulix-youtube-play"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-8">
                    <div className="row footer-links-row">
                        <div className="col-md-4 col-lg-4 col-sm-6">
                            <div className="footer-widget">
                                <div className="footer-widget-block">
                                    <div className="footer-widget-title">
                                        <h5 className="position-relative">Company</h5>
                                    </div>
                                    <div className="widget-inner-list">
                                        <ul className="p-0">
                                            <li><a href="/aboutus">About Qmax Software Solutions</a></li>
                                            <li><a href="/portfolio">Portfolio</a></li>
                                            <li><a href="/aboutus#our-team">Our Team</a></li>
                                            <li><a href="/our-partner">Our Partners</a></li>
                                            <li><a href="/contactus">Contact Us</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-6">
                            <div className="footer-widget">
                                <div className="footer-widget-block">
                                    <div className="footer-widget-title">
                                        <h5 className="position-relative">Services</h5>
                                    </div>
                                    <div className="widget-inner-list">
                                        <ul className="p-0">
                                            <li><a href="/web-development-company">Design & Development</a></li>
                                            <li><a href="/taxi-booking-software-development">Solution</a></li>
                                            <li><a href="/technology">Technology</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-6">
                            <div className="footer-widget">
                                <div className="footer-widget-block">
                                    <div className="footer-widget-title">
                                        <h5 className="position-relative">Our Links</h5>
                                    </div>
                                    <div className="widget-inner-list">
                                        <ul className="p-0">
                                            <li><a href="/career">Careers</a></li>
                                            <li><a href="/blog">Blogs</a></li>
                                            <li><a href="/press-event">Press & Events</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="position-relative row mt-3">
                <div className="col-sm-12 col-xl-3 col-lg-6 col-md-6 mt-3 contact-first-location ">
                    <div className="location-side position-relative">
                        <figure className="office-country">
                            <img src="/assets/image/icons/jaipur.webp" width="200px" alt="jaipur city" loading="lazy"/>
                        </figure>
                        <div className="country-title mb-2"><span className="desc-widget-title">Headquater: Jaipur (India)</span></div>
                        <div className="address-area single-blog">
                            <p className="m-0"><span className="text-black d-block desc-add">2-Shiv Vihar-A,New Sanganer Rd, Mansarover, Jaipur, Rajasthan 302020</span></p>
                        </div>
                        <div className="single-details contact-widget"><a href="tel:+91:9266730534" className="text-black d-block desc-contact"><i className="fa-solid fa-phone"></i> +91 9266730534</a></div>
                        <div className="mt-2">
                            <a href="https://ezulix.com" className="visit-website-link">Visit Website <i><img src="/assets/image/icons/double-arrow.webp" width="12px" alt="arrow"/></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-xl-3 col-lg-6 col-md-6 mt-3  -lg-none">
                    <div className="location-side position-relative">
                        <figure className="office-country">
                            <img src="/assets/image/icons/gurgaon.webp" width="200px" alt="gurgaon city" loading="lazy"/>
                        </figure>
                        <div className="country-title mb-2"><span className="desc-widget-title">Gurugram Office</span></div>
                        <div className="address-area single-blog">
                            <p className="m-0"><span className="text-black d-block desc-add">1701A, Magnum Global Park, Golf Course Ext Rd, Sector 58, Gurugram, Haryana 122011</span></p>
                        </div>
                        <div className="single-details contact-widget"><a href="tel:+91:9266730534" className="text-black d-block desc-contact"><i className="fa-solid fa-phone"></i> +91 9266730534</a></div>
                        <div className="mt-2">
                            <a href="https://ezulix.com" className="visit-website-link">Visit Website <i><img src="/assets/image/icons/double-arrow.webp" width="12px" alt="arrow"/></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-xl-3 col-lg-6 col-md-6 mt-3 ">
                    <div className="location-side position-relative">
                        <figure className="office-country">
                            <img src="/assets/image/icons/uk.webp" width="200px" alt="uk city" loading="lazy"/>
                        </figure>
                        <div className="country-title mb-2"><span className="desc-widget-title">United Kingdom (UK) Office</span></div>
                        <div className="address-area single-blog">
                            <p className="m-0"><span className="text-black d-block desc-add">71-75 Shelton Street, Covent Garden, London, United Kingdom, WC2H 9JQ</span></p>
                        </div>
                        <div className="single-details contact-widget"> <a href="tel:+447956982975" className="text-black d-block desc-contact"><i className="fa-solid fa-phone"></i> +44 7956982975</a></div>
                        <div className="mt-2">
                            <a href="https://ezulix.co.uk" className="visit-website-link">Visit Website <i><img src="/assets/image/icons/double-arrow.webp" width="12px" alt="arrow"/></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-xl-3 col-lg-6 col-md-6 mt-3">
                    <div className=" position-relative">
                        <figure className="office-country">
                            <img src="/assets/image/icons/uae.webp" width="200px" height="80px" alt="uae city" loading="lazy"/>
                        </figure>
                        <div className="country-title mb-2"><span className="desc-widget-title">United Arab Emirates (UAE) Office</span></div>
                        <div className="address-area single-blog">
                            <p className="m-0"><span className="text-black d-block desc-add">Office 1105 A, Trio Tower - API - Al Barsha - Al Barsha 1 - Dubai - United Arab Emirates</span></p>
                        </div>
                        <div className="single-details contact-widget"><a href="tel:+971585278456" className="text-black d-block desc-contact"><i className="fa-solid fa-phone"></i> +971 525410937</a></div>
                        <div className="mt-2">
                            <a href="https://ezulix.com/ae/software-development-company-in-dubai" className="visit-website-link">Visit Website <i><img src="/assets/image/icons/double-arrow.webp" width="12px" alt="arrow"/></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="position-relative row copyright">
                 <div className="row py-4 mt-4">
                <div className="col-lg-4">
                    <div className="footer-widget location_link">
                        <div className="footer-widget-block">
                            <div className="widget-inner-list">
                                <ul className="p-0">
                                    <li><a href="https://ezulix.com/website-development-company-in-delhi">Website Development Company in Delhi</a></li>
                                    <li><a href="https://ezulix.com/website-development-company-in-pune">Website Development Company in Pune</a></li>
                                    <li><a href="https://ezulix.com/website-development-company-in-jaipur">Website Development Company in Jaipur</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="footer-widget location_link">
                        <div className="footer-widget-block">
                            <div className="widget-inner-list">
                                <ul className="p-0">
                                    <li><a href="https://ezulix.com/website-development-company-in-mumbai">Website Development Company in Mumbai</a></li>
                                    <li><a href="https://ezulix.com/website-development-company-in-gurugram">Website Development Company in Gurugram</a></li>
                                    <li><a href="https://ezulix.com/website-development-company-in-hyderabad">Website Development Company in Hyderabad</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="footer-widget">
                        <div className="footer-widget-block">
                            <div className="widget-inner-list">
                                <ul className="p-0">
                                    <li><a href="https://ezulix.com/website-development-company-in-chennai">Website Development Company in Chennai</a></li>
                                    <li><a href="https://ezulix.com/website-development-company-in-bangalore">Website Development Company in Bangalore</a></li>
                                    <li><a href="https://ezulix.com/website-development-company-in-chandigarh">Website Development Company in Chandigarh</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div> 
                <div className="col-sm-12 col-md-12 col-lg-5">
                    <div className="position-relative">
                        <p className="text-black m-0 text-left">Copyright © 2015-2026 Ezulix. All Right Reserved</p>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-7">
                    <div className="position-relative bottmlnk-list"><a href="https://ezulix.com/refund-and-cancellation" className="text-black">Refund and Cancellation</a><a className="text-black" href="https://ezulix.com/terms-of-use">Terms of Use</a><a className="text-black" href="https://ezulix.com/privacy-policy">Privacy Policy</a></div>
                </div>
            </div>
        </div>
    </footer>

    {/* <!-- Privacy Popup --> */}
    <div id="privacy-popup" className="privacy-popup">
        <div className="privacy-box">
            <h2>By clicking "Accept" or continuing to use Our site, you agree to our Website's <a href="https://ezulix.com/privacy-policy" style={{color: "#fff", textDecoration: "underline"}}>Privacy Policy</a></h2>
            <button id="accept-btn"> Accept</button>
        </div>
    </div>
   
   </>
  );
};

export default Footer;
