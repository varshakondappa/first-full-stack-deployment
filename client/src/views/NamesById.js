import React, { useEffect, useState } from "react";
import axios from "axios";
const Detail = (props) => {
  const [person, setPerson] = useState({});
  useEffect(() => {
    axios.get("http://localhost:8000/api/people/" + props.id).then((res) =>
      setPerson({
        ...res.data,
      })
    );
  });
  return (
    <div>
      <p>Id:{person._id}</p>
      <p>First Name: {person.firstName}</p>
      <p>Last Name: {person.lastName}</p>
    </div>
  );
};
export default Detail;
