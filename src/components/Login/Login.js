import React from "react";
import "./l.css";
import { useLottie } from "lottie-react";
import animation from "./sl.json";
import Lottie from "lottie-react";
const Login = () => {
  const options = {
    animationData: animation,
    loop: true,
    autoplay: true,
  };
  const { View } = useLottie(options);
  return (
    <div className="login">
      <div className="login_div">
        <div className="animation">
          <Lottie
            autoplay={true}
            loop={true}
            animationData={animation}
            style={{ width: "400px" }}
          />
        </div>

        <div className="vertical_bar"></div>
        <div className="login_input_box">
          <div>
            <img
              src="truba-logo.jpeg"
              style={{ width: "80px", height: "80px", broderRadius: "50%" }}
              className="login_icon"
            />
          </div>
          <h1 className="login_title">login to truba erp</h1>
          <form>
            <div className="input_div">
              <input type="text" placeholder="Username" />
            </div>
            <div className="input_div">
              <input type="password" placeholder="Password" />
            </div>
            <button className="login_page_btn" type="submit">
              Login
            </button>
          </form>
          <p id="forget_link">Make a query here if-forgot Password</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
