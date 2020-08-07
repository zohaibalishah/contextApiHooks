import React, { useContext } from "react";
import UserList from "./components/UserList";
import Header from "./components/Header";
import CreateUser from "./components/CreateUser";
import { ThemeContext } from "./Context/ThemeContext";
import ToggleTheme from "./components/ToggleTheme";
function App() {
  const { themedata } = useContext(ThemeContext);
  const { isLightTheme, dark, light } = themedata;
  const theme = isLightTheme ? light : dark;
  return (
    <div
      className="container-fluid"
      style={{ background: theme.bg, color: theme.syntex, height: "100vh" }}
    >
      <div className="row">
        <div className="col-md-2">
          <Header title={"Theme"} />
          <ToggleTheme />
        </div>
        <div className="col-md-4">
          <Header title={"All Users List"} />
          <UserList />
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-5">
          <Header title={"Create New user"} />
          <CreateUser />
        </div>
      </div>
    </div>
  );
}

export default App;
