import { useState } from "react";
import { GiPhone, GiAges } from "react-icons/gi";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdMarkEmailUnread, MdOutlineLocationCity } from "react-icons/md";
import { FaUserSecret } from "react-icons/fa";

const initialState = {
  name: false,
  gender: false,
  email: false,
  age: false,
  location: false,
  phone: false,
  login: false,
};
const ClearAll = () => {
  const [user, setUser] = useState();
  const [hoverAttribute, setHoverAttribute] = useState(initialState);

  const getUser = async () => {
    const url = `https://randomuser.me/api`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setUser(data.results[0]);
    } catch (error) {
      console.log(error);
    }
  }; 

  return (
    <div className="clear-container">
      <p>Click to View All Invite List.</p>
      <div className="row">
        <div className="col">
          <div className="card user-card rounded-3 shadow">
            <div className="card-main my-3">
            {hoverAttribute.name && <p>Busra</p>}  
            {hoverAttribute.email && <p>@gmail</p>} 
            {hoverAttribute.age && <p>24</p>} 
            {hoverAttribute.phone && <p>5236698</p>} 
            {hoverAttribute.location && <p>Gazi</p>}
            {hoverAttribute.info && <p>yes</p>}
            </div>

            <div className="card-body d-flex">
              <FaUserSecret className="icon p-2 rounded-5 mx-4"/>
              <GiAges className="icon p-2 mx-4 rounded-5" onMouseEnter={()=> setHoverAttribute({...hoverAttribute, name: true})} onMouseLeave={()=> setHoverAttribute({...hoverAttribute, name: false})} />
              <MdMarkEmailUnread className="icon p-2 mx-4 rounded-5" onMouseEnter={()=> setHoverAttribute({...hoverAttribute, email: true})} onMouseLeave={()=> setHoverAttribute({...hoverAttribute, email: false})}/>
              <GiPhone className="icon p-2 mx-4 rounded-5" onMouseEnter={()=> setHoverAttribute({...hoverAttribute, phone: true})} onMouseLeave={()=> setHoverAttribute({...hoverAttribute, phone: false})} />
              <MdOutlineLocationCity className="icon p-2 mx-4 rounded-5" onMouseEnter={()=> setHoverAttribute({...hoverAttribute, location: true})} onMouseLeave={()=> setHoverAttribute({...hoverAttribute, location: false})} />
              <RiLockPasswordFill className="icon p-2 mx-4 rounded-5" onMouseEnter={()=> setHoverAttribute({...hoverAttribute, info: true})} onMouseLeave={()=> setHoverAttribute({...hoverAttribute, info: false})} />
            </div>
            <div className="d-flex justify-content-around my-3">
              <button className="btn btn-outline-dark" onClick={getUser}>get user</button>
              <button className="btn btn-outline-dark">add user</button>
            </div>
          </div>
        </div>
      </div>
      <button className="btn btn-dark" onClick={getUser}>
        Random User
      </button>
    </div>
  );
};

export default ClearAll;
