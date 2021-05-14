import styled from 'styled-components';

import { Color } from '../utils/variables';

export const H1 = styled.h1`
  text-align: ${(props) =>
    props.center
      ? 'center'
      : props.right
      ? 'right'
      : props.left
      ? 'left'
      : 'auto'};
  font-size: 30px;
  line-height: 35px;
  margin: 0;
  ${(props) => props.color && 'color: ' + Color(props.color)};
  ${(props) =>
    props.truncate &&
    `
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  `};
`;

export const H2 = styled.h2`
  text-align: ${(props) =>
    props.center
      ? 'center'
      : props.right
      ? 'right'
      : props.left
      ? 'left'
      : 'auto'};
  font-size: 26px;
  line-height: 30px;
  margin: 0;
`;

export const H3 = styled.h3`
  text-align: ${(props) =>
    props.center
      ? 'center'
      : props.right
      ? 'right'
      : props.left
      ? 'left'
      : 'auto'};
  font-size: 22px;
  line-height: 26px;
  margin: 0;
`;

export const Label = styled.span`
  text-align: ${(props) =>
    props.center
      ? 'center'
      : props.right
      ? 'right'
      : props.left
      ? 'left'
      : 'auto'};
  ${(props) => props.noShrink && `flex-shrink: 0`};
  font-size: ${(props) =>
    props.large ? '18px' : props.small ? '13px' : '15px'};
  line-height: ${(props) =>
    props.text ? '1.6' : props.large ? '21px' : props.small ? '15px' : '18px'};
  ${(props) => props.color && `color: ${Color(props.color, props.fade)}`};
  ${(props) =>
    props.truncate &&
    `
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  `};
  ${(props) => props.noWrap && `white-space: nowrap;`};
  &:hover {
    ${(props) => props.clickable && `cursor:pointer`}
  }
  font-weight: ${(props) =>
    props.bold ? '600' : props.semibold ? '500' : '400'};
`;

export const P = styled.p`
  font-size: ${(props) => (props.large ? '18px' : '15px')};
  line-height: ${(props) => (props.large ? '180%' : '140%')};
  margin: 0 0 10px;
  ${(props) => props.color && 'color: ' + Color(props.color)}
`;
