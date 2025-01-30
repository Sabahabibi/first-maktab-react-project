import React from "react";
import "./Form.css";

export default function Form({ name, email }) {
  return (
    <div>
      <form className="input-form">
        <input type="text" name="name" placeholder="Your Name" value={name} />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={email}
        />
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}
