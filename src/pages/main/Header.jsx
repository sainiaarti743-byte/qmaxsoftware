import React,{useState} from "react";

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // Dropdowns toggle ke liye state
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleDropdown = (menuName) => {
        if (activeDropdown === menuName) {
            setActiveDropdown(null); // Agar pehle se open hai toh close karein
        } else {
            setActiveDropdown(menuName); // Naya dropdown open karein
        }
    };
    return (
        <>

<div className="enquiry-panel" id="enquiryPanel">
        <div className="popup-form">
            <div id="closeEnquiryBtn"><i className="fa-solid fa-x"></i></div>
            <form action="" method="post" id="index_form" name="index_form">
                <input type="hidden" name="csrf_test_name" value="27fe01dca3be77a69a001c025314eb1e" /> <input type="hidden" name="source" value="Popup: Website Home Page"/>
                <div className="popup-title mb-3 fs-22 fw-semibold text-center text-white">Early-Stage Founder Offer – Save Up to 15% on Your Project</div>
                <div className="livedemo-form-filds">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="mc-field-group popup-fild position-relative">

                                <input type="text" name="name_contact" id="name_contact" placeholder="Your Name"/>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="mc-field-group popup-fild position-relative">

                                <input type="email" name="email_contact" id="email_contact" placeholder="Your Mail ID"/>
                            </div>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div className="form-group contact-form-fild multi-filds position-relative" style={{paddingBottom: 0}}>
                                <div className="mc-field-group popup-fild position-relative ">
                                    <div className="form-group">
                                        <select id="countrycode" name="countryPhone" className="form-control country-code-box countrycodeselect">
                                    </select>
                                    </div>
                                   
                                    <input type="text" name="phone_contact" id="phone_contact" placeholder="Your Phone Number" maxlength="10" oninput='this.value=this.value.replace(/[^0-9.+]/g,""),this.value=this.value.replace(/(\..*)\./g,"$1")'/>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-12">

                            <div className="mc-field-group popup-fild position-relative">
                                {/* <!-- <label for="email_contact" class="form-label mb-0">Select Service <span class="asterisk">*</span></label> --> */}
                                <select type="text" id="service" name="service" className="form-control input-fild onload-select-menu" aria-label="Select Your Service" placeholder="Select Your Service" required>
                                <option disabled selected className="placeholder" value="">Select Your Service </option>
                                <option value="Software Development">Software Development</option>
                                <option value="Custom Web Development">Custom Web Development</option>
                                <option value="Web Design">Web Design</option>
                                <option value="Logo & Graphic Designing">Logo & Graphic Designing</option>
                                <option value="Digitel Marketing">Digitel Marketing</option>
                                <option value="Mobile App Development">Mobile App Development</option>
                                <option value="On Demand App Development">On Demand App Development</option>
                                <option value="AI ML Development">AI ML Development </option>
                                <option value="other">Others </option>
                                {/* <!-- <option value="Game App Development">Game App Development </option> --> */}
                                {/* <!-- <option value="Fantasy App Development">Fantasy App Development </option> --> */}
                            </select>
                            </div>

                        </div>
                        <div className="col-lg-12">
                            <div className="mc-field-group popup-fild position-relative">

                                <textarea type="message" id="message_contact" name="message_contact" minlength="40" className="form-control" placeholder="Tell us about your project..."></textarea>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="row align-items-center ">
                                <div className="col-lg-12">
                                    <div className="mc-field-group popup-fild position-relative">
                                        <div className="btn-box btn-gradistion text-center">
                                            <div className="btn-box btn-gradistion pt-2 text-center"><button type="submit" className="popup-submit-btn contact-form-submit" id="popUpBtn" aria-label="submit">Send Your Query</button></div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="col-lg-12 text-center">
                            <div className="form-footer">
                                <div className="footer-social-icon d-flex align-items-center justify-content-center" style={{ gap: "20px" }}>
                                    <a href="https://www.instagram.com/ezulix/" aria-label="Visit Ezulix Instagram"><i className="fa-brands fa-instagram"></i></a>
                                    <a href="https://www.linkedin.com/company/ezulix-software-private-limited/" aria-label="Visit Ezulix Linkedin"><i className="fa-brands fa-linkedin-in"></i></a>
                                    <a href="https://www.facebook.com/ezulixsoftware" aria-label="Visit Ezulix Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                                    <a href="https://www.youtube.com/@ezulixsoftware4252" aria-label="Visit Ezulix youtube"><i className="fa-brands fa-youtube"></i></a>
                                    <a href="http://www.twitter.com/ezulix_software" aria-label="Visit Ezulix Twitter"><i className="fa-brands fa-x-twitter"></i></a>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </form>


        </div>
        <button href="javascript:void(0);" id="enquiryTab" class="enquiry-button enquiry-tab desktop-view-btn">
        <span> Save Up to 15% <i id="enquiryTabArrow" class="fa-solid fa-arrow-up"></i></span>
    </button>
    </div>
    <div className="popup-overlay" id="popup">
        <div className="popup-box">
            <div className="popup-close" onclick="closePopup()">×</div>
            <div className="popup-body">
                <div className="expert-card" id="expertcard-form">
                    <h5>Describe Your App Idea With an Expert</h5>
                    <form className="common-enquiry-form mb-0" data-source="App Expert Form" name="app-expert-form" id="app-expert-form">
                        <input type="hidden" name="csrf_test_name" value="27fe01dca3be77a69a001c025314eb1e" />
                        <div className="container">
                            <div className="row g-3">
                                <div className="col-md-6 sep-block">
                                    <label for="name">Full Name </label>
                                    <input type="text" className="form-control" id="name" name="name" placeholder="Your Name "/>
                                </div>
                                <div className="col-md-6 sep-block">

                                    <label for="email">Email Id</label>
                                    <input type="email" className="form-control" id="email" name="email" placeholder="Your Email ID"/>

                                </div>
                                <div className="col-md-6 sep-block">


                                    <label for="phone">Phone Number </label>
                                    <input type="number" className="form-control" id="phone" name="phone" inputmode="numeric" placeholder="Your Phone Number "/>

                                </div>
                                <div className="col-md-6 sep-block">

                                    <label for="application_type">Application Type </label>
                                    <select className="form-select" id="application_type" name="application_type">
                                    <option value="Taxi Booking App">Taxi Booking App</option>
                                    <option value="E-commerce App">E-commerce App</option>
                                    <option value="Food Delivery App">Food Delivery App</option>
                                    <option value="Dating App">Dating App</option>
                                    <option value="Banking App">Banking App</option>
                                    <option value="Telemedicine App">Telemedicine App</option>
                                    <option value="Professional Hiring App">Professional Hiring App</option>
                                    <option value="E-Learning App">E-Learning App</option>
                                    <option value="Other">Other</option>
                                </select>


                                </div>
                                <div className="col-12 sep-block">


                                    <label for="message">Message</label>
                                    <textarea className="form-control" rows="4" id="message" name="message" minlength="100" placeholder="Tell us about your project..."></textarea>

                                </div>
                                <div className=" sep-block"><label for="schedule-meeting" style={{fontWeight: 600}}>Schedule Meeting </label></div>
                                <div className="col-md-6 mt-0 sep-block">

                                    <label for="meeting_date">Date </label>
                                    <input type="date" className="form-control w-100" name="meeting_date" id="meetingDate" placeholder="Select Date"/>


                                </div>
                                <div className="col-md-6 mt-0 sep-block">

                                    <label for="meeting_time">Time </label>
                                    <input type="time" className="form-control w-100" name="meeting_time" id="meetingTime" placeholder="Select Time"/>


                                </div>
                                <div className="col-12">
                                    <button type="submit" className="form-submit-btn btn btn-expert w-100">
                                    Get Free Consultation
                                </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    </div>

    {/* <!-- 2026 offer popup start here --> */}
    <div id="promoPopup">
        <div className="popup-content">
            <span className="close-btn">&times;</span>
            <img src="/assets/image/offerZone/2026-offer.webp" alt="Promo Banner" id="promoOffer" />
        </div>
    </div>
    {/* <!-- 2026 offer popup end here --> */}








<div id="popupOverlay" class="bg_overlay"></div>
            <div className="fixed-btn">
                <button href="javascript:void(0);" id="enquiryTab1" className="enquiry-button enquiry-tab mobile-view-btn">
                    <span> <i className="fa-regular fa-message"></i></span>
                </button>
                <a href="https://api.whatsapp.com/send?phone=917230086664" rel="noopener" className="whatsapp-button" aria-label="WhatsApp chat (opens in new tab)" width="60" height="60" target="_blank" style={{ position: "fixed" }}>
                    <img src="/assets/image/header/whatsapp.webp" width="60" height="60" loading="lazy" alt="Whatsapp" />
                </a>
            </div>

            <header id="header" className="header-section">
                <div className="top-bar">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="location-wrapper">
                                    <div className="location-details">
                                        <a href="/" aria-label="Visit Ezulix India Website"> <img src="/assets/image/header/india-flag.png" width="20" height="20" alt="India Flag - Ezulix India" /> </a>
                                        <a style={{ borderBottom: "1px solid orangered" }}
                                            className="text-white" href="tel:+919266730534"> +91 9266730534</a>
                                    </div>
                                    <div className="location-details">
                                        <a href="/" aria-label="Visit Ezulix UK Website"><img src="/assets/image/header/uk-flg.png" width="20" height="20" alt="UK Flag - Ezulix India" /></a>
                                        <a style={{ borderBottom: "1px solid orangered" }}
                                            className="text-white" href="tel:+447956982975"> +44 7956982975</a>
                                    </div>
                                    <div className="location-details">
                                        <a href="/" aria-label="Visit Ezulix UAE Website"><img src="/assets/image/header/uae.png" width="20" height="2" alt="UAE Flag - Ezulix India" /></a> <a style={{ borderBottom: "1px solid orangered" }}
                                            className="text-white" href="tel:+971525410937"> +971 525410937</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container header-details">

                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="inner-header-wrap justify-content-between align-items-center d-flex w-100">
                                <div className="header-logo position-relative overflow-hidden" style={{ padding: "10px 0" }}>
                                    <a href="/">
                                        <img className="theme-brand-logo position-relative" src="/assets/image/logo.webp" width="197" height="47" alt="Brand Logo" />
                                    </a>
                                </div>
                                <nav className="main-menu menu-bar position-relative d-flex align-items-center" role="navigation">
                                    <nav className="navbar" id="navbar">
                                        <div className="navbar-container">
                                            <ul className="navbar-menu mb-0" id="navbarMenu">
                                                <li className="navbar-item dropdown">
                                                    <button className="navbar-link" data-testid="button-company" aria-haspopup="true" aria-expanded="false" aria-controls="company-dropdown">
                                                        Company
                                                        <svg className="chevron" width="16" height="16" viewBox="0 0 16 16" fill="none" role="presentation">
                                                            <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                                                        </svg>
                                                    </button>
                                                    <div className="dropdown-menu">
                                                        <a href="/aboutus" data-testid="link-about-us">
                                                            <svg className="menu-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" role="presentation">
                                                                <circle cx="12" cy="12" r="10" />
                                                                <path d="M12 16v-4M12 8h.01" />
                                                            </svg>
                                                            About Us
                                                        </a>

                                                        <a href="/blog" data-testid="link-blog">
                                                            <svg className="menu-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" role="presentation">
                                                                <path d="M12 19l7-7 3 3-7 7-3-3z" />
                                                                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                                                                <path d="M2 2l7.586 7.586" />
                                                                <circle cx="11" cy="11" r="2" />
                                                            </svg>
                                                            Blog
                                                        </a>
                                                        <a href="/awards" data-testid="link-our-team">
                                                            <svg className="menu-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" role="presentation">
                                                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                                                <circle cx="9" cy="7" r="4" />
                                                                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                                                            </svg>
                                                            Awards
                                                        </a>
                                                        <a href="/career" data-testid="link-careers">
                                                            <svg className="menu-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" role="presentation">
                                                                <rect x="2" y="7" width="20" height="14" rx="2" />
                                                                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                                                            </svg>
                                                            Careers
                                                        </a>
                                                        <a href="/press-event" data-testid="link-press-media">
                                                            <svg className="menu-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" role="presentation">
                                                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                                            </svg>
                                                            Press & Media
                                                        </a>
                                                    </div>
                                                </li>

                                                <li className="navbar-item dropdown">
                                                    <button className="navbar-link" data-testid="button-services" aria-haspopup="true" aria-expanded="false" aria-controls="services-dropdown">
                                                        Services
                                                        <svg className="chevron" width="16" height="16" viewBox="0 0 16 16" fill="none" role="presentation">
                                                            <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                                                        </svg>
                                                    </button>
                                                    <div className="dropdown-menu services-dropdown-menu">
                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <a href="https://ezulix.com/software-development-services" data-testid="link-custom-development">Software Development</a>
                                                                <a href="https://ezulix.com/web-development-company" data-testid="link-custom-development">Custom Web Development</a>
                                                                <a href="https://ezulix.com/web-design-company" data-testid="link-custom-development">Web Design</a>
                                                                <a href="https://ezulix.com/graphics-design-company" data-testid="link-cloud-solutions">Logo & Graphic Designing</a>
                                                                <a href="https://ezulix.com/digital-marketing-company" data-testid="link-ai-machine-learning">Digital Marketing</a>
                                                                <a href="https://ezulix.com/mobile-app-development-company" data-testid="link-consulting">Mobile App Development</a>
                                                                <a href="https://ezulix.com/android-app-development-company" data-testid="link-maintenance-support">Android App Development</a>

                                                            </div>
                                                            <div className="col-lg-6">
                                                                <a href="https://ezulix.com/ios-app-development-company" data-testid="link-maintenance-support">IOS App Development</a>
                                                                <a href="https://ezulix.com/on-demand-app-development" data-testid="link-maintenance-support">On-Demand App Development</a>
                                                                <a href="https://ezulix.com/ai-development-company" data-testid="ai-development-company">AI Product Development</a>
                                                                <a href="https://ezulix.com/saas-development-company" data-testid="saas-development-company">SaaS Development</a>
                                                                <a href="https://ezulix.com/next-gen-technology-development" data-testid="next-gen-technology-development">AI/ML, AR/VR Development</a>
                                                                <a href="https://ezulix.com/mvp-development-company" data-testid="link-maintenance-support">MVP Development</a>
                                                            </div>
                                                        </div>


                                                    </div>
                                                </li>
                                                <li className="navbar-item megamenu">
                                                    <button className="navbar-link" data-testid="button-solutions" aria-haspopup="true" aria-expanded="false" aria-controls="solutions-dropdown">
                                                        Solutions
                                                        <svg className="chevron" width="16" height="16" viewBox="0 0 16 16" fill="none" role="presentation">
                                                            <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                                                        </svg>
                                                    </button>
                                                    <div className="megamenu-container solution-container">
                                                 
                                                        <div className="megamenu-content">
                                                            <div className="megamenu-column">
                                                                <a href="https://ezulix.com/restaurant-management-system" className="d-block">Restaurant Management System</a>

                                                                <a href="https://ezulix.com/grocery-software" className="d-block">Grocery Software</a>

                                                                <a href="https://ezulix.com/school-management-software-system" className="d-block">School Management Software</a>

                                                                <a href="https://ezulix.com/hrms-software" className="d-block">HRMS Software</a>

                                                                <a href="https://ezulix.com/employee-tracking-system-software" className="d-block">Employee Tracking Software</a>

                                                                <a href="https://ezulix.com/online-education-software" className="d-block">Online Education Software</a>
                                                            </div>
                                                            <div className="megamenu-column">
                                                                <a href="https://ezulix.com/reseller-software" className="d-block">Reseller Software</a>

                                                                <a href="https://ezulix.com/learning-management-system" className="d-block">Learning Management Software</a>

                                                                <a href="https://ezulix.com/inventory-management-software" className="d-block">Inventory Management Software</a>

                                                                <a href="https://ezulix.com/food-delivery-software" className="d-block">Food Delivery Software</a>

                                                                <a href="https://ezulix.com/taxi-booking-software" className="d-block">Cab Booking Software</a>

                                                                <a href="https://ezulix.com/home-service-software" className="d-block">Home Service Software</a>

                                                            </div>
                                                            <div className="megamenu-column">




                                                                <a href="https://ezulix.com/crm-development-company" className="d-block">CRM Software</a>

                                                                <a href="https://ezulix.com/helpdesk-software" className="d-block">Helpdesk Software</a>



                                                                <a href="https://ezulix.com/ecommerce-software-development" className="d-block">eCommerce Portal</a>



                                                                <a href="https://ezulix.com/loan-management-software" className="d-block">Loan Module Software</a>
                                                                <a href="https://ezulix.com/travel-booking-software" className="d-block">Travel Booking Software</a>




                                                                <a href="https://ezulix.com/fintech-software-development" className="d-block">Fintech Software Development</a>



                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="navbar-item megamenu">
                                                    <button className="navbar-link" data-testid="button-solutions" aria-haspopup="true" aria-expanded="false" aria-controls="solutions-dropdown">
                                                        Industries
                                                        <svg className="chevron" width="16" height="16" role="presentation" viewBox="0 0 16 16" fill="none">
                                                            <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                                                        </svg>
                                                    </button>
                                                    <div className="megamenu-container industry-container">
                                                        <div className="row">
                                                            <div className="col-lg-4">
                                                                <div className="megamenu-column">
                                                                    <h3 className="megamenu-title">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(245, 134, 52, 1)" role="presentation" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                                            <circle cx="12" cy="12" r="3"></circle>
                                                                            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                                                                        </svg> FINTECH SOFTWARE
                                                                    </h3>
                                                                    <a href="https://ezulix.com/aadhaar-enabled-payment-system-aeps">
                                                                        AEPS Software </a>
                                                                    <a href="https://ezulix.com/mobile-recharge-software">

                                                                        Recharge Software</a>
                                                                    <a href="https://ezulix.com/bharat-bill-payment-system">

                                                                        BBPS Software</a>
                                                                    <a href="https://ezulix.com/money-transfer-software">
                                                                        DMT Software </a>
                                                                    <a href="https://ezulix.com/pancard-service">
                                                                        UTI (Pancard) Software </a>
                                                                    <a href="https://ezulix.com/travel-booking-software">
                                                                        Travel Software </a>

                                                                </div>
                                                            </div>
                                                            <div className="col-lg-8">
                                                                <div className="megamenu-column">
                                                                    <h3 className="megamenu-title">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(245, 134, 52, 1)" role="presentation" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                                            <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                                                                            <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                                                                            <line x1="6" y1="6" x2="6.01" y2="6"></line>
                                                                            <line x1="6" y1="18" x2="6.01" y2="18"></line>
                                                                        </svg> OTHER INDUSTRIES
                                                                    </h3>
                                                                    <div className="row">
                                                                        <div className="col-lg-6">
                                                                            <div className="megamenu-column">
                                                                                <a href="https://ezulix.com/neo-banking">Neo-Banking</a>

                                                                                <a href="https://ezulix.com/ecommerce-software-development">E-commerce</a>

                                                                                <a href="https://ezulix.com/healthcare">Healthcare</a>
                                                                                <a href="https://ezulix.com/reseller-software">Reselling</a>
                                                                                <a href="https://ezulix.com/home-service-software">Household</a>
                                                                                <a href="https://ezulix.com/education">Education</a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-6">
                                                                            <div className="megamenu-column">
                                                                                <a href="https://ezulix.com/travel-booking-software">Travel & Hospitality</a><a href="https://ezulix.com/fintech-software-development">Fintech </a>
                                                                                <a href="https://ezulix.com/real-estate">Real Estate</a>
                                                                                <a href="https://ezulix.com/employee-tracking-system-software">Corporate</a>
                                                                                <a href="https://ezulix.com/food-delivery-software">Food and Beverages</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>


                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="navbar-item megamenu">
                                                    <button className="navbar-link" data-testid="button-solutions" aria-haspopup="true" aria-expanded="false" aria-controls="solutions-dropdown">
                                                        Technology
                                                        <svg className="chevron" width="16" height="16" role="presentation" viewBox="0 0 16 16" fill="none">
                                                            <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                                                        </svg>
                                                    </button>
                                                    <div className="megamenu-container technology-megamenu">
                                                        <div className="megamenu-content">
                                                            <div className="megamenu-column">
                                                                <h3 className="megamenu-title">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(245, 134, 52, 1)" role="presentation" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                                        <line x1="22" y1="12" x2="2" y2="12"></line>
                                                                        <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                                                                        <line x1="6" y1="16" x2="6" y2="16"></line>
                                                                        <line x1="10" y1="16" x2="10" y2="16"></line>
                                                                    </svg> Back-End
                                                                </h3>
                                                                <a href="https://ezulix.com/net-development-company">ASP.NET</a>
                                                                <a href="https://ezulix.com/nodejs-development-company">Node JS</a>
                                                                <a href="https://ezulix.com/technology#tech_python">Python</a>
                                                                <a href="https://ezulix.com/php-development-company">PHP</a>
                                                                <a href="https://ezulix.com/technology#tech_java">Java</a>
                                                                <a href="https://ezulix.com/technology#tech_c_hash">C#</a>
                                                                <a href="https://ezulix.com/technology#tech_c_plus">C++</a>
                                                            </div>
                                                            <div className="megamenu-column">
                                                                <h3 className="megamenu-title">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" role="presentation" stroke="rgba(245, 134, 52, 1)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                                        <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path>
                                                                        <polygon points="12 15 17 21 7 21 12 15"></polygon>
                                                                    </svg> Front-End
                                                                </h3>
                                                                <a href="https://ezulix.com/technology#tech_html">HTML5</a>
                                                                <a href="https://ezulix.com/technology#tech_css_three">CSS3</a>
                                                                <a href="https://ezulix.com/technology#tech_javascript">JavaScript</a>
                                                                <a href="https://ezulix.com/technology#tech_reactjs">React JS</a>
                                                                <a href="https://ezulix.com/technology#tech_angularjs">Angular JS</a>
                                                            </div>
                                                            <div className="megamenu-column">
                                                                <h3 className="megamenu-title">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" role="presentation" stroke="rgba(245, 134, 52, 1)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                                        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                                                                        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                                                                        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                                                                    </svg> Database
                                                                </h3>
                                                                <a href="https://ezulix.com/technology#tech_mysql">MySQL</a>
                                                                <a href="https://ezulix.com/technology#tech_sql_server">SQL Server</a>

                                                                <h3 className="megamenu-title mt-3">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(245, 134, 52, 1)" role="presentation" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                                        <polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon>
                                                                    </svg> UI/UX & Design Tools
                                                                </h3>
                                                                <a href="https://ezulix.com/technology#tech_photoshop">Photoshop</a>
                                                                <a href="https://ezulix.com/technology#tech_figma">Figma</a>
                                                                <a href="https://ezulix.com/technology#tech_adobe_xd">Adobe XD</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="navbar-item megamenu">
                                                    <button className="navbar-link" data-testid="button-industries">
                                                        Industries
                                                        <svg className="chevron" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                            <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                                                        </svg>
                                                    </button>
                                                    <div className="megamenu-container industries">
                                                        <div className="megamenu-content">
                                                            <div className="megamenu-column">
                                                                <h3 className="megamenu-title">
                                                                    <svg className="title-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                                                                    </svg>
                                                                    Technology Sectors
                                                                </h3>
                                                                <a href="/industries/saas" data-testid="link-saas-software">SaaS & Software</a>
                                                                <a href="/industries/ecommerce" data-testid="link-e-commerce">E-commerce</a>
                                                                <a href="/industries/fintech" data-testid="link-fintech">FinTech</a>
                                                                <a href="/industries/healthtech" data-testid="link-healthtech">HealthTech</a>
                                                                <a href="/industries/edtech" data-testid="link-edtech">EdTech</a>
                                                                <a href="/industries/gaming" data-testid="link-gaming">Gaming</a>
                                                            </div>
                                                            <div className="megamenu-column">
                                                                <h3 className="megamenu-title">
                                                                    <svg className="title-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                                                        <polyline points="9 22 9 12 15 12 15 22" />
                                                                    </svg>
                                                                    Traditional Industries
                                                                </h3>
                                                                <a href="/industries/healthcare" data-testid="link-healthcare">Healthcare</a>
                                                                <a href="/industries/finance" data-testid="link-finance-banking">Finance & Banking</a>
                                                                <a href="/industries/manufacturing" data-testid="link-manufacturing">Manufacturing</a>
                                                                <a href="/industries/retail" data-testid="link-retail">Retail</a>
                                                                <a href="/industries/real-estate" data-testid="link-real-estate">Real Estate</a>
                                                                <a href="/industries/logistics" data-testid="link-logistics">Logistics</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li className="navbar-item">
                                                    <a href="https://ezulix.com/portfolio" className="navbar-link" data-testid="link-contact">Portfolio</a>
                                                </li>
                                                <li className="navbar-item">
                                                    <a href="https://ezulix.com/contactus" className="navbar-link" data-testid="link-contact">Contact</a>
                                                </li>
                                            </ul>
                                            <button className="mobile-toggle" id="mobileToggle" data-testid="button-mobile-menu-toggle">
                                                <span className="hamburger"></span>
                                            </button>
                                        </div>
                                    </nav>
                                    <div className="mobile-menu" id="mobileMenu">
                                        <button className="mobile-close-btn" id="mobileCloseBtn">
                                            ✕
                                        </button>
                                        <div className="mobile-menu-content">
                                            <div className="mobile-menu-item">
                                                <button className="mobile-menu-link" data-testid="button-mobile-company">
                                                    Company
                                                    <svg className="chevron" width="16" height="16" role="presentation" viewBox="0 0 16 16" fill="none">
                                                        <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                                                    </svg>
                                                </button>
                                                <div className="mobile-submenu" aria-hidden="true">
                                                    <a href="https://ezulix.com/aboutus" data-testid="link-about-us">
                                                        <svg className="menu-icon" width="18" role="presentation" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                            <circle cx="12" cy="12" r="10" />
                                                            <path d="M12 16v-4M12 8h.01" />
                                                        </svg>
                                                        About Us
                                                    </a>

                                                    <a href="https://ezulix.com/blog" data-testid="link-blog">
                                                        <svg className="menu-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" role="presentation" stroke-width="2">
                                                            <path d="M12 19l7-7 3 3-7 7-3-3z" />
                                                            <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                                                            <path d="M2 2l7.586 7.586" />
                                                            <circle cx="11" cy="11" r="2" />
                                                        </svg>
                                                        Blog
                                                    </a>
                                                    <a href="https://ezulix.com/awards" data-testid="link-our-team">
                                                        <svg className="menu-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" role="presentation" stroke-width="2">
                                                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                                            <circle cx="9" cy="7" r="4" />
                                                            <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                                                        </svg>
                                                        Awards
                                                    </a>
                                                    <a href="https://ezulix.com/career" data-testid="link-careers">
                                                        <svg className="menu-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" role="presentation" stroke-width="2">
                                                            <rect x="2" y="7" width="20" height="14" rx="2" />
                                                            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                                                        </svg>
                                                        Careers
                                                    </a>
                                                    <a href="https://ezulix.com/press-event" data-testid="link-press-media">
                                                        <svg className="menu-icon" width="18" height="18" role="presentation" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                                        </svg>
                                                        Press & Media
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="mobile-menu-item">
                                                <button className="mobile-menu-link" data-testid="button-mobile-services">
                                                    Services
                                                    <svg className="chevron" width="16" height="16" viewBox="0 0 16 16" fill="none" role="presentation">
                                                        <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                                                    </svg>
                                                </button>
                                                <div className="mobile-submenu" aria-hidden="true">
                                                    <a href="https://ezulix.com/software-development-services" data-testid="link-custom-development">Software Development</a>
                                                    <a href="https://ezulix.com/web-development-company" data-testid="link-custom-development">Custom Web Development</a>
                                                    <a href="https://ezulix.com/web-design-company" data-testid="link-custom-development">Web Design</a>
                                                    <a href="https://ezulix.com/graphics-design-company" data-testid="link-cloud-solutions">Logo & Graphic Designing</a>
                                                    <a href="https://ezulix.com/digital-marketing-company" data-testid="link-ai-machine-learning">Digital Marketing</a>
                                                    <a href="https://ezulix.com/mobile-app-development-company" data-testid="link-consulting">Mobile App Development</a>
                                                    <a href="https://ezulix.com/android-app-development-company" data-testid="link-maintenance-support">Android App Development</a>
                                                    <a href="https://ezulix.com/ios-app-development-company" data-testid="link-maintenance-support">IOS App Development</a>
                                                    <a href="https://ezulix.com/on-demand-app-development" data-testid="link-maintenance-support">On-Demand App Development</a>
                                                    <a href="https://ezulix.com/ai-development-company" data-testid="ai-development-company">AI Product Development</a>
                                                    <a href="https://ezulix.com/saas-development-company" data-testid="saas-development-company">SaaS Development</a>
                                                    <a href="https://ezulix.com/next-gen-technology-development" data-testid="next-gen-technology-development">AI/ML, AR/VR Development</a>
                                                    <a href="https://ezulix.com/mvp-development-company" data-testid="link-maintenance-support">MVP Development</a>
                                                </div>
                                            </div>

                                            <div className="mobile-menu-item">
                                                <button className="mobile-menu-link" data-testid="button-mobile-solutions">
                                                    Solutions
                                                    <svg className="chevron" width="16" height="16" viewBox="0 0 16 16" fill="none" role="presentation">
                                                        <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                                                    </svg>
                                                </button>
                                                <div className="mobile-submenu" aria-hidden="true">
                                                    <a href="https://ezulix.com/restaurant-management-system" className="d-block">Restaurant Management System</a>

                                                    <a href="https://ezulix.com/grocery-software" className="d-block">Grocery Software</a>

                                                    <a href="https://ezulix.com/school-management-software-system" className="d-block">School Management Software</a>

                                                    <a href="https://ezulix.com/hrms-software" className="d-block">HRMS Software</a>

                                                    <a href="https://ezulix.com/employee-tracking-system-software" className="d-block">Employee Tracking Software</a>

                                                    <a href="https://ezulix.com/online-education-software" className="d-block">Online Education Software</a>

                                                    <a href="https://ezulix.com/reseller-software" className="d-block">Reseller Software</a>

                                                    <a href="https://ezulix.com/learning-management-system" className="d-block">Learning Management Software</a>

                                                    <a href="https://ezulix.com/inventory-management-software" className="d-block">Inventory Management Software</a>

                                                    <a href="https://ezulix.com/food-delivery-software" className="d-block">Food Delivery Software</a>

                                                    <a href="https://ezulix.com/taxi-booking-software" className="d-block">Cab Booking Software</a>

                                                    <a href="https://ezulix.com/home-service-software" className="d-block">Home Service Software</a>

                                                    <a href="https://ezulix.com/crm-software" className="d-block">CRM Software</a>

                                                    <a href="https://ezulix.com/helpdesk-software" className="d-block">Helpdesk Software</a>



                                                    <a href="https://ezulix.com/ecommerce-software-development" className="d-block">eCommerce Portal</a>



                                                    <a href="https://ezulix.com/loan-management-software" className="d-block">Loan Module Software</a>
                                                    <a href="https://ezulix.com/travel-booking-software" className="d-block">Travel Booking Software</a>




                                                    <a href="https://ezulix.com/fintech-software-development" className="d-block">Fintech Software Development</a>
                                                    <div className="mobile-category">
                                                        <p className="mobile-category-title">
                                                            <svg className="title-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                                                                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                                                                <line x1="12" y1="22.08" x2="12" y2="12" />
                                                            </svg>
                                                            By Use Case
                                                        </p>
                                                        <a href="/solutions/digital-transformation" data-testid="link-mobile-digital-transformation">Digital Transformation</a>
                                                        <a href="/solutions/automation" data-testid="link-mobile-process-automation">Process Automation</a>
                                                        <a href="/solutions/analytics" data-testid="link-mobile-data-analytics">Data Analytics</a>
                                                        <a href="/solutions/mobile" data-testid="link-mobile-mobile-apps">Mobile Apps</a>
                                                    </div>
                                                    <div className="mobile-category">
                                                        <p className="mobile-category-title">
                                                            <svg className="title-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                                <rect x="2" y="2" width="20" height="8" rx="2" />
                                                                <rect x="2" y="14" width="20" height="8" rx="2" />
                                                                <line x1="6" y1="6" x2="6.01" y2="6" />
                                                                <line x1="6" y1="18" x2="6.01" y2="18" />
                                                            </svg>
                                                            By Technology
                                                        </p>
                                                        <a href="/solutions/web" data-testid="link-mobile-web-applications">Web Applications</a>
                                                        <a href="/solutions/cloud-native" data-testid="link-mobile-cloud-native">Cloud Native</a>
                                                        <a href="/solutions/ai-solutions" data-testid="link-mobile-ai-solutions">AI Solutions</a>
                                                        <a href="/solutions/devops" data-testid="link-mobile-devops-ci-cd">DevOps & CI/CD</a>
                                                    </div>
                                                    <div className="mobile-category">
                                                        <p className="mobile-category-title">
                                                            <svg className="title-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                                                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                                                            </svg>
                                                            Resources
                                                        </p>
                                                        <a href="/resources/case-studies" data-testid="link-mobile-case-studies">Case Studies</a>
                                                        <a href="/resources/whitepapers" data-testid="link-mobile-white-papers">White Papers</a>
                                                        <a href="/resources/docs" data-testid="link-mobile-documentation">Documentation</a>
                                                        <a href="/resources/api" data-testid="link-mobile-api-reference">API Reference</a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mobile-menu-item">
                                                <button className="mobile-menu-link" data-testid="button-mobile-industries">
                                                    Industries
                                                    <svg className="chevron" width="16" height="16" viewBox="0 0 16 16" fill="none" role="presentation">
                                                        <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                                                    </svg>
                                                </button>
                                                <div className="mobile-submenu" aria-hidden="true">
                                                    <div className="mobile-category">
                                                        <p className="mobile-category-title">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" role="presentation" stroke="rgba(245, 134, 52, 1)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                                <circle cx="12" cy="12" r="3"></circle>
                                                                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                                                            </svg> FINTECH SOFTWARE
                                                        </p>
                                                        <a href="https://ezulix.com/aadhaar-enabled-payment-system-aeps">
                                                            AEPS Software </a>
                                                        <a href="https://ezulix.com/mobile-recharge-software">

                                                            Recharge Software</a>
                                                        <a href="https://ezulix.com/bharat-bill-payment-system">

                                                            BBPS Software</a>
                                                        <a href="https://ezulix.com/money-transfer-software">
                                                            DMT Software </a>
                                                        <a href="https://ezulix.com/pancard-service">
                                                            UTI (Pancard) Software </a>
                                                        <a href="https://ezulix.com/travel-booking-software">
                                                            Travel Software </a>
                                                    </div>
                                                    <div className="mobile-category">
                                                        <p className="mobile-category-title">
                                                            <svg className="title-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" role="presentation">
                                                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                                                <polyline points="9 22 9 12 15 12 15 22" />
                                                            </svg> OTHER Industries
                                                        </p>
                                                        <a href="https://ezulix.com/neo-banking">Neo-Banking</a>

                                                        <a href="https://ezulix.com/ecommerce-software-development">E-commerce</a>

                                                        <a href="https://ezulix.com/healthcare">Healthcare</a>
                                                        <a href="https://ezulix.com/reseller-software">Reselling</a>
                                                        <a href="https://ezulix.com/home-service-software">Household</a>
                                                        <a href="https://ezulix.com/education">Education</a>
                                                        <a href="https://ezulix.com/travel-booking-software">Travel & Hospitality</a><a href="https://ezulix.com/fintech-software-development">Fintech </a>
                                                        <a href="https://ezulix.com/real-estate">Real Estate</a>
                                                        <a href="https://ezulix.com/employee-tracking-system-software">Corporate</a>
                                                        <a href="https://ezulix.com/food-delivery-software">Food and Beverages</a>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="mobile-menu-item">
                                                <button className="mobile-menu-link" data-testid="button-mobile-industries">
                                                    Technology
                                                    <svg className="chevron" width="16" height="16" viewBox="0 0 16 16" fill="none" role="presentation">
                                                        <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                                                    </svg>
                                                </button>
                                                <div className="mobile-submenu" aria-hidden="true">
                                                    <div className="mobile-category">
                                                        <p className="mobile-category-title">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(245, 134, 52, 1)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" role="presentation">
                                                                <circle cx="12" cy="12" r="3"></circle>
                                                                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                                                            </svg> Bank-end
                                                        </p>
                                                        <a href="https://ezulix.com/net-development-company">ASP.NET</a>
                                                        <a href="https://ezulix.com/nodejs-development-company">Node JS</a>
                                                        <a href="https://ezulix.com/technology#tech_python">Python</a>
                                                        <a href="https://ezulix.com/php-development-company">PHP</a>
                                                        <a href="https://ezulix.com/technology#tech_java">Java</a>
                                                        <a href="https://ezulix.com/technology#tech_c_hash">C#</a>
                                                        <a href="https://ezulix.com/technology#tech_c_plus">C++</a>
                                                    </div>
                                                    <div className="mobile-category">
                                                        <p className="mobile-category-title">
                                                            <svg className="title-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" role="presentation">
                                                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                                                <polyline points="9 22 9 12 15 12 15 22" />
                                                            </svg> Front-End
                                                        </p>
                                                        <a href="https://ezulix.com/technology#tech_html">HTML5</a>
                                                        <a href="https://ezulix.com/technology#tech_css_three">CSS3</a>
                                                        <a href="https://ezulix.com/technology#tech_javascript">JavaScript</a>
                                                        <a href="https://ezulix.com/technology#tech_reactjs">React JS</a>
                                                        <a href="https://ezulix.com/technology#tech_angularjs">Angular JS</a>
                                                    </div>
                                                    <div className="mobile-category">
                                                        <p className="mobile-category-title">
                                                            <svg className="title-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" role="presentation">
                                                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                                                <polyline points="9 22 9 12 15 12 15 22" />
                                                            </svg> DBMS
                                                        </p>
                                                        <a href="https://ezulix.com/technology#tech_mysql">MySQL</a>
                                                        <a href="https://ezulix.com/technology#tech_sql_server">SQL Server</a>
                                                    </div>
                                                    <div className="mobile-category">
                                                        <p className="mobile-category-title">
                                                            <svg className="title-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" role="presentation">
                                                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                                                <polyline points="9 22 9 12 15 12 15 22" />
                                                            </svg> UX/UI & Design Tools
                                                        </p>
                                                        <a href="https://ezulix.com/technology#tech_photoshop">Photoshop</a>
                                                        <a href="https://ezulix.com/technology#tech_figma">Figma</a>
                                                        <a href="https://ezulix.com/technology#tech_adobe_xd">Adobe XD</a>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="mobile-menu-item">
                                                <a href="https://ezulix.com/portfolio" className="mobile-menu-link" data-testid="link-mobile-contact">Portfolio</a>
                                            </div>
                                            <div className="mobile-menu-item">
                                                <a href="https://ezulix.com/contactus" className="mobile-menu-link" data-testid="link-mobile-contact">Contact</a>
                                            </div>
                                        </div>

                                    </div>
                                    <div id="menuOverlay"></div>
                                   

                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>


   

        </>
    );
};

export default Header;
