import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  background-color: #001529;
  padding: 10px;
  @media screen and (min-width: 992px) {
    display: none;
  }
`;
