import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaPlay,
} from "react-icons/fa";
import image from '../images/image 12 (2).png'
const Banner = () => {
  const [state] = React.useState({
    title: "I am Saifullah Monsur",
    text:
      "i,m Saifullah, professional web developer with long time \
    experience in this field​",
    // image: "/images/man-01.png",
  });
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                <ul className="header__ul">
                  <li>
                    <FaFacebookF className="headerIcon" />
                  </li>
                  <li>
                    <FaTwitter className="headerIcon" />
                  </li>
                  <li>
                    <FaPinterest className="headerIcon" />
                  </li>
                  <li>
                    <FaInstagram className="headerIcon" />
                  </li>
                </ul>
                <h1>{state.title}</h1>
                <p>{state.text}</p>
                <div className="header__buttons">
                  <a href="" className="btn btn-outline">
                    My Portfolio
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  <a href="https://drive.google.com/uc?export=download&id=1AhMYtLVQk5eL65tuP4ylZgvQc6ZiTacI"  className="btn btn-smart">
                    My Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="banner__img">
              <img src={image} alt="man" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
