import PeopleCard from "./PeopleCard";
import data from "../utils/data";


const PeopleList = () => {
  
  // console.log(data)
  return (
    <div>
      {data.map((item, id) => (
        <PeopleCard key={id} data={item} />
      ))} 
    </div>
  );
};

export default PeopleList;
