//css allows us to write a block of css and pass in
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

//use css because we have an option div and an option Link, for sharing style
//so can pass this into the 2 defintiuons at the bottom so we dont have to repeat the code
// const OptionsContainerStyles = css`
//   padding: 10px 15px;
// `;

// export const OptionLink = styled(Link)`
//   ${OptionsContainerStyles}
// `;

// export const OptionDiv = styled.div`
//   ${OptionsContainerStyles}
// `;

//decided not to do this and instead use the as keyword in header.component
//and instead do this:

export const OptionLink = styled(Link)`
  padding: 10px;
  cursor: pointer;
`;

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

//now we can get a tyled link component, extending it
export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
