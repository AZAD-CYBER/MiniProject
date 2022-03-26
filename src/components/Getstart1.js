import { Button } from "@mui/material";
import React from "react";
import "./Getstart1.css";
const Getstart1 = ({ title, content }) => {
  return (
    <div className="row container-fluid">
      <div className="Conatiner  col-12 col-6">
        <h1 className="title">{title}</h1>
        <h3 className="content">{content}</h3>
        <a href="/form">
          <Button
            style={{
              backgroundColor: "#4666FF",
              color: "white",
              width: "200px",
              height: "60px",
              borderRadius: "10px",
              marginTop: "200px",
            }}
          >
            <b style={{ fontSize: "18px" }}>Get Started</b>
          </Button>{" "}
        </a>
      </div>
    </div>
  );
};

export default Getstart1;
