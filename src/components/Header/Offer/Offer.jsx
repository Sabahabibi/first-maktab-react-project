import React from "react";
import hairBeauty from "../../../assets/images/hairBeauty.jpg";
import "./Offer.css";

export default function Offer() {
  return (
    <div className="offer-container">
      <div className="OfferSection">
        <img src={hairBeauty} alt="Beauty Treatment" />
        <div className="benefits">
          <h3>Why Our Clients Love Us?</h3>
          <ul>
            <li>Highly Skilled and Experienced Professionals</li>
            <li>Tailored Treatments for Every Individual Need</li>
            <li>Guaranteed Results with a Focus on Your Satisfaction</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
