import PeopleCard from "./PeopleCard"
import data from "../utils/data"


const PeopleList = () => {
    // console.log(data)
  return (
    <div>
        <h3>People List</h3>
        {data.map((item, id) => <PeopleCard key={id} data={item}/> )}
        <button className="btn btn-danger">View All</button>
    </div>
  )
}

export default PeopleList