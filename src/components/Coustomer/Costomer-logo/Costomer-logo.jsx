import React from "react";
import "./Costomer-logo.css";

export default function CostomerLogo({ logos }) {
  return (
    <section className="customer-logos">
      <h2 className="section-title">Our Trusted Customers</h2>
      <div className="logo-grid">
        {logos.map((customer) => (
          <div key={customer.id} className="logo-container">
            <img src={customer.logo} alt={customer.alt} className="logo" />
            <p className="costomerName">{customer.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
