import { Col, Row } from 'antd';

import { useGetExchangesQuery } from '../../services/cryptoApi';
import { Spinner } from '../common/Spinner/Spinner';

export const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery(1);

  if (isFetching) <Spinner />;

  console.log(data);

  return (
    <>
      <Row>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>Markets</Col>
        <Col span={6}>Change</Col>
      </Row>
    </>
  );
};
