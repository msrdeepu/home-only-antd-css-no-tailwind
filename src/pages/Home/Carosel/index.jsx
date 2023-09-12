import { Carousel, Button } from "antd";
//lottie
import Lottie from "lottie-react";
import "./slider.css";

//antd-icons
import { RightCircleOutlined } from "@ant-design/icons";

//lottie animations
import slideOneAnimation from "../../../../public/assets/lottie/slide-one-file.json";
import slideTwoAnimation from "../../../../public/assets/lottie/slide-two.json";
import slideThreeAnimation from "../../../../public/assets/lottie/slide-seven.json";

//small-images
import googleCoud from "../../../../public/assets/icon-logos/google-cloud.png";
import aws from "../../../../public/assets/icon-logos/aws-logo.png";
import firebase from "../../../../public/assets/icon-logos/firebase-icon.png";
import docker from "../../../../public/assets/icon-logos/google-docker.png";
import deno from "../../../../public/assets/icon-logos/deno-js.png";
import node from "../../../../public/assets/icon-logos/node-js.png";
import react from "../../../../public/assets/icon-logos/react-js.png";
import fresh from "../../../../public/assets/icon-logos/fresh-js.png";
import preact from "../../../../public/assets/icon-logos/preact-js.png";
import electron from "../../../../public/assets/icon-logos/electron-js.png";
import github from "../../../../public/assets/icon-logos/git-hub.png";
import next from "../../../../public/assets/icon-logos/next-js.png";

const contentStyle = {
  height: "450px",
  color: "#fff",
};

const Carosel = () => {
  return (
    <Carousel effect="fade" autoplay="true">
      {/* slide-one */}
      <div>
        <div style={contentStyle} className="slider-one">
          {" "}
          <div className="content-container">
            <h1 className="slide-one-ain-title">
              No More Running & No Time To LEAP
            </h1>
            <p className="slide-one-description">
              Experience The Amazing Digital Experience with Us. This is the
              Right Time to Choose the Right Tech Stack. Experience The Amazing
              Digital Experience with Us. Experience The Amazing Digital
              Experience with Us. This is the Right Time to Choose the Right
              Tech Stack. Experience The Amazing Digital Experience with Us.
            </p>
            <Button className="btn" icon={<RightCircleOutlined />}>
              Getting Started
            </Button>
            <div className="icons-container">
              <img src={googleCoud} alt="" className="smal-logo-item" />
              <img src={fresh} alt="" className="smal-logo-item" />
              <img src={firebase} alt="" className="smal-logo-item" />
              <img src={docker} alt="" className="smal-logo-item" />
            </div>
          </div>
          <Lottie
            style={{ height: "500px", width: "500px" }}
            animationData={slideTwoAnimation}
            loop={true}
          />
        </div>
      </div>
      {/* slide-two */}
      <div>
        <div style={contentStyle} className="slider-two">
          <div className="content-container">
            <h1 className="slide-one-ain-title">
              No More Running & No Time To LEAP
            </h1>
            <p className="slide-one-description">
              Experience The Amazing Digital Experience with Us. This is the
              Right Time to Choose the Right Tech Stack. Experience The Amazing
              Digital Experience with Us. Experience The Amazing Digital
              Experience with Us. This is the Right Time to Choose the Right
              Tech Stack. Experience The Amazing Digital Experience with Us.
            </p>
            <Button className="btn" icon={<RightCircleOutlined />}>
              Getting Started
            </Button>
            <div className="icons-container-two">
              <img src={deno} alt="" className="smal-logo-item" />
              <img src={node} alt="" className="smal-logo-item" />
              <img src={preact} alt="" className="smal-logo-item" />
              <img src={electron} alt="" className="smal-logo-item" />
            </div>
          </div>
          <Lottie
            style={{ height: "500px", width: "500px" }}
            animationData={slideOneAnimation}
            loop={true}
          />
        </div>
      </div>

      {/* slide-three */}
      <div>
        <div style={contentStyle} className="slider-three">
          <div className="content-container">
            <h1 className="slide-one-ain-title">
              One Stop Solution For All Your Business Needs
            </h1>
            <p className="slide-one-description">
              Experience The Amazing Digital Experience with Us. This is the
              Right Time to Choose the Right Tech Stack. Experience The Amazing
              Digital Experience with Us. Experience The Amazing Digital
              Experience with Us. This is the Right Time to Choose the Right
              Tech Stack. Experience The Amazing Digital Experience with Us.
            </p>
            <Button className="btn" icon={<RightCircleOutlined />}>
              Getting Started
            </Button>
            <div className="icons-container-three">
              <img src={react} alt="" className="smal-logo-item" />
              <img src={aws} alt="" className="smal-logo-item" />
              <img src={github} alt="" className="smal-logo-item" />
              <img src={next} alt="" className="smal-logo-item" />
            </div>
          </div>
          <Lottie
            style={{ height: "500px", width: "500px" }}
            animationData={slideThreeAnimation}
            loop={true}
          />
        </div>
      </div>
      {/* <div>
        <h3 style={contentStyle}>
          {" "}
          <div className="slider-one"></div>
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          {" "}
          <div className="slider-two"></div>
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          {" "}
          <div className="slider-three"></div>
        </h3>
      </div> */}
    </Carousel>
  );
};

export default Carosel;
