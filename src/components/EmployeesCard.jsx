import React from "react";

const EmployeeCard = ({ id, name, age, department, designation, salary, location }) => {
  return (
    <div className="card h-100 shadow-sm border-0">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text mb-1"><strong>Age:</strong> {age}</p>
        <p className="card-text mb-1"><strong>Department:</strong> {department}</p>
        <p className="card-text mb-1"><strong>Designation:</strong> {designation}</p>
        <p className="card-text mb-1"><strong>Salary:</strong> ₹ {salary}</p>
        <p className="card-text"><strong>Location:</strong> {location}</p>
      </div>
    </div>
  );
};

export default EmployeeCard;
