import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component.jsx";
import Header from "./components/header/header.component";

const HatsPage = () => <div>hats page</div>;

function App() {
  return (
    <div>
      <Header></Header>
      {/* //exact is needed here as home would also render at /hats as it contains
      //'/' //without exact //with switch as soon as one route matches the path,
      //it only renders that route, switch is useful as it gives more control,
      // makes sure only 1 route is rendered, so no accidents */}
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/shop" component={ShopPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
