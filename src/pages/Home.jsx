import React from "react";
import PeopleList from "../components/PeopleList";
import { useState } from "react";
import ClearAll from "../components/ClearAll";

const Home = () => {
  const [show, setShow] = useState(true);
  return (
    <div className="home-continer">
      <div className="home-row">
      <div className='clearall-container'>
        <button onClick={() => setShow(!show)} className="btn btn-danger mt-2">
          {show ? "Clear All" : "View All"}
        </button>
        </div>
        {show ? <PeopleList/> : <ClearAll/>} 
      </div>
    </div>
  );
};

export default Home;
