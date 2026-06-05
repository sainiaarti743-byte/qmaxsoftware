import React from "react";


const OnDemandAppDevelopment = () => {

    return (

        <>
            <div className="ondemand-page-wrapper">

                {/* <!-- banner section  --> */}
                <section className="page-banner">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 my-3">
                                <div className="banner_details position-relative">
                                    <div className="banner-wrapper">
                                        <h1 className="fw-semibold fs-48 mb-3 text-white">#1 On-Demand App Development Company ~ Based in India, Trusted Worldwide</h1>
                                        <p className="fw-semilight  text-white fs-20 mt-2 mb-5">Convert Your Raw App Development
                                            Ideas to Lucrative Business Mobile Applications with trusted mobile app development in India. Choose Qmax, the leading Mobile App Development Company in India, for Fully Customized Apps. Your Imagination, Our Code.</p>
                                        <a className="button-71" href="javascript:void(0);" role="button" aria-label="Call Button"  onClick={(e) => e.preventDefault()}>Consult with App Expert Now <i className="ezulix-long-arrow-right "></i></a>
                                    </div>
                                    <div className="banner-shap position-relative">
                                        <span className="ball1"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 my-3 ">
                                <div className="contact-form-details">
                                    <div className="text-center">
                                        <h6 className=" text-white fw-regular position-relative mb-3 fs-24">Get in Touch With Us</h6>
                                    </div>
                                    <hr className="bg-white" />
                                    <form id="banner_form" name="banner_form" novalidate="novalidate" className="row">
                                        <input type="hidden" name="csrf_test_name" value="791c94e98975f5f7648bf0fca4cef35d" />
                                        <input type="hidden" name="source" value="On Demand App Development" />

                                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                            <div className="form-group contact-form-fild">

                                                <label for="name_contact" className="control-label">Full Name</label>
                                                <input type="text" id="name_contact" name="name_contact" className="form-control" placeholder="Your Full Name" />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-12  col-sm-12">
                                            <div className="form-group contact-form-fild">
                                                <label for="email_contact" className="control-label">Business Email </label>
                                                <input type="email" id="email_contact" name="email_contact" className="form-control" placeholder="Your Email" />
                                            </div>
                                        </div>
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                            <div className="form-group contact-form-fild multi-filds position-relative">

                                                <label for="phone_contact" className="control-label">Contact Number</label>
                                                <input type="text" id="phone_contact" name="phone_contact" className="form-control phone_number" placeholder="Your Contact Number" oninput="this.value = this.value.replace(/[^0-9.+]/g, ''); this.value = 
                                 this.value.replace(/(\..*)\./g, '$1'); "/>
                                            </div>
                                        </div>
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                            <div className="form-group contact-form-fild price-range-slide">
                                                <label for="contact_price" className="budget-title fw-regular me-1">Project Budget : <i className="ezulix-symbol-rupee"></i> </label>
                                                <select name="contact_price" id="contact_price" className=" w-100" style={{minHeight: '44px', padding: '3px 20px', color: 'var(--bs-gray-dark)', outline: '0', borderRadius: '7px'}}>
                                                    <option value="3lac-5lac"> ₹3 lac – ₹5 lac</option>
                                                    <option value="5lac-10lac"> ₹5 lac – ₹10 lac</option>
                                                    <option value="10lac-20lac"> ₹10 lac – ₹20 lac</option>
                                                    <option value="Above_20lac"> ₹20 lac+</option>
                                                </select>


                                                {/* <!-- <input className="price_input w-100 mt-4" id="slider" type="hidden" value="N/A" max="100000000" min="10000" oninput="amount.value=slider.value" type="range" value="300"> --> */}
                                            </div>
                                        </div>
                                        <div className="col-xl-12 col-lg-12 col-md-12">
                                            <div className="form-group contact-form-fild ">
                                                <label for="message_contact" className="control-label">Message</label>
                                                <textarea type="message" id="message_contact" name="message_contact" className="form-control contact_message_fild" placeholder="Tell us about Your App Idea and Features" minlength="30" maxlength="200" rows="1"></textarea>
                                            </div>
                                        </div>

                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                            <div className="btn-box btn-gradistion text-center mt-4">
                                                <button type="submit" className="form-submit-btn" style={{margin: '0 !important'}} id="login_btn" aria-label="submit">Request Free Consultation</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- marquee section  --> */}
                <div className="marquee" role="region" aria-label="Company highlights">
                    <span className="sr-only" aria-hidden="false">Company highlights: 10+ Years of Excellence, CMMI Level 5 Certified, Serving 20+ Industries Worldwide, 4.6 star average client satisfaction on Google and Clutch, 98% client retention, 1500+ active deployments worldwide.</span>
                    <div className="marquee__track" aria-hidden="false">
                        <div className="marquee__group">
                            <span className="chip">10+ Years of Excellence</span>
                            <span className="separator">|</span>
                            <span className="chip">CMMI Level 5 Certified</span>
                            <span className="separator">|</span>
                            <span className="chip">Serving 20+ Industries Worldwide</span>
                            <span className="separator">|</span>
                            <span className="chip">4.6★ Average Client Satisfaction (Google &amp; Clutch)</span>
                            <span className="separator">|</span>
                            <span className="chip">98% Client Retention</span>
                            <span className="separator">|</span>
                            <span className="chip">1500+ Active Deployments Worldwide</span>
                        </div>
                        {/* <!-- Duplicate copy for seamless loop --> */}
                        <div className="marquee__group" aria-hidden="true">
                            <span className="chip">10+ Years of Excellence</span>
                            <span className="separator">|</span>
                            <span className="chip">CMMI Level 5 Certified</span>
                            <span className="separator">|</span>
                            <span className="chip">Serving 20+ Industries Worldwide</span>
                            <span className="separator">|</span>
                            <span className="chip">4.6★ Average Client Satisfaction (Google &amp; Clutch)</span>
                            <span className="separator">|</span>
                            <span className="chip">98% Client Retention</span>
                            <span className="separator">|</span>
                            <span className="chip">1500+ Active Deployments Worldwide</span>
                        </div>
                    </div>
                </div>

                {/* <!-- Featured Clients Section --> */}
                {/* <section className="testimonial-section-wrapper bg-anti section-padding">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <h2 className="fw-semibold text-center position-relative mb-5 fs-40"> <span className="blue-heading-style">A Trusted On-Demand App Development Company Worldwide</span> for Dedication, Excellence &amp; Top-Notch Quality Products</h2>

                                <div className="owl-carousel testimonial-carousel owl-theme owl-loaded owl-drag">

                                    <div className="owl-stage-outer"><div className="owl-stage" style={{transform: 'translate3d(-2422px, 0px, 0px)', transition: '0.25s', width: '6920px'}}>
                                        <div className="owl-item cloned" style={{width: '336px', marginRight: '10px'}}><div className="testimonial-section">
                                        <div className="testimonial-card">
                                            <div className="profile-image">
                                                <img src="https://ezulix.com/assets/image/on-demand/logos/printylish.png" alt="Rebecca" />
                                            </div>
                                            <div className="testimonial-content">
                                                <h4 className="mb-2 mt-3">Printylish</h4>
                                                <p className="fs-18">“Amazing company for on-demand app development. They go beyond possibilities and create unique mobile apps that can rock the world.”</p>
                                                <h4 className="fs-20">[Founder ~ Somesh Sharma]</h4>
                                            </div>
                                        </div>
                                    </div></div><div className="owl-item cloned" style={{width: '336px', marginRight: '10px'}}><div className="testimonial-section">
                                        <div className="testimonial-card">
                                            <div className="profile-image">
                                                <img src="https://ezulix.com/assets/image/on-demand/logos/kaamdaar.png" alt="Rebecca" />
                                            </div>
                                            <div className="testimonial-content">
                                                <h4 className="mb-2 mt-3">KaamDaar</h4>
                                                <p className="fs-18">“Very cooperative team. I will say that they are the best app developers in India. They are building 4 apps for my business. So far, my experience is amazing.”</p>
                                                <h4 className="fs-20">[Founder ~ Ashish Sharma]</h4>
                                            </div>
                                        </div>
                                    </div></div><div className="owl-item cloned" style={{width: '336px', marginRight: '10px'}}><div className="testimonial-section">
                                        <div className="testimonial-card">
                                            <div className="profile-image">
                                                <img src="https://ezulix.com/assets/image/on-demand/logos/your-yard.png" alt="Rebecca" />
                                            </div>
                                            <div className="testimonial-content">
                                                <h4 className="mb-2 mt-3">Your Yards</h4>
                                                <p className="fs-18">“Amazing company for on-demand app development. They go beyond possibilities and create unique mobile apps that can rock the world.”</p>
                                                <h4 className="fs-20">[Founder ~ Somesh Sharma]</h4>
                                            </div>
                                        </div>
                                    </div></div><div className="owl-item cloned" style={{width: '336px', marginRight: '10px'}}><div className="testimonial-section">
                                        <div className="testimonial-card">
                                            <div className="profile-image">
                                                <img src="https://ezulix.com/assets/image/on-demand/logos/equitytocommidity.png" alt="Rebecca" />
                                            </div>
                                            <div className="testimonial-content">
                                                <h4 className="mb-2 mt-3">Equity2Commodity</h4>
                                                <p className="fs-18">“Really thankful to Qmax for their AI app development services. We could launch our digital university effortlessly with their support.”</p>
                                                <h4 className="fs-20">[Founder ~ Prashant Kumar]</h4>
                                            </div>
                                        </div>
                                    </div></div><div className="owl-item cloned" style={{width: '336px', marginRight: '10px'}}><div className="testimonial-section">
                                        <div className="testimonial-card">
                                            <div className="profile-image">
                                                <img src="https://ezulix.com/assets/image/on-demand/logos/pinwallet.png" alt="Rebecca" />
                                            </div>
                                            <div className="testimonial-content">
                                                <h4 className="mb-2 mt-3">Pinwallet</h4>
                                                <p className="fs-18">“Highly creative mobile app developers in India. Their designs are truly unique, and the app performance is also fast. Very satisfied with their work.”</p>
                                                <h4 className="fs-20">[Founder]</h4>
                                            </div>
                                        </div>
                                    </div></div><div className="owl-item" style={{width: '336px', marginRight: '10px'}}><div className="testimonial-section">
                                        <div className="testimonial-card">
                                            <div className="profile-image">
                                                <img src="https://ezulix.com/assets/image/on-demand/logos/dgshape.png" alt="Rebecca" />
                                            </div>
                                            <div className="testimonial-content">
                                                <h4 className="mb-2 mt-3">DGSHAPE Dental India </h4>
                                                <p className="fs-18">“The web and app development team of Qmax is highly cooperative. They are perfect for on-demand app development.”</p>
                                                <h4 className="fs-20">[Founder ~ Anmmol Arora, Sr. BDE]</h4>
                                            </div>
                                        </div>
                                    </div></div><div className="owl-item" style={{width: '336px', marginRight: '10px'}}><div className="testimonial-section">
                                        <div className="testimonial-card">
                                            <div className="profile-image">
                                                <img src="https://ezulix.com/assets/image/on-demand/logos/infomed.png" alt="Rebecca" />
                                            </div>
                                            <div className="testimonial-content">
                                                <h4 className="mb-2 mt-3">InfoMed</h4>
                                                <p className="fs-18">“Excellent inventory management app developed by their team. The performance is great, and the look and feel is amazing. Best app development company.”</p>
                                                <h4 className="fs-20">[Founder ~ Navjot Singh]</h4>
                                            </div>
                                        </div>
                                    </div></div><div className="owl-item active" style={{width: '336px', marginRight: '10px'}}><div className="testimonial-section">
                                        <div className="testimonial-card">
                                            <div className="profile-image">
                                                <img src="https://ezulix.com/assets/image/on-demand/logos/trainscafe.png" alt="Rebecca" />
                                            </div>
                                            <div className="testimonial-content">
                                                <h4 className="mb-2 mt-3">TrainsCafe</h4>
                                                <p className="fs-18">“Their mobile app developers are very knowledgeable, and the sales team is really cooperative. I got the best app development services.”</p>
                                                <h4 className="fs-20">[Founder ~ Pankaj Jangid]</h4>
                                            </div>
                                        </div>
                                    </div></div><div className="owl-item" style={{width: '336px', marginRight: '10px'}}><div className="testimonial-section">
                                        <div className="testimonial-card">
                                            <div className="profile-image">
                                                <img src="https://ezulix.com/assets/image/on-demand/logos/payhind.png" alt="Rebecca" />
                                            </div>
                                            <div className="testimonial-content">
                                                <h4 className="mb-2 mt-3">PayHind</h4>
                                                <p className="fs-18">“Qmax is the best mobile app development company in India for on-demand projects. They treat your app ideas like their own and work diligently.”</p>
                                                <h4 className="fs-20">[Founder ~ Shadam Khan]</h4>
                                            </div>
                                        </div>
                                    </div></div><div className="owl-item" style={{width: '336px', marginRight: '10px'}}><div className="testimonial-section">
                                        <div className="testimonial-card">
                                            <div className="profile-image">
                                                <img src="https://ezulix.com/assets/image/on-demand/logos/luna-sky.png" alt="Rebecca" />
                                            </div>
                                            <div className="testimonial-content">
                                                <h4 className="mb-2 mt-3">Luna Sky Palace</h4>
                                                <p className="fs-18">“Qmax is a very creative on-demand app development company perfect for those looking for bespoke application features, functions, and design.”</p>
                                                <h4 className="fs-20">[Omar Al Qasimi, Sr. BDE]</h4>
                                            </div>
                                        </div>
                                    </div></div><div className="owl-item" style={{width: '336px', marginRight: '10px'}}><div className="testimonial-section">
                                        <div className="testimonial-card">
                                            <div className="profile-image">
                                                <img src="https://ezulix.com/assets/image/on-demand/logos/printylish.png" alt="Rebecca" />
                                            </div>
                                            <div className="testimonial-content">
                                                <h4 className="mb-2 mt-3">Printylish</h4>
                                                <p className="fs-18">“Amazing company for on-demand app development. They go beyond possibilities and create unique mobile apps that can rock the world.”</p>
                                                <h4 className="fs-20">[Founder ~ Somesh Sharma]</h4>
                                            </div>
                                        </div>
                                    </div></div><div className="owl-item" style={{width: '336px', marginRight: '10px'}}><div className="testimonial-section">
                                        <div className="testimonial-card">
                                            <div className="profile-image">
                                                <img src="https://ezulix.com/assets/image/on-demand/logos/kaamdaar.png" alt="Rebecca" />
                                            </div>
                                            <div className="testimonial-content">
                                                <h4 className="mb-2 mt-3">KaamDaar</h4>
                                                <p className="fs-18">“Very cooperative team. I will say that they are the best app developers in India. They are building 4 apps for my business. So far, my experience is amazing.”</p>
                                                <h4 className="fs-20">[Founder ~ Ashish Sharma]</h4>
                                            </div>
                                        </div>
                                    </div></div><div className="owl-item" style={{width: '336px', marginRight: '10px'}}><div className="testimonial-section">
                                        <div className="testimonial-card">
                                            <div className="profile-image">
                                                <img src="https://ezulix.com/assets/image/on-demand/logos/your-yard.png" alt="Rebecca" />
                                            </div>
                                            <div className="testimonial-content">
                                                <h4 className="mb-2 mt-3">Your Yards</h4>
                                                <p className="fs-18">“Amazing company for on-demand app development. They go beyond possibilities and create unique mobile apps that can rock the world.”</p>
                                                <h4 className="fs-20">[Founder ~ Somesh Sharma]</h4>
                                            </div>
                                        </div>
                                    </div></div><div className="owl-item" style={{width: '336px', marginRight: '10px'}}><div className="testimonial-section">
                                        <div className="testimonial-card">
                                            <div className="profile-image">
                                                <img src="https://ezulix.com/assets/image/on-demand/logos/equitytocommidity.png" alt="Rebecca" />
                                            </div>
                                            <div className="testimonial-content">
                                                <h4 className="mb-2 mt-3">Equity2Commodity</h4>
                                                <p className="fs-18">“Really thankful to Qmax for their AI app development services. We could launch our digital university effortlessly with their support.”</p>
                                                <h4 className="fs-20">[Founder ~ Prashant Kumar]</h4>
                                            </div>
                                        </div>
                                    </div></div><div className="owl-item" style={{width: '336px', marginRight: '10px'}}><div className="testimonial-section">
                                        <div className="testimonial-card">
                                            <div className="profile-image">
                                                <img src="https://ezulix.com/assets/image/on-demand/logos/pinwallet.png" alt="Rebecca" />
                                            </div>
                                            <div className="testimonial-content">
                                                <h4 className="mb-2 mt-3">Pinwallet</h4>
                                                <p className="fs-18">“Highly creative mobile app developers in India. Their designs are truly unique, and the app performance is also fast. Very satisfied with their work.”</p>
                                                <h4 className="fs-20">[Founder]</h4>
                                            </div>
                                        </div>
                                    </div></div><div className="owl-item cloned" style={{width: '336px', marginRight: '10px'}}><div className="testimonial-section">
                                        <div className="testimonial-card">
                                            <div className="profile-image">
                                                <img src="https://ezulix.com/assets/image/on-demand/logos/dgshape.png" alt="Rebecca" />
                                            </div>
                                            <div className="testimonial-content">
                                                <h4 className="mb-2 mt-3">DGSHAPE Dental India </h4>
                                                <p className="fs-18">“The web and app development team of Qmax is highly cooperative. They are perfect for on-demand app development.”</p>
                                                <h4 className="fs-20">[Founder ~ Anmmol Arora, Sr. BDE]</h4>
                                            </div>
                                        </div>
                                    </div></div><div className="owl-item cloned" style={{width: '336px', marginRight: '10px'}}><div className="testimonial-section">
                                        <div className="testimonial-card">
                                            <div className="profile-image">
                                                <img src="https://ezulix.com/assets/image/on-demand/logos/infomed.png" alt="Rebecca" />
                                            </div>
                                            <div className="testimonial-content">
                                                <h4 className="mb-2 mt-3">InfoMed</h4>
                                                <p className="fs-18">“Excellent inventory management app developed by their team. The performance is great, and the look and feel is amazing. Best app development company.”</p>
                                                <h4 className="fs-20">[Founder ~ Navjot Singh]</h4>
                                            </div>
                                        </div>
                                    </div></div><div className="owl-item cloned" style={{width: '336px', marginRight: '10px'}}><div className="testimonial-section">
                                        <div className="testimonial-card">
                                            <div className="profile-image">
                                                <img src="https://ezulix.com/assets/image/on-demand/logos/trainscafe.png" alt="Rebecca" />
                                            </div>
                                            <div className="testimonial-content">
                                                <h4 className="mb-2 mt-3">TrainsCafe</h4>
                                                <p className="fs-18">“Their mobile app developers are very knowledgeable, and the sales team is really cooperative. I got the best app development services.”</p>
                                                <h4 className="fs-20">[Founder ~ Pankaj Jangid]</h4>
                                            </div>
                                        </div>
                                    </div></div><div className="owl-item cloned" style={{width: '336px', marginRight: '10px'}}><div className="testimonial-section">
                                        <div className="testimonial-card">
                                            <div className="profile-image">
                                                <img src="https://ezulix.com/assets/image/on-demand/logos/payhind.png" alt="Rebecca" />
                                            </div>
                                            <div className="testimonial-content">
                                                <h4 className="mb-2 mt-3">PayHind</h4>
                                                <p className="fs-18">“Qmax is the best mobile app development company in India for on-demand projects. They treat your app ideas like their own and work diligently.”</p>
                                                <h4 className="fs-20">[Founder ~ Shadam Khan]</h4>
                                            </div>
                                        </div>
                                    </div></div><div className="owl-item cloned" style={{width: '336px', marginRight: '10px'}}><div className="testimonial-section">
                                        <div className="testimonial-card">
                                            <div className="profile-image">
                                                <img src="https://ezulix.com/assets/image/on-demand/logos/luna-sky.png" alt="Rebecca" />
                                            </div>
                                            <div className="testimonial-content">
                                                <h4 className="mb-2 mt-3">Luna Sky Palace</h4>
                                                <p className="fs-18">“Qmax is a very creative on-demand app development company perfect for those looking for bespoke application features, functions, and design.”</p>
                                                <h4 className="fs-20">[Omar Al Qasimi, Sr. BDE]</h4>
                                            </div>
                                        </div>
                                    </div></div></div></div><div className="owl-nav disabled"><button type="button" role="presentation" className="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" className="owl-next"><span aria-label="Next">›</span></button></div><div className="owl-dots"><button role="button" className="owl-dot"><span></span></button><button role="button" className="owl-dot"><span></span></button><button role="button" className="owl-dot active"><span></span></button><button role="button" className="owl-dot"><span></span></button><button role="button" className="owl-dot"><span></span></button><button role="button" className="owl-dot"><span></span></button><button role="button" className="owl-dot"><span></span></button><button role="button" className="owl-dot"><span></span></button><button role="button" className="owl-dot"><span></span></button><button role="button" className="owl-dot"><span></span></button></div></div>
                            </div>
                        </div>
                    </div>
                </section> */}

                {/* <!-- cta section  --> */}
                <section>
                    <div className="container">
                        <div className="cta-section">
                            <h2 className="fs-35 fw-semibold mb-4">Is Your Current Mobile App Development Team Not Setting The Right Benchmarks?</h2>
                            <div className="cta-points">
                                <span>🚫 Missed Deadlines?</span>
                                <span>😕 Unclear Communications?</span>
                                <span>🐞 Codes Full of Bugs?</span>
                                <span>💬 Negligible Post-Launch Support?</span>
                                <span>💸 Too High Costs?</span>
                                <span>📉 No Measurable ROIs?</span>
                            </div>
                            <div className="mt-4">
                                <a href="#"  onClick={(e) => e.preventDefault()} data-service="Switch to Best App Development Services" className="button-71 fs-20" role="button" aria-label="Open Popup"> 🚀 Switch to Best App Development Services </a>
                                {/* <!-- <a href="javascript:void(0);" onclick="getSource('On Demand App Development')" data-service="Switch to Best App Development Services" className="button-71 openServiceEnquiryPopupBtn fs-20" role="button" aria-label="Open Popup"> 🚀 Switch to Best App Development Services </a> --> */}
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- ondemand services section --> */}
                <section className="section-padding">
                    <div className="container">
                        <div className="row mb-4">
                            <div className="col-lg-12 text-center">
                                <h2 className="fw-semibold position-relative fs-35 mb-2 text-center">Tell Us What <span className="blue-heading-style">On-Demand Custom Mobile App Development Services</span> Are You Looking For?</h2>
                                <p className="fs-20">We’re an experienced custom mobile app development company providing apps built from scratch. Hire on-demand app developers and make your dream come true. Even first-of-its-kind business ideas can find the best fit mobile application with us!</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 my-3">
                                <div className="ondemand-service-card">
                                    <div className="ondemand-service-icon">
                                        <img src="https://ezulix.com/assets/image/on-demand/on-demand-apps/food-app.png" alt="On-Demand Chatting &amp; Calling Apps" width="70" />
                                    </div>
                                    <div>
                                        <h3 className="fs-24 fw-semibold mb-2">On-Demand Food Delivery App Development</h3>
                                        <p className="fs-20">No need to feel sad for not being the first Swiggy or Zomato! If you have a better version, connect with the trusted custom food delivery app development company and get ready to launch a better food app.</p>
                                        <div>
                                            <a href="#"  onClick={(e) => e.preventDefault()} data-service="Food Delivery Apps" className="d-inline-block  fs-20" role="button" aria-label="Open Popup"> Get a Quote <i className="ezulix-long_arrow_right" style={{position: 'relative', top: '3px'}}></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 my-3">
                                <div className="ondemand-service-card ondemand-service-card-right">
                                    <div className="ondemand-service-icon">
                                        <img src="https://ezulix.com/assets/image/on-demand/on-demand-apps/dating-app.png" alt="On-Demand Chatting &amp; Calling Apps" width="70" />
                                    </div>
                                    <div>
                                        <h3 className="fs-24 fw-semibold mb-2">On-Demand Dating App Development</h3>
                                        <p className="fs-20">A big bunch of people are single in the absence of a perfect dating app. If you can make them mingle, we can help you! We are renowned worldwide as a reliable dating app development company. </p>
                                        <div>
                                            <a href="#"  onClick={(e) => e.preventDefault()} data-service="On-Demand Dating App Development" className="d-inline-block  fs-20" role="button" aria-label="Open Popup"> Get a Quote
                                                 <i className="ezulix-long_arrow_right" style={{position: 'relative', top: '3px'}}></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 my-3">
                                <div className="ondemand-service-card">
                                    <div className="ondemand-service-icon">
                                        <img src="https://ezulix.com/assets/image/on-demand/on-demand-apps/online-taxi-booking.png" alt="On-Demand Chatting &amp; Calling Apps" width="70" />
                                    </div>
                                    <div>
                                        <h3 className="fs-24 fw-semibold mb-2">On-Demand Taxi Booking App Development </h3>
                                        <p className="fs-20">Uber, Ola, Zypp, BluSmart, Rapido, and next is you! For your unique and fully branded on-demand taxi app development needs, choose an accelerating taxi app development company. </p>
                                        <div>
                                            <a href="#"  onClick={(e) => e.preventDefault()} data-service="Taxi Booking App Development" className="d-inline-block  fs-20" role="button" aria-label="Open Popup"> Get a Quote
                                                 <i className="ezulix-long_arrow_right" style={{position: 'relative', top: '3px'}}></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 my-3">
                                <div className="ondemand-service-card ondemand-service-card-right">
                                    <div className="ondemand-service-icon">
                                        <img src="https://ezulix.com/assets/image/on-demand/on-demand-apps/real-estate-app.png" alt="On-Demand Chatting &amp; Calling Apps" width="70" />
                                    </div>
                                    <div>
                                        <h3 className="fs-24 fw-semibold mb-2">On-Demand Real Estate App Development</h3>
                                        <p className="fs-20">A CRM, a Property Management, or a Virtual Property Tour, the real estate industry also deserves an AI-driven app. Share your idea with a decade-old real estate app development company and get a highly functional app.</p>
                                        <div>
                                            <a href="#"  onClick={(e) => e.preventDefault()} data-service="Real Estate Apps" className="d-inline-block  fs-20" role="button" aria-label="Open Popup"> Get a Quote <i className="ezulix-long_arrow_right" style={{position: 'relative', top: '3px'}}></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 my-3">
                                <div className="ondemand-service-card">
                                    <div className="ondemand-service-icon">
                                        <img src="https://ezulix.com/assets/image/on-demand/on-demand-apps/social-media.png" alt="On-Demand Chatting &amp; Calling Apps" width="70" />
                                    </div>
                                    <div>
                                        <h3 className="fs-24 fw-semibold mb-2">On-Demand Social Media App Development</h3>
                                        <p className="fs-20">Do you have a business idea that can far surpass Instagram &amp; Facebook? You have come to the right destination. Your creative social media app development company is right here to shape your unique app.</p>
                                        <div>
                                            <a href="#"  onClick={(e) => e.preventDefault()} data-service="Social Media Platforms Apps" className="d-inline-block  fs-20" role="button" aria-label="Open Popup"> Get a Quote
                                                 <i className="ezulix-long_arrow_right" style={{position: 'relative', top: '3px'}}></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 my-3">
                                <div className="ondemand-service-card ondemand-service-card-right">
                                    <div className="ondemand-service-icon">
                                        <img src="https://ezulix.com/assets/image/on-demand/on-demand-apps/delivery-app.png" alt="On-Demand Chatting &amp; Calling Apps" width="70" />
                                    </div>
                                    <div>
                                        <h3 className="fs-24 fw-semibold mb-2">On-Demand Medicine Delivery App Development</h3>
                                        <p className="fs-20">Deliver medicines fast and become a star by saving lives in minutes. We can be your reliable medicine delivery app development company. Share your unique ideation with us and get a bespoke and reliable delivery app. </p>
                                        <div>
                                            <a href="#"  onClick={(e) => e.preventDefault()} data-service="Medicine Delivery App Development" className="d-inline-block  fs-20" role="button" aria-label="Open Popup"> Get a Quote 
                                                <i className="ezulix-long_arrow_right" style={{position: 'relative', top: '3px'}}></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 my-3">
                                <div className="ondemand-service-card ">
                                    <div className="ondemand-service-icon">
                                        <img src="https://ezulix.com/assets/image/on-demand/on-demand-apps/restaurent-app.png" alt="On-Demand Chatting &amp; Calling Apps" width="70" />
                                    </div>
                                    <div>
                                        <h3 className="fs-24 fw-semibold mb-2">On-Demand Restaurant App Development</h3>
                                        <p className="fs-20">Your special restaurant, hotel, bar, bistro, and club require a personalised mobile app to keep the diners hooked. Let us craft a deliciously bespoke App. Your gourmet restaurant app development company is serving right here. </p>
                                        <div>
                                            <a href="#"  onClick={(e) => e.preventDefault()} data-service="Restaurant &amp; Hotel Management Apps" className="d-inline-block  fs-20" role="button" aria-label="Open Popup"> Get a Quote 
                                                <i className="ezulix-long_arrow_right" style={{position: 'relative', top: '3px'}}></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 my-3">
                                <div className="ondemand-service-card ondemand-service-card-right">
                                    <div className="ondemand-service-icon">
                                        <img src="https://ezulix.com/assets/image/on-demand/on-demand-apps/home-service-app.png" alt="On-Demand Chatting &amp; Calling Apps" width="70" />
                                    </div>
                                    <div>
                                        <h3 className="fs-24 fw-semibold mb-2">On-Demand Home Service App Development</h3>
                                        <p className="fs-20">Let Urban Company not dominate the market! Introduce your own version with a twist or variation. Choose a diligent Home Service App Development Company and give a perfect home to your unique business idea.</p>
                                        <div>
                                            <a href="#"  onClick={(e) => e.preventDefault()} data-service="Home Service App Development" className="d-inline-block  fs-20" role="button" aria-label="Open Popup"> Get a Quote 
                                                <i className="ezulix-long_arrow_right" style={{position: 'relative', top: '3px'}}></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 my-3">
                                <div className="ondemand-service-card">
                                    <div className="ondemand-service-icon">
                                        <img src="https://ezulix.com/assets/image/on-demand/on-demand-apps/telemedicine-apps.png" alt="On-Demand Chatting &amp; Calling Apps" width="70" />
                                    </div>
                                    <div>
                                        <h3 className="fs-24 fw-semibold mb-2">On-Demand Telemedicine App Development</h3>
                                        <p className="fs-20">Have a remote hospital idea? Let us execute it with an on-demand online doctor consultation app. Leverage AI, ML, AR, and VR technologies for precision. Hire an experienced doctor appointment app development company. </p>
                                        <div>
                                            <a href="#"  onClick={(e) => e.preventDefault()} data-service="Telemedicine App Development" className="d-inline-block  fs-20" role="button" aria-label="Open Popup"> Get a Quote
                                                 <i className="ezulix-long_arrow_right" style={{position: 'relative', top: '3px'}}></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 my-3">
                                <div className="ondemand-service-card ondemand-service-card-right">
                                    <div className="ondemand-service-icon">
                                        <img src="https://ezulix.com/assets/image/on-demand/on-demand-apps/beauty-app.png" alt="On-Demand Chatting &amp; Calling Apps" width="70" />
                                    </div>
                                    <div>
                                        <h3 className="fs-24 fw-semibold mb-2">On-Demand Salon Booking App Development </h3>
                                        <p className="fs-20">Now take your small parlour to reach every home! Start Beauty &amp; Salon at Home services and worry not about the booking! You can get the smartest app with India’s leading salon booking app development company. </p>
                                        <div>
                                            <a href="#"  onClick={(e) => e.preventDefault()} data-service="Salon Booking App Development" className="d-inline-block fs-20" role="button" aria-label="Open Popup"> Get a Quote 
                                                <i className="ezulix-long_arrow_right" style={{position: 'relative', top: '3px'}}></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 my-3">
                                <div className="ondemand-service-card ">
                                    <div className="ondemand-service-icon">
                                        <img src="https://ezulix.com/assets/image/on-demand/on-demand-apps/dating-app.png" alt="On-Demand Chatting &amp; Calling Apps" width="70" />
                                    </div>
                                    <div>
                                        <h3 className="fs-24 fw-semibold mb-2">On-Demand Matrimonial App Development</h3>
                                        <p className="fs-20">Do you feel you can make better matches than any existing matrimonial apps? If yes, your algorithms will be heard, implemented, and tailored to the right app. Hire a bespoke matrimonial app development company. </p>
                                        <div>
                                            <a href="#"  onClick={(e) => e.preventDefault()} data-service="Matrimonial App Development" className="d-inline-block  fs-20" role="button" aria-label="Open Popup"> Get a Quote 
                                                <i className="ezulix-long_arrow_right" style={{position: 'relative', top: '3px'}}></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 my-3">
                                <div className="ondemand-service-card ondemand-service-card-right">
                                    <div className="ondemand-service-icon">
                                        <img src="https://ezulix.com/assets/image/on-demand/on-demand-apps/chat-app.png" alt="On-Demand Chatting &amp; Calling Apps" width="70" />
                                    </div>
                                    <div>
                                        <h3 className="fs-24 fw-semibold mb-2">On-Demand Chatting &amp; Calling App Development</h3>
                                        <p className="fs-20">Have a better idea than WhatsApp, Skype, Slack, or Hype? Let’s connect and launch a fresh chatting or calling app together. We have a dedicated team of on-demand app developers for real-time apps. </p>
                                        <div>
                                            <a href="#"  onClick={(e) => e.preventDefault()} data-service=" Chatting &amp; Calling App Development" className="d-inline-block  fs-20" role="button" aria-label="Open Popup"> Get a Quote <i className="ezulix-long_arrow_right" 
                                           style={{position: 'relative', top: '3px'}}></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 my-3">
                                <div className="ondemand-service-card">
                                    <div className="ondemand-service-icon">
                                        <img src="https://ezulix.com/assets/image/on-demand/on-demand-apps/ecommerce-app.png" alt="On-Demand Chatting &amp; Calling Apps" width="70" />
                                    </div>
                                    <div>
                                        <h3 className="fs-24 fw-semibold mb-2">On-Demand E-Commerce App Development</h3>
                                        <p className="fs-20">Your E-commerce app idea may be better than Amazon, Flipkart, and Myntra. Give it a try with us. Choose the top-notch on-demand ecommerce mobile app development company. No more glitchy DIY e-commerce platforms.</p>
                                        <div>
                                            <a href="#"  onClick={(e) => e.preventDefault()} data-service="E-Commerce App Development" className="d-inline-block  fs-20" role="button" aria-label="Open Popup"> Get a Quote <i className="ezulix-long_arrow_right" 
                                            style={{position: 'relative', top: '3px'}}></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 my-3">
                                <div className="ondemand-service-card ondemand-service-card-right">
                                    <div className="ondemand-service-icon">
                                        <img src="https://ezulix.com/assets/image/on-demand/on-demand-apps/learning-app.png" alt="On-Demand Chatting &amp; Calling Apps" width="70" />
                                    </div>
                                    <div>
                                        <h3 className="fs-24 fw-semibold mb-2">On-Demand LMS App Development </h3>
                                        <p className="fs-20">Flaunt your extraordinary tutoring skills with an app that can provide a more learner-friendly experience than Udemy, Byju’s &amp; Coursera. Get a bespoke Learning Management System, that is, an LMS app. </p>
                                        <div>
                                            <a href="#"  onClick={(e) => e.preventDefault()} data-service="LMS App Development" className="d-inline-block  fs-20" role="button" aria-label="Open Popup"> Get a Quote 
                                                <i className="ezulix-long_arrow_right" style={{position: 'relative', top: '3px'}}></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 my-3">
                                <div className="ondemand-service-card">
                                    <div className="ondemand-service-icon">
                                        <img src="https://ezulix.com/assets/image/on-demand/on-demand-apps/banking-app.png" alt="On-Demand Chatting &amp; Calling Apps" width="70" />
                                    </div>
                                    <div>
                                        <h3 className="fs-24 fw-semibold mb-2">On-Demand Banking &amp; FinTech App Development</h3>
                                        <p className="fs-20">Do you have any out-of-the-box payment and banking solutions? Enjoy our fully custom FinTech app development services to outshine. Or get a comprehensive banking app and take your services online with complete security. </p>
                                        <div>
                                            <a href="#"  onClick={(e) => e.preventDefault()} data-service="Banking &amp; FinTech App Development" className="d-inline-block  fs-20" role="button" aria-label="Open Popup"> Get a Quote
                                                 <i className="ezulix-long_arrow_right" style={{position: 'relative', top: '3px'}}></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 my-3">
                                <div className="ondemand-service-card ondemand-service-card-right">
                                    <div className="ondemand-service-icon">
                                        <img src="https://ezulix.com/assets/image/on-demand/on-demand-apps/car-wash-app.png" alt="On-Demand Chatting &amp; Calling Apps" width="70" />
                                    </div>
                                    <div>
                                        <h3 className="fs-24 fw-semibold mb-2">On-Demand Car Wash Booking App Development </h3>
                                        <p className="fs-20">Have you ever planned to offer car wash &amp; vehicle services at home? Do it today with an on-demand mobile application customised to your business model. Get a fully tailored car wash booking app and expand your business far and wide. </p>
                                        <div>
                                            <a href="#"  onClick={(e) => e.preventDefault()} data-service="Car Wash Booking App Development" className="d-inline-block  fs-20" role="button" aria-label="Open Popup"> Get a Quote
                                                 <i className="ezulix-long_arrow_right" style={{position: 'relative', top: '3px'}}></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 my-3">
                                <div className="ondemand-service-card ">
                                    <div className="ondemand-service-icon">
                                        <img src="https://ezulix.com/assets/image/on-demand/on-demand-apps/laundry-service-apps.png" alt="On-Demand Chatting &amp; Calling Apps" width="70" />
                                    </div>
                                    <div>
                                        <h3 className="fs-24 fw-semibold mb-2">On-Demand Laundry Service App Development</h3>
                                        <p className="fs-20">Their washerman is always throwing tantrums at them and is never on time to collect their dirty clothes. Solve their issue with the on-demand laundry app. Your unique Idea can find the perfect laundry app development with us. </p>
                                        <div>
                                            <a href="#"  onClick={(e) => e.preventDefault()} data-service="Laundry Service App Development" className="d-inline-block fs-20" role="button" aria-label="Open Popup"> Get a Quote 
                                                <i className="ezulix-long_arrow_right" style={{position: 'relative', top: '3px'}}></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 my-3">
                                <div className="ondemand-service-card ondemand-service-card-right">
                                    <div className="ondemand-service-icon">
                                        <img src="https://ezulix.com/assets/image/on-demand/on-demand-apps/hiring-apps.png" alt="On-Demand Chatting &amp; Calling Apps" width="70" />
                                    </div>
                                    <div>
                                        <h3 className="fs-24 fw-semibold mb-2">On-Demand Listing &amp; Hiring App Development</h3>
                                        <p className="fs-20">Your small group of creative wizards can become a leading stock market-listed company one day. Start getting projects with your own freelancer listing app like Upwork. Choose on-demand app developers and go online with your team. </p>
                                        <div>
                                            <a href="#"  onClick={(e) => e.preventDefault()} data-service="Listing &amp; Hiring App Development" className="d-inline-block  fs-20" role="button" aria-label="Open Popup"> Get a Quote 
                                                <i className="ezulix-long_arrow_right" style={{position: 'relative', top: '3px'}}></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 my-3">
                                <div className="ondemand-service-card">
                                    <div className="ondemand-service-icon">
                                        <img src="https://ezulix.com/assets/image/on-demand/on-demand-apps/rental-app.png" alt="On-Demand Chatting &amp; Calling Apps" width="70" />
                                    </div>
                                    <div>
                                        <h3 className="fs-24 fw-semibold mb-2">On-Demand Equipment Rental Apps</h3>
                                        <p className="fs-20">Planning to rent out fancy products and equipment via a mobile app? Ditch hefty third-party fees. Get your on-demand equipment rental app and start today. We will assist you in your journey with tailored app development.</p>
                                        <div>
                                            <a href="#"  onClick={(e) => e.preventDefault()} data-service="Equipment Rental Apps" className="d-inline-block  fs-20" role="button" aria-label="Open Popup"> Get a Quote 
                                                <i className="ezulix-long_arrow_right" style={{position: 'relative', top: '3px'}}></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 my-3">
                                <div className="ondemand-service-card ondemand-service-card-right">
                                    <div className="ondemand-service-icon">
                                        <img src="https://ezulix.com/assets/image/on-demand/on-demand-apps/auction-app.png" alt="On-Demand Chatting &amp; Calling Apps" width="70" />
                                    </div>
                                    <div>
                                        <h3 className="fs-24 fw-semibold mb-2">On-Demand Online Auction App Development</h3>
                                        <p className="fs-20">Need an online platform to auction online? From your mindblowing paintings to amazing properties, auction anything from anywhere to anyone digitally. Get a bespoke app for your business idea and get online bid ready.</p>
                                        <div>
                                            <a href="#"  onClick={(e) => e.preventDefault()} data-service="Online Auction Apps" className="d-inline-block  fs-20" role="button" aria-label="Open Popup"> Get a Quote 
                                                <i className="ezulix-long_arrow_right" style={{position: 'relative', top: '3px'}}></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 text-center mt-5 ">
                                <a href="#"  onClick={(e) => e.preventDefault()} data-service="Hire App Developers" className="button-71 " role="button" aria-label="Open Popup"> Hire App Developers</a>
                            </div>
                        </div>
                    </div>
                </section>


                {/* <!-- new section --> */}
                <section className="hire-developer-app-section">
                    <div className="container">
                        <h2 className="fw-semibold position-relative fs-35 mb-2 text-center">Custom App Development Company Building Apps for Every Platform</h2>
                        <p className="fs-20">From Android to iOS and Cross-Platform App, Qmax has skilled and experienced mobile app developers for every business need.</p>
                        <div className="line"></div>

                        <div className="platforms">
                            <div className="row">
                                <div className="col-lg-4 my-3">
                                    {/* <!-- Android --> */}
                                    <div className="platform">
                                        <h3 className="fs-26 fw-semibold mb-2">Android App Development</h3>
                                        <p className="fs-20">
                                            Get powerful, scalable, and flexible Android apps with the modern frameworks like Kotlin, Java, and Jetpack Compose. We’re a dedicated Android App Development Company that esnures seamless UI, excellent UX, and effortless launch on the Play Store.
                                        </p>
                                        <a href="#"  onClick={(e) => e.preventDefault()} data-service="Hire Android Developer" className="button-71  fs-20" role="button" aria-label="Open Popup">Hire Android Developer</a>
                                    </div>
                                </div>
                                <div className="col-lg-4 my-3">
                                    {/* <!-- iOS --> */}
                                    <div className="platform">
                                        <h3 className="fs-26 fw-semibold mb-2">iOS App Development</h3>
                                        <p className="fs-20">
                                            Get highly refined and top-performing iOS app with iOS-specific technology stack including Swift, SwiftUI, and Xcode with our expert iOS app developers. Leverage intuitive UI and seamless performance.
                                        </p>
                                        <a href="#"  onClick={(e) => e.preventDefault()} data-service="Hire iOS Developer" className="button-71  fs-20" role="button" aria-label="Open Popup">Hire iOS Developer </a>
                                    </div>
                                </div>
                                <div className="col-lg-4 my-3">
                                    {/* <!-- Cross Platform --> */}
                                    <div className="platform">
                                        <h3 className="fs-26 fw-semibold mb-2">Cross-Platform Development</h3>
                                        <p className="fs-20">
                                            Write once, run anywhere. Benefit from cross-platform app development and get the quality, performance, and native feel of both Android as well iOS in a single app. Choose React Native App development.
                                        </p>
                                        <a href="#"  onClick={(e) => e.preventDefault()} data-service="Hire React Native Developer" className="button-71  fs-20" role="button" aria-label="Open Popup">Hire React Native Developer</a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- our ondemand works section --> */}
                {/* <section className="section-padding">
                    <div className="container">
                        <div className="ondemand-work">
                            <div className="row mb-4">
                                <div className="col-lg-10 mx-auto text-center">
                                    <h2 className="fs-35 fw-semibold"><span className="blue-heading-style">Have A Look At Our</span> On-Demand Mobile App Development <span className="blue-heading-style">Work &amp; Decide On Your Own</span></h2>
                                </div>
                            </div>
                            <div className="owl-carousel ondemand-work-carousel owl-theme owl-loaded owl-drag">





                                <div className="owl-stage-outer"><div className="owl-stage" style={{transform: 'translate3d(-1730px, 0px, 0px)', transition: '0.25s', width: '3806px'}}>
                                    <div className="owl-item cloned" style={{width: '336px', marginRight: '10px'}}><div className="work-item">
                                    <div className="row align-items-center">
                                        <div className="col-lg-7">
                                            <div className="content">
                                                <h3 className="fs-30 fw-semibold mb-2">InfoMed: Inventory Management App</h3>
                                                <p className="fs-20">InfoMed provides online pharmaceutical product delivery services, B2B and B2C. The business found a Minimum Viable Mobile Application to automate its inventory management chaos. The inventory management app is AI-driven and tracks the inventory in real time. It keeps the authorized users stay updated on stock levels and also forecasts demand.</p>
                                                <p className="fs-20">Now the team is also working on InfoMed’s pharmacy app development project. </p>
                                                <div className="highlights">
                                                    <h4 className="mb-4">Highlights:</h4>
                                                    <ul>
                                                        <li>Real Time Monitoring</li>
                                                        <li>AI-Driven Automation</li>
                                                        <li>ML-Supported Demand Forecast</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="phone text-center">
                                                <img src="https://ezulix.com/assets/image/on-demand/on-demand-apps/infomed.webp" alt="Infomed App UI" width="300px" />
                                            </div>
                                        </div>
                                    </div>
                                </div></div><div className="owl-item cloned" style={{width: '336px', marginRight: '10px'}}><div className="work-item">
                                    <div className="row align-items-center">
                                        <div className="col-lg-7">
                                            <div className="content">
                                                <h3 className="fs-30 fw-semibold mb-2">PayHind: All-in-One Place Online Bill Payment</h3>
                                                <p className="fs-20">For online bill payment, PayHind provides a single dashboard for electricity, water, DTH, mobile recharge, insurance, and every kind of bill payment facility. PayHind integrates AePS and BBPS APIs and delivers secure online payments through Razor Pay payment gateways.</p>
                                                <p className="fs-20">The app supports a multilingual user interface for high user-friendliness.</p>
                                                <div className="highlights">
                                                    <h4 className="mb-4">Highlights:</h4>
                                                    <ul>
                                                        <li>Android Native App </li>
                                                        <li>Built on Kotlin</li>
                                                        <li>E2E Encrypted</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="phone text-center">
                                                <img src="https://ezulix.com/assets/image/on-demand/on-demand-apps/payhind.webp" alt="KaamDaar App UI" width="300px" />
                                            </div>
                                        </div>
                                    </div>
                                </div></div><div className="owl-item cloned" style={{width: '336px', marginRight: '10px'}}><div className="work-item">
                                    <div className="row align-items-center">
                                        <div className="col-lg-7">
                                            <div className="content">
                                                <h3 className="fs-30 fw-semibold mb-2">Event Networking App: NDA-Protected App for Professional Networking</h3>
                                                <p className="fs-20">Qmax has developed an Event Networking App for a US-based client who is NDA-protected. This app helps professionals and talented people connect with hiring professionals or customers who are looking for their services.</p>
                                                <p className="fs-20">The app utilises robust filtration and its captivating UI has been the highlight of the project.</p>
                                                <div className="highlights">
                                                    <h4 className="mb-4">Highlights:</h4>
                                                    <ul>
                                                        <li>Captivating User Interface</li>
                                                        <li>Robust Filtering &amp; Large Data Handling</li>
                                                        <li>Microservices-Based Application</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="phone text-center">
                                                <img src="https://ezulix.com/assets/image/on-demand/on-demand-apps/event-networking-app.webp" alt="KaamDaar App UI" width="300px" />
                                            </div>
                                        </div>
                                    </div>
                                </div></div><div className="owl-item" style={{width: '336px', marginRight: '10px'}}><div className="work-item">
                                    <div className="row align-items-center">
                                        <div className="col-lg-7">
                                            <div className="content">
                                                <h3 className="fs-30 fw-semibold mb-2">KaamDaar: Online Labour Booking App</h3>
                                                <p className="fs-20">India’s first-ever dedicated online labour booking app that eliminates middlemen and contractors from the picture, making labour work affordable for clients and saving laborers from unnecessary commission cuts.</p>
                                                <p className="fs-20">KaamDaar got 4 apps developed from our team, including the labor and customer versions of KaamDaar.</p>
                                                <div className="highlights">
                                                    <h4 className="mb-4">Highlights:</h4>
                                                    <ul>
                                                        <li>Cross-Platform</li>
                                                        <li>Built on React Native</li>
                                                        <li>AI-Powered</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="phone text-center">
                                                <img src="https://ezulix.com/assets/image/on-demand/on-demand-apps/kaamdaar.webp" alt="KaamDaar App UI" width="300px" />
                                            </div>
                                        </div>
                                    </div>
                                </div></div><div className="owl-item" style={{width: '336px', marginRight: '10px'}}><div className="work-item">
                                    <div className="row align-items-center">
                                        <div className="col-lg-7">
                                            <div className="content">
                                                <h3 className="fs-30 fw-semibold mb-2">Date Dash: A New Sensational Dating App in India</h3>
                                                <p className="fs-20">For blind dating in India, Date Dash is the first Indian dating app powered by AI-matchmaking and Machine Learning technologies like user behaviour and sentiment analysis for personalised match-making recommendations.</p>
                                                <p className="fs-20">The app is designed to keep users engaged and make new online friends all over India. </p>
                                                <div className="highlights">
                                                    <h4 className="mb-4">Highlights:</h4>
                                                    <ul>
                                                        <li>Cross-Platform</li>
                                                        <li>Built on React Native</li>
                                                        <li>AI &amp; ML Integrated </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="phone text-center">
                                                <img src="https://ezulix.com/assets/image/on-demand/on-demand-apps/date-dash.webp" alt="Date Dash App UI" width="300px" />
                                            </div>
                                        </div>
                                    </div>
                                </div></div><div className="owl-item active" style={{width: '336px', marginRight: '10px'}}><div className="work-item">
                                    <div className="row align-items-center">
                                        <div className="col-lg-7">
                                            <div className="content">
                                                <h3 className="fs-30 fw-semibold mb-2">InfoMed: Inventory Management App</h3>
                                                <p className="fs-20">InfoMed provides online pharmaceutical product delivery services, B2B and B2C. The business found a Minimum Viable Mobile Application to automate its inventory management chaos. The inventory management app is AI-driven and tracks the inventory in real time. It keeps the authorized users stay updated on stock levels and also forecasts demand.</p>
                                                <p className="fs-20">Now the team is also working on InfoMed’s pharmacy app development project. </p>
                                                <div className="highlights">
                                                    <h4 className="mb-4">Highlights:</h4>
                                                    <ul>
                                                        <li>Real Time Monitoring</li>
                                                        <li>AI-Driven Automation</li>
                                                        <li>ML-Supported Demand Forecast</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="phone text-center">
                                                <img src="https://ezulix.com/assets/image/on-demand/on-demand-apps/infomed.webp" alt="Infomed App UI" width="300px" />
                                            </div>
                                        </div>
                                    </div>
                                </div></div><div className="owl-item" style={{width: '336px', marginRight: '10px'}}><div className="work-item">
                                    <div className="row align-items-center">
                                        <div className="col-lg-7">
                                            <div className="content">
                                                <h3 className="fs-30 fw-semibold mb-2">PayHind: All-in-One Place Online Bill Payment</h3>
                                                <p className="fs-20">For online bill payment, PayHind provides a single dashboard for electricity, water, DTH, mobile recharge, insurance, and every kind of bill payment facility. PayHind integrates AePS and BBPS APIs and delivers secure online payments through Razor Pay payment gateways.</p>
                                                <p className="fs-20">The app supports a multilingual user interface for high user-friendliness.</p>
                                                <div className="highlights">
                                                    <h4 className="mb-4">Highlights:</h4>
                                                    <ul>
                                                        <li>Android Native App </li>
                                                        <li>Built on Kotlin</li>
                                                        <li>E2E Encrypted</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="phone text-center">
                                                <img src="https://ezulix.com/assets/image/on-demand/on-demand-apps/payhind.webp" alt="KaamDaar App UI" width="300px" />
                                            </div>
                                        </div>
                                    </div>
                                </div></div><div className="owl-item" style={{width: '336px', marginRight: '10px'}}><div className="work-item">
                                    <div className="row align-items-center">
                                        <div className="col-lg-7">
                                            <div className="content">
                                                <h3 className="fs-30 fw-semibold mb-2">Event Networking App: NDA-Protected App for Professional Networking</h3>
                                                <p className="fs-20">Qmax has developed an Event Networking App for a US-based client who is NDA-protected. This app helps professionals and talented people connect with hiring professionals or customers who are looking for their services.</p>
                                                <p className="fs-20">The app utilises robust filtration and its captivating UI has been the highlight of the project.</p>
                                                <div className="highlights">
                                                    <h4 className="mb-4">Highlights:</h4>
                                                    <ul>
                                                        <li>Captivating User Interface</li>
                                                        <li>Robust Filtering &amp; Large Data Handling</li>
                                                        <li>Microservices-Based Application</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="phone text-center">
                                                <img src="https://ezulix.com/assets/image/on-demand/on-demand-apps/event-networking-app.webp" alt="KaamDaar App UI" width="300px" />
                                            </div>
                                        </div>
                                    </div>
                                </div></div><div className="owl-item cloned" style={{width: '336px', marginRight: '10px'}}><div className="work-item">
                                    <div className="row align-items-center">
                                        <div className="col-lg-7">
                                            <div className="content">
                                                <h3 className="fs-30 fw-semibold mb-2">KaamDaar: Online Labour Booking App</h3>
                                                <p className="fs-20">India’s first-ever dedicated online labour booking app that eliminates middlemen and contractors from the picture, making labour work affordable for clients and saving laborers from unnecessary commission cuts.</p>
                                                <p className="fs-20">KaamDaar got 4 apps developed from our team, including the labor and customer versions of KaamDaar.</p>
                                                <div className="highlights">
                                                    <h4 className="mb-4">Highlights:</h4>
                                                    <ul>
                                                        <li>Cross-Platform</li>
                                                        <li>Built on React Native</li>
                                                        <li>AI-Powered</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="phone text-center">
                                                <img src="https://ezulix.com/assets/image/on-demand/on-demand-apps/kaamdaar.webp" alt="KaamDaar App UI" width="300px" />
                                            </div>
                                        </div>
                                    </div>
                                </div></div><div className="owl-item cloned" style={{width: '336px', marginRight: '10px'}}><div className="work-item">
                                    <div className="row align-items-center">
                                        <div className="col-lg-7">
                                            <div className="content">
                                                <h3 className="fs-30 fw-semibold mb-2">Date Dash: A New Sensational Dating App in India</h3>
                                                <p className="fs-20">For blind dating in India, Date Dash is the first Indian dating app powered by AI-matchmaking and Machine Learning technologies like user behaviour and sentiment analysis for personalised match-making recommendations.</p>
                                                <p className="fs-20">The app is designed to keep users engaged and make new online friends all over India. </p>
                                                <div className="highlights">
                                                    <h4 className="mb-4">Highlights:</h4>
                                                    <ul>
                                                        <li>Cross-Platform</li>
                                                        <li>Built on React Native</li>
                                                        <li>AI &amp; ML Integrated </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="phone text-center">
                                                <img src="https://ezulix.com/assets/image/on-demand/on-demand-apps/date-dash.webp" alt="Date Dash App UI" width="300px" />
                                            </div>
                                        </div>
                                    </div>
                                </div></div><div className="owl-item cloned" style={{width: '336px', marginRight: '10px'}}><div className="work-item">
                                    <div className="row align-items-center">
                                        <div className="col-lg-7">
                                            <div className="content">
                                                <h3 className="fs-30 fw-semibold mb-2">InfoMed: Inventory Management App</h3>
                                                <p className="fs-20">InfoMed provides online pharmaceutical product delivery services, B2B and B2C. The business found a Minimum Viable Mobile Application to automate its inventory management chaos. The inventory management app is AI-driven and tracks the inventory in real time. It keeps the authorized users stay updated on stock levels and also forecasts demand.</p>
                                                <p className="fs-20">Now the team is also working on InfoMed’s pharmacy app development project. </p>
                                                <div className="highlights">
                                                    <h4 className="mb-4">Highlights:</h4>
                                                    <ul>
                                                        <li>Real Time Monitoring</li>
                                                        <li>AI-Driven Automation</li>
                                                        <li>ML-Supported Demand Forecast</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="phone text-center">
                                                <img src="https://ezulix.com/assets/image/on-demand/on-demand-apps/infomed.webp" alt="Infomed App UI" width="300px" />
                                            </div>
                                        </div>
                                    </div>
                                </div></div></div></div><div className="owl-nav disabled"><button type="button" role="presentation" className="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" className="owl-next"><span aria-label="Next">›</span></button></div><div className="owl-dots"><button role="button" className="owl-dot"><span></span></button><button role="button" className="owl-dot"><span></span></button><button role="button" className="owl-dot active"><span></span></button><button role="button" className="owl-dot"><span></span></button><button role="button" className="owl-dot"><span></span></button></div></div>

                            <div className="text-center mt-5">
                                <a href="javascript:void(0);" onclick="openPopup()" data-service=" Book A Live Product Demo" className="button-71  fs-20" role="button" aria-label="Open Popup"> 📱 Book A Live Product Demo </a>
                            </div>
                        </div>
                    </div>
                </section> */}

                {/* <!-- process section --> */}
                <section className="process-wrapper section-padding">
                    <div className="container">
                        <div className="process">
                            <div className="text-center mb-5">
                                <h2 className="fs-35 mb-2 fw-semibold"><span className="blue-heading-style">The Process the Right</span> Custom Mobile App Development 
                                <span className="blue-heading-style">Company Follows!</span></h2>
                                <p className="fs-20">
                                    We follow a systematic and sequential mobile app development process that results in 100% customized, high-performance, and user-friendly applications.
                                </p>
                            </div>
                            <div className="timeline">
                                <div className="step">
                                    <div className="icon">1</div>
                                    <div className="step-content">
                                        <h3 className="fw-semibold fs-26">Discussion</h3>
                                        <p className="fs-20">Tell us your requirements &amp; get free consulting and idea validation.</p>
                                    </div>
                                </div>
                                <div className="step">
                                    <div className="icon">2</div>
                                    <div className="step-content">
                                        <h3 className="fw-semibold fs-26">App Prototyping</h3>
                                        <p className="fs-20">See the first glance of your app idea with our app UI UX design and prototyping.</p>
                                    </div>
                                </div>
                                <div className="step">
                                    <div className="icon">3</div>
                                    <div className="step-content">
                                        <h3 className="fw-semibold fs-26">Iterations</h3>
                                        <p className="fs-20">Not satisfied with the prototype. Suggest! We’re here to iterate. Your satisfaction on top.</p>
                                    </div>
                                </div>
                                <div className="step">
                                    <div className="icon">4</div>
                                    <div className="step-content">
                                        <h3 className="fw-semibold fs-26">Development</h3>
                                        <p className="fs-20">On finalising the user flow and app design, our dedicated app developers start the coding.</p>
                                    </div>
                                </div>
                                <div className="step">
                                    <div className="icon">5</div>
                                    <div className="step-content">
                                        <h3 className="fw-semibold fs-26">Testing</h3>
                                        <p className="fs-20">Quality can’t be staked, therefore, we perform 3-layer testing- manual, automation &amp; beta.</p>
                                    </div>
                                </div>
                                <div className="step">
                                    <div className="icon">6</div>
                                    <div className="step-content">
                                        <h3 className="fw-semibold fs-26">Deployment</h3>
                                        <p className="fs-20">Our app developers help you launch your mobile app effortlessly with Pomp and show.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- technologies we use section --> */}
                <section className="technologies-wrapper section-padding">
                    <div className="container">
                        <div className="tech-stack">
                            <div className="text-center mb-4">
                                <h2 className="fs-35 mb-2 fw-semibold">Check Out <span className="blue-heading-style">Our Powerful Technology Stack</span> for Mobile App Development</h2>
                                <p className="fs-20">We use the most reliable and future-ready technologies to build high-performance, scalable mobile applications.</p>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 col-md-6 my-3">
                                    <div className="tech-card">
                                        <h3 className="fs-24 fw-semibold">AI, ML &amp; Analytics</h3>
                                        <ul>
                                            <li className="fs-18">TensorFlow</li>
                                            <li className="fs-18">PyTorch</li>
                                            <li className="fs-18">Google ML Kit</li>
                                            <li className="fs-18">AWS AI Services</li>
                                            <li className="fs-18">Chatbot &amp; Voice Integration</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 my-3">
                                    <div className="tech-card tech-card2">
                                        <h3 className="fs-24 fw-semibold">Programming Languages</h3>
                                        <ul>
                                            <li className="fs-18">Kotlin (Android)</li>
                                            <li className="fs-18">Swift (iOS)</li>
                                            <li className="fs-18">Dart (Flutter)</li>
                                            <li className="fs-18">Java</li>
                                            <li className="fs-18">HTML5, CSS3, JavaScript, TypeScript</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 my-3">
                                    <div className="tech-card tech-card3">
                                        <h3 className="fs-24 fw-semibold">Development Frameworks</h3>
                                        <ul>
                                            <li className="fs-18">Android SDK</li>
                                            <li className="fs-18">SwiftUI</li>
                                            <li className="fs-18">Jetpack Compose</li>
                                            <li className="fs-18">Node.js, Express.js</li>
                                            <li className="fs-18">Laravel, Django, Spring Boot, .NET Core</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 my-3">
                                    <div className="tech-card tech-card4">
                                        <h3 className="fs-24 fw-semibold">Database Management Systems</h3>
                                        <ul>
                                            <li className="fs-18">MySQL, PostgreSQL, MS SQL Server</li>
                                            <li className="fs-18">MongoDB</li>
                                            <li className="fs-18">Firebase Firestore</li>
                                            <li className="fs-18">CouchDB, SQLite, Realm, Core Data</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 my-3">
                                    <div className="tech-card tech-card5">
                                        <h3 className="fs-24 fw-semibold">Cloud Infrastructure &amp; DevOps</h3>
                                        <ul>
                                            <li className="fs-18">AWS</li>
                                            <li className="fs-18">Google Cloud Platform (GCP)</li>
                                            <li className="fs-18">Microsoft Azure</li>
                                            <li className="fs-18">Docker, Kubernetes</li>
                                            <li className="fs-18">Jenkins, GitHub Actions, Bitbucket Pipelines</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 my-3">
                                    <div className="tech-card tech-card6">
                                        <h3 className="fs-24 fw-semibold">UI/UX &amp; Prototyping Tools</h3>
                                        <ul>
                                            <li className="fs-18">Figma</li>
                                            <li className="fs-18">Adobe XD</li>
                                            <li className="fs-18">Sketch</li>
                                            <li className="fs-18">InVision</li>
                                            <li className="fs-18">Lottie</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 my-3">
                                    <div className="tech-card tech-card7">
                                        <h3 className="fs-24 fw-semibold">Payment Gateway Integrations</h3>
                                        <ul>
                                            <li className="fs-18">Stripe</li>
                                            <li className="fs-18">PayTabs</li>
                                            <li className="fs-18">Telr</li>
                                            <li className="fs-18">Payfort</li>
                                            <li className="fs-18">CCAvenue, Razorpay, PayPal</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- why choose us section --> */}
                <section className="usp-wrapper section-padding">
                    <div className="container">
                        <div className="usp-section">
                            <div className="text-center mb-4">
                                <h2 className="fs-35 fw-semibold"> <span className="blue-heading-style">Why Qmax is Your</span> Best Mobile Application Development Company?</h2>
                                <p className="fs-20">
                                    Among various mobile app development companies, the client-centric approach of Qmax and its highly skilled team of app developers make Qmax a choice-worthy alternative. Our USPs include-
                                </p>
                            </div>

                            <div className="row">
                                <div className="col-lg-3 col-md-6 my-3">
                                    <div className="flip-box">
                                        <div className="flip-inner">
                                            <div className="flip-front">
                                                <i className="fa-solid fa-users"></i>
                                                <h3 className="fs-26 fw-semibold">Client-Centric Approach</h3>
                                            </div>
                                            <div className="flip-back">
                                                <p className="fs-18">We build mobile applications that resonate completely with the client’s ideation and expectations. Our expertise is 100% bespoke mobile app development.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 my-3">
                                    <div className="flip-box">
                                        <div className="flip-inner">
                                            <div className="flip-front">
                                                <i className="fa-solid fa-handshake"></i>
                                                <h3 className="fs-26 fw-semibold">Inclusive Solutions</h3>
                                            </div>
                                            <div className="flip-back">
                                                <p className="fs-18">Unlike other app development companies, Qmax keeps the clients involved throughout the development process. You can connect with us online or on-site weekly and control the project.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 my-3">
                                    <div className="flip-box">
                                        <div className="flip-inner">
                                            <div className="flip-front">
                                                <i className="fa-solid fa-user-tie"></i>
                                                <h3 className="fs-26 fw-semibold">Highly Skilled Developers</h3>
                                            </div>
                                            <div className="flip-back">
                                                <p className="fs-18">Our senior app developers are highly skilled and have more than 10+ years of experience. They are the problem solvers. Our developers can automate almost anything you imagine.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 my-3">
                                    <div className="flip-box">
                                        <div className="flip-inner">
                                            <div className="flip-front">
                                                <i className="fa-solid fa-lightbulb"></i>
                                                <h3 className="fs-26 fw-semibold">Simplified Processes</h3>
                                            </div>
                                            <div className="flip-back">
                                                <p className="fs-18">We do not believe in complexities, and when you step in here, our sales and developer team will simplify everything for you. No complex technologies to understand, just simple solutions.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-5">
                                <a href="#"  onClick={(e) => e.preventDefault()} data-service=" Book A Free Meet-Up" className="button-71  fs-20" role="button" aria-label="Open Popup"> 📅 Book A Free Meet-Up </a>
                                <div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- price section  --> */}
                <section className="price-section my-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center ">
                                <h2 className="fw-semibold text-black position-relative mb-2 fs-35"><span className="blue-heading-style">Find an Estimated Project Cost</span> for Your App</h2>
                                <p className="fw-semilight fs-20">Worried about the mobile app development cost? We have a wide range of budget flexibility. From decent to premium mobile apps, we have a valid solution.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-11 mx-auto">
                                <div className="row ">
                                    <div className="col-lg-4 mt-3">
                                        <div className="price-wrap">
                                            <h3 className="mb-2 align-self-center fs-24">Minimum Viable Product (MVP)
                                            </h3>
                                            <p className="fs-20 mb-2 text-white">INR <span className="pirce-tag" style={{color: 'white'}}> 3 Lac </span> Onwards *</p>
                                            <ul className="p-0">
                                                <li className="price-point">
                                                    <p className="fs-17 mb-0 text-white"> Only Core Features</p>
                                                </li>
                                                <li className="price-point">
                                                    <p className="fs-17 mb-0 text-white"> Simple UI UX Design</p>
                                                </li>
                                                <li className="price-point">
                                                    <p className="fs-17 mb-0 text-white"> Faster Time to Market</p>
                                                </li>
                                            </ul>
                                            <div className="price-btn pt-3">
                                                <a href="#"  onClick={(e) => e.preventDefault()} data-service="Startup-Grade MVP Mobile Apps" className=" d-inline-block on-demand-service-btn   fs-20 mb-3"> Enquire Now
                                                    <i className="ezulix-long_arrow_right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 mt-3">
                                        <div className="price-wrap center-price">
                                            <h3 className="mb-2 align-self-center fs-24">Standard Product</h3>
                                            <p className="fs-20 mb-2 text-white">INR <span className="pirce-tag" style={{color: 'white'}}> 6 Lac</span> Onwards *</p>
                                            <ul className="p-0">
                                                <li className="price-point">
                                                    <p className="fs-17 mb-0 text-white text-white"> All Standard Features</p>
                                                </li>
                                                <li className="price-point">
                                                    <p className="fs-17 mb-0 text-white text-white"> Extensive Customisation</p>
                                                </li>
                                                <li className="price-point">
                                                    <p className="fs-17 mb-0 text-white text-white"> Unique Functionalities</p>
                                                </li>
                                            </ul>
                                            <div className="price-btn pt-3">
                                                <a href="#"  onClick={(e) => e.preventDefault()} data-service="Startup-Grade MVP Mobile Apps" className=" d-inline-block on-demand-service-btn   fs-20 mb-3"> Enquire Now
                                                    <i className="ezulix-long_arrow_right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 mt-3">
                                        <div className="price-wrap">
                                            <h3 className="mb-2 align-self-center fs-24">Advanced Product</h3>
                                            <p className="fs-20 mb-2 text-white">INR <span className="pirce-tag" style={{color: 'white'}}>10 Lac</span> Onwards *</p>
                                            <ul className="p-0">
                                                <li className="price-point">
                                                    <p className="fs-17 mb-0 text-white"> Fully Customised Functionalities</p>
                                                </li>
                                                <li className="price-point">
                                                    <p className="fs-17 mb-0 text-white"> Premium UI UX Design</p>
                                                </li>
                                                <li className="price-point">
                                                    <p className="fs-17 mb-0 text-white"> Advanced Technology Integration </p>
                                                </li>
                                            </ul>
                                            <div className="price-btn pt-3">
                                                <a href="#"  onClick={(e) => e.preventDefault()} data-service="Startup-Grade MVP Mobile Apps" className=" d-inline-block on-demand-service-btn   fs-20 mb-3"> Consult Now <i className="ezulix-long_arrow_right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center mt-5">
                                        <a href="#"  onClick={(e) => e.preventDefault()} data-service=" Outsource App Development Project" className="button-71  fs-20" role="button" aria-label="Open Popup"> Outsource App Development Project</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- global presence section --> */}
                <section className="global-section">
                    <div className="global-content">
                        <h2>We’re Globally Present</h2>
                        <p className="subtitle">Connect On-Site or Remotely: Whatever Suits You!</p>

                        <div className="country-grid">
                            <div className="country-card">
                                <div className="flag">🇮🇳</div>
                                <h3 className="mb-2">India</h3>
                                <p className="text-white">Address: 1701A, Magnum Global Park, Golf Course Ext Rd, Sector 58, Gurugram, Haryana 122011</p>
                            </div>
                            <div className="country-card">
                                <div className="flag">🇦🇪</div>
                                <h3 className="mb-2">UAE</h3>
                                <p className="text-white"> Office 1105 A, Trio Tower - API - Al Barsha - Al Barsha 1 - Dubai - United Arab Emirates</p>
                            </div>
                            <div className="country-card">
                                <div className="flag">🇬🇧</div>
                                <h3 className="mb-2">UK</h3>
                                <p className="text-white">71-75 Shelton Street, Covent Garden, London, United Kingdom, WC2H 9JQ</p>
                            </div>
                        </div>

                        <div className="cta-text">
                            <h3>Get Out of the Box. Let’s Build Something Amazing Together.</h3>
                            <p className="fs-20 text-white mb-4">Contact us for On-Demand Mobile App Development Services. Anytime, Anywhere, Anything!</p>
                            <a href="#"  onClick={(e) => e.preventDefault()} className="cta-btn">📞 Contact Us</a>
                        </div>
                    </div>
                </section>





                {/* <!-- faq section  --> */}
                <section className="feq-section position-relative section-padding">
                    <div className="container">
                        <div className="row ">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <div className="hire-content service-section-title text-center mb-5 position-relative">
                                    <h6 className="fw-semibold text-black position-relative mb-3 fs-35">FAQs- <span className="blue-heading-style">Your Doubts, Our Assurance!</span></h6>
                                </div>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <div className="feqs-multi-accordion">
                                    <div className="single-feqs-accordion mb-5">
                                        <input type="radio" name="acc" id="feqs1" checked="" />
                                        <label className="feqs-label-title fw-regular text-black fs-24" for="feqs1"> Q-1). How Much Does It Cost to Develop an On-Demand App?</label>
                                        <div className="feqs-content fw-regular position-relative fs-20">
                                            On-demand app development cost depends upon the level of customization and overall app complexity. However, on an estimate, the on-demand app cost can start from INR 3 lacs/-. If the UI UX design is totally out-of-the-box and the backend logic is complex, then the cost goes higher.
                                        </div>
                                    </div>
                                    <div className="single-feqs-accordion mb-5">
                                        <input type="radio" name="acc" id="feqs2" />
                                        <label className="feqs-label-title fw-regular text-black fs-24" for="feqs2"> Q-2). How Long Will It Take To Build an On-Demand App?
                                        </label>
                                        <div className="feqs-content fw-regular position-relative fs-20">
                                            Just like the cost, the duration to build an on-demand app also depends on the level of customization and backend complexity. On average, the duration can be between 4 months and 18 months.
                                        </div>
                                    </div>
                                    <div className="single-feqs-accordion mb-5">
                                        <input type="radio" name="acc" id="feqs3" />
                                        <label className="feqs-label-title fw-regular text-black fs-24" for="feqs3"> Q-3). Can You Provide AR and VR Technologies In an On-Demand App?
                                        </label>
                                        <div className="feqs-content fw-regular position-relative fs-20">
                                            Yes. We have all the advanced technologies, including Augmented Reality, Virtual Reality, Artificial Intelligence, Machine Learning, IoT, and more. We also provide AI App development. So, a business can get AR VR-led apps or can ask for on-demand AI ML integration.
                                        </div>
                                    </div>
                                    <div className="single-feqs-accordion mb-5">
                                        <input type="radio" name="acc" id="feqs4" />
                                        <label className="feqs-label-title fw-regular text-black fs-24" for="feqs4"> Q-4). How Do You Ensure Confidentiality of Unique App Ideas?</label>
                                        <div className="feqs-content fw-regular position-relative fs-20">
                                            We strictly adhere to the Non-Disclosure Agreement (NDA). To protect the client’s unique app ideas, we are legally bound through an NDA. The entire team makes sure that your distinctive app idea is not leaked in the market until the launch of your app. Additionally, if you are an outsourcer, we maintain lifetime confidentiality.
                                        </div>
                                    </div>
                                    <div className="single-feqs-accordion mb-5">
                                        <input className="feqs-btn" type="radio" name="acc" id="feqs5" />
                                        <label className="feqs-label-title fw-regular text-black fs-24" for="feqs5"> Q-5). Can An Outsourcing Company Outsource A Project to You?
                                        </label>
                                        <div className="feqs-content fw-regular position-relative fs-20">
                                            Yes, we are open to receiving projects from outsourcing companies as well. If your deadlines are fleeting and you need an urgent helping hand, come to us. Our development team can help you with your project from in-between as well. You can also outsource a project from the beginning.
                                        </div>
                                    </div>
                                    <div className="single-feqs-accordion mb-5">
                                        <input className="feqs-btn" type="radio" name="acc" id="feqs6" />
                                        <label className="feqs-label-title fw-regular text-black fs-24" for="feqs6"> Q-6). What Post-Development Services Do You Provide?
                                        </label>
                                        <div className="feqs-content fw-regular position-relative fs-20">
                                            Post-development, we provide app launch support, technical maintenance, troubleshooting management, and digital marketing services. In short, we provide complete digital solutions.
                                        </div>
                                    </div>
                                </div>
                                <div id="demohire"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- cta section  --> */}
                <div className="container">
                    <section className="cta-section">
                        <h2>Choose India’s Leading On-Demand App Development Company</h2>
                        <p>Convert Your Dreams into Money-Making Apps with Qmax App Developers</p>
                        <a href="#"  onClick={(e) => e.preventDefault()} className="cta-btn" role="button" aria-label="scroll to form">🚀 Get Started with Qmax</a>
                    </section>
                </div>

            </div>
        </>
    )
};
export default OnDemandAppDevelopment;