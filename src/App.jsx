import React from "react";

import "./App.css";
import {
  Billing,
  Business,
  CTA,
  CardDeal,
  Clients,
  Footer,
  Hero,
  Navbar,
  Stats,
  Testimonial,
} from "./components/index";

function App() {
  return (
    <>
      <div className="bg-primary w-full overflow-hidden">
        <div className="sm:px-16 px-6 flex justify-center items-center">
          <div className="xl:max-w-[1280px] w-full ">
            <Navbar />
          </div>
        </div>

        <div className="bg-primary flex justify-center items-start ">
          <div className="xl:max-w-[1280px] w-full">
            <Hero />
          </div>
        </div>
        <div className="bg-primary flex justify-center items-center sm:px-16 px-6">
          <div className="xl:max-w-[1280px] w-full">
            <Stats />
            <Business />
            <Billing />
            <CardDeal />
            <Testimonial />
            <Clients />
            <CTA />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
