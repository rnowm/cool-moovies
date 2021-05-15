import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Logo from "./images/logo.svg";
import PrevIcon from "./images/arrow-left.svg";

import { Button } from "./Button";
import { Row } from "./Layout";
import { Label } from "./Typography";

import { device } from "../utils/variables";

const HeaderWrapper = styled.header`
  width: 100%;
  top: 0px;
  z-index: 60;
  position: fixed;
  background: red;
  min-width: 320px;
`;

const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  height: 64px;
  width: 100%;
  padding: 0px 20px;
  justify-content: center;
  align-items: center;
  background: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;

  @media ${device.laptop} {
    justify-content: flex-end;
  }

  img {
    max-width: 300px;
  }
`;

export const Header = ({ logo, back, title }) => (
  <HeaderWrapper>
    <HeaderContainer>
      {back && (
        <Row fit>
          <Link to="/">
            <Button icon={PrevIcon} />
          </Link>
        </Row>
      )}
      {title && (
        <Row fit show="tabletL" marginLeft="10">
          <Label bold color="purple">
            {title}
          </Label>
        </Row>
      )}
      {logo && (
        <Link to="/">
          <img src={Logo} alt="Cool Movies" />
        </Link>
      )}
    </HeaderContainer>
  </HeaderWrapper>
);

Header.propTypes = {
  logo: PropTypes.bool,
  title: PropTypes.string,
  back: PropTypes.bool,
};
