import React, { useState, useEffect } from "react";
import axios from "axios";
import PersonForm from "../components/PersonForm";
import { Link } from "@reach/router";
const Main = (props) => {
  const [people, setPeople] = useState([]);

  const deletePerson = (personId) => {
    axios
      .delete("http://localhost:8000/api/people/" + personId)
      .then((res) => console.log(res.data));
  };
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/people")
      .then((res) => {
        setPeople(res.data);
      })
      .catch((err) => console.log(err));
  });
  return (
    <>
      <PersonForm />
      <div>
        {people.map((person, idx) => {
          return (
            <p key={idx}>
              <Link to={"/people/" + person._id}>
                {person.lastName} {person.firstName}
              </Link>
              <br />
              <Link to={"/people/" + person._id + "/edit"}>Edit</Link>
              <button
                onClick={(e) => {
                  deletePerson(person._id);
                }}
              >
                Delete
              </button>
            </p>
          );
        })}
      </div>
    </>
  );
};
export default Main;
