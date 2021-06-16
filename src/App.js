import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component.jsx";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  // we should unsubscribe for reasons
  unsubscribeFromAuth = null;

  // we can SUBSCIRBE to the change of the user logging in.out
  // when component mounts we tell auth what it should do whenever the firebases state changes.
  //user authenticated session persistance
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        //get back the snapshot object of the users
        // a docum,ent snapshot object we get using .get, we can see if document exists, also allows us to get properties of that data
        //so were getting displayname, email etc

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        this.setState({ currentUser: null });
      }
    });
  }

  //make sure to unsubscribe on unmount
  componentWillUnmount() {
    this.unsubscibeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}></Header>
        {/* //exact is needed here as home would also render at /hats as it contains
      //'/' //without exact //with switch as soon as one route matches the path,
      //it only renders that route, switch is useful as it gives more control,
      // makes sure only 1 route is rendered, so no accidents */}
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/shop" component={ShopPage}></Route>
          <Route path="/signin" component={SignInAndSignUpPage}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
