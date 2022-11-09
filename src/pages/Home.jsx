import React from "react";
import PeopleList from "../components/PeopleList";
import { useState } from "react";

const Home = () => {
  const [show, setShow] = useState(true);
  return (
    <div className="home-continer">
      <div className="home-row">
        <button onClick={() => setShow(!show)} className="btn btn-danger">
          {show ? "Clear All" : "View All"}
        </button>
        {show && <PeopleList/> }
      </div>
    </div>
  );
};

export default Home;
