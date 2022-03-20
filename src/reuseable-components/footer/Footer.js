import {
  CopyrightOutlined,
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
  TwitterSquareFilled,
} from "@ant-design/icons/lib/icons";
import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_main">
        <div className="footer_grid">
          <h3 className="footer_grid_h3">About</h3>
          <h3 className="footer_grid_h3">Search</h3>
          <h3 className="footer_grid_h3">Phone</h3>
          <h3 className="footer_grid_h3">Contact Us</h3>
          <h3 className="footer_grid_h3">Address</h3>
          <h3 className="footer_grid_h3">E-mail</h3>
          <h3 className="footer_grid_h3">Services</h3>
          <h3 className="footer_grid_h3">Login</h3>
        </div>
        <div className="footer__icons_div">
          <FacebookFilled className="footer__icons" />
          <TwitterSquareFilled className="footer__icons" />
          <LinkedinFilled className="footer__icons" />
          <InstagramFilled className="footer__icons" />
        </div>
      </div>
      <div className="footer_bottom">
        <p>
          <CopyrightOutlined /> 2021 TrubaERP&#8482;{" "}
        </p>
        <div className="footer_bottom_h_s">
          <p>Help &#38; Support</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
