import React from "react";
import { useState } from "react";
import "./index.css";

export default function Navbar() {
  const [Navstatus, setNavstatus] = useState(0);
  const [Divwidth, setDivwidth] = useState("");

  function opennav() {
    if (Navstatus == 0) {
      setDivwidth("100%");
      setNavstatus(1);
    } else {
      setDivwidth("0");
      setNavstatus(0);
    }
  }
  return (
    <div>
      <div className="main-div" style={{ width: Divwidth }}>
        <button onClick={opennav}>
          <i class="fa-solid fa-bars"></i>
        </button>
        <ul>
          <li>Home</li>
          <li>Service</li>
          <li>Contact Us</li>
          <li>About</li>
        </ul>
      </div>
    </div>
  );
}
