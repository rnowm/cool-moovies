import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Color } from "../utils/variables";
import { Circle } from "./Layout";
import { Label } from "./Typography";

const ProgressWrapper = styled.div`
  display: flex;
  position: relative;
  width: ${(props) => props.size + "px"};
  height: ${(props) => props.size + "px"};
`;

const ProgressSVG = styled.svg`
  transform: rotate(-90deg);

  circle {
    stroke-dashoffset: 0;
    transition: stroke-dashoffset 1s linear;
    stroke: ${(props) => Color(props.color || "gold")};
    opacity: 0.4;
    stroke-width: 0.5em;

    &.bar {
      stroke: ${(props) => Color(props.color || "gold")};
      opacity: 1;
      stroke-dashoffset: ${(props) => props.pct};
    }
  }
`;

const LabelWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
`;

const getAutoColor = (value) => {
  return value > 75 ? "green" : value > 25 ? "gold" : "red";
};

export const Progress = ({ value, autoColor, color, textColor }) => {
  const size = 80;
  const r = size / 2 - 10;
  const c = Math.PI * (r * 2);
  const pct = ((100 - value) / 100) * c;

  color = autoColor && getAutoColor(value);

  return (
    <ProgressWrapper size={size}>
      <ProgressSVG
        color={color}
        pct={pct}
        id="svg"
        width={size}
        height={size}
        viewPort="0 0 100 100"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle r={r} cx={size / 2} cy={size / 2} fill="transparent"></circle>
        <circle
          className="bar"
          r={r}
          cx={size / 2}
          cy={size / 2}
          fill="transparent"
          stroke-dasharray="188.5"
        ></circle>
      </ProgressSVG>
      <LabelWrapper>
        <Label large bold color={textColor || "white"}>
          {value}
        </Label>
      </LabelWrapper>
    </ProgressWrapper>
  );
};

const RateWrapper = styled(Circle)`
  position: absolute;
  top: 3px;
  right: 3px;
  border: 2px solid white;
`;

export const Rate = ({ value, autoColor, color, textColor }) => (
  <RateWrapper
    radius="15"
    shadow
    bkg={autoColor ? getAutoColor(value * 10) : color || "gold"}
  >
    <Label small bold color={textColor || "white"}>
      {value}
    </Label>
  </RateWrapper>
);

Progress.propTypes = {
  value: PropTypes.number,
  color: PropTypes.string,
  textColor: PropTypes.string,
  autoColor: PropTypes.bool,
};

Rate.propTypes = {
  value: PropTypes.number,
  color: PropTypes.string,
  textColor: PropTypes.string,
  autoColor: PropTypes.bool,
};
