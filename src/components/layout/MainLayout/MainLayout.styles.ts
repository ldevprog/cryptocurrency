import { Layout } from 'antd';
import styled from 'styled-components';

export const TopLayout = styled(Layout)`
  min-height: 100vh;
  position: relative;
`;

export const BottomLayout = styled(Layout)`
  @media screen and (min-width: 992px) {
    margin-left: 250px;
  }
`;

export const Content = styled(Layout.Content)`
  padding: 20px;
  margin-top: 75px;
`;
