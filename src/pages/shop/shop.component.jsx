import React from "react";
import { Route } from "react-router-dom";
import CollectionPage from "../category/collection.component";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";

//anything nested in route, which this is from app.js, gets access to match
const ShopPage = ({ match }) => (
  <div className="shop-page">
    {/* using match.path instead of /shop makes this more reusable, dont have to worry where it actually is */}
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    {/* //this gives categoryId as a param in match inside the categorypage */}
    <Route
      path={`${match.path}/:collectionId`}
      component={CollectionPage}
    ></Route>
  </div>
);

export default ShopPage;
