import { Row, Typography, Menu as AntMenu } from 'antd';
import styled from 'styled-components';

export const Wrapper = styled(Row)`
  padding: 10px;
  a {
    color: #fff;
  }
`;

export const Logo = styled(Row)`
  width: 100%;
  padding: 0 5px;
`;

export const Title = styled(Typography.Title)`
  margin: 0 !important;
`;

export const Menu = styled(AntMenu)`
  width: 100%;
  color: #fff;
`;
