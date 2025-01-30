import React from "react";
import Costomer from "./Coustomer/Costomer";
import Header from "./Header/Header";
import OfferSection from "./OfferSection/OfferSection";

export default function LandingPage() {
  return (
    <div>
      <Header />
      <Costomer />
      <OfferSection />
    </div>
  );
}
