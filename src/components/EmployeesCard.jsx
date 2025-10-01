import React from "react";

class EmployeesCard extends React.Component {
  render() {
    const { name, age, department, designation, salary, location } = this.props.data;

    return (
      <div className="card m-2 shadow-sm" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{designation}</h6>
          <p className="card-text mb-1"><strong>Age:</strong> {age}</p>
          <p className="card-text mb-1"><strong>Department:</strong> {department}</p>
          <p className="card-text mb-1"><strong>Salary:</strong> ₹{salary.toLocaleString()}</p>
          <p className="card-text"><strong>Location:</strong> {location}</p>
        </div>
      </div>
    );
  }
}

export default EmployeesCard;
