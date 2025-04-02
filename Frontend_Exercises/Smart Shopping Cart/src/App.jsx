import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Items from "./components/ItemComponents/items/Items";
import Cart from "./components/cartcomponents/cart/Cart";
import ItemDisplay from "./components/ItemComponents/itemdisplay/ItemDisplay";
import RegisterUser from "./components/registeruser/RegisterUser";
import UserContext from "./ContextApi/Providers/UserProvider";
import Profile from "./components/profile/Profile";
import Confirmation from "./components/Confirmation";
import { useContext } from "react";

function App() {
  const { state } = useContext(UserContext);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route
              path=""
              element={state.isUserLoggedIn ? <Items /> : <RegisterUser />}
            />
            {state.isUserLoggedIn && (
              <Route path="/products" element={<Items />} />
            )}
            {state.isUserLoggedIn && (
              <Route path="product/:productid" element={<ItemDisplay />} />
            )}
            {state.isUserLoggedIn && <Route path="cart" element={<Cart />} />}
            {state.isUserLoggedIn && (
              <Route path="profile" element={<Profile />} />
            )}
            {state.isUserLoggedIn && (
              <Route path="/confimation" element={<Confirmation />} />
            )}
            <Route path="*" element={<h1 style={{marginTop:"8rem", textAlign:"center"}}>Page Not Found</h1>} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
