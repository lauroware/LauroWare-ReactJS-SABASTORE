import React from "react";
import LogoWhatsapp from "../assets/logowsp.webp";

import "../styles/logowhatsapp.css";

const LogoWhatapp = () => {
  return (
    <div className="logo-whatsapp-container">
      <a
        href="https://api.whatsapp.com/send?phone=5491162366175"
        target="_blank"
        className="logo-whatsapp"
      >
        <img src={LogoWhatsapp} alt="WhatsApp" />
      </a>
    </div>
  );
};

export default LogoWhatapp;
