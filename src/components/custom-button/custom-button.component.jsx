import CaseSensitivePathsWebpackPlugin from "case-sensitive-paths-webpack-plugin";
import React from "react";

// import "./custom-button.styles.scss"; NO LONGER USING CSS FILE, USING STYLED COMPONENTS
import { CustomButtonContainer } from "./custom-button.styles";

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}></CustomButtonContainer>
);

export default CustomButton;
