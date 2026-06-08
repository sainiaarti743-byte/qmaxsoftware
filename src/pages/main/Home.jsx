import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";


const Home = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const source = video.querySelector("source");
        if (!source) return;

        source.src = source.dataset.src;
        video.load();

        video.play().catch(() => { });
    }, []);

    const showTab = (tabIndex) => {
  console.log(tabIndex);
};

    return (
        <>
            <div className="home-page-wrapper" role="main" aria-label="Homepage Main Content">
                <div className="banner-container ">

                    <video
                        ref={videoRef}
                        className="banner-video"
                        poster="/assets/image/video/poster.webp"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="none"
                    >
                        <source
                            data-src="/assets/image/video/new-video.mp4"
                            type="video/mp4"
                        />
                    </video>
                    <div className="banner-content home_page_banner py-5">
                        <div className="row">
                            <div className="container">
                                <div className="col-lg-11 mx-auto text-center ">
                                    <h2 className="py-5"></h2>
                                    <h1 className="text_box ">
                                        <span className="text-color text-white">Simplifying </span> <a href="/ai-development-company" role="button">AI for Every Business.</a> <br />
                                         <a href="/software-development-services" role="button">Software</a>                                & <a href="/mobile-app-development-company" role="button">App</a> Developers Transforming Lives <span className="text-color">Worldwide.</span>
                                    </h1>
                                    <p className="fs-22 fw-regular text-white my-4 ">Growing With</p>
                                    <div className="banner-tech">
                                        <h2 className="fs-20 fw-regular text-white ">
                                            <img src="/assets/image/home/banner-icon/ai.png" width="24" height="24" alt="Artificial Intelligence Icon" /> Artificial Intelligence
                                        </h2>
                                        <h2 className="fs-20 fw-regular text-white ">
                                            <img src="/assets/image/home/banner-icon/ar.png" width="24" height="24" alt="Augmented Reality Icon" /> Augmented Reality
                                        </h2>
                                        <h2 className="fs-20 fw-regular text-white ">
                                            <img src="/assets/image/home/banner-icon/cloud.png" width="24" height="24" alt="Cloud Icon" /> Cloud
                                        </h2>
                                        <h2 className="fs-20 fw-regular text-white ">
                                            <img src="/assets/image/home/banner-icon/saas.png" width="24" height="24" alt="SaaS Icon" /> SaaS
                                        </h2>
                                        <h2 className="fs-20 fw-regular text-white ">
                                            <img src="/assets/image/home/banner-icon/vr.png" width="24" height="24" alt="Virtual Reality Icon" /> Virtual Reality
                                        </h2>
                                        <h2 className="fs-20 fw-regular text-white ">
                                            <img src="/assets/image/home/banner-icon/blockchain.png" width="24" height="24" alt="Blockchain Icon" /> Blockchain
                                        </h2>
                                        <h2 className="fs-20 fw-regular text-white ">
                                            <img src="/assets/image/home/banner-icon/iot.png" width="24" height="24" alt="IOT Icon" /> IOT
                                        </h2>
                                    </div>
                                    <a href="#" role="button" className="custom-cta-btn mt-4" onClick={(e) => e.preventDefault()}><span> Get a Free AI Consultation </span></a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <section className="partner-wrapper section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="partner-title " style={{ overflow: 'hidden' }}>
                                    <h2> Making Headlines In
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="wrapper">

                                <div className="item item1"> <img src="/assets/image/home/partners/dailyhunt.webp" width="130" height="50" loading="lazy" alt="Badge Logo" /></div>
                                <div className="item item2"> <img src="/assets/image/home/partners/jionewswhite.webp" width="130" height="50" loading="lazy" alt="Badge Logo" /></div>
                                <div className="item item3"> <img src="/assets/image/home/partners/lokmattimes.webp" width="130" height="50" loading="lazy" alt="Badge Logo" /></div>
                                <div className="item item4"><img src="/assets/image/home/partners/republicnewstoday.webp" width="130" height="50" loading="lazy" alt="Badge Logo" /></div>
                                <div className="item item5"><img src="/assets/image/home/partners/cropped.webp" width="130" height="50" loading="lazy" alt="Badge Logo" /></div>
                                <div className="item item6"> <img src="/assets/image/home/partners/Vansh-Logo.webp" width="130" height="50" loading="lazy" alt="Badge Logo" /></div>
                                <div className="item item7"> <img src="/assets/image/home/partners/ed.webp" width="130" height="50" loading="lazy" alt="Badge Logo" /></div>
                                <div className="item item8"> <img src="/assets/image/home/partners/dailyhunt.webp" width="130" height="50" loading="lazy" alt="Badge Logo" /></div>
                                <div className="item item9">
                                    <img src="/assets/image/home/partners/jionewswhite.webp" width="130" height="50" loading="lazy" alt="Badge Logo" />
                                </div>
                                <div className="item item10">
                                    <img src="/assets/image/home/partners/lokmattimes.webp" width="130" height="50" loading="lazy" alt="Badge Logo" />
                                </div>
                                <div className="item item11"><img src="/assets/image/home/partners/republicnewstoday.webp" width="130" height="50" loading="lazy" alt="Badge Logo" /></div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="ezulix-choose">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xxl-5 col-xl-4 col-lg-4">
                                <div className="section-title choose-ez-title">
                                    <h2 className="text-black fs-38 fw-semibold"> <span className="text-color"> Qmax - </span> Software Development Company in Gurgaon


                                    </h2>
                                    <p className="text-black fs-18 fw-regular mt-3">Among various software development companies in India, Qmax is trusted worldwide for its dedicated, reliable, and top-notch IT services and solutions. With over a decade of experience, Qmax is renowned for its fully client-centric
                                        services. Currently, established as a leading software development company in Gurgaon (now Gurugram), Qmax provides managed IT services worldwide.

                                    </p>
                                </div>
                            </div>
                            <div className="col-xxl-7 col-xl-8 col-lg-8">
                                <div className="row">
                                    <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-6 p-0">
                                        <div className="choose-hrz-wrapper hrz-wrapper">
                                            <div className="choose-icon">
                                                <img src="/assets/image/home/why-choose/custom-build.png" height="40px" width="40px" alt="Custom-Built
                                        Software Icon"/>
                                            </div>
                                            <div className="choose-content">
                                                <h3 className="fs-22 fw-semibold mt-3">100% Custom-Built Software
                                                </h3>
                                                <p className="fw-semibold text-white mt-2" style={{ fontSize: '14px' }}>Zero Templates, Zero Copy-Paste</p>
                                                <p className="fs-16 fw-regular text-white">Leave an everlasting impression with unique, creative, and out-of-the-box website designs. Get websites and web apps with fully customized functionalities.</p>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-6 p-0">
                                        <div className="choose-ver-wrapper ">
                                            <div className="choose-icon">
                                                <img src="/assets/image/home/why-choose/bussiness-fist.png" height="40px" width="40px" alt="Business-First Technology Icon" />
                                            </div>
                                            <div className="choose-content">
                                                <h3 className="fs-22 fw-semibold mt-3">Business-First Technology</h3>
                                                <p className="fw-semibold text-white mt-2" style={{ fontSize: '14px' }}>We Understand Business Before Writing Code</p>
                                                <p className="fs-16 fw-regular text-white">Hiring us is not just about getting the code done! We first listen to your business objectives and brand story to deliver a tailored solution. </p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-6 p-0 order-md-2">
                                        <div className="choose-ver-wrapper ver-wrapper">
                                            <div className="choose-icon">
                                                <img src="/assets/image/home/why-choose/product-lifcycle.png" height="40px" width="40px" alt="Full Product Lifecycle Icon" />
                                            </div>
                                            <div className="choose-content">
                                                <div className="choose-content">
                                                    <h3 className="fs-22 fw-semibold mt-3">Full Product Lifecycle  </h3>
                                                    <p className="fw-semibold text-white mt-2" style={{ fontSize: '14px' }}>From Idea to Launch to Maintenance</p>
                                                    <p className="fs-16 fw-regular text-white">At Qmax, we take care of your full Software Development Lifecycle. From idea enhancement to development and post-development maintenance.</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-6 p-0 order-md-1">
                                        <div className="choose-hrz-wrapper hrz-wrapper bottom-hrz-wrapper">
                                            <div className="choose-icon">
                                                <img src="/assets/image/home/why-choose/align-methalogy.png" height="40px" width="40px" alt="Fast Delivery Icon" />
                                            </div>
                                            <div className="choose-content">
                                                <div className="choose-content">
                                                    <h3 className="fs-22 fw-semibold mt-3">Fast Delivery with Agile Execution
                                                    </h3>
                                                    <p className="fw-semibold text-white mt-2" style={{ fontSize: '14px' }}>Rapid Development Without Bugs & Glitches</p>
                                                    <p className="fs-16 fw-regular text-white">Our team ensures rapid project development without performance glitches through modern agile software development methodologies.</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                <section className="ezulix-solution-wrapper position-relative overflow-hidden section-padding">
                    <div className="container">
                        <div className="row solution-row1">
                            <div className="col-lg-7 col-md-12 col-sm-12 solution-heading-block">
                                <div className="section-title">
                                    <h2 className="text-black fs-38 fw-semibold">What Makes <span className="text-color"> Qmax the Best </span><br />Custom Software Development Company? </h2>
                                </div>
                            </div>
                        </div>
                        <div className="row solution-row2 mt-4">
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-xl-3 col-lg-12">
                                        <div className="row">
                                            <div className="col-xl-12 col-lg-6 col-md-6 col-sm-6">
                                                <div className="company-facts wrap-1 mt-4 position-relative">
                                                    <h3>
                                                        10+
                                                    </h3>
                                                    <p className="fs-22 fw-semibold text-black">
                                                        Years of Excellence in Software Innovation
                                                    </p>
                                                    <div className="solution-icon">
                                                        <img src="/assets/image/home/experties/excellence.png" width="50" height="50" alt="Excellence Icon" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12 col-lg-6 col-md-6 col-sm-6 mt-4">
                                                <div className="company-facts position-relative">
                                                    <h3>
                                                        4.6
                                                    </h3>
                                                    <p className="fs-22 fw-semibold text-black">
                                                        Average Client Satisfaction (Google & Clutch)
                                                    </p>
                                                    <div className="solution-icon">
                                                        <img src="/assets/image/home/experties/Frame.png" width="50" height="50" alt="Client Satisfaction Icon" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-12">
                                        <div className="row">
                                            <div className="col-xl-12 col-lg-4 col-md-4 col-sm-4 mt-4">
                                                <div className="company-facts wrap-2 position-relative">
                                                    <h3 className="text-color">
                                                        Level 5
                                                    </h3>
                                                    <p className="fs-22 fw-semibold text-black">
                                                        CMMI Certified Company
                                                    </p>
                                                    <div className="solution-icon">
                                                        <img src="/assets/image/home/experties/certified.png" width="50" height="50" alt="CMMI" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12 col-lg-4 col-md-4 col-sm-4 mt-4">
                                                <div className="company-facts wrap-3 position-relative">
                                                    <h3 className="text-color">
                                                        1500+
                                                    </h3>
                                                    <p className="fs-22 fw-semibold text-black">
                                                        Active Deployments Worldwide
                                                    </p>
                                                    <div className="solution-icon">
                                                        <img src="/assets/image/home/experties/development.png" width="70" height="70" alt="Active Deployments" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12 col-lg-4 col-md-4 col-sm-4 mt-4">
                                                <div className="company-facts wrap-2 position-relative">
                                                    <h3 className="text-color">
                                                        25+
                                                    </h3>
                                                    <p className="fs-22 fw-semibold text-black">
                                                        Industries Served Worldwide
                                                    </p>
                                                    <div className="solution-icon">
                                                        <img src="/assets/image/home/experties/worldwide.png" width="50" height="50" alt=" Industries Served Worldwide Icon" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-xl-3 col-lg-12">
                                        <div className="row">
                                            <div className="col-xl-12 col-lg-6 col-md-6 col-sm-6 mt-4">
                                                <div className="company-facts position-relative">
                                                    <h3 style={{ fontSize: '46px' }}>
                                                        Global Presence
                                                    </h3>
                                                    <p className="fs-22 fw-semibold pt-3 text-black">
                                                        IN | UAE | UK | USA
                                                    </p>
                                                    <div className="solution-icon">
                                                        <img src="/assets/image/home/experties/global-perfomance.png" width="40" height="40" alt="Global Perfomance Icon" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12 col-lg-6 col-md-6 col-sm-6">
                                                <div className="company-facts wrap-1 border-radius mt-4 position-relative">
                                                    <h3>
                                                        98%
                                                    </h3>
                                                    <p className="fs-22 fw-semibold text-black">
                                                        Client Retention
                                                    </p>
                                                    <div className="solution-icon">
                                                        <img src="/assets/image/home/experties/client-retention.png" width="40" height="40" alt="Client Retention Icon" />
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
                <section className="section-padding ai-service">
                    <div className="container">
                        <div className="row">
                            <div className="section-title">
                                <h2 className="text-black fs-38 fw-semibold">Not Just Intelligent But <span className="text-gradient"> ‘Intellectual’ Solutions </span> </h2>
                                <p className="text-black fs-22 fw-regular mt-3">Standard technologies make a software solution intelligent, but the Next-Gen technologies make a software solution intellectual. We are the leading custom software development company, and our solutions do not just automate. Rather,
                                    they also ‘assist’, ‘summarize’, ‘recommend’, ‘learn’, and ‘implement’.
                                </p>
                            </div>
                        </div>
                        <div className="row mt-3 position-relative">
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 mt-3">
                                <div className="ai-service-wrap">
                                    <div className="ai-service-img">
                                        <img src="/assets/image/home/ai-service/ai-img.webp" alt=" AI & ML" />
                                    </div>
                                    <div className="ai-service-content">
                                        <div className="ai-service-icon">
                                            <img src="/assets/image/home/ai-service/ai-icon.png" height="30px" width="30px" alt=" AI & ML Icon" />
                                        </div>
                                        <h3 className="fs-22 fw-semibold text-black">
                                            AI & ML
                                        </h3>
                                        <p className="fs-18 fw-regular text-black mt-2">
                                            We leverage Machine Learning (ML) and Artificial Intelligence (AI) to make a software application smarter. With AI & ML, our solutions understand the users and keep them engaged by offering a personalised user experience.
                                        </p>
                                        <a role="button" className="text-color mt-1" href="/next-gen-technology-development#ai-development" aria-label="Read more about Next-Gen Technology Development">Explore Next-Gen Technology <i className="fa-solid fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 mt-3">
                                <div className="ai-service-wrap">
                                    <div className="ai-service-img">
                                        <img src="/assets/image/home/ai-service/ar-img.webp" alt=" AR Image" />
                                    </div>
                                    <div className="ai-service-content">
                                        <div className="ai-service-icon">
                                            <img src="/assets/image/home/ai-service/ar-icon.png" height="30px" width="30px" alt="AR Icon" />
                                        </div>
                                        <h3 className="fs-22 fw-semibold text-black">
                                            AR
                                        </h3>
                                        <p className="fs-18 fw-regular text-black mt-2">
                                            Augmented Reality (AR) is the next weapon on our advanced tech-stack. From simple virtual try-ons to guided surgeries, property tours, interactive learning modules, enhanced retail experiences, and more. With AR integration, we take user experience to
                                            the next level.

                                        </p>
                                        <a role="button" className="text-color mt-1" href="/next-gen-technology-development#ar-development" aria-label="Read more about Next-Gen Technology Development">Explore Next-Gen Technology <i className="fa-solid fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 mt-3">
                                <div className="ai-service-wrap">
                                    <div className="ai-service-img">
                                        <img src="/assets/image/home/ai-service/vr-img.webp" alt="VR Image" />
                                    </div>
                                    <div className="ai-service-content">
                                        <div className="ai-service-icon">
                                            <img src="/assets/image/home/ai-service/vr-icon.png" height="30px" width="30px" alt="VR Icon" />
                                        </div>
                                        <h3 className="fs-22 fw-semibold text-black">
                                            VR

                                        </h3>
                                        <p className="fs-18 fw-regular text-black mt-2">
                                            We create fully immersive digital experiences with advanced 3D VR development and integration. From immersive training modules to high-level architectural visualizations, virtual classNamerooms, product demonstrations, and much more, we can craft everything.
                                        </p>
                                        <a role="button" className="text-color mt-1" href="/next-gen-technology-development#vr-development" aria-label="Read more about Next-Gen Technology Development">Explore Next-Gen Technology <i className="fa-solid fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 mt-3">
                                <div className="ai-service-wrap">
                                    <div className="ai-service-img">
                                        <img src="/assets/image/home/ai-service/iot-img.webp" alt=" IoT Image" />
                                    </div>
                                    <div className="ai-service-content">
                                        <div className="ai-service-icon">
                                            <img src="/assets/image/home/ai-service/iot-icon.png" height="30px" width="30px" alt="IOT Icon" />
                                        </div>
                                        <h3 className="fs-22 fw-semibold text-black">
                                            IoT
                                        </h3>
                                        <p className="fs-18 fw-regular text-black mt-2">
                                            For a smarter, safer, and higher-quality life, our IoT development services aim to create a real-time ecosystem that seamlessly connects devices, sensors, and software applic ations to elevate living. From smart homes to smart workplaces, we make our
                                            surroundings smarter.
                                        </p>
                                        <a role="button" className="text-color mt-1" href="/next-gen-technology-development#iot-development" aria-label="Read more about Next-Gen Technology Development">Explore Next-Gen Technology <i className="fa-solid fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </section>
                <section className="service-section position-relative overflow-hidden section-padding">
                    <div className="container p-0">
                        <div className="row">
                            <div className="col-lg-10 col-md-12 col-sm-12 mx-auto solution-heading-block text-center">
                                <div className="subheading">
                                    <h2 className="fs-18 fw-medium mb-2">SERVICES</h2>
                                </div>
                                <div className="section-title">
                                    <h2 className="text-black fs-38 fw-semibold">From <span className="text-color"> Idea to Market, </span><br /> Our Services & Support Continues Throughout </h2>
                                </div>
                            </div>

                        </div>
                        <div className="row mt-4">
                            <div className="col-lg-4  col-md-6  service-wrapper">
                                <div className="service-card">
                                    <div className="service-icon">
                                        <img src="/assets/image/home/service-icon/website-design.png" height="40px" width="40px" alt="Website Design & Development Icon" />
                                    </div>
                                    <div className="service-content">
                                        <h3 className="fs-22 fw-semibold my-3">Website Design & Development</h3>
                                        <p className="fs-18 fw-regular ">Leave an everlasting impression with unique, creative, and out-of-the-box website designs. Get websites and web apps with fully customized functionalities.</p>
                                    </div>
                                    <div className="service-footer position-relative"><a href="/web-design-company" role="button"><span>Explore More</span></a></div>
                                </div>
                            </div>
                            <div className="col-lg-4  col-md-6  service-wrapper">
                                <div className="service-card">
                                    <div className="service-icon">
                                        <img src="/assets/image/home/service-icon/custom-software.png" height="40px" width="40px" alt="Custom Software Development Icon" />
                                    </div>
                                    <div className="service-content">
                                        <h3 className="fs-22 fw-semibold my-3">Custom Software Development</h3>
                                        <p className="fs-18 fw-regular ">Automate almost anything in your organization with custom software development technology. Enhance your productivity with smart AI-driven automation solutions.</p>
                                    </div>
                                    <div className="service-footer position-relative"><a href="/software-development-services" role="button"><span>Explore More</span></a></div>
                                </div>
                            </div>
                            <div className="col-lg-4  col-md-6  service-wrapper">
                                <div className="service-card">
                                    <div className="service-icon">
                                        <img src="/assets/image/home/service-icon/enterprise-software.png" height="40px" width="40px" alt="Enterprise Software Development Icon" />
                                    </div>
                                    <div className="service-content">
                                        <h3 className="fs-22 fw-semibold my-3">Enterprise Software Development</h3>
                                        <p className="fs-18 fw-regular ">No more messy spreadsheets or hefty subscriptions! Get your own exclusive ERP software solutions with 100% ownership and tight data security. </p>
                                    </div>
                                    <div className="service-footer position-relative"><a href="/on-demand-app-development" role="button"><span>Explore More</span></a></div>
                                </div>
                            </div>
                            <div className="col-lg-4  col-md-6  service-wrapper">
                                <div className="service-card">
                                    <div className="service-icon">
                                        <img src="/assets/image/home/service-icon/bespoke-mobile.png" height="40px" width="40px" alt="Bespoke Mobile App Development Icon" />
                                    </div>
                                    <div className="service-content">
                                        <h3 className="fs-22 fw-semibold my-3">Bespoke Mobile App Development</h3>
                                        <p className="fs-18 fw-regular ">Discuss your first-of-its-kind mobile app development idea with the top app developers in India and see it come to life with the perfection it deserves. </p>
                                    </div>
                                    <div className="service-footer position-relative"><a href="/mobile-app-development-company" role="button"><span>Explore More</span></a></div>
                                </div>
                            </div>
                            <div className="col-lg-4  col-md-6  service-wrapper">
                                <div className="service-card">
                                    <div className="service-icon">
                                        <img src="/assets/image/home/service-icon/ai-product.png" height="40px" width="40px" alt="AI Product Development Icon" />
                                    </div>
                                    <div className="service-content">
                                        <h3 className="fs-22 fw-semibold my-3">AI Product Development</h3>
                                        <p className="fs-18 fw-regular ">From advanced generative AI to intelligent chatbots and smart Business Intelligence solutions, choose the trusted software development company in India for your AI needs.</p>
                                    </div>
                                    <div className="service-footer position-relative"><a href="/next-gen-technology-development" role="button"><span>Explore More</span></a></div>
                                </div>
                            </div>
                            <div className="col-lg-4  col-md-6  service-wrapper">
                                <div className="service-card">
                                    <div className="service-icon">
                                        <img src="/assets/image/home/service-icon/cloud-development.png" height="40px" width="40px" alt="Cloud Development Icon" />
                                    </div>
                                    <div className="service-content">
                                        <h3 className="fs-22 fw-semibold my-3">Cloud Development
                                        </h3>
                                        <p className="fs-18 fw-regular ">For high-performing secure software solutions, choose our cloud development services. AWS, Azure, GCP, or a private cloud, you find everything here.</p>
                                    </div>
                                    <div className="service-footer position-relative"><a href="/" role="button"><span>Explore More</span></a></div>
                                </div>
                            </div>
                            <div className="col-lg-4  col-md-6  service-wrapper">
                                <div className="service-card">
                                    <div className="service-icon">
                                        <img src="/assets/image/home/service-icon/saas-development.png" height="40px" width="40px" alt="SaaS Development Icon" />
                                    </div>
                                    <div className="service-content">
                                        <h3 className="fs-22 fw-semibold my-3">SaaS Development</h3>
                                        <p className="fs-18 fw-regular ">Boost your efficiency with a scalable and affordable Software as a Service solution (SaaS). Run and control your entire business over any browser.</p>
                                    </div>
                                    <div className="service-footer position-relative"><a href="/saas-development-company" role="button"><span>Explore More</span></a></div>
                                </div>
                            </div>
                            <div className="col-lg-4  col-md-6  service-wrapper">
                                <div className="service-card">
                                    <div className="service-icon">
                                        <img src="/assets/image/home/service-icon/digital-marketing.png" height="40px" width="40px" alt="Digital Marketing Icon" />
                                    </div>
                                    <div className="service-content">
                                        <h3 className="fs-22 fw-semibold my-3">Digital Marketing</h3>
                                        <p className="fs-18 fw-regular ">Unlock a worldwide reach for your business with dedicated Search Engine Optimization (SEO), Social Media Marketing, and tailored content writing.</p>
                                    </div>
                                    <div className="service-footer position-relative"><a href="/digital-marketing-company" role="button"><span>Explore More</span></a></div>
                                </div>
                            </div>
                            <div className="col-lg-4  col-md-6  service-wrapper ">
                                <div className=" cta-service">
                                    <div className="service-icon" style={{ background: 'white' }}>
                                        <img src="/assets/image/home/service-icon/call.png" style={{ filter: 'brightness(1)' }} height="40px" width="40px" alt="Get Free Consulting Icon" />
                                    </div>
                                    <div className="service-content">
                                        <h3 className="fs-22 fw-semibold my-3 text-white">Get Free Consulting</h3>
                                        <p className="fs-18 fw-regular text-white" style={{ color: 'white' }}>Take right decision from the day 1 with expert advice. Contact our professionals and get free consultation before making a move. </p>
                                    </div>
                                    <div className="service-footer position-relative"><a href="tel:7230001612"><span style={{ color: 'white' }} role="button"><i className="fa-solid fa-phone"></i> Call Now</span></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="software-guidance section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 ">
                                <div className="software-guidance-img position-relative">
                                    <img src="/assets/image/home/consult-1.webp" loading="lazy" alt="Consult Icon" />

                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="software-guidance-wrap position-relative">
                                    <div className="section-title mb-5">
                                        <h2 className="text-black fs-38 fw-semibold" style={{ wordWrap: 'break-word' }}>Get More Than Just <span className="text-gradient">Custom Software Development:</span>Guidance, Support & Modernization </h2>
                                    </div>
                                    <div className="guidance-wrap mt-4 ">
                                        <img src="/assets/image/home/consulting.png" width="30" alt="Consulting Icon" />
                                        <h3 className="fs-22 fw-semibold text-black mt-2">Consulting</h3>
                                        <p className="fs-18 fw-regular mt-2">Your doubts and insecurities need to be addressed in a meaningful way. Book a free consulting session with experts and find the best solution for your technical doubts. Euzlix is the only Software Development Company in
                                            India that offers free of cost consulting services.
                                        </p>
                                    </div>
                                    <div className="guidance-wrap mt-4 ">
                                        <img src="/assets/image/home/maintenance.png" width="30" alt="Maintenance Icon" />
                                        <h3 className="fs-22 fw-semibold text-black mt-2">Maintenance</h3>
                                        <p className="fs-18 fw-regular mt-2">Post-development, as well, team Qmax offers quality assurance and continued maintenance and technical support lifetime to its clients. Choose the best app developers and leave troubleshooting, software updates, and technical
                                            glitches up to us. Stay focused on your work. </p>
                                    </div>
                                    <div className="guidance-wrap mt-4 ">
                                        <img src="/assets/image/home/modernization.png" width="30" alt="Legacy Modernization Icon" />
                                        <h3 className="fs-22 fw-semibold text-black mt-2">Legacy Modernization
                                        </h3>
                                        <p className="fs-18 fw-regular mt-2">Revamping and upgrading the age-old legacy software solutions with the latest tech is one of our core expertise. Renew your legacy system without losing its core functionalities and brand image. We help you move to modern
                                            tech and design.</p>
                                    </div>
                                    <a href="#" onClick={(e) => e.preventDefault()} className=" custom-cta-btn mt-5" style={{ transform: 'rotate(0)', display: 'inline-block' }} role="button"><span>Share Your Requirements <i className="fa-solid fa-arrow-up"></i></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
              

                <section className="home-case-study section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="section-title">
                                    <h2 className="text-black fs-38 fw-semibold">Have A Look At Our<span className="text-color"> Successful Projects</span> </h2>
                                    <p className="text-black fs-18 fw-regular mt-3">We have spent our 10 years innovating, inventing, encouraging, and empowering various businesses and their digital products. Here is a quick snapshot of our work.

                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3 text-end mt-5">
                                <a href="/portfolio" className="custom-cta-btn mt-3" role="button"><span>Discover Full Portfolio <i className="fa-solid fa-arrow-up"></i></span></a>
                            </div>
                        </div>
                        <div className="row mt-5 ">
                            <div className="col-lg-3 col-md-6 col-sm-6 p-0">
                                <div className="project-img-box">
                                    <img src="/assets/image/home/case-study/case-study4.webp" style={{ objectFit: 'cover' }} alt="Case Study Image" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 p-0">
                                <div className="project-content project-bg2">
                                    <p className="fs-18 fw-medium text-white">
                                        Project Highlights
                                    </p>
                                    <h3 className="fs-22 fw-semibold">
                                        Equity2Commodity
                                    </h3>
                                    <p className="fs-16 fw-regular mt-2 text-white">
                                        <strong>Core Technologies :</strong><br />NodeJS | ReactJS | AI | ML

                                    </p>
                                    <p className="fs-16 fw-regular mt-2 text-white">
                                        <strong>Deliverables :</strong><br />- Website <br />- Learning Management System


                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 p-0">
                                <div className="project-content project-bg">
                                    <p className="fs-18 fw-medium text-white">
                                        Solution Highlights
                                    </p>
                                    <h3 className="fs-22 fw-semibold">
                                        Launching a Digital University that Operates 24x7

                                    </h3>
                                    <p className="fs-16 fw-regular mt-2 text-white">
                                        Equity2Commodity (E2C), a popular YouTube channel, needed an online learning platform (LMS) that automates the teaching and learning process. We leveraged the power of AI and ML to help E2C raise the bar in delivering quality education and training.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-md-3">
                            <div className="col-lg-3 col-md-12 col-sm-12 p-0">
                                <div className="project-content project-bg3">
                                    <p className="fs-18 fw-medium text-white">
                                        Project Highlights
                                    </p>
                                    <h3 className="fs-22 fw-semibold">
                                        KaamDaar: On-Demand Labor App
                                    </h3>
                                    <p className="fs-16 fw-regular mt-2 text-white">
                                        <strong>Core Technologies :</strong><br />React Native | PHP | AI



                                    </p>
                                    <p className="fs-16 fw-regular mt-2 text-white">
                                        <strong>Deliverables :</strong><br />- Logo, Website <br /> - Cross-Platform Mobile Apps



                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                                <div className="project-content project-bg">
                                    <p className="fs-18 fw-medium text-white">
                                        Solution Highlights
                                    </p>
                                    <h3 className="fs-22 fw-semibold">
                                        AI-Powered Mobile App That Eliminates Contractors and Middlemen


                                    </h3>
                                    <p className="fs-16 fw-regular mt-2 text-white">
                                        KaamDaar is a cross-platform mobile application that helps people find and book labor at their doorstep with the help of AI matchmaking. The app establishes a direct connection between the laborers, like masons, plumbers, electricians, etc., and the users,
                                        eliminating middlemen.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 p-0">
                                <div className="project-img-box">
                                    <img src="/assets/image/home/case-study/case-study3.webp" alt="Case Study Image" />
                                </div>
                            </div>

                            {/* <!-- <div className="col-lg-3 p-0">
                    <div className="project-img-box">
                        <img src="/assets/image/home/case-study/case-study4.png" alt="">
                    </div>
                </div> --> */}
                        </div>
                    </div>
                </section>


                {/* <section className="home-testimonials position-relative overflow-hidden section-padding">
                    <div className="container-fluid p-0">
                        <div className="col-lg-12 p-0">
                            <div className="testimonial-bg">
                                <img src="/assets/image/home/testimonial-bg.webp" width="100%" alt="Testimonials Image" />
                            </div>
                        </div>
                    </div>
                    <div className="container testimonials-wrapper" style={{ height: '500px' }}>
                        <div className="row">
                            <div className="col-lg-9 col-md-8 col-sm-8">
                                <div className="section-title">
                                    <div className="subheading">
                                        <h2 className="fs-18 fw-medium mb-2">TESTIMONIALS</h2>
                                    </div>
                                    <h2 className="text-black fs-38 fw-semibold">How Happy Are <span className="text-gradient"> Our Clients </span> With Us?</h2>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-4 text-end mt-3 pt-3">
                                <div className="custom-nav testimonials-nav">
                                    <span className="custom-prev" role="button" aria-label="Previous Slide"><i className="fa-solid fa-arrow-left"></i></span>
                                    <span className="custom-next" role="button" aria-label="Next Slide"><i className="fa-solid fa-arrow-right"></i></span>
                                </div>
                            </div>
                        </div>
                        <div className="row " style={{ height: '200px', marginTop: '-100px' }}>
                            <div className="col-lg-12">

                                <Swiper
                                    modules={[Autoplay]}
                                    spaceBetween={20}
                                    slidesPerView={1}

                                    autoplay={{
                                        delay: 5000,
                                        disableOnInteraction: false,
                                    }}
                                    loop={true}
                                >

                                  
                                    <SwiperSlide>
                                        <div className="testimonial-slide" >
                                            <p className="fs-16 fw-regular text-black">
                                                Thank you very much, Qmax, for supporting me in my journey from a YouTube channel to a digital university...
                                            </p>

                                            <div className="client-details mt-4 d-flex align-items-center gap-3">
                                                <div style={{ width: '100px' }}>
                                                    <img src="/assets/image/home/clients/equdity.png" alt="" />
                                                </div>
                                                <div>
                                                    <h3 className="fs-20 fw-medium text-gradient">
                                                        Bibhuti Choudhary
                                                    </h3>
                                                    <p className="fs-16 fw-light text-black">
                                                        Co-Founder at Equity2Commodity
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                  
                                    <SwiperSlide>
                                        <div className="testimonial-slide">
                                            <p className="fs-16 fw-regular text-black">
                                                Qmax is really an amazing team for e-commerce development...
                                            </p>

                                            <div className="client-details mt-4 d-flex align-items-center gap-3">
                                                <div style={{ width: '100px' }}>
                                                    <img src="/assets/image/home/clients/printyalish.png" alt="" />
                                                </div>
                                                <div>
                                                    <h3 className="fs-20 fw-medium text-gradient">
                                                        Somesh Sharma
                                                    </h3>
                                                    <p className="fs-16 fw-light text-black">
                                                        Founder at Printylish
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                  
                                    <SwiperSlide>
                                        <div className="testimonial-slide">
                                            <p className="fs-16 fw-regular text-black">
                                                The Qmax team built my food delivery web app exactly how I had imagined it...
                                            </p>

                                            <div className="client-details mt-4 d-flex align-items-center gap-3">
                                                <div style={{ width: '100px' }}>
                                                    <img src="/assets/image/home/clients/trains.png" alt="" />
                                                </div>
                                                <div>
                                                    <h3 className="fs-20 fw-medium text-gradient">
                                                        Pankaj Jangid
                                                    </h3>
                                                    <p className="fs-16 fw-light text-black">
                                                        Founder at TrainsCafe
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                  
                                    <SwiperSlide>
                                        <div className="testimonial-slide">
                                            <p className="fs-16 fw-regular text-black">
                                                Qmax developed an HRMS that also manages task allocation...
                                            </p>

                                            <div className="client-details mt-4 d-flex align-items-center gap-3">
                                                <div style={{ width: '100px' }}>
                                                    <img src="/assets/image/home/clients/letuscode.png" alt="" />
                                                </div>
                                                <div>
                                                    <h3 className="fs-20 fw-medium text-gradient">
                                                        Leena Nagrani
                                                    </h3>
                                                    <p className="fs-16 fw-light text-black">
                                                        HR Manager at Let Us Code
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                </Swiper>

                            </div>
                        </div>
                    </div >
                </section > */}




                <section className="technology-section position-relative  overflow-hidden">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="subheading">
                                    <h2 className="fs-18 fw-medium mb-2">TECHNOLOGY</h2>
                                </div>
                                <div className="section-title">
                                    <h2 className="text-black fs-38 fw-semibold">Our <span className="text-color"> Standard </span> Technologies </h2>

                                </div>
                                <img src="/assets/image/home/shape-2.png" loading="lazy" style={{ opacity: '40%' }} alt="Shape Image" className="shape2" />

                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="row mx-auto mt-5 justify-content-center">
                                <div className="col-lg-2 col-md-4 col-sm-4 col-6 tech-width">
                                    <div className="skill-wrap text-center" role="button" tabIndex="0" aria-label="React Native skill">
                                        <div className="skill-box">
                                            <img src="/assets/image/home/tech-icon/react.svg" alt="Technology Icon" loading="lazy" />
                                            <h6 className="fs-16 fs-medium pt-3">React Native</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-4 col-6 tech-width ">
                                    <div className="skill-wrap text-center" role="button" tabIndex="0" aria-label="NodeJS skill">
                                        <div className="skill-box"><img src="/assets/image/home/tech-icon/node-js.svg" loading="lazy" alt="Technology Icon" />
                                            <h6 className="fs-16 fs-medium pt-3">NodeJS</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-4 col-6 tech-width ">
                                    <div className="skill-wrap text-center" role="button" tabIndex="0" aria-label="ASP.Net skill">
                                        <div className="skill-box"><img src="/assets/image/home/tech-icon/dotnet.svg" loading="lazy" alt="Technology Icon" />
                                            <h6 className="fs-16 fs-medium pt-3">ASP.Net</h6>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-4 col-6 tech-width ">
                                    <div className="skill-wrap text-center" role="button" tabIndex="0" aria-label="Tailwind CSS skill">
                                        <div className="skill-box"><img src="/assets/image/home/tech-icon/tailwind.svg" alt="Technology Icon" loading="lazy" />
                                            <h6 className="fs-16 fs-medium pt-3">Tailwind CSS</h6>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-4 col-6 tech-width ">
                                    <div className="skill-wrap text-center" role="button" tabIndex="0" aria-label="Laravel skill">
                                        <div className="skill-box"><img src="/assets/image/home/tech-icon/laravel.svg" alt="Technology Icon" loading="lazy" />
                                            <h6 className="fs-16 fs-medium pt-3">Laravel</h6>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-4 col-6 tech-width ">
                                    <div className="skill-wrap text-center" role="button" tabIndex="0" aria-label="RESTful APIs skill">
                                        <div className="skill-box"><img src="/assets/image/home/tech-icon/api.svg" alt="Technology Icon" loading="lazy" />
                                            <h6 className="fs-16 fs-medium pt-3">RESTful APIs</h6>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-4 col-6 tech-width ">
                                    <div className="skill-wrap text-center" role="button" tabIndex="0" aria-label="GraphQL skill">
                                        <div className="skill-box"><img src="/assets/image/home/tech-icon/graphql.svg" alt="Technology Icon" loading="lazy" />
                                            <h6 className="fs-16 fs-medium pt-3">GraphQL</h6>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-4 col-6 tech-width ">
                                    <div className="skill-wrap text-center" role="button" tabIndex="0" aria-label="gRPC skill">
                                        <div className="skill-box"><img src="/assets/image/home/tech-icon/grpc.png" alt="Technology Icon" loading="lazy" />
                                            <h6 className="fs-16 fs-medium pt-3">gRPC</h6>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-4 col-6 tech-width ">
                                    <div className="skill-wrap text-center" role="button" tabIndex="0" aria-label="CodeIgniter skill">
                                        <div className="skill-box"><img src="/assets/image/home/tech-icon/codeigniter.svg" alt="Technology Icon" loading="lazy" />
                                            <h6 className="fs-16 fs-medium pt-3">CodeIgniter</h6>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-4 col-6 tech-width ">
                                    <div className="skill-wrap text-center" role="button" tabIndex="0" aria-label="HTML5 skill">
                                        <div className="skill-box"><img src="/assets/image/home/tech-icon/html.svg" alt="Technology Icon" loading="lazy" />
                                            <h6 className="fs-16 fs-medium pt-3">HTML5</h6>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-4 col-6 tech-width ">
                                    <div className="skill-wrap text-center" role="button" tabIndex="0" aria-label="CSS3 skill">
                                        <div className="skill-box"><img src="/assets/image/home/tech-icon/css.svg" alt="Technology Icon" loading="lazy" />
                                            <h6 className="fs-16 fs-medium pt-3"> CSS3</h6>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-4 col-6 tech-width ">
                                    <div className="skill-wrap text-center" role="button" tabIndex="0" aria-label="JavaScript skill">
                                        <div className="skill-box"><img src="/assets/image/home/tech-icon/javascript.svg" alt="Technology Icon" loading="lazy" />
                                            <h6 className="fs-16 fs-medium pt-3">JavaScript</h6>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-4 col-6 tech-width ">
                                    <div className="skill-wrap text-center" role="button" tabIndex="0" aria-label="AWS skill">
                                        <div className="skill-box"><img src="/assets/image/home/tech-icon/aws.svg" alt="Technology Icon" loading="lazy" />
                                            <h6 className="fs-16 fs-medium pt-3">AWS</h6>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-4 col-6 tech-width ">
                                    <div className="skill-wrap text-center" role="button" tabIndex="0" aria-label="Microsoft Azure skill">
                                        <div className="skill-box"><img src="/assets/image/home/tech-icon/azure.svg" alt="Technology Icon" loading="lazy" />
                                            <h6 className="fs-16 fs-medium pt-3">Microsoft Azure</h6>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-4 col-6 tech-width ">
                                    <div className="skill-wrap text-center" role="button" tabIndex="0" aria-label="Google Cloud Platform skill">
                                        <div className="skill-box"><img src="/assets/image/home/tech-icon/gcp.svg" alt="Technology Icon" loading="lazy" />
                                            <h6 className="fs-16 fs-medium pt-3">Google Cloud Platform</h6>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-4 col-6 tech-width ">
                                    <div className="skill-wrap text-center" role="button" tabIndex="0" aria-label="DigitalOcean skill">
                                        <div className="skill-box"><img src="/assets/image/home/tech-icon/digitalocean.svg" alt="Technology Icon" loading="lazy" />
                                            <h6 className="fs-16 fs-medium pt-3">DigitalOcean</h6>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-4 col-6 tech-width ">
                                    <div className="skill-wrap text-center" role="button" tabIndex="0" aria-label="Unity skill">
                                        <div className="skill-box"><img src="/assets/image/home/tech-icon/unity.png" alt="Technology Icon" loading="lazy" />
                                            <h6 className="fs-16 fs-medium pt-3">Unity</h6>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-4 col-6 tech-width ">
                                    <div className="skill-wrap text-center" role="button" tabIndex="0" aria-label="Unreal skill">
                                        <div className="skill-box"><img src="/assets/image/home/tech-icon/unreal.png" alt="Technology Icon" loading="lazy" />
                                            <h6 className="fs-16 fs-medium pt-3">Unreal</h6>
                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </section>
                <section className="home-hire-developer section-padding">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <div className="section-title">
                                    <h2 className="text-black fs-38 fw-semibold"><span className="text-gradient">Hire Top Programmers</span> in India & Get Tailored Solutions: Choose India’s Best Software Development Company</h2>
                                    <p className="text-black fs-18 fw-regular mt-4">Ezulix is a leading Software Development Company that provides bespoke web, app, and software development.
                                        <br /><br /> With a decade of experience in delivering high-end business intelligence solutions, Qmax is a renowned IT software Development company recognized worldwide for its client-centered software services. Every Qmax
                                        is well-versed in the art and science of designing top-of-the-line business process automation solutions.
                                        <br /><br /> From on-demand apps for first-of-its-kind startups to premium ERP solutions and complete managed IT services, team Qmax has a tailored solution for everything.
                                        <br />
                                        <br /> Experience <span className="text-color"> 100% bespoke software, app, and web development services</span>, and make your dream a reality with us.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-5 text-center">
                                <div className="hire-developer-img">
                                    <img src="/assets/image/home/hire-developer.webp" loading="lazy" alt="Hire Developer Image" />
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <section className="development-sources section-padding">
                    <div className="container">
                        <div className="row ">
                            <div className="col-lg-6 col-md-12">
                                <div className="development-process-img">
                                    <img src="/assets/image/home/development-image.webp" loading="lazy" alt="Outsource Software Development Icon" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="section-title mt-3">
                                    <h2 className="text-black fs-38 fw-semibold">We’re Omnipresent!<span className="text-color"> Outsource Software Development </span> to India </h2>
                                    <p className="text-black fs-18 fw-regular mt-3">Hire the top software and the best app developers in India to get the best quality web, app, and software development services at an affordable price without compromising the quality.
                                    </p>
                                    <div className="row mt-5">
                                        <div className="col-lg-10">
                                            <div className="development-tabs" role="tablist">

                                                <div
                                                    className="development-tab active"
                                                    onClick={() => showTab(0)}
                                                    aria-selected="true"
                                                    aria-controls="tab1"
                                                    role="tab"
                                                >
                                                    Onshore & On-Site
                                                </div>

                                                <div
                                                    className="development-tab"
                                                    onClick={() => showTab(1)}
                                                    aria-selected="false"
                                                    aria-controls="tab1"
                                                    role="tab"
                                                >
                                                    Nearshore & Off-Shore
                                                </div>

                                            </div>
                                            <div id="development-tab-content-0" className="development-tab-content" role="tabpanel" aria-labelledby="tab-btn1">
                                                Hire highly skilled developers on-shore in–
                                                <ul className="development-list">
                                                    <li><img src="/assets/image/home/check.png" width="18" height="18" loading="lazy" alt="Check Icon" /> India</li>
                                                    <li><img src="/assets/image/home/check.png" width="18" height="18" loading="lazy" alt="Check Icon" /> United Arab Emirates</li>
                                                    <li><img src="/assets/image/home/check.png" width="18" height="18" loading="lazy" alt="Check Icon" /> United Kingdom</li>
                                                </ul>
                                                <a href="/contactus" className="custom-cta-btn mt-4" role="button"><span>Connect <i className="fa-solid fa-arrow-up"></i></span></a>
                                            </div>
                                            <div id="development-tab-content-1" className="development-tab-content" style={{ display: 'none' }} role="tabpanel" aria-labelledby="tab-btn2">
                                                Hire highly skilled developers off-shore in–
                                                <ul className="development-list">
                                                    <li><img src="/assets/image/home/check.png" width="18" height="18" loading="lazy" alt="Check Icon" /> Remote Services to Everywhere</li>
                                                    <li><img src="/assets/image/home/check.png" width="18" height="18" loading="lazy" alt="Check Icon" /> Connect At a Suitable Time</li>
                                                    <li><img src="/assets/image/home/check.png" width="18" height="18" loading="lazy" alt="Check Icon" /> English-Efficient Team</li>
                                                    <li><img src="/assets/image/home/check.png" width="18" height="18" loading="lazy" alt="Check Icon" /> Cost Savings & Valid Pricing</li>
                                                </ul>
                                                <a href="/contactus" role="button" className="custom-cta-btn mt-4"><span>Connect <i className="fa-solid fa-arrow-up"></i></span></a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>


                <section className="home-award partner-wrapper section-padding">
                    <div className="">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <div className="section-title">
                                        <h2 className="text-black fs-38 fw-semibold">We’re an Awarded
                                            <span className="text-gradient"> <br /> Software & Mobile App Development Agency Worldwide </span>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="wrapper">

                                <div className="item item1"> <img src="/assets/image/home/awards/award-1.webp" alt="Badge Logo" loading="lazy" /></div>
                                <div className="item item2"> <img src="/assets/image/home/awards/award-2.webp" alt="Badge Logo" loading="lazy" /></div>
                                <div className="item item3"> <img src="/assets/image/home/awards/award-3.webp" alt="Badge Logo" loading="lazy" /></div>
                                <div className="item item4"><img src="/assets/image/home/awards/award-4.webp" alt="Badge Logo" loading="lazy" /></div>
                                <div className="item item5"><img src="/assets/image/home/awards/award-5.webp" alt="Badge Logo" loading="lazy" /></div>
                                <div className="item item6"> <img src="/assets/image/home/awards/award-6.webp" alt="Badge Logo" loading="lazy" /></div>
                                <div className="item item7"> <img src="/assets/image/home/awards/award-1.webp" alt="Badge Logo" loading="lazy" /></div>
                                <div className="item item8"> <img src="/assets/image/home/awards/award-2.webp" alt="Badge Logo" loading="lazy" /></div>
                                <div className="item item9">
                                    <img src="/assets/image/home/awards/award-3.webp" alt="Badge Logo" loading="lazy" />
                                </div>
                                <div className="item item10">
                                    <img src="/assets/image/home/awards/award-4.webp" alt="Badge Logo" loading="lazy" />
                                </div>
                                <div className="item item11"><img src="/assets/image/home/awards/award-5.webp" alt="Badge Logo" loading="lazy" /></div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="home-cta">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-10 col-lg-10 col-md-12 mx-auto text-center">
                                <div className="cta-wrapee">
                                    <img src="/assets/image/home/shape-1.png" loading="lazy" alt="Shape Image" className="shape1" />
                                    <img src="/assets/image/home/shape-2.png" loading="lazy" alt="Shape Image" className="shape2" />
                                    <h2 className="text-white">
                                        Let’s Develop Something <br /> Great Together
                                    </h2>
                                    <p className="fs-18 text-white fw-regular my-3">Build an unbeatable brand image and get ready for a seamless digital transformation in business. Connect with our team to get premium-grade software and app solutions. </p>
                                    <a href="/contactus" role="button" className="custom-cta-btn mt-3"><span>Discuss Your Project <i className="fa-solid fa-arrow-up"></i></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="faq-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title">
                                    <h2 className="text-black fs-38 fw-semibold mb-3">FAQs — Answers to Your General Queries</h2>
                                </div>
                            </div>
                            <div className="col-lg-12 mx-auto mt-3">
                                <div className="faq-item">
                                    <div className="faq-question">
                                        <h2 className="fs-22 fw-regular">1. How Much Does Software Development Outsourcing Cost with Qmax?</h2>
                                        <i className="fa-solid fa-chevron-down"></i>
                                    </div>
                                    <div className="faq-answer">
                                        <p className="fs-18 fw-regular">Our pricing is flexible and negotiable. However, the final price quote depends upon the scope of work, the product’s complexities, the level of customisations, the chosen technology stack, and the desired UI UX design,
                                            features, and functions. Discuss your requirements with us, and our dedicated teams will give you a personalised quote. </p>
                                    </div>
                                </div>

                                <div className="faq-item">
                                    <div className="faq-question">
                                        <h2 className="fs-20 fw-regular">2. How Long Will It Take to Start My Project?</h2>
                                        <i className="fa-solid fa-chevron-down"></i>
                                    </div>
                                    <div className="faq-answer fs-18 fw-regular">
                                        <p className="fs-18 fw-regular">It will take 3-4 business days to start the project. In 3-4 days, our team will connect with you over video conference for requirement gathering. Then, we will prepare the required documents that will be countersigned by
                                            us. As soon as the documentation ends, our development team will start working on the project. For faster project delivery, we use agile development. </p>
                                    </div>
                                </div>

                                <div className="faq-item">
                                    <div className="faq-question">
                                        <h2 className="fs-20 fw-regular">3. Can You Integrate All ERPs and Third-Party Tools?</h2>
                                        <i className="fa-solid fa-chevron-down"></i>
                                    </div>
                                    <div className="faq-answer fs-18 fw-regular">
                                        <p className="fs-18 fw-regular">Yes. Our software and app developers specialize in integrating popular ERPs, CRMs, payment gateways, and industry-specific tools seamlessly. You can manage your entire organization in real-time through integrated business
                                            software solutions. </p>
                                    </div>
                                </div>

                                <div className="faq-item">
                                    <div className="faq-question">
                                        <h2 className="fs-20 fw-regular">4. Can We Connect with Your Development Team for Discussions?</h2>
                                        <i className="fa-solid fa-chevron-down"></i>
                                    </div>
                                    <div className="faq-answer fs-18 fw-regular">
                                        <p className="fs-18 fw-regular">Of course. You can connect with our software engineers, website designers, mobile app developers, and digital marketers whenever you need. You can discuss your requirements and take project updates directly from them. </p>
                                    </div>
                                </div>


                                <div className="faq-item more hidden">
                                    <div className="faq-question">
                                        <h2 className="fs-20 fw-regular">5. What Kind of Software Products Can You Build? </h2>
                                        <i className="fa-solid fa-chevron-down"></i>
                                    </div>
                                    <div className="faq-answer fs-18 fw-regular">
                                        <p className="fs-18 fw-regular">Ezulix houses top-notch developers in India. Our team has a diverse skill set and they can build a variety of software applications. From business software solutions like CRMs, ERPs, HRMS, etc., to unique mobile applications
                                            and exclusive website designs, our team is efficient in making unique and high-quality products. </p>
                                    </div>
                                </div>
                                <div className="faq-item more hidden">
                                    <div className="faq-question">
                                        <h2 className="fs-20 fw-regular">6. Can You Develop First-of-Its-Kind Mobile Apps?</h2>
                                        <i className="fa-solid fa-chevron-down"></i>
                                    </div>
                                    <div className="faq-answer fs-18 fw-regular">
                                        <p className="fs-18 fw-regular">Yes. Definitely. Qmax is also a leading custom mobile app development company in India with over 9 years of experience. During our tenure, we have a track record of building over 500 unique mobile apps for startups and
                                            tailored software solutions for well-established enterprises. So, you can freely discuss your app requirements with us, and our team will provide idea validation and app development.</p>
                                    </div>
                                </div>
                                <div className="faq-item more hidden">
                                    <div className="faq-question">
                                        <h2 className="fs-20 fw-regular">7. Will You Sign an NDA to Protect My Business Idea?
                                        </h2>
                                        <i className="fa-solid fa-chevron-down"></i>
                                    </div>
                                    <div className="faq-answer fs-18 fw-regular">
                                        <p className="fs-18 fw-regular">Definitely. For unique business ideas and mobile app ideation, we offer Non-Disclosure Agreement (NDA) assurance. Your app idea stays protected with us. </p>
                                    </div>
                                </div>
                                <div className="faq-item more hidden">
                                    <div className="faq-question">
                                        <h2 className="fs-20 fw-regular">8. Will You Help Us Launch Our App on the App Store and Play Store?</h2>
                                        <i className="fa-solid fa-chevron-down"></i>
                                    </div>
                                    <div className="faq-answer fs-18 fw-regular">
                                        <p className="fs-18 fw-regular">Yes. Qmax provides full-cycle app development and maintenance services, and app submission is a part of this cycle. Our team submits your app for review on App Store and Play Store, and makes sure that during development
                                            that the app fits the review guidelines. We make sure that your app launches hassle-free on both platforms. </p>
                                    </div>
                                </div>
                                <div className="faq-item more hidden">
                                    <div className="faq-question">
                                        <h2 className="fs-20 fw-regular">9. Can You Develop an APK App Downloadable from Our Website?</h2>
                                        <i className="fa-solid fa-chevron-down"></i>
                                    </div>
                                    <div className="faq-answer fs-18 fw-regular">
                                        <p className="fs-18 fw-regular">Yes. For businesses that do not wish to go through the App Store and Play Store review process, we offer APK-based app development. In the APK-based app development process, our team uploads the app file to your business
                                            website, and your users can download the app from there. No platform fee, no strict reviews.</p>
                                    </div>
                                </div>
                                <div className="faq-item more hidden">
                                    <div className="faq-question">
                                        <h2 className="fs-20 fw-regular">10. Do You Provide Cross-Platform App Development?
                                        </h2>
                                        <i className="fa-solid fa-chevron-down"></i>
                                    </div>
                                    <div className="faq-answer fs-18 fw-regular">
                                        <p className="fs-18 fw-regular">Definitely. Qmax has the best React Native app developers who can provide high-performance cross-platform applications. Our cross-platform app development process makes sure that all versions of an app (iOS, Android,
                                            Windows, macOS, and others) provide native-like performance and an immersive user experience.
                                        </p>
                                    </div>
                                </div>
                                <div className="faq-item more hidden">
                                    <div className="faq-question">
                                        <h2 className="fs-20 fw-regular">11. Can You Design Websites As Per Our Instructions? </h2>
                                        <i className="fa-solid fa-chevron-down"></i>
                                    </div>
                                    <div className="faq-answer fs-18 fw-regular">
                                        <p className="fs-18 fw-regular">In a word, yes. Qmax specializes in custom design and development. So, we can build exclusive designs for your business website. You can get features and functions of your choice. Share your project requirements with
                                            us, and our dedicated web developers will ensure effortless execution.
                                        </p>
                                    </div>
                                </div>
                                <div className="faq-item more hidden">
                                    <div className="faq-question">
                                        <h2 className="fs-20 fw-regular">12. Can You Develop Progressive Web Apps (PWA)? </h2>
                                        <i className="fa-solid fa-chevron-down"></i>
                                    </div>
                                    <div className="faq-answer fs-18 fw-regular">
                                        <p className="fs-18 fw-regular">OYes. We can develop Progressive Web Apps (PWAs) too </p>
                                    </div>
                                </div>
                                <div className="faq-item more hidden">
                                    <div className="faq-question">
                                        <h2 className="fs-20 fw-regular">13. Do You Provide Post-Development Technical Support and Maintenance? </h2>
                                        <i className="fa-solid fa-chevron-down"></i>
                                    </div>
                                    <div className="faq-answer fs-18 fw-regular">
                                        <p className="fs-18 fw-regular">Yes. We provide post-development technical support and maintenance services. It includes product deployment, troubleshooting management, software updates, and any other technical issues you face post-launch. </p>
                                    </div>
                                </div>
                                <div className="faq-item more hidden">
                                    <div className="faq-question">
                                        <h2 className="fs-20 fw-regular">14. Do You Offer Time Zone Flexibility and Clear Communication? </h2>
                                        <i className="fa-solid fa-chevron-down"></i>
                                    </div>
                                    <div className="faq-answer fs-18 fw-regular">
                                        <p className="fs-18 fw-regular">Sure. We can align with your time zone for meetings. Our team can find a time that suits both parties. For clear communication, we have knowledgeable teams proficient in the English language.</p>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-12 text-end">
                                <button id="toggleFaqBtn" className="show-more-btn">Show More</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div >



        </>
    );
};

export default Home;
