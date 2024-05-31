import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div className="loader-container">
      <Spinner
        animation="border"
        role="status"
        className="custom-spinner"
      ></Spinner>
    </div>
  );
};

export default Loader;
