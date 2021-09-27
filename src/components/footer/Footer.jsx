import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer mt-5">
      <div className="footer__content__top">
        <div className="social__media">
          <a href="https://www.facebook.com/babaata224" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com/Babaata224?s=09" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.linkedin.com/in/babaata-social-media-b63574220" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <div className="news__letter">
          <form>
            <div className="news__letter__form">
              <i className="fas fa-envelope"></i>
              <input type="text" placeholder="Newsletter" />
              <button>
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
      <hr />
      <div className="footer__content__bottom">
        <span>Copyright <i>&copy;</i> 2021</span>
        <ul>
          <li>
            <a href="/">A propos</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
