import React from "react";

const PeopleCard = ({ userData }) => { 
 
  return (
    <div className="person-card m-3">
      <div className="d-flex p-3">
        <img src={userData?.picture.large} width="50" alt="" />
        <p className="ms-3 pb-2 mb-0 small">
          <strong className="d-block text-gray-dark">{userData?.name.title} {userData?.name.first} {userData?.name.last}</strong>
          Mail: {userData?.email}
        </p> 
      </div>
    </div>
  );
};

export default PeopleCard;
