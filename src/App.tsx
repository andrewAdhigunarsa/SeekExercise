import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/pages/dashboard/dashboard";
import Login from "./components/pages/login/login";
import { URLS } from "./configs/urls";
import useToken from "./hooks/useToken";
import { Button } from "@mui/material";
import { AppContext } from "./context/app-context";

function App() {
  const { token, setToken, revokeToken } = useToken();
  const { user } = useContext(AppContext);
  const { setUserDetails } = user;

  const handleLogout = () => {
    revokeToken();
    setUserDetails(undefined);
  };

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={handleLogout}>Logout</Button>
        <BrowserRouter>
          <Routes>
            <Route path={URLS.dashboard} element={<Dashboard />} />
            <Route path={URLS.checkout} element={<Dashboard />} />
            <Route path={"/"} element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
