import React from "react";
import { Link } from "react-router-dom";
import {BsFacebook,BsInstagram } from "react-icons/bs"

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="newsletter"/>
                <h2 className="mb-0 text-white">Sign Up for newsletter</h2>
              </div>
            </div>
            <div className="col-7">
            <div className="input-group">
                <input
                  type="text"
                  class="form-control py-1"
                  placeholder="Your Email Adress "
                  aria-label="Your Email Adress "
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
<div className="container-xxl">
  <div className="row">
    <div className="col-4">
      <h4 className="text-white mb-4">Contact Us</h4>
      <div className="footer-links d-flex flex-column">
       <address className="text-white fs-6">
         278 rue lorum ipsum <br/> BP 0089
       </address>
       <a href="tel: +22600000-00" className="mt-3 d-block mb-1 text-white">
        +22600000-00
        </a>
       <a href="mailto" className="mt-2 d-block mb-0  text-white">
        email@mail.com
        </a>
        <div className="social_icons d-flex align-items-center gap-30">
          <a  className="text-white"  href="https://example.com"> 
          <BsFacebook className="fs-5"/>
          </a>
          <a className="text-white" href="https://example.com"> 
          <BsInstagram className="fs-5"/>
          </a>
        </div>

      </div>
    </div>
    <div className="col-3">
      <h4 className="text-white mb-4">Information</h4>
      <div className="footer-links d-flex flex-column">
        <Link className="text-white py-2 mb-1 ">Privacy policy</Link>
        <Link className="text-white py-2 mb-1">Refund policy</Link>
        <Link className="text-white py-2 mb-1">Shipping policy</Link>
        <Link className="text-white py-2 mb-1">Terme et condition</Link>
      </div>
    </div>
    <div className="col-3">
      <h4 className="text-white mb-4">Account</h4>
      <div className="footer-links d-flex flex-column">
        <Link className="text-white py-2 mb-1 ">About Us</Link>
        <Link className="text-white py-2 mb-1">Faq</Link>
        <Link className="text-white py-2 mb-1">Contact</Link>
      </div>
    </div>
    <div className="col-2">
      <h4 className="text-white mb-4">Quick Link</h4>
      <div className="footer-links d-flex flex-column">
        <Link className="text-white py-2 mb-1 ">Laptops</Link>
        <Link className="text-white py-2 mb-1">Tablette</Link>
        <Link className="text-white py-2 mb-1">Phone</Link>
        <Link className="text-white py-2 mb-1">Habits-Homme</Link>
      </div>
    </div>

  </div>

</div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center text-white">&copy; {new Date().getFullYear ()};
              Hordal-technologie
              </p>

            </div>

          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;
