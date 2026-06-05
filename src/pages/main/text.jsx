

    /*Home Form Section*/
                    .home - form - section {
    background - size: cover;

}
                    .contery - fleg {
    position: relative;
    top: 27px!important;
    left: 9px;
    font - size: 14px;
    padding: 0 10px;
}
                    .development - form - section {
    background: #ffffff;
    padding: 20px 0;
}

                    .contact - form - fild {
    padding - bottom: 15px;
}

                    .footer - submit - btn {
    font - size: 28px;
    font - weight: 350;
    padding: 6px 70px;
    border - radius: 36px;
    color: var(--bs - white);
    background: var(--bs - multi - gradient);
    background - size: 200 % auto;
    transition: .5s all ease -in -out;
}

                    .home - form - section::after {
    background: #f0f7fc;
    content: "";
    width: 100 %;
    height: 100 %;
    position: absolute;
    top: 0;
    opacity: .8
}

                    .home - form - title - left p {
    text - align: center;
    line - height: normal;
    padding: 10px;
}

                    .home - form - details {
    background: var(--bs - white);
    border - radius: 10px;
    padding: 18px 15px
}

                    .fomr - content - top h5 {
    color: var(--bs - light - orange)
}

                    .fomr - content - top p {
    color: var(--color - gray);
    margin: 0 auto 20px
}

                    .home - form - fild {
    padding - bottom: 15px
}

                    .home - form - fild label {
    color: var(--bs - orange);
    font - size: 18px;
    font - weight: 350;
    padding - left: 19px
}

                    .home - form - fild input,
                    .home - form - fild textarea {
    border - radius: 12px
}

                    .home - form - fild textarea {
    min - height: 104px
}

                    .form - submit - btn {
    font - size: 28px;
    font - weight: 350;
    padding: 6px 70px;
    border - radius: 36px;
    color: var(--bs - white);
    background: var(--bs - multi - gradient);
    background - size: 200 % auto;
    transition: .5s all ease -in -out
}

                    .form - submit - btn:hover {
    background - position: right center
}

                    .home - contact - left {
    background: url("assets/image/home/form.webp");
    background - position: center;
    background - size: cover;
    display: flex;
    justify - content: center;
    align - items: center;
    position: relative;
    z - index: 1;
}

                    .home - contact - left::after {
    position: absolute;
    content: "";
    height: 100 %;
    width: 100 %;
    background: black;
    opacity: 0.6;
    z - index: -1;
}

@media only screen and(max - width: 576px) {
        .home - form - title - left {
        padding: 50px 0;
    }
}






import React, { useState } from "react";

const Header = () => {
    // Menu aur Dropdown States
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    // Popups aur Forms ki States
    const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
    const [isExpertModalOpen, setIsExpertModalOpen] = useState(false);
    const [isPromoOpen, setIsPromoOpen] = useState(true); // Default open if needed

    // Phone Input Validation Handler
    const handlePhoneInput = (e) => {
        let val = e.target.value;
        val = val.replace(/[^0-9.+]/g, "").replace(/(\..*)\./g, "$1");
        // Aap yahan apni state ko update kar sakte hain agar forms controlled hain
    };

    return (
        <>
            {/* --- 1. Side Enquiry Panel --- */}
            <div className={`enquiry-panel ${isEnquiryOpen ? "open" : ""}`} id="enquiryPanel">
                <div className="popup-form">
                    <div id="closeEnquiryBtn" onClick={() => setIsEnquiryOpen(false)}>
                        <i className="fa-solid fa-x"></i>
                    </div>
                    <form action="" method="post" id="index_form" name="index_form">
                        <input type="hidden" name="csrf_test_name" value="27fe01dca3be77a69a001c025314eb1e" />
                        <input type="hidden" name="source" value="Popup: Website Home Page" />

                        <div className="popup-title mb-3 fs-22 fw-semibold text-center text-white">
                            Early-Stage Founder Offer – Save Up to 15% on Your Project
                        </div>

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
                                        <div className="mc-field-group popup-fild position-relative ">
                                            <div className="form-group">
                                                <select id="countrycode" name="countryPhone" className="form-control country-code-box countrycodeselect">
                                                    {/* Options elements here */}
                                                </select>
                                            </div>
                                            <input
                                                type="text"
                                                name="phone_contact"
                                                id="phone_contact"
                                                placeholder="Your Phone Number"
                                                maxLength="10"
                                                onInput={handlePhoneInput}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="mc-field-group popup-fild position-relative">
                                        <select id="service" name="service" className="form-control input-fild onload-select-menu" aria-label="Select Your Service" defaultValue="" required>
                                            <option disabled value="">Select Your Service </option>
                                            <option value="Software Development">Software Development</option>
                                            <option value="Custom Web Development">Custom Web Development</option>
                                            <option value="Web Design">Web Design</option>
                                            <option value="Logo & Graphic Designing">Logo & Graphic Designing</option>
                                            <option value="Digitel Marketing">Digitel Marketing</option>
                                            <option value="Mobile App Development">Mobile App Development</option>
                                            <option value="On Demand App Development">On Demand App Development</option>
                                            <option value="AI ML Development">AI ML Development </option>
                                            <option value="other">Others </option>
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
                                        <div className="btn-box btn-gradistion text-center">
                                            <div className="btn-box btn-gradistion pt-2 text-center">
                                                <button type="submit" className="popup-submit-btn contact-form-submit" id="popUpBtn" aria-label="submit">Send Your Query</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 text-center">
                                    <div className="form-footer">
                                        <div className="footer-social-icon d-flex align-items-center justify-content-center" style={{ gap: "20px" }}>
                                            <a href="https://www.instagram.com/" aria-label="Visit Instagram"><i className="fa-brands fa-instagram"></i></a>
                                            <a href="https://www.linkedin.com/" aria-label="Visit Linkedin"><i className="fa-brands fa-linkedin-in"></i></a>
                                            <a href="https://www.facebook.com/" aria-label="Visit Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                                            <a href="https://www.youtube.com/" aria-label="Visit Youtube"><i className="fa-brands fa-youtube"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                {/* Toggle button for Desktop View */}
                <button type="button" onClick={() => setIsEnquiryOpen(!isEnquiryOpen)} className="enquiry-button enquiry-tab desktop-view-btn">
                    <span> Save Up to 15% <i id="enquiryTabArrow" className={`fa-solid ${isEnquiryOpen ? "fa-arrow-down" : "fa-arrow-up"}`}></i></span>
                </button>
            </div>

            {/* --- 2. Expert Consultation Modal --- */}
            {isExpertModalOpen && (
                <div className="popup-overlay open" id="popup">
                    <div className="popup-box">
                        <div className="popup-close" onClick={() => setIsExpertModalOpen(false)}>×</div>
                        <div className="popup-body">
                            <div className="expert-card" id="expertcard-form">
                                <h5>Describe Your App Idea With an Expert</h5>
                                <form className="common-enquiry-form mb-0" data-source="App Expert Form" name="app-expert-form" id="app-expert-form">
                                    <input type="hidden" name="csrf_test_name" value="27fe01dca3be77a69a001c025314eb1e" />
                                    <div className="container">
                                        <div className="row g-3">
                                            <div className="col-md-6 sep-block">
                                                <label htmlFor="name">Full Name </label>
                                                <input type="text" className="form-control" id="name" name="name" placeholder="Your Name " />
                                            </div>
                                            <div className="col-md-6 sep-block">
                                                <label htmlFor="email">Email Id</label>
                                                <input type="email" className="form-control" id="email" name="email" placeholder="Your Email ID" />
                                            </div>
                                            <div className="col-md-6 sep-block">
                                                <label htmlFor="phone">Phone Number </label>
                                                <input type="number" className="form-control" id="phone" name="phone" inputMode="numeric" placeholder="Your Phone Number " />
                                            </div>
                                            <div className="col-md-6 sep-block">
                                                <label htmlFor="application_type">Application Type </label>
                                                <select className="form-select" id="application_type" name="application_type" defaultValue="Taxi Booking App">
                                                    <option value="Taxi Booking App">Taxi Booking App</option>
                                                    <option value="E-commerce App">E-commerce App</option>
                                                    <option value="Food Delivery App">Food Delivery App</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                            </div>
                                            <div className="col-12 sep-block">
                                                <label htmlFor="message">Message</label>
                                                <textarea className="form-control" rows="4" id="message" name="message" minLength="100" placeholder="Tell us about your project..."></textarea>
                                            </div>
                                            <div className="col-12 text-center">
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
            )}

            {/* --- 3. Promo Offer Popup --- */}
            {isPromoOpen && (
                <div id="promoPopup" className="promo-popup-wrapper">
                    <div className="popup-content">
                        <span className="close-btn" onClick={() => setIsPromoOpen(false)}>&times;</span>
                        <img src="/assets/image/offerZone/2026-offer.webp" alt="Promo Banner" id="promoOffer" />
                    </div>
                </div>
            )}

            {/* --- 4. Sticky Floating Buttons --- */}
            <div id="popupOverlay" className={`bg_overlay ${isEnquiryOpen || isExpertModalOpen ? "show" : ""}`}></div>

            <div className="fixed-btn">
                <button type="button" onClick={() => setIsEnquiryOpen(!isEnquiryOpen)} className="enquiry-button enquiry-tab mobile-view-btn">
                    <span> <i className="fa-regular fa-message"></i></span>
                </button>
                <a href="https://api.whatsapp.com/send?phone=917230086664" rel="noopener" className="whatsapp-button" aria-label="WhatsApp chat" target="_blank" style={{ position: "fixed", bottom: "20px", right: "20px" }}>
                    <img src="/assets/image/header/whatsapp.webp" width="60" height="60" loading="lazy" alt="Whatsapp" />
                </a>
            </div>

            {/* --- 5. Main Header Section --- */}
            <header id="header" className="header-section">
                <div className="top-bar">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="location-wrapper">
                                    <div className="location-details">
                                        <a href="/" aria-label="Visit India Website">
                                            <img src="/assets/image/header/india-flag.png" width="20" height="20" alt="India Flag" />
                                        </a>
                                        <a style={{ borderBottom: "1px solid orangered" }} className="text-white" href="tel:+919266730534"> +91 9266730534</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container header-details">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner-header-wrap justify-content-between align-items-center d-flex w-100">
                                <div className="header-logo" style={{ padding: "10px 0" }}>
                                    <a href="/">
                                        <img className="theme-brand-logo" src="/assets/image/logo.webp" width="197" height="47" alt="Brand Logo" />
                                    </a>
                                </div>
                                <nav className="main-menu menu-bar position-relative d-flex align-items-center">
                                    <div className="navbar-container">
                                        <ul className="navbar-menu mb-0">
                                            {/* Example Dropdown */}
                                            <li className="navbar-item dropdown">
                                                <button
                                                    className="navbar-link"
                                                    onClick={() => setActiveDropdown(activeDropdown === "company" ? null : "company")}
                                                >
                                                    Company
                                                    <svg className="chevron" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                        <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                                    </svg>
                                                </button>
                                                {activeDropdown === "company" && (
                                                    <div className="dropdown-menu show">
                                                        <a href="/aboutus">About Us</a>
                                                        <a href="/blog">Blog</a>
                                                    </div>
                                                )}
                                            </li>
                                        </ul>
                                    </div>
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