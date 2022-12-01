import React from "react";

const PeopleCard = ({ data }) => {
  const { name, age, image } = data;
  console.log(data);
  return (
    <div className="person-card m-3">
      <div className="d-flex p-3">
        <img src={image} width="50" alt="" />
        <p className="ms-2 pb-2 mb-0 small">
          <strong className="d-block text-gray-dark">{name}</strong>
          Age: {age}
        </p>
        <button className="btn btn-primary ms-5">Add</button>
      </div>
    </div>
  );
};

export default PeopleCard;
