import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const seoData = {
  "/": {
    title: "Qmax Software Solutions | Software Development Company in India",
    description: "Leading software development company providing web development, mobile app development, AI solutions, ERP, CRM and digital marketing services."
  },

  "/contactus": {
    title: "Contact Us | Qmax Software Solutions",
    description: "Contact Qmax Software Solutions for software, web and mobile app development services."
  },

  "/portfolio": {
    title: "Portfolio | Qmax Software Solutions",
    description: "Explore our portfolio of web, mobile and software development projects."
  },

  "/aboutus": {
    title: "About Us | Qmax Software Solutions",
    description: "Discover our company, mission, vision and technology expertise."
  },

  "/blog": {
    title: "Blog | Qmax Software Solutions",
    description: "Latest technology insights, software development trends and business solutions."
  },

  "/awards": {
    title: "Awards & Recognition | Qmax Software Solutions",
    description: "Explore awards and achievements of Qmax Software Solutions."
  },

  "/career": {
    title: "Career Opportunities | Qmax Software Solutions",
    description: "Join our team and build your future with Qmax Software Solutions."
  },

  "/press-event": {
    title: "Press & Events | Qmax Software Solutions",
    description: "Latest company events, media coverage and announcements."
  },

  // SERVICES

  "/ai-development-company": {
    title: "AI Development Company",
    description: "Artificial Intelligence solutions and AI-powered software development services."
  },

  "/next-gen-technology-development": {
    title: "Next Generation Technology Development",
    description: "Advanced AI, ML and emerging technology development solutions."
  },

  "/android-app-development-company": {
    title: "Android App Development Company",
    description: "Custom Android application development services."
  },

  "/web-development-company": {
    title: "Web Development Company",
    description: "Professional website and web application development services."
  },

  "/digital-marketing-company": {
    title: "Digital Marketing Company",
    description: "SEO, PPC, Social Media Marketing and digital growth solutions."
  },

  "/graphics-design-company": {
    title: "Graphic Design Company",
    description: "Creative graphic design and branding services."
  },

  "/ios-app-development-company": {
    title: "iOS App Development Company",
    description: "Custom iPhone and iPad application development services."
  },

  "/mobile-app-development-company": {
    title: "Mobile App Development Company",
    description: "Android, iOS and hybrid mobile app development services."
  },

  "/mvp-development-company": {
    title: "MVP Development Company",
    description: "Build and launch Minimum Viable Products quickly."
  },

  "/on-demand-app-development": {
    title: "On Demand App Development",
    description: "Custom on-demand mobile and web application solutions."
  },

  "/saas-development-company": {
    title: "SaaS Development Company",
    description: "Cloud-based SaaS application development services."
  },

  "/software-development-services": {
    title: "Software Development Services",
    description: "Custom software development solutions for businesses."
  },

  "/web-design-company": {
    title: "Web Design Company",
    description: "Modern UI/UX and responsive website design services."
  },

  // TECHNOLOGY

  "/technology-tech_adobe_xd": {
    title: "Adobe XD Development & Design",
    description: "Adobe XD design and prototyping solutions."
  },

  "/technology-tech_angularjs": {
    title: "AngularJS Development Company",
    description: "Custom AngularJS web application development."
  },

  "/net-development-company": {
    title: ".NET Development Company",
    description: "Enterprise-grade .NET software development services."
  },

  "/technology-tech_c_hash": {
    title: "C# Development Services",
    description: "Professional C# software development solutions."
  },

  "/technology-tech_c_plus": {
    title: "C++ Development Services",
    description: "High-performance C++ application development."
  },

  "/technology-tech_css_three": {
    title: "CSS3 Development Services",
    description: "Modern CSS3 front-end development solutions."
  },

  "/technology-tech_figma": {
    title: "Figma Design Services",
    description: "Professional UI/UX design using Figma."
  },

  "/technology-tech_html": {
    title: "HTML Development Services",
    description: "Responsive HTML website development."
  },

  "/technology-tech_java": {
    title: "Java Development Company",
    description: "Enterprise Java application development services."
  },

  "/technology-tech_javascript": {
    title: "JavaScript Development Company",
    description: "Modern JavaScript web application development."
  },

  "/technology-tech_mysql": {
    title: "MySQL Database Solutions",
    description: "Database design and MySQL development services."
  },

  "/nodejs-development-company": {
    title: "Node.js Development Company",
    description: "Scalable backend development with Node.js."
  },

  "/technology-tech_python": {
    title: "Python Development Company",
    description: "Custom Python software and automation solutions."
  },

  "/technology-tech_photoshop": {
    title: "Photoshop Design Services",
    description: "Creative graphic design and editing solutions."
  },

  "/php-development-company": {
    title: "PHP Development Company",
    description: "Custom PHP website and application development."
  },

  "/technology-tech_reactjs": {
    title: "ReactJS Development Company",
    description: "Modern ReactJS web application development."
  },

  "/technology-tech_sql_server": {
    title: "SQL Server Database Solutions",
    description: "Microsoft SQL Server development and database management."
  },

  // SOLUTIONS

  "/taxi-booking-software": {
    title: "Taxi Booking Software",
    description: "Complete taxi and cab booking software solution."
  },

  "/crm-development-company": {
    title: "CRM Development Company",
    description: "Custom CRM software development services."
  },

  "/ecommerce-software-development": {
    title: "Ecommerce Software Development",
    description: "Custom ecommerce website and application development."
  },

  "/employee-tracking-system-software": {
    title: "Employee Tracking Software",
    description: "Employee monitoring and workforce management solutions."
  },

  "/fintech-software-development": {
    title: "Fintech Software Development",
    description: "Secure fintech and financial software solutions."
  },

  "/food-delivery-software": {
    title: "Food Delivery Software",
    description: "Online food delivery app and software development."
  },

  "/grocery-software": {
    title: "Grocery Software Development",
    description: "Grocery delivery and management software solutions."
  },

  "/helpdesk-software": {
    title: "Helpdesk Software",
    description: "Customer support and helpdesk management software."
  },

  "/home-service-software": {
    title: "Home Service Software",
    description: "Home services booking platform development."
  },

  "/hrms-software": {
    title: "HRMS Software",
    description: "Human Resource Management System development."
  },

  "/inventory-management-software": {
    title: "Inventory Management Software",
    description: "Inventory tracking and stock management solutions."
  },

  "/learning-management-system": {
    title: "Learning Management System",
    description: "LMS software development for education and training."
  },

  "/loan-management-software": {
    title: "Loan Management Software",
    description: "Loan processing and management software solutions."
  },

  "/online-education-software": {
    title: "Online Education Software",
    description: "E-learning platform and education software development."
  },

  "/reseller-software": {
    title: "Reseller Software",
    description: "Reseller business automation and management software."
  },

  "/restaurant-management-system": {
    title: "Restaurant Management System",
    description: "Restaurant POS and management software solutions."
  },

  "/school-management-software-system": {
    title: "School Management Software",
    description: "Complete school ERP and management software."
  },

  "/travel-booking-software": {
    title: "Travel Booking Software",
    description: "Travel portal and booking software solutions."
  },

  // INDUSTRIES

  "/aadhaar-enabled-payment-system-aeps": {
    title: "AEPS Software Development",
    description: "Aadhaar Enabled Payment System software solutions."
  },

  "/bharat-bill-payment-system": {
    title: "BBPS Software Development",
    description: "Bharat Bill Payment System software development."
  },

  "/money-transfer-software": {
    title: "Money Transfer Software",
    description: "Domestic money transfer software solutions."
  },

  "/pancard-service": {
    title: "PAN Card Service Software",
    description: "PAN card service and utility software solutions."
  },

  "/mobile-recharge-software": {
    title: "Mobile Recharge Software",
    description: "Recharge and utility bill payment software solutions."
  }
};

export default function SEO() {
  const location = useLocation();

  const seo =
    seoData[location.pathname] || {
      title: "Qmax Software Solutions",
      description:
        "Software Development, Web Development, Mobile App Development and Digital Marketing Company.",
      keywords:
        "software development company, web development company, mobile app development company"
    };

  const currentUrl = `https://qmaxsoftware.in${location.pathname}`;

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{seo.title}</title>

      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="author" content="Qmax Software Solutions" />
      <meta name="robots" content="index,follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="theme-color" content="#0d6efd" />

      {/* Canonical */}
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Qmax Software Solutions" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={currentUrl} />
      <meta
        property="og:image"
        content="https://qmaxsoftware.in/Qmax.ico"
      />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta
        name="twitter:image"
        content="https://qmaxsoftware.in/Qmax.ico"
      />

      {/* Local SEO */}
      <meta name="geo.region" content="IN-RJ" />
      <meta name="geo.placename" content="Rajasthan" />

      {/* Schema.org */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Qmax Software Solutions",
          url: "https://qmaxsoftware.in",
          logo: "https://qmaxsoftware.in/Qmax.ico",
          description:
            "Software Development, Web Development and Mobile App Development Company",
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer service"
          }
        })}
      </script>
    </Helmet>
  );
}