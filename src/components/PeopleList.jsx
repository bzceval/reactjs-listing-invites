import PeopleCard from "./PeopleCard";
import data from "../utils/data";


const PeopleList = () => {
  
  // console.log(data)
  return (
    <div className="people-container">
      <h1>People List</h1> 
      {data.map((item, id) => (
        <PeopleCard key={id} data={item} />
      ))} 
    </div>
  );
};

export default PeopleList;
