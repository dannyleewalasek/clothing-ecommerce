import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import CollectionPage from "../category/collection.component";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import { updateCollections } from "../../redux/shop/shop.actions";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

//anything nested in route, which this is from app.js, gets access to match
class ShopPage extends React.Component {
  state = {
    //can just do this without calling the constructor and super, react knows what you want, it invokes super for us so we have state
    loading: true,
  };
  unsubscrineFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    //instead of using onsnapshot, more how you would do it wuth other api's
    // fetch(
    //   "https://firestore.googleapis.com/v1/projects/crwn-clothing-86007/databases/(default)/documents/collections"
    // )
    //   .then((response) => response.json())
    //   .then((response) => console.log(response));

    //SUBSCRIBING WITH ONSNAPSHOT IN FIREBASE
    this.unsubscrineFromSnapshot = collectionRef.onSnapshot(
      async (snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        updateCollections(collectionsMap);
        this.setState({ loading: false });
      }
    );

    // firestore
    //   .collection("collections")
    //   .get()
    //   .then((snapshot) => convertCollectionsSnapshotToMap(snapshot))
    //   .then((map) => updateCollections(map));
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        {/* using match.path instead of /shop makes this more reusable, dont have to worry where it actually is */}
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner
              isLoading={loading}
              {...props}
            ></CollectionsOverviewWithSpinner>
          )}
        />
        {/* //this gives categoryId as a param in match inside the categorypage */}
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionsPageWithSpinner
              isLoading={loading}
              {...props}
            ></CollectionsPageWithSpinner>
          )}
        ></Route>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
