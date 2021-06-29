import React from "react";

import "./homepage.styles.scss";
import Directory from "../../components/directory/directory.component";

import { HomePageCOntainer } from "./homepage.styles";

const HomePage = () => {
  return (
    <HomePageCOntainer>
      <Directory></Directory>
    </HomePageCOntainer>
  );
};

export default HomePage;
