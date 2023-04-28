import React from "react";
import { ImFacebook, ImInstagram, ImTwitter, ImGithub } from "react-icons/im";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <h5>Hit us up on our socials!</h5>
        <div className="social-icons">
          <a
            href="https://www.devmountain.com"
            target="_blank"
            rel="noreferrer"
          >
            <ImFacebook
              size="1em"
              color="#3b3b3b"
              className="individual-icons"
            />
          </a>
          <a
            href="https://www.devmountain.com"
            target="_blank"
            rel="noreferrer"
          >
            <ImInstagram
              size="1em"
              color="#3b3b3b"
              className="individual-icons"
            />
          </a>
          <a
            href="https://www.devmountain.com"
            target="_blank"
            rel="noreferrer"
          >
            <ImTwitter
              size="1em"
              color="#3b3b3b"
              className="individual-icons"
            />
          </a>
          <a
            href="https://www.devmountain.com"
            target="_blank"
            rel="noreferrer"
          >
            <ImGithub size="1em" color="#3b3b3b" className="individual-icons" />
          </a>
        </div>
      </div>
      <svg
        width="90"
        height="90"
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="256" cy="256" r="248" stroke="#25AAE1" strokeWidth="10" />
        <path
          d="M255 222L203 132.5L83.9282 338H233L331 168L427.675 338.571L317.5 338.5"
          stroke="#25AAE1"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </footer>
  );
};

export default Footer;
