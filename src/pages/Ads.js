import React from "react";
import Getstart1 from "../components/Getstart1";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";
import "./Home.css";
import img from "../assest/img.jpg";
import add from "../assest/add.png";
import adsense1 from "../assest/adsense1.jpg";
import advert from "../assest/advert.png";
import Template1 from "../components/Template1";
import Temp1 from "../components/Temp1";
import adsense from "../assest/adsense.jpg";

const Ads = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${adsense})`,
          width: "100vw",
          margin: "auto",
          objectFit: "contain",
          height: "700px",
        }}
      >
        <div className="container-fuild sf">
          <Flip bottom>
            <Getstart1
              title="We Value Your Content"
              content="Creating content takes time, making it profitable shouldn't."
            />
          </Flip>
        </div>
      </div>

      <div className="temp container-fuild">
        <Fade bottom>
          <Temp1
            title="2 million people have chosen AdSense, here's why."
            desc="Learn how localizing content into translated, culturally-relevant versions can help content creators expand their audience and reach in more markets."
          />
        </Fade>
      </div>

      <div className="row objective ">
        <div className="col-12 col-md-6  ">
          <p className="obje">
            <h4>BENEFITS</h4>
            <h2> Only the highest paying ads go live</h2>
            <p>
              Boost your revenue by tapping into the largest network of online
              advertisers who bid for your ad space.
            </p>
          </p>
        </div>
        <div className="col-12 col-md-6" style={{ margin: "auto" }}>
          <img src={add} style={{ width: "100%" }}></img>
        </div>
      </div>

      <div className="row objective ">
        <div className="col-12 col-md-6" style={{ margin: "auto" }}>
          <img src={advert} style={{ width: "45vw" }}></img>
        </div>
        <div className="col-12 col-md-6  ">
          <p className="objec">
            <h4>BENEFITS</h4>
            <h2> The right ads for your audience</h2>
            <p>
              Ads are screened to ensure they’re high quality and relevant to
              your content or audience, even when viewed on smartphones and
              tablets. The result? You can make more money online.
            </p>
          </p>
        </div>
      </div>
      <div className="row objective ">
        <div className="col-12 col-md-6  ">
          <p className="obje">
            <h4>BENEFITS</h4>
            <h2> You’re in control</h2>
            <p>
              Block ads you don't like, customize where ads appear, and choose
              which types fit your site best.
            </p>
          </p>
        </div>
        <div className="col-12 col-md-6" style={{ margin: "auto" }}>
          <img src={img} style={{ width: "45vw" }}></img>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${adsense1})`,
          width: "100%",
          height: "700px",
        }}
      ></div>

      <div className="temp container-fuild">
        <Fade bottom>
          <Template1
            title="Get started"
            desc="You just need 3 things to get started with AdSense. Follow the steps given below & connect with adsense."
          />
        </Fade>
      </div>
      <div className="container-fuild sf">
        <Getstart1 />
      </div>
    </>
  );
};

export default Ads;
