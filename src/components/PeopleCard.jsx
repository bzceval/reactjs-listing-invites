import React from "react";

const PeopleCard = ({ data }) => {
  const { name, age, image } = data;
  console.log(data);
  return (
    <div className="person-card m-3">
      <div class="d-flex pt-1 pb-1">
        <img src={image} width="60" alt="" />
        <p class="ms-2 pb-3 mb-0 small">
          <strong class="d-block text-gray-dark">{name}</strong>
          {age}
        </p>
      </div>
    </div>
  );
};

export default PeopleCard;
