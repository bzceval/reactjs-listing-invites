import PeopleCard from "./PeopleCard";
import data from "../utils/data";
import { UserContext } from "../context/UserContextProvider";
import { useContext } from "react";

const PeopleList = () => { 
  const {addUser} = useContext(UserContext)
  return (
    <div className="people-container">
      <h1>People List</h1> 
      {addUser.map((item, id) => (
        <PeopleCard key={id} data={item} />
      ))} 
    </div>
  );
};

export default PeopleList;
