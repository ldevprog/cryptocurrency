import { Row, Typography, Menu as AntMenu } from 'antd';
import styled from 'styled-components';

export const Wrapper = styled(Row)`
  padding: 10px;
`;

export const OnlyBigScreen = styled.div`
  display: none;
  @media screen and (min-width: 992px) {
    display: block;
  }
`;

export const Menu = styled(AntMenu)`
  width: 100%;
  color: #fff;
`;
