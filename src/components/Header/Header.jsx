import React from "react";
import GetStartedBtn from "./Button/GetStarted-btn";
import Form from "./Form/Form";
import "./Header.css";
import Offer from "./Offer/Offer";

function Header() {
  return (
    <header className="header">
      <div className="header-topbar">
        <p>Special Offer: 30% OFF on All Treatments!</p>
      </div>
      <div className="wrs">
        <div className="header-content">
          <div className="header-text">
            <h1>Your Perfect Hair Awaits</h1>
            <p className="subline">
              Experience the ultimate scalp treatment today
            </p>
            <GetStartedBtn />
            <Form />
          </div>
          <Offer />
        </div>
      </div>
    </header>
  );
}

export default Header;
