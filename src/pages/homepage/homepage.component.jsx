import React from "react";

import "./homepage.styles.scss";
import Directory from "../../components/directory/directory.component";

const HomePage = () => {
  return (
    <div>
      <div className="directory-menu">
        <Directory></Directory>
      </div>
    </div>
  );
};

export default HomePage;
