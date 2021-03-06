import React, { useEffect, useState } from "react";
import axios from "axios";
const Updated = (props) => {
  const { id } = props;
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();

  useEffect(() => {
    axios.get("http://localhost:8000/api/people/" + id).then((res) => {
      console.log(res);
    });
  });
  const updatePerson = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8000/api/people/" + id, {
        firstName, // this is shortcut syntax for firstName: firstName,
        lastName, // this is shortcut syntax for lastName: lastName
      })
      .then((res) => {
        setFirstName(res.data.firstName);
        setLastName(res.data.lastName);
      });
  };
  return (
    <div>
      <h1>Update a Person</h1>
      <form onSubmit={updatePerson}>
        <p>
          <label>First Name</label>
          <br />
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </p>
        <p>
          <label>Last Name</label>
          <br />
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </p>
        <input type="submit" />
      </form>
    </div>
  );
};
export default Updated;
