import { Col, Row, Select, Typography } from 'antd';
import styled from 'styled-components';

export const Wrapper = styled(Col)`
  width: 100%;
`;

export const Header = styled(Col)`
  text-align: center;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
`;

export const Title = styled(Typography.Title)`
  color: #1e9fff !important;
`;

export const SelectTimeperiod = styled(Select)``;

export const OptionTimeperiod = styled(Select.Option)``;

export const StatsWrapper = styled(Row)`
  width: 100%;
  margin-bottom: 20px;
`;

export const CoinValueStats = styled(Col)`
  margin: 10px auto 50px;
`;

export const CoinStats = styled(Row)`
  margin: 0 auto;
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
`;

export const CoinStatsName = styled(Col)``;

export const Text = styled(Typography.Text)`
  margin: 0 5px;
`;

export const OtherStats = styled(Col)``;

export const OtherStatsHeader = styled(Col)``;

export const TitleInfo = styled(Typography.Title)`
  color: #1e94ff !important;
`;

export const CoinDescLink = styled(Row)`
  width: 100%;
  padding: 0 20px;
`;

export const CoinDesc = styled(Col)`
  color: #1e9fee;
`;

export const CoinLinks = styled(Col)``;

export const CoinLink = styled(Row)`
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
`;

export const LinkName = styled(Typography.Title)``;
