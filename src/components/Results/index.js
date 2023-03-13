import React from "react";
import "./index.css";
import Loader from "react-loaders";

const Results = () => {
  return (
    <>
      <div className="results-whole">
        <div className="text">Here's an itinerary for your vacation!</div>
        <Loader type="ball-scale-ripple-multiple" />
      </div>
    </>
  );
};

export default Results;
