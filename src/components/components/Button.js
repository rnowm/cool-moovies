import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  display: flex;
  height: 3rem;
  width: 3rem;
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
  &:focus {
    outline: 0;
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
