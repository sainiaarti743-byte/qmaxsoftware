import React, { useState } from 'react';

export default function Portfolio() {

  return (
  <>
  
  <section className="portfolio-page-wrapper bg-dark mt-5">
    <div className="container">
        <div className="row">
            <div className="col-lg-12  col-md-12 col-sm-12 text-center">
                <div className="portfolio-banner">
                    <span className="sub-heading fw-semibold fs-16 ">
                        Nothing Is Impossible With Us
                    </span>
                    <h1 className="fw-semibold text-white fs-45 mt-5">The Success Stories of Our Clients</h1>
                    <a className="custom-cta-btn banner-btn mt-3"><span>Discuss Project </span></a> &nbsp;
                    <a className="custom-cta-btn mt-3"><span>Explore Portfolio </span></a>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="project-work section-padding">
    <div className="container">
        <div className="row">
            <div className="col-lg-12 text-center mb-3">
                <div className="section-title">
                    <span className="sub-heading fw-semibold fs-16 ">
                        Bespoke Design &amp; Development
                    </span>
                    <h2 className="text-black fs-38 fw-semibold" data-aos="fade-down" data-aos-duration="1500" data-aos-offset="100"> A Small Glimpse of the Best of Our Work
                    </h2>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12">
                <div className="row">
                    <div className="col-lg-11 mx-auto">
                        <nav className="thumb-pagination">
                            <button className="nav-link tab-prev" aria-label="Previous Tab"><i className="fa-solid fa-arrow-left"></i></button>
                             {/* <!-- Left Arrow Entity --> */}

                            <div className="tab-container">
                                <div className="tab active" data-tab="0">Web Development </div>
                                <div className="tab" data-tab="1">Mobile App Development </div>
                                <div className="tab" data-tab="2">Software Development</div>
                                <div className="tab" data-tab="3">E-Commerce</div>
                                <div className="tab" data-tab="4">In-House Products</div>
                                <div className="tab" data-tab="5">AI &amp; ML</div>
                                <div className="tab" data-tab="6">Branding</div>
                                <div className="tab" data-tab="7">Digital Marketing</div>
                            </div>

                            <button className="nav-link tab-next" aria-label="Next Tab"><i className="fa-solid fa-arrow-right"></i></button>
                             {/* <!-- Right Arrow Entity --> */}
                        </nav>
                    </div>
                </div>


                {/* <!-- Tab Content --> */}
                <div className="tab-content-wrapper">
                    <div className="tab-pane active" data-tab="0">
                        <div className="row">
                            <div className="col-lg-12 mx-auto">
                                <div className="outer-wrap  mt-3 mb-5">
                                    <div className="project-work-wrap bg-1">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <h2 className="text-black fs-30 "> TrainsCafe ~ Delivering Food in Moving Indian Trains
                                                </h2>
                                                <p className="fs-18 fw-regular my-3">TrainsCafe is a first-of-its-kind project in India that delivers food online on moving trains. It required a simple, yet highly dynamic and functional website for idea execution. The client found a bespoke website design with our team. </p>
                                                <div className="row d-flex align-items-baseline">
                                                    <div className="col-lg-12 mt-3">
                                                        <div className="technology-wrap">
                                                            <div className="sub-heading fw-regular fs-20 mb-2">
                                                                Core Technologies
                                                            </div>
                                                            <div className="tech-wrap">
                                                                <span className="text-black">CodeIgniter 4</span> <span className="text-black ">PHP</span> <span className="text-black ">HTML</span> <span className="text-black ">CSS</span> <span className="text-black ">JavaScript</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 mt-3">
                                                        <div className="technology-wrap ">
                                                            <div className="sub-heading fw-regular fs-20 mb-2">
                                                                Deliverables
                                                            </div>
                                                            <div className="tech-wrap">
                                                                <span className="text-black">Logo</span> <span className="text-black ">Website</span> <span className="text-black ">Web Application</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- <a className="custom-cta-btn banner-btn mt-3"><span>View Case Study </span></a>  --> */}
                                                </div>
                                            </div>
                                            <div className="col-lg-6 text-center">
                                                <div className="project-img">
                                                    <img src="https://ezulix.com/assets/image/portfolio/project-img/trains-cafe.png" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="outer-wrap mt-3 mb-5">
                                    <div className="project-work-wrap bg-2">
                                        <div className="row">
                                            <div className="col-lg-6 order-1">
                                                <h2 className="text-black fs-30"> Career Socho ~ Dedicated Listing &amp; Information Platform for Educational Businesses

                                                </h2>
                                                <p className="fs-18 fw-regular my-3">Career Socho is an online business listing platform for the educational industry and an informative content delivery platform for students. The client needed a functional website, and team Qmax delivered a simple, sober, and comprehensive design with effortless functionality. </p>
                                                <div className="row d-flex align-items-baseline">
                                                    <div className="col-lg-12 mt-3">
                                                        <div className="technology-wrap">
                                                            <div className="sub-heading fw-regular fs-20 mb-2">
                                                                Core Technologies
                                                            </div>
                                                            <div className="tech-wrap">
                                                                <span className="text-black">CodeIgniter 4</span> <span className="text-black ">PHP</span> <span className="text-black ">HTML</span> <span className="text-black ">CSS</span> <span className="text-black ">JavaScript</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 mt-3">
                                                        <div className="technology-wrap ">
                                                            <div className="sub-heading fw-regular fs-20 mb-2">
                                                                Deliverables
                                                            </div>
                                                            <div className="tech-wrap">
                                                                <span className="text-black">Logo</span> <span className="text-black ">Website</span> <span className="text-black ">Web Application</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- <a className="custom-cta-btn banner-btn mt-3"><span>View Case Study </span></a>  --> */}
                                                </div>
                                            </div>
                                            <div className="col-lg-6 order-2 text-center">
                                                <div className="project-img">
                                                    <img src="https://ezulix.com/assets/image/portfolio/projects/career-socho.webp" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="outer-wrap  mt-3 mb-5">
                                    <div className="project-work-wrap bg-3">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <h2 className="text-black fs-30"> Your Yards ~ User-Friendly Property Listing Platform
                                                </h2>
                                                <p className="fs-18 fw-regular my-3">Your Yards is a property listing platform that deals in residential, commercial, and rental properties. The client required a fast-performing website with a simple and elegant design with a core focus on functionality. Qmax provided the client with a bespoke website design. </p>
                                                <div className="row d-flex align-items-baseline">
                                                    {/* <!-- <div className="col-lg-6">
                                                        <div className="technology-wrap">
                                                            <div className="sub-heading fw-regular fs-20 mb-2">
                                                                Core Technologies
                                                            </div>
                                                            <div className="tech-wrap">
                                                                <span className="text-black">CodeIgniter 4</span> <span className="text-black ">PHP</span> <span className="text-black ">HTML</span> <span className="text-black ">CSS</span> <span className="text-black ">JavaScript</span>
                                                            </div>
                                                        </div>
                                                    </div> --> */}
                                                    <div className="col-lg-12 mt-3">
                                                        <div className="technology-wrap ">
                                                            <div className="sub-heading fw-regular fs-20 mb-2">
                                                                Deliverables
                                                            </div>
                                                            <div className="tech-wrap">
                                                                <span className="text-black">Logo</span> <span className="text-black ">Website</span> <span className="text-black ">Property Listing Web App</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- <a className="custom-cta-btn banner-btn mt-3"><span>View Case Study </span></a>  --> */}
                                                </div>
                                            </div>
                                            <div className="col-lg-6 text-center">
                                                <div className="project-img">
                                                    <img src="https://ezulix.com/assets/image/portfolio/projects/your-yards.webp" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="outer-wrap mt-3 mb-5">
                                    <div className="project-work-wrap bg-4">
                                        <div className="row">
                                            <div className="col-lg-6 order-1">
                                                <h2 className="text-black fs-30"> Casinex ~ On-Demand Corporate Website Design
                                                </h2>
                                                <p className="fs-18 fw-regular my-3">Casinex is a FinTech business that provides solutions for AePS, BBPS, Domestic Money Transfer (DMT), etc. It needed a Minimum Viable Product (MVP) corporate website with a customised design. The client found a website design just the way he wanted.
                                                </p>
                                                <div className="row d-flex align-items-baseline">
                                                    {/* <!-- <div className="col-lg-6">
                                                        <div className="technology-wrap">
                                                            <div className="sub-heading fw-regular fs-20 mb-2">
                                                                Core Technologies
                                                            </div>
                                                            <div className="tech-wrap">
                                                                <span className="text-black">CodeIgniter 4</span> <span className="text-black ">PHP</span> <span className="text-black ">HTML</span> <span className="text-black ">CSS</span> <span className="text-black ">JavaScript</span>
                                                            </div>
                                                        </div>
                                                    </div> --> */}
                                                    <div className="col-lg-12 mt-3">
                                                        <div className="technology-wrap ">
                                                            <div className="sub-heading fw-regular fs-20 mb-2">
                                                                Deliverables
                                                            </div>
                                                            <div className="tech-wrap">
                                                                <span className="text-black">Logo</span> <span className="text-black ">Website</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- <a className="custom-cta-btn banner-btn mt-3"><span>View Case Study </span></a>  --> */}
                                                </div>
                                            </div>
                                            <div className="col-lg-6 order-2 text-center">
                                                <div className="project-img">
                                                    <img src="https://ezulix.com/assets/image/portfolio/projects/Casinex.webp" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="outer-wrap  mt-3 mb-5">
                                    <div className="project-work-wrap bg-5">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <h2 className="text-black fs-30"> Sanskar Prime Hotel ~ Website with Online Booking Functionality
                                                </h2>
                                                <p className="fs-18 fw-regular my-3">Sanskar Prime is a renowned hotel in Jaipur, Rajasthan. The client came to us with a requirement for a web app with online hotel booking functionality. Our web development team delivered a dynamically functional web app that manages online booking.</p>
                                                <div className="row d-flex align-items-baseline">
                                                    {/* <!-- <div className="col-lg-6">
                                                        <div className="technology-wrap">
                                                            <div className="sub-heading fw-regular fs-20 mb-2">
                                                                Core Technologies
                                                            </div>
                                                            <div className="tech-wrap">
                                                                <span className="text-black">CodeIgniter 4</span> <span className="text-black ">PHP</span> <span className="text-black ">HTML</span> <span className="text-black ">CSS</span> <span className="text-black ">JavaScript</span>
                                                            </div>
                                                        </div>
                                                    </div> --> */}
                                                    <div className="col-lg-12 mt-3">
                                                        <div className="technology-wrap ">
                                                            <div className="sub-heading fw-regular fs-20 mb-2">
                                                                Deliverables
                                                            </div>
                                                            <div className="tech-wrap">
                                                                <span className="text-black">Logo</span> <span className="text-black ">Website</span> <span className="text-black ">Hotel Booking Web App</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- <a className="custom-cta-btn banner-btn mt-3"><span>View Case Study </span></a>  --> */}
                                                </div>
                                            </div>
                                            <div className="col-lg-6 text-center">
                                                <div className="project-img">
                                                    <img src="https://ezulix.com/assets/image/portfolio/projects/sanskar-prime-hotel.webp" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane" data-tab="1">
                        <div className="row">
                            <div className="col-lg-12 mx-auto">
                                <div className="outer-wrap  mt-3 mb-5">
                                    <div className="project-work-wrap bg-1">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <h2 className="text-black fs-30"> KaamDaar ~ Get Labour At Doorstep
                                                </h2>
                                                <p className="fs-18 fw-regular my-3">KaamDaar is a first-of-its-kind app in India that connects labourers with service seekers. From plumbers to painters, electricians, technicians, carpenters, and more, KaamDaar provides doorstep services. The client needed a mobile app development team that could work as per his instructions. Qmax has been a reliable partner for the client. </p>
                                                <div className="row d-flex align-items-baseline">
                                                    <div className="col-lg-12 mt-3">
                                                        <div className="technology-wrap">
                                                            <div className="sub-heading fw-regular fs-20 mb-2">
                                                                App Highlights
                                                            </div>
                                                            <div className="tech-wrap">
                                                                <span className="text-black">Unique Model
                                                                </span> <span className="text-black ">B2C + B2B</span> <span className="text-black ">User-Friendly Interface</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- <a className="custom-cta-btn banner-btn mt-3"><span>View Case Study </span></a>  --> */}
                                                </div>
                                            </div>
                                            <div className="col-lg-6 text-center">
                                                <div className="project-img">
                                                    <img src="https://ezulix.com/assets/image/portfolio/projects/KaamDaar.webp" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="outer-wrap mt-3 mb-5">
                                    <div className="project-work-wrap bg-2">
                                        <div className="row">
                                            <div className="col-lg-6 order-1">
                                                <h2 className="text-black fs-30"> Date Dash ~ Date Blind, Vibe Through AI

                                                </h2>
                                                <p className="fs-18 fw-regular my-3">Date Dash is India’s first fully Artificial Intelligence and Machine Learning driven blind dating app. It understands the user’s values, philosophies, expectations, and preferences and recommends the most suitable matches accordingly. Team Qmax has delivered a high-performance app with seamless AI-ML integration. </p>
                                                <div className="row d-flex align-items-baseline">
                                                    <div className="col-lg-12 mt-3">
                                                        <div className="technology-wrap">
                                                            <div className="sub-heading fw-regular fs-20 mb-2">
                                                                App Highlights
                                                            </div>
                                                            <div className="tech-wrap">
                                                                <span className="text-black">Unique Model</span> <span className="text-black ">AI-Driven</span> <span className="text-black ">Powered by ML</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* <!-- <a className="custom-cta-btn banner-btn mt-3"><span>View Case Study </span></a>  --> */}
                                                </div>
                                            </div>
                                            <div className="col-lg-6 order-2 text-center">
                                                <div className="project-img">
                                                    <img src="https://ezulix.com/assets/image/portfolio/projects/date-dash.webp" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="outer-wrap  mt-3 mb-5">
                                    <div className="project-work-wrap bg-3">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <h2 className="text-black fs-30"> Event Networking App (NDA-Protected Client)

                                                </h2>
                                                <p className="fs-18 fw-regular my-3">This client needed a mobile application to connect the talented entertainers with the event organizers and holders. The app required an extensive keyword search and detailed profile creation features as per the business model. From branding to full-stack development, Qmax has provided the client with a 100% personalized experience.
                                                </p>
                                                <div className="row d-flex align-items-baseline">
                                                    {/* <!-- <div className="col-lg-6">
                                                        <div className="technology-wrap">
                                                            <div className="sub-heading fw-regular fs-20 mb-2">
                                                                Core Technologies
                                                            </div>
                                                            <div className="tech-wrap">
                                                                <span className="text-black">CodeIgniter 4</span> <span className="text-black ">PHP</span> <span className="text-black ">HTML</span> <span className="text-black ">CSS</span> <span className="text-black ">JavaScript</span>
                                                            </div>
                                                        </div>
                                                    </div> --> */}
                                                    <div className="col-lg-12 mt-3">
                                                        <div className="technology-wrap ">
                                                            <div className="sub-heading fw-regular fs-20 mb-2">
                                                                App Highlights
                                                            </div>
                                                            <div className="tech-wrap">
                                                                <span className="text-black">On-Demand Functionality</span> <span className="text-black ">Glamorous Branding</span> <span className="text-black ">Robust Database Management</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- <a className="custom-cta-btn banner-btn mt-3"><span>View Case Study </span></a>  --> */}
                                                </div>
                                            </div>
                                            <div className="col-lg-6 text-center">
                                                <div className="project-img">
                                                    <img src="https://ezulix.com/assets/image/portfolio/projects/comming-soon.webp" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="outer-wrap mt-3 mb-5">
                                    <div className="project-work-wrap bg-4">
                                        <div className="row">
                                            <div className="col-lg-6 order-1">
                                                <h2 className="text-black fs-30"> Latest Social Media App (NDA-Protected Client)
                                                </h2>
                                                <p className="fs-18 fw-regular my-3">This client required a short video content app with a totally unique user interface. The client wanted to stand out among various short video apps through its UI design and overall user experience. Team Qmax presented the client with out-of-the-box UI ideas. The satisfied client handed over the project to us, and the outcome was truly amazing.
                                                </p>
                                                <div className="row d-flex align-items-baseline">
                                                    {/* <!-- <div className="col-lg-6">
                                                        <div className="technology-wrap">
                                                            <div className="sub-heading fw-regular fs-20 mb-2">
                                                                Core Technologies
                                                            </div>
                                                            <div className="tech-wrap">
                                                                <span className="text-black">CodeIgniter 4</span> <span className="text-black ">PHP</span> <span className="text-black ">HTML</span> <span className="text-black ">CSS</span> <span className="text-black ">JavaScript</span>
                                                            </div>
                                                        </div>
                                                    </div> --> */}
                                                    <div className="col-lg-12 mt-3">
                                                        <div className="technology-wrap ">
                                                            <div className="sub-heading fw-regular fs-20 mb-2">
                                                                App Highlights
                                                            </div>
                                                            <div className="tech-wrap">
                                                                <span className="text-black">Unique UI
                                                                </span> <span className="text-black ">AI-Driven</span> <span className="text-black ">Powered by ML
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- <a className="custom-cta-btn banner-btn mt-3"><span>View Case Study </span></a>  --> */}
                                                </div>
                                            </div>
                                            <div className="col-lg-6 order-2 text-center">
                                                <div className="project-img">
                                                     <img src="https://ezulix.com/assets/image/portfolio/projects/comming-soon.webp" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- <div className="outer-wrap  mt-3 mb-5">
                                    <div className="project-work-wrap bg-5">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <h2 className="text-black fs-30"> PayHind ~ Pay Any Bill Online In A Few Clicks

                                                </h2>
                                                <p className="fs-18 fw-regular my-3">PayHind is an Indian app that combines different online bill payment services in a single dashboard. From AePS to BBPS, Multi-Recharge, Domestic Money Transfer (DMT), and many more, PayHind saves its users from standing in long queues. Qmax delivered a user-friendly application for easy and secure payments.
                                                </p>
                                                <div className="row d-flex align-items-baseline">
                                                  
                                                    <div className="col-lg-12 mt-3">
                                                        <div className="technology-wrap ">
                                                            <div className="sub-heading fw-regular fs-20 mb-2">
                                                                App Highlights

                                                            </div>
                                                            <div className="tech-wrap">
                                                                <span className="text-black">End-to-End Encryption</span> <span className="text-black ">Secure Payments</span> <span className="text-black ">Integrated Analytics</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                  
                                                </div>
                                            </div>
                                            <div className="col-lg-6 text-center">
                                                <div className="project-img">
                                                     <img src="https://ezulix.com/assets/image/portfolio/projects/comming-soon.webp" alt="">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> --> */}
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane" data-tab="2">
                        <div className="row">
                            <div className="col-lg-12 mx-auto">
                                <div className="outer-wrap  mt-3 mb-5">
                                    <div className="project-work-wrap bg-1" id="Equity2Commodity">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <h2 className="text-black fs-30"> Equity2Commodity Learning Management System (LMS)
                                                </h2>
                                                <p className="fs-18 fw-regular my-3">Equity2Commodity is a renowned YouTube channel that provides training in stock trading. The business needed to grow as an independent digital university and required an AI-supported LMS. Our developers effortlessly transformed E2C into a digital university. </p>
                                                <div className="row d-flex align-items-baseline">
                                                    <div className="col-lg-12 mt-3">
                                                        <div className="technology-wrap">
                                                            <div className="sub-heading fw-regular fs-20 mb-2">
                                                                Core Technologies
                                                            </div>
                                                            <div className="tech-wrap">
                                                                <span className="text-black">NodeJS</span> <span className="text-black ">ReactJS</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 mt-3">
                                                        <div className="technology-wrap ">
                                                            <div className="sub-heading fw-regular fs-20 mb-2">
                                                                Deliverables
                                                            </div>
                                                            <div className="tech-wrap">
                                                                <span className="text-black">Website</span> <span className="text-black ">Learning Management System (LMS)
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- <a className="custom-cta-btn banner-btn mt-3"><span>View Case Study </span></a>  --> */}
                                                </div>
                                            </div>
                                            <div className="col-lg-6 text-center">
                                                <div className="project-img">
                                                    <img src="https://ezulix.com/assets/image/portfolio/projects/equity-commodity.webp" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="outer-wrap mt-3 mb-5">
                                    <div className="project-work-wrap bg-2" id="infomed">
                                        <div className="row">
                                            <div className="col-lg-6 order-1">
                                                <h2 className="text-black fs-30"> InfoMed Inventory Management System</h2>
                                                <p className="fs-18 fw-regular my-3">InfoMed is an online pharmacy business that required a decent website and a well-functioning inventory management system, fully customised to their brand image. Our web and software engineers delivered an enterprise-grade inventory management system and aesthetic website. </p>
                                                <div className="row d-flex align-items-baseline">

                                                    <div className="col-lg-12 mt-3">
                                                        <div className="technology-wrap ">
                                                            <div className="sub-heading fw-regular fs-20 mb-2">
                                                                Deliverables
                                                            </div>
                                                            <div className="tech-wrap">
                                                                <span className="text-black">Website</span> <span className="text-black ">Inventory Management System
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- <a className="custom-cta-btn banner-btn mt-3"><span>View Case Study </span></a>  --> */}
                                                </div>
                                            </div>
                                            <div className="col-lg-6 order-2 text-center">
                                                <div className="project-img">
                                                    <img src="https://ezulix.com/assets/image/portfolio/projects/Infomed.webp" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="outer-wrap  mt-3 mb-5">
                                    <div className="project-work-wrap bg-3" id="letuscode">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <h2 className="text-black fs-30"> Human Resource Management System (HRMS) for Let Us Code
                                                </h2>
                                                <p className="fs-18 fw-regular my-3">Let Us Code is an IT company that needed a multi-tasking Human Resource Management System that also schedules tasks and provides employee reporting. Software Engineers of Qmax executed this unique idea with due diligence and patience.
                                                </p>
                                                <div className="row d-flex align-items-baseline">
                                                    <div className="col-lg-6">
                                                        <div className="technology-wrap">
                                                            <div className="sub-heading fw-regular fs-20 mb-2">
                                                                Core Technologies
                                                            </div>
                                                            <div className="tech-wrap">
                                                                <span className="text-black">PHP </span> <span className="text-black ">React</span> <span className="text-black ">MySQL
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 mt-3">
                                                        <div className="technology-wrap ">
                                                            <div className="sub-heading fw-regular fs-20 mb-2">
                                                                Deliverables
                                                            </div>
                                                            <div className="tech-wrap">
                                                                <span className="text-black">Multi-Tasking HRMS</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- <a className="custom-cta-btn banner-btn mt-3"><span>View Case Study </span></a>  --> */}
                                                </div>
                                            </div>
                                            <div className="col-lg-6 text-center">
                                                <div className="project-img">
                                                   <img src="https://ezulix.com/assets/image/portfolio/projects/letscode.webp" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane" data-tab="3">
                        <div className="row">
                            <div className="col-lg-12 mx-auto">
                                <div className="outer-wrap  mt-3 mb-5">
                                    <div className="project-work-wrap bg-1">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <h2 className="text-black fs-30"> Printylish ~ Fully Customised E-Commerce in Gifting Category

                                                </h2>
                                                <p className="fs-18 fw-regular my-3">Printylish is a fully customised E-commerce platform in the gifting industry. Tired of uncustomisable Shopify designs, Printylish needed an e-commerce web app developed from scratch. Our web developers delivered a seamless web app with a 100% customised design. </p>
                                                <div className="row d-flex align-items-baseline">
                                                    <div className="col-lg-12 mt-3">
                                                        <div className="technology-wrap">
                                                            <div className="sub-heading fw-regular fs-20 mb-2">
                                                                Core Technologies
                                                            </div>
                                                            <div className="tech-wrap">
                                                                <span className="text-black">Node JS</span> <span className="text-black ">Express JS</span> <span className="text-black ">React JS</span> <span className="text-black "> Redux</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 mt-3">
                                                        <div className="technology-wrap ">
                                                            <div className="sub-heading fw-regular fs-20 mb-2">
                                                                Deliverables
                                                            </div>
                                                            <div className="tech-wrap">
                                                                <span className="text-black">Logo</span> <span className="text-black ">Website</span> <span className="text-black ">Customised E-Commerce Web App</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- <a className="custom-cta-btn banner-btn mt-3"><span>View Case Study </span></a>  --> */}
                                                </div>
                                            </div>
                                            <div className="col-lg-6 text-center">
                                                <div className="project-img">
                                                    <img src="https://ezulix.com/assets/image/portfolio/projects/printylish.webp" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="outer-wrap mt-3 mb-5">
                                    <div className="project-work-wrap bg-2">
                                        <div className="row">
                                            <div className="col-lg-6 order-1">
                                                <h2 className="text-black fs-30"> E-Commerce Platform for Jewels (NDA-Protected Client)

                                                </h2>
                                                <p className="fs-18 fw-regular my-3">Like Printylish, a renowned jewellery designer, required a fully customised E-commerce platform dedicated to jewellery ornaments. The client demanded strict adherence to the NDA. Qmaxians have provided a fully customised e-commerce web app, maintaining due confidentiality. </p>
                                                <div className="row d-flex align-items-baseline">
                                                    <div className="col-lg-12 mt-3">
                                                        <div className="technology-wrap">
                                                            <div className="sub-heading fw-regular fs-20 mb-2">
                                                                Core Technologies
                                                            </div>
                                                            <div className="tech-wrap">
                                                                <span className="text-black">Node JS</span> <span className="text-black ">Express JS</span> <span className="text-black ">React JS </span> <span className="text-black ">Redux</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 mt-3">
                                                        <div className="technology-wrap ">
                                                            <div className="sub-heading fw-regular fs-20 mb-2">
                                                                Deliverables
                                                            </div>
                                                            <div className="tech-wrap">
                                                                <span className="text-black">Logo</span> <span className="text-black ">Website</span> <span className="text-black ">Customised E-Commerce Web App</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- <a className="custom-cta-btn banner-btn mt-3"><span>View Case Study </span></a>  --> */}
                                                </div>
                                            </div>
                                            <div className="col-lg-6 order-2 text-center">
                                                <div className="project-img">
                                                   <img src="https://ezulix.com/assets/image/portfolio/projects/comming-soon.webp" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane" data-tab="4">
                        <div className="row">
                            <div className="col-lg-12 mx-auto">
                                <div className="outer-wrap  mt-3 mb-5">
                                    <div className="project-work-wrap bg-1">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <h2 className="text-black fs-30"> Customer Relationship Management System (CRM)
                                                </h2>
                                                <p className="fs-18 fw-regular my-3">Qmax has developed a white label CRM system ready to customise. This CRM comes with core functionalities like lead management, sales pipeline visualisation, automated reminders of follow-ups, and analytics and performance dashboards. Our CRM is subscription-free and 100% customisable. </p>
                                                <div className="row d-flex align-items-baseline">

                                                    <div className="col-lg-12 mt-3">
                                                        <div className="technology-wrap ">
                                                            <div className="sub-heading fw-regular fs-20 mb-2">
                                                                Center of Attraction
                                                            </div>
                                                            <div className="tech-wrap">
                                                                <span className="text-black">White Label</span> <span className="text-black ">100% Customisation</span> <span className="text-black ">AI-Efficient
                                                                </span><span className="text-black ">Mobile Responsive
                                                                </span><span className="text-black ">Cloud-Based

                                                                </span><span className="text-black ">Subscription-Free

                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- <a className="custom-cta-btn banner-btn mt-3"><span>View Case Study </span></a>  --> */}
                                                </div>
                                            </div>
                                            <div className="col-lg-6 text-center">
                                                <div className="project-img">
                                                    <img src="https://ezulix.com/assets/image/portfolio/projects/crm.webp" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="outer-wrap mt-3 mb-5">
                                    <div className="project-work-wrap bg-2">
                                        <div className="row">
                                            <div className="col-lg-6 order-1">
                                                <h2 className="text-black fs-30"> Restaurant Management System (RMS)

                                                </h2>
                                                <p className="fs-18 fw-regular my-3">Team Qmax has developed a comprehensive Restaurant Management System that provides complete restaurant automation by digitalizing menu, order, table-booking, inventory management, and billing processes. Our RMS also provides sales and performance reports, perfect for a delicious business journey. </p>
                                                <div className="row d-flex align-items-baseline">
                                                    <div className="col-lg-12 mt-3">
                                                        <div className="technology-wrap ">
                                                            <div className="sub-heading fw-regular fs-20 mb-2">
                                                                Center of Attraction
                                                            </div>
                                                            <div className="tech-wrap">
                                                                <span className="text-black">White Label</span> <span className="text-black ">100% Customisation</span> <span className="text-black ">AI-Driven</span>
                                                                <span className="text-black">Mobile Responsive</span> <span className="text-black ">Cloud-Based</span> <span className="text-black ">Subscription-Free</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- <a className="custom-cta-btn banner-btn mt-3"><span>View Case Study </span></a>  --> */}
                                                </div>
                                            </div>
                                            <div className="col-lg-6 order-2 text-center">
                                                <div className="project-img">
                                                    <img src="https://ezulix.com/assets/image/portfolio/projects/restaurant-management.webp" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="outer-wrap  mt-3 mb-5">
                                    <div className="project-work-wrap bg-3">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <h2 className="text-black fs-30"> Inventory Management Systems (IMS)
                                                </h2>
                                                <p className="fs-18 fw-regular my-3">We have also developed a smart inventory management system customisable for all business industries. Our inventory manager comes with exciting features like AI-driven stock tracking, bar code scanning support, low-stock alerts, order management, multi-warehouse control, and many more. This IMS provides real-time updates for hassle-free stock management. </p>
                                                <div className="row d-flex align-items-baseline">
                                                  
                                                    <div className="col-lg-12 mt-3">
                                                        <div className="technology-wrap ">
                                                            <div className="sub-heading fw-regular fs-20 mb-2">
                                                                Center of Attraction
                                                            </div>
                                                            <div className="tech-wrap">
                                                                <span className="text-black">White Label</span> <span className="text-black ">100% Customisation</span> <span className="text-black ">AI-Driven</span>
                                                                <span className="text-black">Mobile Responsive</span> <span className="text-black ">Cloud-Based</span> <span className="text-black ">Subscription-Free</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- <a className="custom-cta-btn banner-btn mt-3"><span>View Case Study </span></a>  --> */}
                                                </div>
                                            </div>
                                            <div className="col-lg-6 text-center">
                                                <div className="project-img">
                                                    <img src="https://ezulix.com/assets/image/portfolio/projects/inventory-management.webp" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="outer-wrap mt-3 mb-5">
                                    <div className="project-work-wrap bg-4">
                                        <div className="row">
                                            <div className="col-lg-6 order-1">
                                                <h2 className="text-black fs-30"> School Management System (SMS)
                                                </h2>
                                                <p className="fs-18 fw-regular my-3">Our School Management System (SMS) is designed for all kinds of educational institutions. It helps automating and digitalizing the complete business process for educational institutions from admission to examination. The SMS can also provide built-in CRM functions for effortless student, admin, and learning management.
                                                </p>
                                                <div className="row d-flex align-items-baseline">
                                                 
                                                    <div className="col-lg-12 mt-3">
                                                        <div className="technology-wrap ">
                                                            <div className="sub-heading fw-regular fs-20 mb-2">
                                                                Center of Attraction
                                                            </div>
                                                            <div className="tech-wrap">
                                                                <span className="text-black">White Label</span> <span className="text-black ">100% Customisation</span>
                                                                <span className="text-black ">AI-Driven</span>
                                                                <span className="text-black ">Mobile Responsive</span>
                                                                <span className="text-black ">Cloud-Based</span>
                                                                <span className="text-black ">Subscription-Free</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- <a className="custom-cta-btn banner-btn mt-3"><span>View Case Study </span></a>  --> */}
                                                </div>
                                            </div>
                                            <div className="col-lg-6 order-2 text-center">
                                                <div className="project-img">
                                                    <img src="https://ezulix.com/assets/image/portfolio/projects/school-management.webp" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="outer-wrap  mt-3 mb-5">
                                    <div className="project-work-wrap bg-5">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <h2 className="text-black fs-30"> Property Listing Platform
                                                </h2>
                                                <p className="fs-18 fw-regular my-3">For the real estate industry, a property listing platform is a common requirement. To ensure a faster time to the market for real estate businesses, Qmax provides an intuitive Property Listing Platform (PLP). Fully customizable, mobile-responsive, and highly user-friendly interface, our ready-to-integrate PLP is built for high-performance and engaging user experience.</p>
                                                <div className="row d-flex align-items-baseline">
                                                    {/* <!-- <div className="col-lg-6">
                                                        <div className="technology-wrap">
                                                            <div className="sub-heading fw-regular fs-20 mb-2">
                                                                Core Technologies
                                                            </div>
                                                            <div className="tech-wrap">
                                                                <span className="text-black">CodeIgniter 4</span> <span className="text-black ">PHP</span> <span className="text-black ">HTML</span> <span className="text-black ">CSS</span> <span className="text-black ">JavaScript</span>
                                                            </div>
                                                        </div>
                                                    </div> --> */}
                                                    <div className="col-lg-12 mt-3">
                                                        <div className="technology-wrap ">
                                                            <div className="sub-heading fw-regular fs-20 mb-2">
                                                                Center of Attraction
                                                            </div>
                                                            <div className="tech-wrap">
                                                                <span className="text-black">White Label
                                                                </span> <span className="text-black ">100% Customisation</span> <span className="text-black ">AI-Integration Available</span>
                                                                <span className="text-black ">Data-Driven
                                                                </span>
                                                                <span className="text-black ">Cloud-Based</span>
                                                                <span className="text-black ">Subscription-Free</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- <a className="custom-cta-btn banner-btn mt-3"><span>View Case Study </span></a>  --> */}
                                                </div>
                                            </div>
                                            <div className="col-lg-6 text-center">
                                                <div className="project-img">
                                                    <img src="https://ezulix.com/assets/image/portfolio/projects/property-listing.webp" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                               

 <div className="outer-wrap  mt-3 mb-5">
                                    <div className="project-work-wrap bg-2">
                                        <div className="row">
                                            <div className="col-lg-6 order-1">
                                                <h2 className="text-black fs-30">Dating &amp; Social Networking
                                                </h2>
                                                <p className="fs-18 fw-regular my-3">We have developed a dating and social networking app that a business can rebrand and personalize with new features and functions. Whether social networking or match-making for dating and matrimony, our product is powered by AI for best match recommendation and ensures high user engagement.
                                                </p>
                                                <div className="row d-flex align-items-baseline">
                                                 
                                                    <div className="col-lg-12 mt-3">
                                                        <div className="technology-wrap ">
                                                            <div className="sub-heading fw-regular fs-20 mb-2">
                                                                Center of Attraction
                                                            </div>
                                                            <div className="tech-wrap">
                                                                <span className="text-black">White Label
                                                                </span> <span className="text-black ">100% Customisation</span> <span className="text-black ">AI-Integration Available</span>
                                                                <span className="text-black ">ML-Integration Available

                                                                </span>
                                                                <span className="text-black ">Cloud-Based</span>
                                                                <span className="text-black ">Subscription-Free</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- <a className="custom-cta-btn banner-btn mt-3"><span>View Case Study </span></a>  --> */}
                                                </div>
                                            </div>
                                            <div className="col-lg-6 order-2 text-center">
                                                <div className="project-img">
                                                    <img src="https://ezulix.com/assets/image/portfolio/projects/social-media.webp" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="outer-wrap  mt-3 mb-5">
                                    <div className="project-work-wrap bg-3">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <h2 className="text-black fs-30"> Classified Advertising Platform

                                                </h2>
                                                <p className="fs-18 fw-regular my-3">We have a decent classNameified advertising platform for businesses in the ad-posting industry. The platform comes with core features and functions like easy ad-posting, extensive filterations, and robust admin dashboards. This product comes with a comprehensive admin interface for super-easy content management.</p>
                                                <div className="row d-flex align-items-baseline">
                                                  
                                                    <div className="col-lg-12 mt-3">
                                                        <div className="technology-wrap ">
                                                            <div className="sub-heading fw-regular fs-20 mb-2">
                                                                Center of Attraction
                                                            </div>
                                                            <div className="tech-wrap">
                                                                <span className="text-black">White Label
                                                                </span> <span className="text-black ">100% Customisation</span> <span className="text-black ">AI-Integration Available</span>
                                                                <span className="text-black ">ML-Integration Available

                                                                </span>
                                                                <span className="text-black ">Cloud-Based</span>
                                                                <span className="text-black ">Subscription-Free</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- <a className="custom-cta-btn banner-btn mt-3"><span>View Case Study </span></a>  --> */}
                                                </div>
                                            </div>
                                            <div className="col-lg-6 text-center">
                                                <div className="project-img">
                                                    <img src="https://ezulix.com/assets/image/portfolio/projects/social-media.webp" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane" data-tab="5">
                        <div className="row">
                            <div className="col-lg-12 mx-auto">
                                <div className="outer-wrap  mt-3 mb-5">
                                    <div className="project-work-wrap bg-1">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <h2 className="text-black fs-30"> Test Manch ~ Prepare With AI &amp; Get Lucky in Government Exams
                                                </h2>
                                                <p className="fs-18 fw-regular my-3">Strengthen your luck in government exams with AI-powered preparations. Test Manch is a fully AI-driven platform that conducts online student assessment, generates feedback, and strengthens the preparation of government job aspirants. Qmax has developed this project such that it provides complete preparation automation with 100% accuracy. </p>

                                            </div>
                                            <div className="col-lg-6 text-center">
                                                <div className="project-img">
                                                    <img src="https://ezulix.com/assets/image/portfolio/projects/test-manch.webp" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                              
                                <div className="outer-wrap  mt-3 mb-5">
                                    <div className="project-work-wrap bg-3">
                                        <div className="row">
                                            <div className="col-lg-6 order-1">
                                                <h2 className="text-black fs-30"> Date Dash ~ AI Not Just for Match Making, But to Connect Soul Mates
                                                </h2>
                                                <p className="fs-18 fw-regular my-3">The dating app Date Dash is fully built upon Artificial Intelligence. It leverages Machine Learning technology to understand the user behaviour and preferences. Based on this understanding, the app provides fully personalised match recommendations to the user. This way, the app provides 100 times better matchmaking than existing dating apps in the market. </p>

                                            </div>
                                            <div className="col-lg-6 text-center order-2">
                                                <div className="project-img">
                                                    <img src="https://ezulix.com/assets/image/portfolio/projects/date-dash.webp" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane" data-tab="6">
                        <div className="row">
                            <div className="col-lg-12 mx-auto">
                                <div className="outer-wrap  mt-3 mb-5">
                                    <div className="project-work-wrap bg-1">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <h2 className="text-black fs-30"> KaamDaar ~ Brand That Equally Connects to Labourers and Customers
                                                </h2>
                                                <p className="fs-18 fw-regular my-3">The target audience of KaamDaar has two segments of target audience that are poles apart. The first segment is the customers looking for labourers, and the other segment is the labourers themselves. KaamDaar needed a brand voice that connects to both segments equally. Qmax maintained a bifurcated brand voice for different app versions to justify the brand. </p>

                                            </div>
                                            <div className="col-lg-6 text-center">
                                                <div className="project-img">
                                                    <img src="https://ezulix.com/assets/image/portfolio/projects/KaamDaar.webp" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="outer-wrap mt-3 mb-5">
                                    <div className="project-work-wrap bg-2">
                                        <div className="row">
                                            <div className="col-lg-6 order-1">
                                                <h2 className="text-black fs-30"> TrainsCafe ~ A Logo Which Tells The Whole Story

                                                </h2>
                                                <p className="fs-18 fw-regular my-3">As TrainsCafe was a totally first-of-its-kind product, designing the logo was a big challenge. The client wanted a fusion of two distinctive elements - Trains and Food. Qmax has executed the challenge with due diligence and creativity. Especially, the client was fully satisfied with our graphic designers. </p>

                                            </div>
                                            <div className="col-lg-6 order-2 text-center">
                                                <div className="project-img">
                                                    <img src="https://ezulix.com/assets/image/portfolio/projects/trains-cafe.webp" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                             

                            </div>
                        </div>
                    </div>
                    <div className="tab-pane" data-tab="7">
                        <div className="row">
                            <div className="col-lg-12 mx-auto">
                                <div className="outer-wrap  mt-3 mb-5">
                                    <div className="project-work-wrap bg-1">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <h2 className="text-black fs-30"> DGSHAPE Dental India: Full Funnel Digital Marketing From Awareness to Conversion

                                                </h2>
                                                <p className="fs-18 fw-regular my-3">Well established in Japan, the USA, Italy, France, and overall more than 10 countries, when DGSHAPE decided to penetrate the Indian market, it trusted Qmax for its 360-degree launch and marketing. Qmax handled the full funnel marketing.</p>
                                                <div className="row d-flex align-items-baseline">
                                                    <div className="col-lg-12 mt-3">
                                                        <div className="technology-wrap">
                                                            <div className="sub-heading fw-regular fs-20 mb-2">
                                                                Project Highlights
                                                            </div>
                                                            <div className="tech-wrap">
                                                                <span className="text-black">100% Client Satisfaction
                                                                </span> <span className="text-black ">25% Improved Reach</span> <span className="text-black ">50% Better Social Media Presence</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="col-lg-6 text-center">
                                                <div className="project-img">
                                                    <img src="https://ezulix.com/assets/image/portfolio/projects/dgshapes.webp" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    </div>
</section>
  </>
  );
}