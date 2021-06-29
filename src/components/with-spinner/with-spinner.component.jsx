import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

//HOC HIGHER ORDER COMPONENT!
//so this take a component, and until isloading is false, renders spinner, else it renders the wrappedcomponent
const WithSpinner =
  (WrappedComponent) =>
  ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer></SpinnerContainer>
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps}></WrappedComponent>
    );
  };

export default WithSpinner;
