import PeopleCard from "./PeopleCard"; 
import { UserContext } from "../context/UserContextProvider";
import { useContext } from "react";

const PeopleList = () => { 
  const {addUser} = useContext(UserContext)
  return (
    <div className="people-container">
      <h1>People List</h1> 
      {addUser.map((user, id) => (
        <PeopleCard key={id} userData={user} />
      ))} 
    </div>
  );
};

export default PeopleList;
