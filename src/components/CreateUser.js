import React, { useState, useContext } from "react";
import { UserContext } from "../Context/UserContext";
function CreateUser() {
  const [userdata, setUserdata] = useState({ name: "", email: "" });
  const { addNewuser } = useContext(UserContext);
  const onsubmit = (e) => {
    e.preventDefault();
    addNewuser(userdata);
    setUserdata({ name: "", email: "" });
  };
  return (
    <>
      <form onSubmit={onsubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">User Name </label>
          <input
            type="name"
            required
            className="form-control"
            onChange={(e) => setUserdata({ ...userdata, name: e.target.value })}
            value={userdata.name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email </label>
          <input
            type="email"
            required
            className="form-control"
            value={userdata.email}
            onChange={(e) =>
              setUserdata({ ...userdata, email: e.target.value })
            }
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default CreateUser;
