import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__content__top">
        <div className="social__media">
          <a href="/">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="/">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="/">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <div className="news__letter">
          <form>
            <div className="news__letter__form">
              <i className="fas fa-envelope fa-1x"></i>
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
        <span>Copyright</span>
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
