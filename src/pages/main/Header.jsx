import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openMobileSubmenu, setOpenMobileSubmenu] = useState(null);

    // Mobile menu open/close hone pe body scroll lock
    useEffect(() => {
        const mobileMenu = document.getElementById("mobileMenu");
        const mobileToggle = document.getElementById("mobileToggle");
        if (mobileMenu) {
            if (isMenuOpen) {
                mobileMenu.classList.add("active");
                mobileToggle && mobileToggle.classList.add("active");
                document.body.style.overflow = "hidden";
            } else {
                mobileMenu.classList.remove("active");
                mobileToggle && mobileToggle.classList.remove("active");
                document.body.style.overflow = "";
            }
        }
        return () => { document.body.style.overflow = ""; };
    }, [isMenuOpen]);

    // Mobile submenu toggle
    const toggleMobileSubmenu = (key) => {
        setOpenMobileSubmenu(prev => prev === key ? null : key);
    };

    return (
        <>
            <div className="enquiry-panel" id="enquiryPanel">
                <div className="popup-form">
                    <div id="closeEnquiryBtn"><i className="fa-solid fa-x"></i></div>
                    <form action="" method="post" id="index_form" name="index_form">
                        <input type="hidden" name="csrf_test_name" value="27fe01dca3be77a69a001c025314eb1e" />
                        <input type="hidden" name="source" value="Popup: Website Home Page" />
                        <div className="popup-title mb-3 fs-22 fw-semibold text-center text-white">Early-Stage Founder Offer – Save Up to 15% on Your Project</div>
                        <div className="livedemo-form-filds">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="mc-field-group popup-fild position-relative">
                                        <input type="text" name="name_contact" id="name_contact" placeholder="Your Name" />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="mc-field-group popup-fild position-relative">
                                        <input type="email" name="email_contact" id="email_contact" placeholder="Your Mail ID" />
                                    </div>
                                </div>
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                    <div className="form-group contact-form-fild multi-filds position-relative" style={{ paddingBottom: 0 }}>
                                        <div className="mc-field-group popup-fild position-relative">
                                            <div className="form-group">
                                                <select id="countrycode" name="countryPhone" className="form-control country-code-box countrycodeselect"></select>
                                            </div>
                                            <input type="text" name="phone_contact" id="phone_contact" placeholder="Your Phone Number" maxLength="10" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="mc-field-group popup-fild position-relative">
                                        <select type="text" id="service" name="service" className="form-control input-fild onload-select-menu" required>
                                            <option disabled defaultValue className="placeholder" value="">Select Your Service</option>
                                            <option value="Software Development">Software Development</option>
                                            <option value="Custom Web Development">Custom Web Development</option>
                                            <option value="Web Design">Web Design</option>
                                            <option value="Logo & Graphic Designing">Logo & Graphic Designing</option>
                                            <option value="Digitel Marketing">Digital Marketing</option>
                                            <option value="Mobile App Development">Mobile App Development</option>
                                            <option value="On Demand App Development">On Demand App Development</option>
                                            <option value="AI ML Development">AI ML Development</option>
                                            <option value="other">Others</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="mc-field-group popup-fild position-relative">
                                        <textarea id="message_contact" name="message_contact" minLength="40" className="form-control" placeholder="Tell us about your project..."></textarea>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="mc-field-group popup-fild position-relative">
                                        <div className="btn-box btn-gradistion pt-2 text-center">
                                            <button type="submit" className="popup-submit-btn contact-form-submit" id="popUpBtn" aria-label="submit">Send Your Query</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 text-center">
                                    <div className="form-footer">
                                        <div className="footer-social-icon d-flex align-items-center justify-content-center" style={{ gap: "20px" }}>
                                            <a href="/" aria-label="Visit Ezulix Instagram"><i className="fa-brands fa-instagram"></i></a>
                                            <a href="/" aria-label="Visit Ezulix Linkedin"><i className="fa-brands fa-linkedin-in"></i></a>
                                            <a href="/" aria-label="Visit Ezulix Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                                            <a href="/" aria-label="Visit Ezulix Youtube"><i className="fa-brands fa-youtube"></i></a>
                                            <a href="/" aria-label="Visit Ezulix Twitter"><i className="fa-brands fa-x-twitter"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <button id="enquiryTab" className="enquiry-button enquiry-tab desktop-view-btn">
                    <span>Save Up to 15% <i id="enquiryTabArrow" className="fa-solid fa-arrow-up"></i></span>
                </button>
            </div>

            <div className="fixed-btn">
                <button id="enquiryTab1" className="enquiry-button enquiry-tab mobile-view-btn">
                    <span><i className="fa-regular fa-message"></i></span>
                </button>
                <a href="https://api.whatsapp.com/send?phone=918890732899" rel="noopener" className="whatsapp-button" aria-label="WhatsApp chat" target="_blank" style={{ position: "fixed" }}>
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
                                        <a href="/" aria-label="Visit Ezulix India Website"><img src="/assets/image/header/india-flag.png" width="20" height="20" alt="India Flag" /></a>
                                        <a style={{ borderBottom: "1px solid orangered" }} className="text-white" href="tel:+919266730534">+91 9266730534</a>
                                    </div>
                                    <div className="location-details">
                                        <a href="/" aria-label="Visit Ezulix UK Website"><img src="/assets/image/header/uk-flg.png" width="20" height="20" alt="UK Flag" /></a>
                                        <a style={{ borderBottom: "1px solid orangered" }} className="text-white" href="tel:+447956982975">+44 7956982975</a>
                                    </div>
                                    <div className="location-details">
                                        <a href="/" aria-label="Visit Ezulix UAE Website"><img src="/assets/image/header/uae.png" width="20" height="20" alt="UAE Flag" /></a>
                                        <a style={{ borderBottom: "1px solid orangered" }} className="text-white" href="tel:+971525410937">+971 525410937</a>
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
                                        <h4>Qmax Software Solutions</h4>
                                        {/* <img className="theme-brand-logo position-relative" src="/assets/image/Qmaxtext.png" width="100" height="40" alt="Brand Logo" /> */}
                                    </a>
                                </div>

                                <nav className="main-menu menu-bar position-relative d-flex align-items-center" role="navigation">
                                    <nav className="navbar" id="navbar">
                                        <div className="navbar-container">
                                            <ul className="navbar-menu mb-0" id="navbarMenu">
                                                <li className="navbar-item dropdown">
                                                    <button className="navbar-link" aria-haspopup="true" aria-expanded="false">
                                                        Company
                                                        <svg className="chevron" width="16" height="16" viewBox="0 0 16 16" fill="none" role="presentation">
                                                            <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                                        </svg>
                                                    </button>
                                                    <div className="dropdown-menu">
                                                        <Link to="/aboutus">About Us</Link>
                                                        <Link to="/blog">Blog</Link>
                                                        <Link to="/awards">Awards</Link>
                                                        <Link to="/career">Careers</Link>
                                                        <Link to="/press-event">Press & Media</Link>
                                                    </div>
                                                </li>
                                                <li className="navbar-item dropdown">
                                                    <button className="navbar-link" aria-haspopup="true" aria-expanded="false">
                                                        Services
                                                        <svg className="chevron" width="16" height="16" viewBox="0 0 16 16" fill="none" role="presentation">
                                                            <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                                        </svg>
                                                    </button>
                                                    <div className="dropdown-menu services-dropdown-menu">
                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <Link to="/software-development-services">Software Development</Link>
                                                                <Link to="/web-development-company">Custom Web Development</Link>
                                                                <Link to="/web-design-company">Web Design</Link>
                                                                <Link to="/graphics-design-company">Logo & Graphic Designing</Link>
                                                                <Link to="/digital-marketing-company">Digital Marketing</Link>
                                                                <Link to="/mobile-app-development-company">Mobile App Development</Link>
                                                                <Link to="/android-app-development-company">Android App Development</Link>
                                                            </div>

                                                            <div className="col-lg-6">
                                                                <Link to="/ios-app-development-company">IOS App Development</Link>
                                                                <Link to="/on-demand-app-development">On-Demand App Development</Link>
                                                                <Link to="/ai-development-company">AI Product Development</Link>
                                                                <Link to="/saas-development-company">SaaS Development</Link>
                                                                <Link to="/next-gen-technology-development">AI/ML, AR/VR Development</Link>
                                                                <Link to="/mvp-development-company">MVP Development</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="navbar-item megamenu">
                                                    <button className="navbar-link" aria-haspopup="true" aria-expanded="false">
                                                        Solutions
                                                        <svg className="chevron" width="16" height="16" viewBox="0 0 16 16" fill="none" role="presentation">
                                                            <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                                        </svg>
                                                    </button>
                                                    <div className="megamenu-container solution-container">
                                                        <div className="megamenu-content">
                                                            <div className="megamenu-column">
                                                                <Link to="/restaurant-management-system">Restaurant Management System</Link>
                                                                <Link to="/grocery-software">Grocery Software</Link>
                                                                <Link to="/school-management-software-system">School Management Software</Link>
                                                                <Link to="/hrms-software">HRMS Software</Link>
                                                                <Link to="/employee-tracking-system-software">Employee Tracking Software</Link>
                                                                <Link to="/online-education-software">Online Education Software</Link>
                                                            </div>

                                                            <div className="megamenu-column">
                                                                <Link to="/reseller-software">Reseller Software</Link>
                                                                <Link to="/learning-management-system">Learning Management Software</Link>
                                                                <Link to="/inventory-management-software">Inventory Management Software</Link>
                                                                <Link to="/food-delivery-software">Food Delivery Software</Link>
                                                                <Link to="/taxi-booking-software">Cab Booking Software</Link>
                                                                <Link to="/home-service-software">Home Service Software</Link>
                                                            </div>

                                                            <div className="megamenu-column">
                                                                <Link to="/crm-development-company">CRM Software</Link>
                                                                <Link to="/helpdesk-software">Helpdesk Software</Link>
                                                                <Link to="/ecommerce-software-development">eCommerce Portal</Link>
                                                                <Link to="/loan-management-software">Loan Module Software</Link>
                                                                <Link to="/travel-booking-software">Travel Booking Software</Link>
                                                                <Link to="/fintech-software-development">Fintech Software Development</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="navbar-item megamenu">
                                                    <button className="navbar-link" aria-haspopup="true" aria-expanded="false">
                                                        Industries
                                                        <svg className="chevron" width="16" height="16" viewBox="0 0 16 16" fill="none" role="presentation">
                                                            <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                                        </svg>
                                                    </button>
                                                    <div className="megamenu-container industry-container">
                                                        <div className="row">
                                                            <div className="col-lg-4">
                                                                <div className="megamenu-column">
                                                                    <h3 className="megamenu-title">FINTECH SOFTWARE</h3>

                                                                    <Link to="/aadhaar-enabled-payment-system-aeps">AEPS Software</Link>
                                                                    <Link to="/mobile-recharge-software">Recharge Software</Link>
                                                                    <Link to="/bharat-bill-payment-system">BBPS Software</Link>
                                                                    <Link to="/money-transfer-software">DMT Software</Link>
                                                                    <Link to="/pancard-service">UTI (Pancard) Software</Link>
                                                                    <Link to="/travel-booking-software">Travel Software</Link>
                                                                </div>
                                                            </div>

                                                            <div className="col-lg-8">
                                                                <div className="megamenu-column">
                                                                    <h3 className="megamenu-title">OTHER INDUSTRIES</h3>

                                                                    <div className="row">
                                                                        <div className="col-lg-6">
                                                                            <Link to="/neo-banking">Neo-Banking</Link>
                                                                            <Link to="/ecommerce-software-development">E-commerce</Link>
                                                                            <Link to="/healthcare">Healthcare</Link>
                                                                            <Link to="/reseller-software">Reselling</Link>
                                                                            <Link to="/home-service-software">Household</Link>
                                                                            <Link to="/education">Education</Link>
                                                                        </div>

                                                                        <div className="col-lg-6">
                                                                            <Link to="/travel-booking-software">Travel & Hospitality</Link>
                                                                            <Link to="/fintech-software-development">Fintech</Link>
                                                                            <Link to="/real-estate">Real Estate</Link>
                                                                            <Link to="/employee-tracking-system-software">Corporate</Link>
                                                                            <Link to="/food-delivery-software">Food and Beverages</Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="navbar-item megamenu">
                                                    <button className="navbar-link" aria-haspopup="true" aria-expanded="false">
                                                        Technology
                                                        <svg className="chevron" width="16" height="16" viewBox="0 0 16 16" fill="none" role="presentation">
                                                            <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                                        </svg>
                                                    </button>
                                                    <div className="megamenu-container technology-megamenu">
                                                        <div className="megamenu-content">
                                                            <div className="megamenu-column">
                                                                <h3 className="megamenu-title">Back-End</h3>

                                                                <Link to="/net-development-company">ASP.NET</Link>
                                                                <Link to="/nodejs-development-company">Node JS</Link>
                                                                <Link to="/technology-tech_python">Python</Link>
                                                                <Link to="/php-development-company">PHP</Link>
                                                                <Link to="/technology-tech_java">Java</Link>
                                                                <Link to="/technology-tech_c_hash">C#</Link>
                                                                <Link to="/technology-tech_c_plus">C++</Link>
                                                            </div>

                                                            <div className="megamenu-column">
                                                                <h3 className="megamenu-title">Front-End</h3>

                                                                <Link to="/technology-tech_html">HTML5</Link>
                                                                <Link to="/technology-tech_css_three">CSS3</Link>
                                                                <Link to="/technology-tech_javascript">JavaScript</Link>
                                                                <Link to="/technology-tech_reactjs">React JS</Link>
                                                                <Link to="/technology-tech_angularjs">Angular JS</Link>
                                                            </div>

                                                            <div className="megamenu-column">
                                                                <h3 className="megamenu-title">Database</h3>

                                                                <Link to="/technology-tech_mysql">MySQL</Link>
                                                                <Link to="/technology-tech_sql_server">SQL Server</Link>

                                                                <h3 className="megamenu-title mt-3">UI/UX & Design Tools</h3>

                                                                <Link to="/technology-tech_photoshop">Photoshop</Link>
                                                                <Link to="/technology-tech_figma">Figma</Link>
                                                                <Link to="/technology-tech_adobe_xd">Adobe XD</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="navbar-item">
                                                    <Link to="/portfolio" className="navbar-link">Portfolio</Link>
                                                </li>
                                                <li className="navbar-item">
                                                    <Link to="/contactus" className="navbar-link">Contact</Link>
                                                </li>
                                            </ul>

                                            {/* ── HAMBURGER BUTTON ── */}
                                            <button
                                                className={`mobile-toggle${isMenuOpen ? " active" : ""}`}
                                                id="mobileToggle"
                                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                                aria-label="Toggle mobile menu"
                                            >
                                                <span className="hamburger"></span>
                                            </button>
                                        </div>
                                    </nav>

                                    {/* ── MOBILE MENU ── */}
                                    <div className={`mobile-menu${isMenuOpen ? " active" : ""}`} id="mobileMenu">
                                        <button
                                            className="mobile-close-btn"
                                            id="mobileCloseBtn"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            ✕
                                        </button>

                                        <div className="mobile-menu-content">

                                            {/* Company */}
                                            <div className="mobile-menu-item">
                                                <button
                                                    className={`mobile-menu-link${openMobileSubmenu === "company" ? " active" : ""}`}
                                                    onClick={() => toggleMobileSubmenu("company")}
                                                >
                                                    Company
                                                    <svg className="chevron" width="16" height="16" viewBox="0 0 16 16" fill="none" role="presentation">
                                                        <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                                    </svg>
                                                </button>
                                                <div className={`mobile-submenu${openMobileSubmenu === "company" ? " open" : ""}`}>
                                                    <Link to="/aboutus" onClick={() => setIsMenuOpen(false)}>
                                                        About Us
                                                    </Link>

                                                    <Link to="/blog" onClick={() => setIsMenuOpen(false)}>
                                                        Blog
                                                    </Link>

                                                    <Link to="/awards" onClick={() => setIsMenuOpen(false)}>
                                                        Awards
                                                    </Link>

                                                    <Link to="/career" onClick={() => setIsMenuOpen(false)}>
                                                        Careers
                                                    </Link>

                                                    <Link to="/press-event" onClick={() => setIsMenuOpen(false)}>
                                                        Press & Media
                                                    </Link>
                                                </div>
                                            </div>

                                            {/* Services */}
                                            <div className="mobile-menu-item">
                                                <button
                                                    className={`mobile-menu-link${openMobileSubmenu === "services" ? " active" : ""}`}
                                                    onClick={() => toggleMobileSubmenu("services")}
                                                >
                                                    Services
                                                    <svg className="chevron" width="16" height="16" viewBox="0 0 16 16" fill="none" role="presentation">
                                                        <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                                    </svg>
                                                </button>
                                                <div className={`mobile-submenu${openMobileSubmenu === "services" ? " open" : ""}`}>
                                                    <Link to="/software-development-services" onClick={() => setIsMenuOpen(false)}>Software Development</Link>
                                                    <Link to="/web-development-company" onClick={() => setIsMenuOpen(false)}>Custom Web Development</Link>
                                                    <Link to="/web-design-company" onClick={() => setIsMenuOpen(false)}>Web Design</Link>
                                                    <Link to="/graphics-design-company" onClick={() => setIsMenuOpen(false)}>Logo & Graphic Designing</Link>
                                                    <Link to="/digital-marketing-company" onClick={() => setIsMenuOpen(false)}>Digital Marketing</Link>
                                                    <Link to="/mobile-app-development-company" onClick={() => setIsMenuOpen(false)}>Mobile App Development</Link>
                                                    <Link to="/android-app-development-company" onClick={() => setIsMenuOpen(false)}>Android App Development</Link>
                                                    <Link to="/ios-app-development-company" onClick={() => setIsMenuOpen(false)}>IOS App Development</Link>
                                                    <Link to="/on-demand-app-development" onClick={() => setIsMenuOpen(false)}>On-Demand App Development</Link>
                                                    <Link to="/ai-development-company" onClick={() => setIsMenuOpen(false)}>AI Product Development</Link>
                                                    <Link to="/saas-development-company" onClick={() => setIsMenuOpen(false)}>SaaS Development</Link>
                                                    <Link to="/next-gen-technology-development" onClick={() => setIsMenuOpen(false)}>AI/ML, AR/VR Development</Link>
                                                    <Link to="/mvp-development-company" onClick={() => setIsMenuOpen(false)}>MVP Development</Link>
                                                </div>
                                            </div>

                                            {/* Solutions */}
                                            <div className="mobile-menu-item">
                                                <button
                                                    className={`mobile-menu-link${openMobileSubmenu === "solutions" ? " active" : ""}`}
                                                    onClick={() => toggleMobileSubmenu("solutions")}
                                                >
                                                    Solutions
                                                    <svg className="chevron" width="16" height="16" viewBox="0 0 16 16" fill="none" role="presentation">
                                                        <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                                    </svg>
                                                </button>
                                                <div className={`mobile-submenu${openMobileSubmenu === "solutions" ? " open" : ""}`}>
                                                    <Link to="/restaurant-management-system" onClick={() => setIsMenuOpen(false)}>
                                                        Restaurant Management System
                                                    </Link>

                                                    <Link to="/grocery-software" onClick={() => setIsMenuOpen(false)}>
                                                        Grocery Software
                                                    </Link>

                                                    <Link to="/school-management-software-system" onClick={() => setIsMenuOpen(false)}>
                                                        School Management Software
                                                    </Link>

                                                    <Link to="/hrms-software" onClick={() => setIsMenuOpen(false)}>
                                                        HRMS Software
                                                    </Link>

                                                    <Link to="/employee-tracking-system-software" onClick={() => setIsMenuOpen(false)}>
                                                        Employee Tracking Software
                                                    </Link>

                                                    <Link to="/online-education-software" onClick={() => setIsMenuOpen(false)}>
                                                        Online Education Software
                                                    </Link>

                                                    <Link to="/food-delivery-software" onClick={() => setIsMenuOpen(false)}>
                                                        Food Delivery Software
                                                    </Link>

                                                    <Link to="/taxi-booking-software" onClick={() => setIsMenuOpen(false)}>
                                                        Cab Booking Software
                                                    </Link>

                                                    <Link to="/crm-development-company" onClick={() => setIsMenuOpen(false)}>
                                                        CRM Software
                                                    </Link>

                                                    <Link to="/ecommerce-software-development" onClick={() => setIsMenuOpen(false)}>
                                                        eCommerce Portal
                                                    </Link>

                                                    <Link to="/fintech-software-development" onClick={() => setIsMenuOpen(false)}>
                                                        Fintech Software Development
                                                    </Link>
                                                </div>
                                            </div>

                                            {/* Industries */}
                                            <div className="mobile-menu-item">
                                                <button
                                                    className={`mobile-menu-link${openMobileSubmenu === "industries" ? " active" : ""}`}
                                                    onClick={() => toggleMobileSubmenu("industries")}
                                                >
                                                    Industries
                                                    <svg className="chevron" width="16" height="16" viewBox="0 0 16 16" fill="none" role="presentation">
                                                        <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                                    </svg>
                                                </button>
                                                <div className={`mobile-submenu${openMobileSubmenu === "industries" ? " open" : ""}`}>
                                                    <Link to="/aadhaar-enabled-payment-system-aeps" onClick={() => setIsMenuOpen(false)}>
                                                        AEPS Software
                                                    </Link>

                                                    <Link to="/mobile-recharge-software" onClick={() => setIsMenuOpen(false)}>
                                                        Recharge Software
                                                    </Link>

                                                    <Link to="/bharat-bill-payment-system" onClick={() => setIsMenuOpen(false)}>
                                                        BBPS Software
                                                    </Link>

                                                    <Link to="/money-transfer-software" onClick={() => setIsMenuOpen(false)}>
                                                        DMT Software
                                                    </Link>

                                                    <Link to="/neo-banking" onClick={() => setIsMenuOpen(false)}>
                                                        Neo-Banking
                                                    </Link>

                                                    <Link to="/ecommerce-software-development" onClick={() => setIsMenuOpen(false)}>
                                                        E-commerce
                                                    </Link>

                                                    <Link to="/healthcare" onClick={() => setIsMenuOpen(false)}>
                                                        Healthcare
                                                    </Link>

                                                    <Link to="/education" onClick={() => setIsMenuOpen(false)}>
                                                        Education
                                                    </Link>

                                                    <Link to="/travel-booking-software" onClick={() => setIsMenuOpen(false)}>
                                                        Travel & Hospitality
                                                    </Link>

                                                    <Link to="/real-estate" onClick={() => setIsMenuOpen(false)}>
                                                        Real Estate
                                                    </Link>

                                                    <Link to="/food-delivery-software" onClick={() => setIsMenuOpen(false)}>
                                                        Food and Beverages
                                                    </Link>
                                                </div>
                                            </div>

                                            {/* Technology */}
                                            <div className="mobile-menu-item">
                                                <button
                                                    className={`mobile-menu-link${openMobileSubmenu === "technology" ? " active" : ""}`}
                                                    onClick={() => toggleMobileSubmenu("technology")}
                                                >
                                                    Technology
                                                    <svg className="chevron" width="16" height="16" viewBox="0 0 16 16" fill="none" role="presentation">
                                                        <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                                    </svg>
                                                </button>
                                                <div className={`mobile-submenu${openMobileSubmenu === "technology" ? " open" : ""}`}>
                                                    <Link to="/net-development-company" onClick={() => setIsMenuOpen(false)}>
                                                        ASP.NET
                                                    </Link>

                                                    <Link to="/nodejs-development-company" onClick={() => setIsMenuOpen(false)}>
                                                        Node JS
                                                    </Link>

                                                    <Link to="/technology-tech_python" onClick={() => setIsMenuOpen(false)}>
                                                        Python
                                                    </Link>

                                                    <Link to="/php-development-company" onClick={() => setIsMenuOpen(false)}>
                                                        PHP
                                                    </Link>

                                                    <Link to="/technology-tech_reactjs" onClick={() => setIsMenuOpen(false)}>
                                                        React JS
                                                    </Link>

                                                    <Link to="/technology-tech_angularjs" onClick={() => setIsMenuOpen(false)}>
                                                        Angular JS
                                                    </Link>

                                                    <Link to="/technology-tech_mysql" onClick={() => setIsMenuOpen(false)}>
                                                        MySQL
                                                    </Link>

                                                    <Link to="/technology-tech_figma" onClick={() => setIsMenuOpen(false)}>
                                                        Figma
                                                    </Link>

                                                    <Link to="/technology-tech_adobe_xd" onClick={() => setIsMenuOpen(false)}>
                                                        Adobe XD
                                                    </Link>
                                                </div>
                                            </div>

                                            {/* Direct links */}
                                            <div className="mobile-menu-item">
                                                <Link to="/portfolio" className="mobile-menu-link" onClick={() => setIsMenuOpen(false)}>Portfolio</Link>
                                            </div>
                                            <div className="mobile-menu-item">
                                                <Link to="/contactus" className="mobile-menu-link" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                                            </div>

                                        </div>
                                    </div>

                                    <div id="menuOverlay" onClick={() => setIsMenuOpen(false)}></div>
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
