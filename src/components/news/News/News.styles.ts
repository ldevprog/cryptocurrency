import styled from 'styled-components';
import { Typography, Row } from 'antd';

const { Title: AntTitle, Text: AntText } = Typography;

export const Wrapper = styled(Row)`
  a {
    color: #000;
  }
`;

export const NewsHeader = styled(Row)`
  display: flex;
  margin-bottom: 5px;
`;

export const Image = styled.img`
  width: 60px;
  height: 60px;
`;

export const NewsTitle = styled(AntTitle)`
  font-size: 16px !important;
`;

export const ProviderContainer = styled(Row)`
  font-size: 12px;
`;
