import React, { Component } from "react";
import EmployeesCard from "./components/EmployeesCard";
import { employees } from "./data/employeesData";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDept: "All", // current department to show
    };
  }

  handleFilter = (dept) => {
    this.setState({ selectedDept: dept });
  };

  render() {
    const { selectedDept } = this.state;
    const departments = ["All", "IT", "HR", "Finance", "Marketing"];

    return (
      <div className="container py-4">
        <h1 className="text-center mb-4">Employee Records Dashboard</h1>

        {/* Department Buttons */}
        <div className="d-flex justify-content-center flex-wrap mb-4 gap-2">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => this.handleFilter(dept)}
              className={`btn ${
                selectedDept === dept ? "btn-primary" : "btn-outline-primary"
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Employee Cards – Conditional Rendering */}
        <div className="d-flex flex-wrap justify-content-center">
          {employees.map((emp) => {
            // Show all if 'All' selected, otherwise show only matching department
            if (selectedDept === "All" || emp.department === selectedDept) {
              return <EmployeesCard key={emp.id} data={emp} />;
            } else {
              return null; 
            }
          })}

          {/* Show message if no employees for selected department */}
          {employees.every(
            (emp) =>
              selectedDept !== "All" && emp.department !== selectedDept
          ) && (
            <p className="text-center mt-4">
              No employees found in {selectedDept} department.
            </p>
          )}
        </div>
      </div>
    );
  }
}

export default App;
