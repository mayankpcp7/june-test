import "./App.css";
import "./Root.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./componetns/Header";
import WhatisEkos from "./componetns/WhatisEkos";
import About from "./componetns/About";
import Ourfeatures from "./componetns/Ourfeatures";
import Supportedplatform from "./componetns/Supportedplatform";
import Intergration from "./componetns/Intergration";
import Lease from "./componetns/Lease";
import Community from "./componetns/Community";
import Pricingplaces from "./componetns/Pricingplaces";
import Footer from "./componetns/Footer";
import Stellermate from "./componetns/Stellermate";
import Backtotop from "./componetns/Backtotop";
import Aos from "aos";
function App() {
   Aos.init();
  return (
    <>
      <Header />
      <WhatisEkos />
      <About />
      <Ourfeatures />
      <Supportedplatform />
      <Intergration />
      <Lease />
      <Community />
      <Pricingplaces />
      <Stellermate/>
      <Footer />
      <Backtotop/>
    </>
  );
}

export default App;
