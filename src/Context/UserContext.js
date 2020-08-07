import React, { useState, createContext } from "react";
import { v4 as uuidv4 } from "uuid";
export const UserContext = createContext();
function UserContextProvider({ children }) {
  const [users, setUsers] = useState([
    { id: 0, name: "zohaib ali shah", email: "zohaibalishah1997@gmail.com" },
    { id: 1, name: "imran", email: "imran@gmail.com" },
    { id: 2, name: "ali", email: "ali@gmail.com" },
    { id: 3, name: "rohail", email: "rohail@gmail.com" },
  ]);
  const removeUser = (userid) => {
    setUsers(users.filter((user) => user.id !== userid));
  };
  const addNewuser = (value) => {
    setUsers([
      ...users,
      { id: uuidv4(), name: value.name, email: value.email },
    ]);
  };

  return (
    <UserContext.Provider value={{ users, removeUser, addNewuser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
