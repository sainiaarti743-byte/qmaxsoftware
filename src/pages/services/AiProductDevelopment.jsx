import React from "react";


const AiProductDevelopment = () =>{
    return(
        <>
      <div className="android-app-development-page-wrapper ">
  <section className=" ai-development bg-dark mt-5">
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-lg-6 mt-5">
          <div className="banner_details ">
            <h1 className="fw-semibold text-white mb-3 fs-48 mt-5">AI Development Company for Assistive Business Solutions
            </h1>
            <p className="fw-semilight fs-20 text-white">We’re the creators of not just Business Intelligence, but Intellectual Solutions. Qmax is a leading AI Development Company providing AI-powered software solutions tailored to enhance efficiency. </p>
            <button className="fw-semibold me-2 d-md-none view-btn fs-16"  onClick={(e) => e.preventDefault()}>
              <p className="text-white mb-0 fs-20">Consult Our AI Expert <i className="fa-solid fa-arrow-right"></i></p>
            </button>
          </div>
        </div>
        <div className="col-lg-6 my-3 ">
          <div className="contact-form-details">
            <div className="text-center">
              <h6 className=" text-white fw-regular position-relative mb-3 fs-24">Get in Touch With Us</h6>
            </div>
            <hr className="bg-white"/>
            <form id="banner_form" name="banner_form" novalidate="novalidate" className="row">
              <input type="hidden" name="csrf_test_name" value="791c94e98975f5f7648bf0fca4cef35d"/>     
                       <input type="hidden" name="source" value="AI Development Company"/>

              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <div className="form-group contact-form-fild">

                  <label for="name" className="control-label">Full Name</label>
                  <input type="text" id="name" name="name" className="form-control" placeholder="Your Full Name"/>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12  col-sm-12">
                <div className="form-group contact-form-fild">
                  <label for="email" className="control-label">Business Email </label>
                  <input type="email" id="email" name="email" className="form-control" placeholder="Your Email"/>
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

                
                </div>
              </div>
              <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="form-group contact-form-fild ">
                  <label for="message" className="control-label">Message</label>
                  <textarea type="message" id="message" name="message" className="form-control contact_message_fild" placeholder="Tell us about Your App Idea and Features" minlength="30" maxlength="200" rows="1"></textarea>
                </div>
              </div>

              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div className="btn-box btn-gradistion text-center mt-4">
                  <button type="submit" className="bnr-form-submit-btn" style={{margin: '0 !important'}} id="login_btn_banner" aria-label="submit">Consult our AI Expert</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="leavrage-ai section-padding position-relative">
    <div className="container">
      <div className="row">
        <div className="col-lg-10 col-md-12 mx-auto text-center">
          <h2 className="text-black fs-40 fw-semibold">Leverage <span className="heading-color">AI Development </span> <br/> For Business &amp; Double Your Productivity
          </h2>
          <p className="text-black fs-18 fw-regular mt-3">Choose an AI Development Company over a traditional team of software developers. Unlimit accuracy, productivity, growth, and efficiency with AI-powered solutions. Choose Intellectual, and not just smart, solutions.

          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-12 mt-4">
          <div className="leavrage-ai-wrap">
            <div className="leavrage-img">
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#156bfd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M2.5 2v6h6M21.5 22v-6h-6"></path>
                <path d="M22 11.5A10 10 0 0 0 3.2 7.2M2 12.5a10 10 0 0 0 18.8 4.2"></path>
              </svg>
            </div>

            <div className="text-black fs-22 fw-medium">
              100% Reduction in Repeated Tasks
            </div>
            <p className="text-black fs-18 fw-regular mt-2">Make AI your business assistant and reduce boring and unproductive repetitive tasks by 100%.


            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 mt-4">
          <div className="leavrage-ai-wrap">
            <div className="leavrage-img">
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#156bfd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="9 11 12 14 22 4"></polyline>
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
              </svg>
            </div>
            <div className="text-black fs-22 fw-medium">
              2X Accuracy in Work
            </div>
            <p className="text-black fs-18 fw-regular mt-2">No more human errors, only AI-powered data, calculation, and prediction accuracy.


            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 mt-4">
          <div className="leavrage-ai-wrap">
            <div className="leavrage-img">
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#156bfd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2a10 10 0 1 0 10 10H12V2zM21.18 8.02c-1-2.3-2.85-4.17-5.16-5.18"></path>
              </svg>
            </div>
            <div className="text-black fs-22 fw-medium">
              70% More Informed Decisions
            </div>
            <p className="text-black fs-18 fw-regular mt-2">Make 70% more informed decisions without diving into unorganized heavy data.


            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 mt-4">
          <div className="leavrage-ai-wrap">
            <div className="leavrage-img">
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#156bfd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <div className="text-black fs-22 fw-medium">
              24 X 7 Hours of Business
            </div>
            <p className="text-black fs-18 fw-regular mt-2">With smart AI Agents, make your business work 24 x 7 hours without human labor.


            </p>
          </div>
        </div>
      </div>
     
    </div>
  </section>

  <section className="ai-models section-padding bg-dark">
    <div className="container">
      <div className="row">
        <div className="col-lg-10 col-md-12 mx-auto text-center">
          <h2 className="text-white fs-38 fw-semibold">Our Complete AI Model Compatibilities
          </h2>
          <p className="text-white fs-18 fw-regular mt-3">Explore our diverse range of AI development capabilities. Choose the AI model that best fits your requirement. Our AI Engineers master every relevant aspect of AI development in the present day.


          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="ai-tab-container">
            <div className="sidebar">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <button className="tab active" data-tab="machine-learning">Machine Learning</button>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <button className="tab" data-tab="data-engineering">Data Engineering
                  </button>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <button className="tab" data-tab="predictive-analysis">Predictive Analysis
                  </button>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <button className="tab" data-tab="genai">GenAI</button>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <button className="tab" data-tab="edgeai">Edge AI
                  </button>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <button className="tab" data-tab="nlp">NLP &amp; Conversational AI </button>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <button className="tab" data-tab="computer-vision">Computer Vision &amp; OCR Green AI
                  </button>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <button className="tab" data-tab="anomaly">Anomaly Detection</button>
                </div>
              </div>
            </div>
            <div className="content">
              <div className="tab-content active" id="machine-learning">
                <div className="ai-tab-img">
                  <img src="https://ezulix.com/assets/image/ai-development/machine-learning.svg" width="50" alt="Machine Learning"/>
                </div>
                <div className="fs-22 fw-medium text-white mt-3">Machine Learning
                </div>
                <p className="fs-18 fw-regular text-white mt-2">We make your business software and app solutions smarter with Machine Learning (ML). By training machine learning models, we provide highly predictive and analytical systems.
                </p>
              </div>
              {/* <!-- Repeat for other tabs, change content as needed --> */}
              <div className="tab-content" id="data-engineering">
                <div className="ai-tab-img">
                  <img src="https://ezulix.com/assets/image/ai-development/data-engineer.svg" width="50" alt="Data Engineering"/>
                </div>
                <div className="fs-22 fw-medium text-white mt-3">Data Engineering</div>
                <p className="fs-18 fw-regular text-white mt-2">Our AI experts bring AI workflows to data engineering and deliver smart AI systems that collect, refine, and manage big data pipelines effortlessly.

                </p>
              </div>
              <div className="tab-content" id="predictive-analysis">
                <div className="ai-tab-img">
                  <img src="https://ezulix.com/assets/image/ai-development/analysis.svg" width="50" alt="Predictive Analysis"/>
                </div>
                <div className="fs-22 fw-medium text-white  mt-3">Predictive Analysis
                </div>
                <p className="fs-18 fw-regular text-white mt-2">We are the providers of AI-driven software applications, well-versed in predictive analysis. For anticipatory user needs and behavior analysis, choose predictive analytics.
                </p>
              </div>
              <div className="tab-content" id="genai">
                <div className="ai-tab-img">
                  <img src="https://ezulix.com/assets/image/ai-development/genAI.svg" width="50" alt="GenAI"/>
                </div>
                <div className="fs-22 fw-medium text-white  mt-3">GenAI
                </div>
                <p className="fs-18 fw-regular text-white mt-2">Boost creativity and unlock a new level of content creation with Generative AI technologies. Generate desired images, videos, codes, and more in a few seconds.
                </p>
              </div>
              <div className="tab-content" id="edgeai">
                <div className="ai-tab-img">
                  <img src="https://ezulix.com/assets/image/ai-development/edge.svg" width="50" alt="Edge AI"/>
                </div>
                <div className="fs-22 fw-medium text-white  mt-3">Edge AI

                </div>
                <p className="fs-18 fw-regular text-white mt-2">For faster computation without compromising accuracy, we provide Edge AI development. Process data 10x faster, experience 5 times reduced latency. Take responsive decisions.
                </p>
              </div>
              <div className="tab-content" id="nlp">
                <div className="ai-tab-img">
                  <img src="https://ezulix.com/assets/image/ai-development/nlp.svg" width="50" alt="NLP &amp; Conversational AI"/>
                </div>
                <div className="fs-22 fw-medium text-white  mt-3">NLP &amp; Conversational AI
                </div>
                <p className="fs-18 fw-regular text-white mt-2">Choose advanced systems with Natural Language Processing capabilities. From Conversational AI to Speech Recognition, let your software solution be the smartest one.
                </p>
              </div>
              <div className="tab-content" id="computer-vision">
                <div className="ai-tab-img">
                  <img src="https://ezulix.com/assets/image/ai-development/ocr.svg" width="50" alt="Computer Vision &amp; OCR Green AI"/>
                </div>
                <div className="fs-22 fw-medium text-white  mt-3">Computer Vision &amp; OCR Green AI

                </div>
                <p className="fs-18 fw-regular text-white mt-2">Get advanced AI features integrated into your software product. From Images to Videos and Optical Character Recognition, get advanced integrations for the ultimate user experience.


                </p>
              </div>
              <div className="tab-content" id="anomaly">
                <div className="ai-tab-img">
                  <img src="https://ezulix.com/assets/image/ai-development/object-detection.svg" width="50" alt="Anomaly Detection"/>
                </div>
                <div className="fs-22 fw-medium text-white  mt-3">Anomaly Detection

                </div>
                <p className="fs-18 fw-regular text-white mt-2">Empower your software systems in data security with the power of AI. Get real-time fraud detection and identification of unusual patterns. Keep your business data protected.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="ai-services section-padding  leavrage-ai">
    <div className="container">
      <div className="row">
        <div className="col-lg-10 col-md-12 mx-auto text-center">
          <h2 className="text-black fs-38 fw-semibold">AI Development Services We Offer
          </h2>
          <p className="text-black fs-18 fw-regular mt-3">We offer a wide range of AI Development Services for businesses operating inf all sizes, scales, categories, and industries. Tell us what you're looking for. We provide complete custom AI development. </p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
          <div className="leavrage-ai-wrap">
            <div className="text-black fs-22 fw-medium">AI Strategy &amp; Consulting
            </div>
            <p className="fs-18 fw-regular text-black mt-2">Let your AI project make sense. Get idea validation and strategy discussion with top-notch AI developers in our free AI consultancy sessions. Launch a valid AI product.
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
          <div className="leavrage-ai-wrap">
            <div className="text-black fs-22 fw-medium">AI Software Development
            </div>
            <p className="fs-18 fw-regular text-black mt-2">We design and build completely bespoke AI-based software products. From simple business process automation software to complex ERP solutions, get AI software for better management.
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
          <div className="leavrage-ai-wrap">
            <div className="text-black fs-22 fw-medium">AI App Development
            </div>
            <p className="fs-18 fw-regular text-black mt-2">B2B or B2C, AI is a necessity in every mobile app today. Do not let the chance slip through your hands. Stay relevant in 2025 and beyond. Choose AI app development over a traditional one.
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
          <div className="leavrage-ai-wrap">
            <div className="text-black fs-22 fw-medium">AI Agent Development
            </div>
            <p className="fs-18 fw-regular text-black mt-2">Get fully personalized AI agent development for your website, business software, or mobile app. Stay working 24 x 7 without extra hiring. Let a humanized AI agent support the users.
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
          <div className="leavrage-ai-wrap">
            <div className="text-black fs-22 fw-medium">AI Chatbot Development
            </div>
            <p className="fs-18 fw-regular text-black mt-2">Need a simple AI powered chatbot for your website, app, or software? Our AI developers take care of your smallest to largest needs. Get high-quality AI chatbot development services.
            </p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
          <div className="leavrage-ai-wrap">
            <div className="text-black fs-22 fw-medium">AI System Integration
            </div>
            <p className="fs-18 fw-regular text-black mt-2">Do not need a full-fledged AI product development, but can’t miss the advantages? No worries! Get legacy system modernization with AI system integration. Elevate your existing software.

            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
          <div className="leavrage-ai-wrap">
            <div className="text-black fs-22 fw-medium">AI Product Launch &amp; Deployment
            </div>
            <p className="fs-18 fw-regular text-black mt-2">We’re an unlimited AI product development company. So, we do not limit ourselves to just coding &amp; programming. Even post-development, we help you deploy and launch the AI product.
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
          <div className="leavrage-ai-wrap">
            <div className="text-black fs-22 fw-medium">Post-Development Care
            </div>
            <p className="fs-18 fw-regular text-black mt-2">Our journey will not end with the product deployment and launch. We’re always there to provide technical support from AI software updates to troubleshooting management.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ai-industry section-padding  ">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="ai-industry-title">
            <h2 className="text-white fs-38 fw-semibold">AI in Business: Use Cases For Industries
            </h2>
            <p className="text-white fs-18 fw-regular mt-3">Here is a roadmap for more clarity on how an AI ML Development Company can help business industries leverage Artificial Intelligence and deliver for enhancing user experience to premium level. </p>
            <button className="fw-semibold me-2 d-md-none view-btn fs-16"  onClick={(e) => e.preventDefault()}>
              <p className="text-white mb-0 fs-20">Discuss Your Use Case</p>
            </button>

          </div>

        </div>
        <div className="col-lg-6">
          <div className="row">
            <div className="industry-accordion">
              <div className="industry-accordion-item">
                <button className="industry-accordion-header text-white">Retail &amp; E-Commerce <i className="fa-solid fa-angle-down"></i>
                </button>
                <div className="industry-accordion-body">
                  <p className="text-white fs-18 fw-regular"><i className="fa-solid fa-check-double"></i> Personalized Product Recommendations</p>
                  <p className="text-white fs-18 fw-regular"><i className="fa-solid fa-check-double"></i> Dynamic Pricing</p>
                  <p className="text-white fs-18 fw-regular"><i className="fa-solid fa-check-double"></i> Inventory &amp; Stock Forecasting</p>
                  <p className="text-white fs-18 fw-regular"><i className="fa-solid fa-check-double"></i> Visual &amp; Voice Search</p>
                  <p className="text-white fs-18 fw-regular"><i className="fa-solid fa-check-double"></i> Virtual Shopping Assistants </p>
                </div>
              </div>
              <div className="industry-accordion-item">
                <button className="industry-accordion-header">SMEs &amp; Large Enterprises <i className="fa-solid fa-angle-down"></i>
                </button>
                <div className="industry-accordion-body">
                  <p className="text-white fs-18 fw-regular"><i className="fa-solid fa-check-double"></i> Unique Business Process Automation</p>
                  <p className="text-white fs-18 fw-regular"><i className="fa-solid fa-check-double"></i> Data Analytics &amp; Data Management</p>
                  <p className="text-white fs-18 fw-regular"><i className="fa-solid fa-check-double"></i> Predictive Sales Forecasting
                  </p>
                  <p className="text-white fs-18 fw-regular"><i className="fa-solid fa-check-double"></i> 24x7 Hour Chatbot Support</p>
                  <p className="text-white fs-18 fw-regular"><i className="fa-solid fa-check-double"></i> OCR &amp; Intelligent AI Document Processing
                  </p>
                </div>
              </div>
              <div className="industry-accordion-item">
                <button className="industry-accordion-header">EdTech <i className="fa-solid fa-angle-down"></i>
                </button>
                <div className="industry-accordion-body">
                  <p className="text-white fs-18 fw-regular"><i className="fa-solid fa-check-double"></i> Learner Behavior Analysis
                  </p>
                  <p className="text-white fs-18 fw-regular"><i className="fa-solid fa-check-double"></i> AI-Assisted Assessment Automation
                  </p>
                  <p className="text-white fs-18 fw-regular"><i className="fa-solid fa-check-double"></i> Generative AI for Personalized Feedback</p>
                  <p className="text-white fs-18 fw-regular"><i className="fa-solid fa-check-double"></i> Predictive Analytics for Identifying At-Risk Students
                  </p>
                  <p className="text-white fs-18 fw-regular"><i className="fa-solid fa-check-double"></i> Speech Recognition for Language Learning </p>
                </div>
              </div>
              <div className="industry-accordion-item">
                <button className="industry-accordion-header">Healthcare <i className="fa-solid fa-angle-down"></i> </button>
                <div className="industry-accordion-body">
                  <p className="text-white fs-18 fw-regular"><i className="fa-solid fa-check-double"></i> Diagnose Online Image Recognition &amp; Predictive Analysis
                  </p>
                  <p className="text-white fs-18 fw-regular"><i className="fa-solid fa-check-double"></i> Predictive Analytics for Early Health Risk Identification
                  </p>
                  <p className="text-white fs-18 fw-regular"><i className="fa-solid fa-check-double"></i> Telemedicine AI Agents
                  </p>
                  <p className="text-white fs-18 fw-regular"><i className="fa-solid fa-check-double"></i> Hospital Workflow Optimization
                  </p>
                  <p className="text-white fs-18 fw-regular"><i className="fa-solid fa-check-double"></i> Remote Patient Monitoring
                  </p>
                </div>
              </div>
              <div className="industry-accordion-item">
                <button className="industry-accordion-header">Banking &amp; Finance <i className="fa-solid fa-angle-down"></i></button>
                <div className="industry-accordion-body">
                  <p className="text-white fs-18 fw-regular"><i className="fa-solid fa-check-double"></i> Anomaly Recognition for High Cybersecurity
                  </p>
                  <p className="text-white fs-18 fw-regular"><i className="fa-solid fa-check-double"></i> AI-Powered Credit Card Scoring
                  </p>
                  <p className="text-white fs-18 fw-regular"><i className="fa-solid fa-check-double"></i> Audit and Accounting Automation
                  </p>
                  <p className="text-white fs-18 fw-regular"><i className="fa-solid fa-check-double"></i> Investment Guidance with Predictive Analytics</p>
                  <p className="text-white fs-18 fw-regular"><i className="fa-solid fa-check-double"></i> OCR for Document Verification &amp; KYC</p>
                </div>
              </div>
              <div className="industry-accordion-item">
                <button className="industry-accordion-header">Real Estate <i className="fa-solid fa-angle-down"></i></button>
                <div className="industry-accordion-body">
                  <p className="text-white fs-18 fw-regular"><i className="fa-solid fa-check-double"></i> Personalized Property Recommendations
                  </p>
                  <p className="text-white fs-18 fw-regular"><i className="fa-solid fa-check-double"></i> Predictive Analytics for Suspicious Property Identification</p>
                  <p className="text-white fs-18 fw-regular"><i className="fa-solid fa-check-double"></i> AI-Enhanced Virtual Property Tours
                  </p>
                  <p className="text-white fs-18 fw-regular"><i className="fa-solid fa-check-double"></i> Client Behavior Prediction and Lead Scoring</p>
                  <p className="text-white fs-18 fw-regular"><i className="fa-solid fa-check-double"></i> Property Price Prediction with Machine Learning
                  </p>
                </div>
              </div>
              <div className="industry-accordion-item">
                <button className="industry-accordion-header">Logistics &amp; Supply Chain <i className="fa-solid fa-angle-down"></i></button>
                <div className="industry-accordion-body">
                  <p className="text-white fs-18 fw-regular"><i className="fa-solid fa-check-double"></i> Route Optimization
                  </p>
                  <p className="text-white fs-18 fw-regular"><i className="fa-solid fa-check-double"></i> Delivery Time Prediction
                  </p>
                  <p className="text-white fs-18 fw-regular"><i className="fa-solid fa-check-double"></i> Warehouse Automation</p>
                  <p className="text-white fs-18 fw-regular"><i className="fa-solid fa-check-double"></i> Demand Forecasting</p>
                  <p className="text-white fs-18 fw-regular"><i className="fa-solid fa-check-double"></i> AI-Powered Supplier Risk Assessment
                  </p>
                </div>
              </div>
              <div className="industry-accordion-item">
                <button className="industry-accordion-header">Hospitality &amp; Tourism <i className="fa-solid fa-angle-down"></i></button>
                <div className="industry-accordion-body">
                  <p className="text-white fs-18 fw-regular"><i className="fa-solid fa-check-double"></i> AI Agent for Booking Assistance
                  </p>
                  <p className="text-white fs-18 fw-regular"><i className="fa-solid fa-check-double"></i> Pricing Management and Occupancy Optimization
                  </p>
                  <p className="text-white fs-18 fw-regular"><i className="fa-solid fa-check-double"></i> Personalized Itineraries</p>
                  <p className="text-white fs-18 fw-regular"><i className="fa-solid fa-check-double"></i> Predictive Analytics for Demand Forecasting
                  </p>
                  <p className="text-white fs-18 fw-regular"><i className="fa-solid fa-check-double"></i> AI-Automation for Smart Rooms</p>
                </div>
              </div>
              <div className="industry-accordion-item">
                <button className="industry-accordion-header">Marketing &amp; Advertising <i className="fa-solid fa-angle-down"></i></button>
                <div className="industry-accordion-body">
                  <p className="text-white fs-18 fw-regular"><i className="fa-solid fa-check-double"></i> ML for Audience Segmentation</p>
                  <p className="text-white fs-18 fw-regular"><i className="fa-solid fa-check-double"></i> More Optimized Targeting with AI</p>
                  <p className="text-white fs-18 fw-regular"><i className="fa-solid fa-check-double"></i> Ad Campaign Management Automation</p>
                  <p className="text-white fs-18 fw-regular"><i className="fa-solid fa-check-double"></i> Budget Allocation and Optimization
                  </p>
                  <p className="text-white fs-18 fw-regular"><i className="fa-solid fa-check-double"></i> Performance Analytics &amp; CRO
                  </p>
                </div>
              </div>
              <div className="industry-accordion-item">
                <button className="industry-accordion-header">Manufacturing &amp; Construction <i className="fa-solid fa-angle-down"></i></button>
                <div className="industry-accordion-body">
                  <p className="text-white fs-18 fw-regular"><i className="fa-solid fa-check-double"></i> Smart Equipment Management
                  </p>
                  <p className="text-white fs-18 fw-regular"><i className="fa-solid fa-check-double"></i> AI-Powered Defect Detection
                  </p>
                  <p className="text-white fs-18 fw-regular"><i className="fa-solid fa-check-double"></i> Predictive Analytics for Risk Analysis</p>
                  <p className="text-white fs-18 fw-regular"><i className="fa-solid fa-check-double"></i> Safety Monitoring with Computer Vision
                  </p>
                  <p className="text-white fs-18 fw-regular"><i className="fa-solid fa-check-double"></i> Workforce Planning with AI
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="why-ezulix section-padding ">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <div>
            <h2 className="text-black fs-38 fw-semibold">Why Qmax Matters for AI Development Services?

            </h2>
            <p className="text-black fs-18 fw-regular mt-3">Qmax has been providing AI Development Services since even before the trend started. We live ahead of time, and we want our clients to experience the same with us. That’s the first reason to choose us. Additionally, if you need the following, then come to us - </p>
           
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 mx-auto">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 mt-5">
              <div className="why-service-wrap">
                <div className="row">
                  <div className="col-xl-5 col-lg-12">
                    <div className="why-service-img">
                      <img src="https://ezulix.com/assets/image/ai-development/fully-custom.png" alt="Fully Custom AI Development Image"/>
                    </div>
                  </div>
                  <div className="col-xl-7 col-lg-12">
                    <div className="why-service-content">
                      <div className="text-black fs-22 fw-medium">Fully Custom AI Development
                      </div>
                      <p className="fs-18 fw-regular text-black mt-1">We provide fully custom AI solutions for businesses. With our AI developers, everything is possible. Just express what you want your software product to do. We will make it happen.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
         
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 mt-5">
              <div className="why-service-wrap">
                <div className="row ">
                  <div className="col-xl-5 col-lg-12">
                    <div className="why-service-img">
                      <img src="https://ezulix.com/assets/image/ai-development/multidomain.png" alt="Multi-Domain Expertise Image"/>
                    </div>
                  </div>
                  <div className="col-xl-7 col-lg-12">
                    <div className="why-service-content">
                      <div className="text-black fs-22 fw-medium">Multi-Domain Expertise
                      </div>
                      <p className="fs-18 fw-regular text-black mt-1">As a custom AI development company, we specialize in multiple domains. We can build top-notch AI products with bespoke functionalities for any business industry.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 mt-5">
              <div className="why-service-wrap">
                <div className="row">
                  <div className="col-xl-5 col-lg-12">
                    <div className="why-service-img">
                      <img src="https://ezulix.com/assets/image/ai-development/ethical-development.png" alt="Ethical AI Development Image"/>
                    </div>
                  </div>
                  <div className="col-xl-7 col-lg-12">
                    <div className="why-service-content">
                      <div className="text-black fs-22 fw-medium">Ethical AI Development

                      </div>
                      <p className="fs-18 fw-regular text-black mt-1">We focus highly on ethical AI development. None of our delivered AI products demonstrates obscenity, bias, or manipulation. Our AI products serve humanity in the most ethical ways.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 mt-5">
              <div className="why-service-wrap">
                <div className="row">
                  <div className="col-xl-5 col-lg-12">
                    <div className="why-service-img">
                      <img src="https://ezulix.com/assets/image/ai-development/client-centeric.png" alt="Client-Centric Approach Image"/>
                    </div>
                  </div>
                  <div className="col-xl-7 col-lg-12">
                    <div className="why-service-content">
                      <div className="text-black fs-22 fw-medium">Client-Centric Approach

                      </div>
                      <p className="fs-18 fw-regular text-black mt-1">We’re a fully client-centric company. The client feels included in the development process throughout the tenure. We’re always ready to serve the clients and fulfill their requirements.
                      </p>
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

  {/* <section className="home-testimonials-section section-padding">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <div className="section-title" data-aos="fade-up">
            <h2 className="text-black fs-38 fw-semibold">Client Testimonials
            </h2>
            <p className="text-black fs-18 fw-regular mt-2 ">
              We have a proven track record in AI Product Development. Hear it directly through our clients!
            </p>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-12">
          <div className="testimonials" data-aos="zoom-in">
            <div className="owl-carousel owl-theme owl-loaded owl-drag" id="testimonialCarousel">
              

              

              

              

            <div className="owl-stage-outer"><div className="owl-stage" style={{transform: 'translate3d(-1730px, 0px, 0px)', transition: '0.6s', width: '2768px'}}>
                <div className="owl-item cloned" style={{width: '336px', marginRight: '10px'}}><div className="item">
                <div className="testimonial-card">
                  <div className="tp-review-item mb-20">
                    <div className="tp-review-ratings">
                      <span>
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                        </svg>
                      </span>
                      <span>
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                        </svg>
                      </span>
                      <span>
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                        </svg>
                      </span>
                      <span>
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                        </svg>
                      </span>
                      <span>
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                        </svg>
                      </span>
                    </div>
                    <h3 className="fs-22 fw-semibold mb-2 color-orange">Navajot Singh
                      (InfoMed)</h3>
                    <p className="mb-2 fs-18 text-black fw-regular"><b>“Thanks for Keeping Me Ahead of Time”</b> <br/>
                      “Team Qmax is really the best AI product development company. I needed a smart inventory management software for my pharmaceutical business. They have provided me with a smart inventory software that auto-detects the stock levels and notifies me well in advance. This way, I never run out of stock. The intelligent demand forecast feature helps me reduce wastage. Thank you so much for this nice software. ”
                    </p>

                  </div>
                </div>
              </div></div><div className="owl-item cloned" style={{width: '336px', marginRight: '10px'}}><div className="item">
                <div className="testimonial-card">
                  <div className="tp-review-item mb-20">
                    <div className="tp-review-ratings">
                      <span>
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                        </svg>
                      </span>
                      <span>
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                        </svg>
                      </span>
                      <span>
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                        </svg>
                      </span>
                      <span>
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                        </svg>
                      </span>
                      <span>
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                        </svg>
                      </span>
                    </div>
                    <h3 className="fs-22 fw-semibold mb-2 color-orange">Vishal Yadav (DGSHAPE)</h3>
                    <p className="mb-2 fs-18 text-black fw-regular"><b>“Amazing AI Chatbot Development Company”</b> <br/>
                      “Team Qmax has handled our entire launch in India, from web page development to marketing. Our experience with Qmax has been really amazing. The team is so client-centric that, without even demanding, they provided us with a personalized and branded AI Agent Chatbot, Darshini, from their side. No one dislikes anything ‘extra’, right? So, we didn’t mind either. Guys, you are truly amazing. Thank You So Much.”
                    </p>

                  </div>
                </div>
              </div></div><div className="owl-item" style={{width: '336px', marginRight: '10px'}}><div className="item">
                <div className="testimonial-card">
                  <div className="tp-review-item mb-20">
                    <div className="tp-review-ratings">
                      <span>
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                        </svg>
                      </span>
                      <span>
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                        </svg>
                      </span>
                      <span>
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                        </svg>
                      </span>
                      <span>
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                        </svg>
                      </span>
                      <span>
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                        </svg>
                      </span>
                    </div>
                    <h3 className="fs-22 fw-semibold mb-2 color-orange">Prashant Kumar (Equity2Commodity)</h3>
                    <p className="mb-2 fs-18 text-black fw-regular"><b>“You Made My Life Easy”</b> <br/>
                      “Transforming my YouTube channel to a digital university was not easy for me. We are only two trainers, but the number of students and batches was really high. It was unfeasible mentally and physically to serve everyone by working 24x7. Thanks to Qmax, who suggested an AI-powered assessment and feedback system. AI has made my life really easy. I have even noticed a great boom in student engagement. Truly, choosing Qmax as my partner AI development company was the right decision.”


                    </p>

                  </div>
                </div>
              </div></div><div className="owl-item" style={{width: '336px', marginRight: '10px'}}><div className="item">
                <div className="testimonial-card">
                  <div className="tp-review-item mb-20">
                    <div className="tp-review-ratings">
                      <span>
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                        </svg>
                      </span>
                      <span>
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                        </svg>
                      </span>
                      <span>
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                        </svg>
                      </span>
                      <span>
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                        </svg>
                      </span>
                      <span>
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                        </svg>
                      </span>
                    </div>
                    <h3 className="fs-22 fw-semibold mb-2 color-orange">Somesh Sharma (Printylish)</h3>
                    <p className="mb-2 fs-18 text-black fw-regular"><b>“Really Creative &amp; Genuine Development Team”</b> <br/>
                      “I think I was the rarest one to choose custom eCommerce development over the Shopify trend. But, I must admit that Qmax made it feel worth having chosen a different path. The way they customized my platform and provided AI ML integration for user behavior analysis and personalized recommendations actually helped my business. I would say your team is really creative and you people are very genuine. Thanks for your support.”
                    </p>

                  </div>
                </div>
              </div></div><div className="owl-item" style={{width: '336px', marginRight: '10px'}}><div className="item">
                <div className="testimonial-card">
                  <div className="tp-review-item mb-20">
                    <div className="tp-review-ratings">
                      <span>
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                        </svg>
                      </span>
                      <span>
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                        </svg>
                      </span>
                      <span>
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                        </svg>
                      </span>
                      <span>
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                        </svg>
                      </span>
                      <span>
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                        </svg>
                      </span>
                    </div>
                    <h3 className="fs-22 fw-semibold mb-2 color-orange">Navajot Singh
                      (InfoMed)</h3>
                    <p className="mb-2 fs-18 text-black fw-regular"><b>“Thanks for Keeping Me Ahead of Time”</b> <br/>
                      “Team Qmax is really the best AI product development company. I needed a smart inventory management software for my pharmaceutical business. They have provided me with a smart inventory software that auto-detects the stock levels and notifies me well in advance. This way, I never run out of stock. The intelligent demand forecast feature helps me reduce wastage. Thank you so much for this nice software. ”
                    </p>

                  </div>
                </div>
              </div></div><div className="owl-item active" style={{width: '336px', marginRight: '10px'}}><div className="item">
                <div className="testimonial-card">
                  <div className="tp-review-item mb-20">
                    <div className="tp-review-ratings">
                      <span>
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                        </svg>
                      </span>
                      <span>
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                        </svg>
                      </span>
                      <span>
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                        </svg>
                      </span>
                      <span>
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                        </svg>
                      </span>
                      <span>
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                        </svg>
                      </span>
                    </div>
                    <h3 className="fs-22 fw-semibold mb-2 color-orange">Vishal Yadav (DGSHAPE)</h3>
                    <p className="mb-2 fs-18 text-black fw-regular"><b>“Amazing AI Chatbot Development Company”</b> <br/>
                      “Team Qmax has handled our entire launch in India, from web page development to marketing. Our experience with Qmax has been really amazing. The team is so client-centric that, without even demanding, they provided us with a personalized and branded AI Agent Chatbot, Darshini, from their side. No one dislikes anything ‘extra’, right? So, we didn’t mind either. Guys, you are truly amazing. Thank You So Much.”
                    </p>

                  </div>
                </div>
              </div></div><div className="owl-item cloned" style={{width: '336px', marginRight: '10px'}}><div className="item">
                <div className="testimonial-card">
                  <div className="tp-review-item mb-20">
                    <div className="tp-review-ratings">
                      <span>
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                        </svg>
                      </span>
                      <span>
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                        </svg>
                      </span>
                      <span>
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                        </svg>
                      </span>
                      <span>
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                        </svg>
                      </span>
                      <span>
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                        </svg>
                      </span>
                    </div>
                    <h3 className="fs-22 fw-semibold mb-2 color-orange">Prashant Kumar (Equity2Commodity)</h3>
                    <p className="mb-2 fs-18 text-black fw-regular"><b>“You Made My Life Easy”</b> <br/>
                      “Transforming my YouTube channel to a digital university was not easy for me. We are only two trainers, but the number of students and batches was really high. It was unfeasible mentally and physically to serve everyone by working 24x7. Thanks to Qmax, who suggested an AI-powered assessment and feedback system. AI has made my life really easy. I have even noticed a great boom in student engagement. Truly, choosing Qmax as my partner AI development company was the right decision.”


                    </p>

                  </div>
                </div>
              </div></div><div className="owl-item cloned" style={{width: '336px', marginRight: '10px'}}><div className="item">
                <div className="testimonial-card">
                  <div className="tp-review-item mb-20">
                    <div className="tp-review-ratings">
                      <span>
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                        </svg>
                      </span>
                      <span>
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                        </svg>
                      </span>
                      <span>
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                        </svg>
                      </span>
                      <span>
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                        </svg>
                      </span>
                      <span>
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.71468 0.878115C6.80449 0.601722 7.19551 0.601722 7.28532 0.878115L8.50424 4.62959C8.54441 4.75319 8.65959 4.83688 8.78956 4.83688H12.7341C13.0247 4.83688 13.1455 5.20877 12.9104 5.37959L9.71923 7.69812C9.61409 7.77452 9.57009 7.90993 9.61025 8.03353L10.8292 11.785C10.919 12.0614 10.6026 12.2912 10.3675 12.1204L7.17634 9.80188C7.07119 9.72548 6.92881 9.72548 6.82366 9.80188L3.63247 12.1204C3.39736 12.2912 3.08101 12.0614 3.17082 11.785L4.38975 8.03353C4.42991 7.90993 4.38591 7.77452 4.28077 7.69812L1.08957 5.37959C0.854459 5.20877 0.975292 4.83688 1.26591 4.83688H5.21044C5.34041 4.83688 5.45559 4.75319 5.49576 4.62959L6.71468 0.878115Z" fill="#F2B827"></path>
                        </svg>
                      </span>
                    </div>
                    <h3 className="fs-22 fw-semibold mb-2 color-orange">Somesh Sharma (Printylish)</h3>
                    <p className="mb-2 fs-18 text-black fw-regular"><b>“Really Creative &amp; Genuine Development Team”</b> <br/>
                      “I think I was the rarest one to choose custom eCommerce development over the Shopify trend. But, I must admit that Qmax made it feel worth having chosen a different path. The way they customized my platform and provided AI ML integration for user behavior analysis and personalized recommendations actually helped my business. I would say your team is really creative and you people are very genuine. Thanks for your support.”
                    </p>

                  </div>
                </div>
              </div></div></div></div><div className="owl-nav disabled"><button type="button" role="presentation" className="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" className="owl-next"><span aria-label="Next">›</span></button></div><div className="owl-dots"><button role="button" className="owl-dot"><span></span></button><button role="button" className="owl-dot"><span></span></button><button role="button" className="owl-dot"><span></span></button><button role="button" className="owl-dot active"><span></span></button></div></div>
          </div>
        </div>
      </div>

    </div>
  </section> */}
  <section className="home-cta">
    <div className="container">
      <div className="row">
        <div className="col-lg-10 mx-auto text-center">
          <div className="cta-wrapee">
            <h2 className="text-white" data-aos="fade-up">
              Let’s Collaborate &amp; Create Something Smart, Intelligent &amp; Innovative
            </h2>
            <p className="fs-18 text-white fw-regular my-3" data-aos="fade-up">What else are you waiting for now? Take a step forward towards AI transformation. Experience the ultra-premium business process automation with us. Get ready for reduced Operational Costs and Skyrocketing Productivity.
            </p>
            <button className="fw-semibold me-2 d-md-none view-btn fs-16"  onClick={(e) => e.preventDefault()}>
              <p className="text-white mb-0 fs-20">Boost Productivity with AI</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="feq-section position-relative section-padding">
    <div className="container">
      <div className="row ">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <div className="hire-content service-section-title text-center mb-5 position-relative">
            <h6 className="fw-semibold text-black position-relative mb-3 fs-40">FAQs</h6>
          </div>
        </div>
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <div className="feqs-multi-accordion">
            <div className="single-feqs-accordion mb-4">
              <input type="radio" name="acc" id="feqs1" checked=""/>
              <label className="feqs-label-title fw-regular text-black fs-20" for="feqs1"> Q-1). How Much Does AI Software Development Cost?
              </label>
              <div className="feqs-content fw-regular position-relative fs-20">
                AI &amp; ML Development cost depends upon the overall project complexity, scope of work, and desired functionalities. On an estimate, it can start from INR 800,000/- (USD 9000) and go above. However, you will need to discuss project requirements for accurate cost estimation.
              </div>
            </div>
            <div className="single-feqs-accordion mb-4">
              <input type="radio" name="acc" id="feqs2"/>
              <label className="feqs-label-title fw-regular text-black fs-20" for="feqs2"> Q-2). How Long Does It Take to Build an AI App? </label>
              <div className="feqs-content fw-regular position-relative fs-20">
                To develop an AI product, the duration reuquired also depends on the project complexity. On average, it can take at least 4 months to work on a simple AI project. The duration may increase with an increase in the scope of work and level of customization. Connect with our team for accurate duration estimation.
              </div>
            </div>
            <div className="single-feqs-accordion mb-4">
              <input type="radio" name="acc" id="feqs3"/>
              <label className="feqs-label-title fw-regular text-black fs-20" for="feqs3"> Q-3). Can You Build Cross-Platform AI Apps? </label>
              <div className="feqs-content fw-regular position-relative fs-20">
                Yes, Qmax specializes in cross-platform app development. Our mobile app developers are well-trained in building iOS and Android OS-friendly AI-powered apps. You can bring your AI app development related business requirements to us and take a cross-platform app home that provides native-like efficiency and user experience on either platform.
              </div>
            </div>
            <div className="single-feqs-accordion mb-4">
              <input type="radio" name="acc" id="feqs4"/>
              <label className="feqs-label-title fw-regular text-black fs-20" for="feqs4"> Q-4). How AI Can Help Me in Data Analytics?</label>
              <div className="feqs-content fw-regular position-relative fs-20">
                AI is the biggest boon for data analytics. By collecting, analyzing, cleaning, categorizing, and manipulating big data within a few seconds, AI sets mankind free from hours of labor and tonnes of fatigue. AI ensures 100% calculation accuracy, encouraging data-driven decisions. One-time investment in AI can thus bring long term benefits in the data analytics field.
              </div>
            </div>
            <div className="single-feqs-accordion mb-4">
              <input className="feqs-btn" type="radio" name="acc" id="feqs5"/>
              <label className="feqs-label-title fw-regular text-black fs-20" for="feqs5"> Q-5). Do You Provide Staff Augmentation for AI Projects? </label>
              <div className="feqs-content fw-regular position-relative fs-20">
                Currently, we provide staff augmentation only for government projects. You can outsource AI product development to us onshore or offshore remotely. We have two branches in India - one in Jaipur (Headquarters) and the other in Gurugram, Haryana. You can have complete project ownership, control, and transparency. You can visit us on-site throughout the development tenure, if you wish.
              </div>
            </div>
            <div className="single-feqs-accordion mb-4">
              <input className="feqs-btn" type="radio" name="acc" id="feqs6"/>
              <label className="feqs-label-title fw-regular text-black fs-20" for="feqs6"> Q-6). Will You Provide AI Model Updates Post-Development? </label>
              <div className="feqs-content fw-regular position-relative fs-20">
                Yes. Qmax provides technical support and maintenance services for all projects. Since AI models upgrade continuously, we provide continued support and maintenance post-development. A business may focus on its core tasks, while we take care of the AI software update and troubleshooting management.
              </div>
            </div>

          </div>
          <div id="demohire"></div>
        </div>
      </div>
    </div>
  </section>


</div>
        </>
    )
};
export default AiProductDevelopment;