import React from "react";

const PeopleCard = ({ data }) => {
  const { name, age, image } = data;
  console.log(data);
  return (
    <div className="col">
      <div className="card">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={image} alt="profile-image" height="100" width="100" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">
                <small className="text-muted">{age} years</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleCard;
