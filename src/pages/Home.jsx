import React from "react";
import PeopleList from "../components/PeopleList";
import { useState } from "react";
import ClearAll from "../components/ClearAll";

const Home = () => {
  const [show, setShow] = useState(true);
  return (
    <div className="home-continer">
      <div className="home-row">
        <div className="home-align"> 
        <button onClick={() => setShow(!show)} className="btn btn-danger my-3">
          {show ? "Add Participant" : "View All Invite List"}
        </button> 
        {show ? <PeopleList/> : <ClearAll/>} 
      </div>
      </div>
    </div>
  );
};

export default Home;
