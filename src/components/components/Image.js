import styled from 'styled-components';

export const Image = styled.img`
  max-width: ${(props) => (props.large ? 'calc(100vw - 40px)' : '100%')};
  max-height: ${(props) => (props.large ? 'calc(100vh - 128px)' : '100%')};
`;
