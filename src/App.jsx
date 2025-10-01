import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { employees } from './data/employeesData';
import EmployeeCard from './components/EmployeesCard';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      IT: true,
      HR: true,
      Finance: true,
      Marketing: true
    };
  }

  showDepartment = (dept) => {
    if (dept === "All") {
      this.setState({ IT: true, HR: true, Finance: true, Marketing: true });
    } else {
      this.setState({
        IT: dept === "IT",
        HR: dept === "HR",
        Finance: dept === "Finance",
        Marketing: dept === "Marketing"
      });
    }
  };

  render() {
    return (
      <div className="container mt-4">
        <h1 className="text-center mb-4">Employee Records Dashboard</h1>

        {/* Department Buttons */}
        <div className="d-flex justify-content-center mb-4 flex-wrap gap-2">
          <button className="btn btn-outline-primary" onClick={() => this.showDepartment("All")}>All</button>
          <button className="btn btn-outline-dark" onClick={() => this.showDepartment("IT")}>IT</button>
          <button className="btn btn-outline-success" onClick={() => this.showDepartment("HR")}>HR</button>
          <button className="btn btn-outline-warning" onClick={() => this.showDepartment("Finance")}>Finance</button>
          <button className="btn btn-outline-info" onClick={() => this.showDepartment("Marketing")}>Marketing</button>
        </div>

        {/* Employees */}
        <div className="row">
          {employees.map((emp) => (
            <>
              {this.state.IT && emp.department === "IT" && (
                <div className="col-md-4 mb-3" key={emp.id}>
                  <EmployeeCard {...emp} />
                </div>
              )}
              {this.state.HR && emp.department === "HR" && (
                <div className="col-md-4 mb-3" key={emp.id}>
                  <EmployeeCard {...emp} />
                </div>
              )}
              {this.state.Finance && emp.department === "Finance" && (
                <div className="col-md-4 mb-3" key={emp.id}>
                  <EmployeeCard {...emp} />
                </div>
              )}
              {this.state.Marketing && emp.department === "Marketing" && (
                <div className="col-md-4 mb-3" key={emp.id}>
                  <EmployeeCard {...emp} />
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
