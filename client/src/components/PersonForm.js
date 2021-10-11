import React, { useState } from "react";
import axios from "axios";
const PersonForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const SubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/people", {
        firstName,
        lastName,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    setFirstName("");
    setLastName("");
  };

  return (
    <form onSubmit={SubmitHandler}>
      <label>FIRST NAME:</label>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <br />
      <label>LAST NAME:</label>
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <br />
      <input type="submit"></input>
    </form>
  );
};

export default PersonForm;
