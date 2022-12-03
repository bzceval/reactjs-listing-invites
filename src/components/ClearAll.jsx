import { useState } from "react";

const ClearAll = () => {
  const [user, setUser] = useState()
  const getUser = async () => {
    const url = `https://randomuser.me/api`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setUser(data.results[0])
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="clear-container">
      <p>Click to View All Invite List.</p>
      <div className="row">
        <div className="col">
          <div className="card rounded-3 shadow-sm">
            <p className="text-dark">{user?.gender}</p>
            <img src={user?.picture.medium} alt="" />
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
