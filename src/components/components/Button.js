import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Color } from "../utils/variables";

const ButtonWrapper = styled.button`
  display: flex;
  height: 40px;
  width: 40px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  padding: 0px;
  border: none;
  background-color: transparent;
  appearance: none;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 50%;

  &:focus {
    outline: 0;
  }

  &:hover {
    background-color: ${Color("purple", "0.3")};
  }
`;

export const Button = ({ icon, alt, onClick }) => (
  <ButtonWrapper onClick={onClick}>
    {icon && <img src={icon} alt={alt} />}
  </ButtonWrapper>
);

Button.propTypes = {
  icon: PropTypes.string,
  alt: PropTypes.string,
};
