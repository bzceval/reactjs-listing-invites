import { useState } from "react";
import { GiPhone, GiAges } from 'react-icons/gi'; 
import { RiLockPasswordFill } from 'react-icons/ri';
import { MdMarkEmailUnread, MdOutlineLocationCity } from 'react-icons/md';
import { FaUserSecret } from 'react-icons/fa';

const ClearAll = () => {
  const [user, setUser] = useState();
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
          <div className="card user-card rounded-3 shadow-sm">
           <div className="card-body d-flex gap-5">
            <FaUserSecret className="icon p-1 m-1 rounded-5" />
            <GiAges className="icon p-1 m-1 rounded-5" />
            <MdMarkEmailUnread className="icon p-1 m-1 rounded-5" />
            <GiPhone className="icon p-1 m-1 rounded-5" />
            <MdOutlineLocationCity className="icon p-1 m-1 rounded-5" />
            <RiLockPasswordFill className="icon p-1 m-1 rounded-5" />
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
