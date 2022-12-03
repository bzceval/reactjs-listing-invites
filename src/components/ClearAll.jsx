import { useContext, useState } from "react";
import { GiPhone } from "react-icons/gi";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdMarkEmailUnread, MdOutlineLocationCity } from "react-icons/md";
import { FaUserSecret } from "react-icons/fa";
import { useEffect } from "react";
import { UserContext } from "../context/UserContextProvider";

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
  const {setAddUser, addUser} = useContext(UserContext)

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

  const handleClick = () => {
    const newUser = [{...user, ...addUser}]
    setAddUser(newUser)
    console.log(addUser)
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="clear-container">
      <div className="row">
        <div className="card user-card rounded-3 shadow">
          <div className="card-main my-3">
            <img src={user?.picture.large} alt="" />
            <p className="card-name"> {user?.name.title} {user?.name.first} {user?.name.last} </p>
            <hr />
            {hoverAttribute.email && <> <h4>Email</h4> <p>{user?.email}</p></> }
            {hoverAttribute.age && <> <h4>Birthday</h4> <p>{user?.dob.age}</p></>  }
            {hoverAttribute.phone && <> <h4>Phone Number</h4> <p>{user?.phone}</p></> }
            {hoverAttribute.location && <> <h4>Location</h4> <p>{user?.location.street.name}</p> </>}
            {hoverAttribute.info && ( <> <h4>Username</h4> <p> {user?.login.username} </p></> )}
          </div>

          <div className="card-body d-flex">
            <FaUserSecret className="icon p-2 rounded-5 mx-4" />
             
            <MdMarkEmailUnread
              className="icon p-2 mx-4 rounded-5"
              onMouseEnter={() =>
                setHoverAttribute({ ...hoverAttribute, email: true })
              }
              onMouseLeave={() =>
                setHoverAttribute({ ...hoverAttribute, email: false })
              }
            />
            <GiPhone
              className="icon p-2 mx-4 rounded-5"
              onMouseEnter={() =>
                setHoverAttribute({ ...hoverAttribute, phone: true })
              }
              onMouseLeave={() =>
                setHoverAttribute({ ...hoverAttribute, phone: false })
              }
            />
            <MdOutlineLocationCity
              className="icon p-2 mx-4 rounded-5"
              onMouseEnter={() =>
                setHoverAttribute({ ...hoverAttribute, location: true })
              }
              onMouseLeave={() =>
                setHoverAttribute({ ...hoverAttribute, location: false })
              }
            />
            <RiLockPasswordFill
              className="icon p-2 mx-4 rounded-5"
              onMouseEnter={() =>
                setHoverAttribute({ ...hoverAttribute, info: true })
              }
              onMouseLeave={() =>
                setHoverAttribute({ ...hoverAttribute, info: false })
              }
            />
          </div>

          <div className="d-flex justify-content-around my-5">
            <button className="btn btn-outline-dark" onClick={getUser}>
              other user
            </button>
            <button className="btn btn-outline-dark" onClick={handleClick}>add user</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClearAll;
