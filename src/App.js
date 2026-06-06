import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/main/Home';
import About from './pages/main/About';
import Header from './pages/main/Header';
import Footer from './pages/main/Footer';
import AboutUs from './pages/scrren/AboutUS';
import Blog from './pages/scrren/Blog';
import Awards from './pages/scrren/Awards';
import Career from './pages/scrren/Career';
import PressEvent from './pages/scrren/PressEvent';
import Contact from './pages/main/Contact';
import Portfolio from './pages/main/Portfolio';
import AiProductDevelopment from './pages/services/AiProductDevelopment';
import AlMlDevelopment from './pages/services/AlMlDevelopment';
import AndroidAppDevelopment from './pages/services/AndroidAppDevelopment';
import CustomWebDevelopment from './pages/services/CustomWebDevelopment';
import DigitalMarketing from './pages/services/DigitalMarketing';
import GraphicDesiging from './pages/services/GraphicDesiging';
import IosAppDevelopment from './pages/services/IosAppDevelopment';
import MobileAppDevelopment from './pages/services/MobileAppDevelopment';
import MvpDevelopment from './pages/services/MvpDevelopment';
import OnDemandAppDevelopment from './pages/services/OnDemandAppDevelopment';
import SaasDevelopment from './pages/services/SaasDevelopment';
import SoftwareDevelopment from './pages/services/SoftwareDevelopment';
import Adobe from './pages/Technology/Adobe';
import Angular from './pages/Technology/Angular';
import AspNet from './pages/Technology/AspNet';
import C from './pages/Technology/C';
import Ccc from './pages/Technology/Ccc';
import Css from './pages/Technology/Css';
import Figma from './pages/Technology/Figma';
import Html from './pages/Technology/Html';
import Java from './pages/Technology/Java';
import JavaScript from './pages/Technology/JavaScript';
import MySql from './pages/Technology/MySql';
import Node from './pages/Technology/Node';
import Paython from './pages/Technology/Paython';
import Photoshop from './pages/Technology/Photoshop';
import Php from './pages/Technology/Php';
import Reactjss from './pages/Technology/Reactjss';
import SqlServer from './pages/Technology/SqlServer';
import WebDesign from './pages/services/WebDesign';
import CabBooking from './pages/solutions/CabBooking';
import CrmSoftware from './pages/solutions/CrmSoftware';
import EcommercePortal from './pages/solutions/EcommercePortal';
import EmployeeTracking from './pages/solutions/EmployeeTracking';
import FintechSoftware from './pages/solutions/FintechSoftware';
import FoodDelivery from './pages/solutions/FoodDelivery';
import GrocerySoftware from './pages/solutions/GrocerySoftware';
import HelpdeskSoftware from './pages/solutions/HelpdeskSoftware';
import HomeServices from './pages/solutions/HomeServices';
import HrmsSoftware from './pages/solutions/HrmsSoftware';
import InventoryManagement from './pages/solutions/InventoryManagement';
import LearningManagement from './pages/solutions/LearningMangement';
import LoanModule from './pages/solutions/LoanModule';
import OnlineEducation from './pages/solutions/OnlineEducation';
import ResellerSoftware from './pages/solutions/ResellerSoftware';
import RestaurantManagement from './pages/solutions/RestaurantManagement';
import SchoolManagement from './pages/solutions/SchoolMangement';
import TravelBooking from './pages/solutions/TravelBooking';
import AepsSoftware from './pages/Industries/AepsSoftware';
import BbpsSoftware from './pages/Industries/BbpsSoftware';
import DmtSoftware from './pages/Industries/DmtSoftware';
import Travel from './pages/Industries/Travl';
import UtlSoftware from './pages/Industries/UtlSoftware';
import Recharge from './pages/Industries/Recharge';
import SEO from './pages/SEO';

function App() {
  return (
    <BrowserRouter>
    <SEO/>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />

        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/career" element={<Career />} />
        <Route path="/press-event" element={<PressEvent />} />

        {/* Servicess */}
        <Route path="/ai-development-company" element={<AiProductDevelopment />} />
        <Route path="/next-gen-technology-development" element={<AlMlDevelopment />} />
        <Route path="/android-app-development-company" element={<AndroidAppDevelopment />} />
        <Route path="/web-development-company" element={<CustomWebDevelopment />} />
        <Route path="/digital-marketing-company" element={<DigitalMarketing />} />
        <Route path="/graphics-design-company" element={<GraphicDesiging />} />
        <Route path="/ios-app-development-company" element={<IosAppDevelopment />} />
        <Route path="/mobile-app-development-company" element={<MobileAppDevelopment />} />
        <Route path="/mvp-development-company" element={<MvpDevelopment />} />
        <Route path="/on-demand-app-development" element={<OnDemandAppDevelopment />} />
        <Route path="/saas-development-company" element={<SaasDevelopment />} />
        <Route path="/software-development-services" element={<SoftwareDevelopment />} />
        <Route path="/web-design-company" element={<WebDesign />} />

        {/* Technology */}

        <Route path="/technology-tech_adobe_xd" element={<Adobe />} />
        <Route path="/technology-tech_angularjs" element={<Angular />} />
        <Route path="/net-development-company" element={<AspNet />} />
        <Route path="/technology-tech_c_hash" element={<C />} />
        <Route path="/technology-tech_c_plus" element={<Ccc />} />
        <Route path="/technology-tech_css_three" element={<Css />} />
        <Route path="/technology-tech_figma" element={<Figma />} />
        <Route path="/technology-tech_html" element={<Html />} />
        <Route path="/technology-tech_java" element={<Java />} />
        <Route path="/technology-tech_javascript" element={<JavaScript />} />
        <Route path="/technology-tech_mysql" element={<MySql />} />
        <Route path="/nodejs-development-company" element={<Node />} />
        <Route path="/technology-tech_python" element={< Paython />} />
        <Route path="/technology-tech_photoshop" element={<Photoshop />} />
        <Route path="/php-development-company" element={<Php />} />
        <Route path="/technology-tech_reactjs" element={<Reactjss />} />
        <Route path="/technology-tech_sql_server" element={<SqlServer />} />

        {/* Solutions */}
        <Route path="/taxi-booking-software" element={<CabBooking />} />
        <Route path="/crm-development-company" element={<CrmSoftware />} />
        <Route path="/ecommerce-software-development" element={<EcommercePortal />} />
        <Route path="/employee-tracking-system-software" element={<EmployeeTracking />} />
        <Route path="/fintech-software-development" element={<FintechSoftware />} />
        <Route path="/food-delivery-software" element={<FoodDelivery />} />
        <Route path="/grocery-software" element={<GrocerySoftware />} />
        <Route path="/helpdesk-software" element={<HelpdeskSoftware />} />
        <Route path="/home-service-software" element={<HomeServices />} />
        <Route path="/hrms-software" element={<HrmsSoftware />} />
        <Route path="/inventory-management-software" element={<InventoryManagement />} />
        <Route path="/learning-management-system" element={< LearningManagement />} />
        <Route path="/loan-management-software" element={<LoanModule />} />
        <Route path="/online-education-software" element={<OnlineEducation />} />
        <Route path="/reseller-software" element={<ResellerSoftware />} />
        <Route path="/restaurant-management-system" element={<RestaurantManagement />} />
        <Route path="/school-management-software-system" element={<SchoolManagement />} />
        <Route path="/travel-booking-software" element={<TravelBooking />} />

        {/* Industries */}
        <Route path="/aadhaar-enabled-payment-system-aeps" element={<AepsSoftware />} />
        <Route path="/bharat-bill-payment-system" element={<BbpsSoftware />} />
        <Route path="/money-transfer-software" element={<DmtSoftware />} />
        <Route path="/travel-booking-software" element={<Travel />} />
        <Route path="/pancard-service" element={< UtlSoftware />} />
        <Route path="/mobile-recharge-software" element={<Recharge/>} />
     




      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
