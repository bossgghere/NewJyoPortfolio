import React from "react";
import Reveal from "./Reveal";
import instagramQR from "../assets/img/instagramQR.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <>
      <Reveal><div
        id="socials"
        style={{
          display: "flex",
          borderTop: "1px solid var(--hairline)",
          paddingLeft: 20,
          width: "100%",
          alignItems: "center",
        }}
      >
        <div>
          <h1 style={{ textAlign: "left", width: "auto" }}>
            Jyoshika Reddy <strong style={{ color: "red" }}>.</strong>
          </h1>
          <span style={{ fontSize: "150%" }} className="specialtext">
            <p
              style={{ textAlign: "center", color: "red" }}
              className="cartoonText cartoonText2"
            >
              Until Next Time :p
            </p>
          </span>
        </div>
        {/* small Instagram card fills the gap between the name and the credit */}
        <a className="footerCard idCard" href="https://www.instagram.com/jyoshika945" target="_blank" rel="noreferrer">
          <div className="footerCardBar">
            <h1><strong style={{ color: "#FE5E58" }}> .</strong></h1>
            <h1><strong style={{ color: "#FEBD2C" }}>.</strong></h1>
            <h1><strong style={{ color: "#27C841" }}> .</strong></h1>
          </div>
          <div className="footerCardBody">
            <img src={instagramQR} alt="Instagram QR code" />
            <div>
              <h1>@jyoshika945</h1>
              <h3>Scan to follow on Instagram</h3>
            </div>
          </div>
        </a>
        <p
          className="lastText"
          style={{
            textAlign: "center",
            marginLeft: "auto",
            width: "auto",
            fontWeight: "bolder",
            opacity: 0.5,
          }}
        >
          Designed and Developed by Me © 2026
        </p>
      </div></Reveal>
      <Reveal delay={150}><div
        className="socialLinks"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
          marginLeft: "auto",
          paddingBottom: 30,
        }}
      >
        <a className="headernav" href="https://www.instagram.com/jyoshika945" style={{ marginTop: -20 }}>
          {" "}
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a className="headernav" href="https://www.linkedin.com/in/jyoshika12/" style={{ marginTop: -20 }}>
          {" "}
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a className="headernav" href="https://github.com/jyoshika12" style={{ marginTop: -20 }}>
          {" "}
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a className="headernav" href="mailto:jyoshikareddy00@gmail.com" style={{ marginTop: -20 }}>
          {" "}
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
      </div></Reveal>
      <span
        style={{ display: "none", fontSize: "150%" }}
        className="specialtext2"
      >
        <span
          style={{ textAlign: "left", color: "red" }}
          className="cartoonText"
        >
          Until Next Time :p
        </span>
      </span>
    </>
  );
}

export default Footer;
