import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import QuestionForm from "../questions";
import { destinations } from "../../data/dummyData";
import { useStateContext } from "../../contexts/ContextProvider";
import { useState } from "react";

const Home = () => {
  return (
    <div className="container home-page">
      <QuestionForm />{" "}
      <Link to="/results" class="btn btn-success btn-big">
        Find my Vacation!
      </Link>
    </div>
  );
};

export default Home;
