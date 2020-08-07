import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { UserContext } from "../Context/UserContext";
function UserList() {
  const { themedata} = useContext(ThemeContext);
  const { isLightTheme, dark, light } = themedata
  const { users, removeUser } = useContext(UserContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div style={{ background: theme.bg, color: theme.syntex }}>
      <table className="table">
        <thead>
          <tr style={{ color: theme.syntex }}>
            <th scope="col">S.#</th>
            <th scope="col">User Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={index}
              style={{ background: theme.ui, color: theme.syntex }}
            >
              <th scope="row">{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button
                  onClick={() => removeUser(user.id)}
                  className={"btn btn-sm btn-danger"}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
