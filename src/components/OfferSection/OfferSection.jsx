import React from "react";
import "./Offer-section.css";

export default function OfferSection() {
  return (
    <div>
      <section className="final-offer">
        <div className="offer-content">
          <h2 className="offer-title">Unlock Your Hair's True Potential</h2>
          <p className="offer-description">
            Don't miss our exclusive offer to experience premium scalp and hair
            treatments designed just for you. Rejuvenate your hair and bring out
            its natural beauty today!
          </p>
          <ul className="offer-benefits">
            <li>Customized Scalp & Hair Solutions</li>
            <li>30% Discount for First-Time Customers</li>
            <li>100% Satisfaction Guarantee</li>
          </ul>
          <button className="cta-button">Book Your Treatment Now</button>
        </div>
      </section>
    </div>
  );
}
