import React from "react";
import "./Costomer-review.css";

export default function CostomerReview({ reviews }) {
  return (
    <section className="customer-reviews">
      <h2 className="section-title">What Our Customers Say</h2>
      <div className="reviews-grid">
        {reviews.map((customer) => (
          <div key={customer.id} className="review-card">
            <h3 className="customer-name">{customer.name}</h3>
            <p className="customer-feedback">{customer.feedback}</p>
            <div className="customer-logo-container">
              <img
                src={customer.logo}
                alt={customer.name}
                className="customer-logo"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
