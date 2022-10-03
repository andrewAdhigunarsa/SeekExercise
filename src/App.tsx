import React, { useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/pages/dashboard/dashboard";
import Login from "./components/pages/login/login";
import { URLS } from "./configs/urls";
import useToken from "./hooks/useToken";
import { Button } from "@mui/material";
import { AppContext } from "./context/app-context";
import Checkout from "./components/pages/checkout/checkout";
import { getUserDetails } from "./services/userServices";
import { getPricingRules } from "./services/pricingRulesServices";
import { getUserPromotion } from "./utils/utils";

function App() {
  const { token, setToken, revokeToken } = useToken();
  const { user, pricingRules } = useContext(AppContext);
  const { setProducts, setPromotions } = pricingRules;
  const { setUserDetails } = user;

  const getDetails = async () => {
    const details = await getUserDetails(token);
    const rules = await getPricingRules();

    if (details) {
      setUserDetails(details);
    }
    if (rules) {
      const userPromotions = getUserPromotion(
        details?.username,
        rules.promotions
      );
      setProducts(rules.products);
      setPromotions(userPromotions);
      console.log("user promotions", userPromotions);
    }
  };

  const handleLogout = () => {
    revokeToken();
    setUserDetails(undefined);
  };

  useEffect(() => {
    if (!user.userDetails && token) {
      getDetails();
    }
  }, [user.userDetails, token]);

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Button onClick={handleLogout}>Logout</Button>
          <Routes>
            <Route path={"/"} element={<Dashboard />} />
            <Route path={URLS.dashboard} element={<Dashboard />} />
            <Route path={URLS.checkout} element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
