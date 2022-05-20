import { Row, Col, Statistic } from 'antd';
import millify from 'millify';

import { useGetCryptosQuery } from '../../../services/CryptoAPI';

import { Spinner } from '../../common/Spinner/Spinner';

export const Stats = () => {
  const { data, isLoading } = useGetCryptosQuery('');

  if (isLoading) return <Spinner />;

  const globalStats = data?.data?.stats;

  if (!globalStats) {
    return <Spinner />;
  }

  const {
    total,
    totalMarketCap,
    totalMarkets,
    totalExchanges,
    total24hVolume,
  } = globalStats;

  return (
    <Row>
      <Col span={12}>
        <Statistic title="Total Cryptocurrencies" value={total} />
      </Col>
      <Col span={12}>
        <Statistic title="Total Market Cap" value={millify(totalMarketCap)} />
      </Col>
      <Col span={12}>
        <Statistic title="Total Markets" value={millify(totalMarkets)} />
      </Col>
      <Col span={12}>
        <Statistic title="Total Exchanges" value={millify(totalExchanges)} />
      </Col>
      <Col span={12}>
        <Statistic title="Total 24h Volume" value={millify(total24hVolume)} />
      </Col>
    </Row>
  );
};
