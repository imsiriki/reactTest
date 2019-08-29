import React from "react";
import { Link } from "react-router-dom";

import { userService } from "../_services";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      users: [],
      empDetails: [
        {
          id: 1,
          name: "test1",
          age: "11",
          gender: "male",
          email: "test1@gmail.com",
          phoneNo: "9415346313"
        },
        {
          id: 2,
          name: "test2",
          age: "12",
          gender: "male",
          email: "test2@gmail.com",
          phoneNo: "9415346314"
        },
        {
          id: 3,
          name: "test3",
          age: "13",
          gender: "male",
          email: "test3@gmail.com",
          phoneNo: "9415346315"
        },
        {
          id: 4,
          name: "test4",
          age: "14",
          gender: "male",
          email: "test4@gmail.com",
          phoneNo: "9415346316"
        },
        {
          id: 5,
          name: "test5",
          age: "15",
          gender: "male",
          email: "test5@gmail.com",
          phoneNo: "9415346317"
        },
        {
          id: 6,
          name: "test6",
          age: "16",
          gender: "male",
          email: "test6@gmail.com",
          phoneNo: "9415346318"
        }
      ]
    };
  }

  componentDidMount() {
    this.setState({
      user: JSON.parse(localStorage.getItem("user")),
      users: { loading: true }
    });
    userService.getAll().then(users => this.setState({ users }));
  }

  render() {
    const { user, users, empData } = this.state;
    return (
      <div className="col-md-12">
        <h1>EmployeeList Page</h1>
        <p>
          <Link to="/login">Logout</Link>
        </p>

        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Email</th>
              <th>PhoneNo</th>
            </tr>
          </thead>
          <tbody>
            {this.state.empDetails.map((emp, i) => (
              <tr key={i}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.age}</td>
                <td>{emp.gender}</td>
                <td>{emp.email}</td>
                <td>{emp.phoneNo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export { HomePage };
