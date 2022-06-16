import { useState } from 'react';
import HTMLReactParser from 'html-react-parser';
import { Col, Typography } from 'antd';
import {
  CheckOutlined,
  DollarCircleOutlined,
  ExclamationCircleOutlined,
  FundOutlined,
  MoneyCollectOutlined,
  NumberOutlined,
  StopOutlined,
  ThunderboltOutlined,
  TrophyOutlined,
} from '@ant-design/icons';
import { useParams } from 'react-router-dom';
import millify from 'millify';

import {
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} from '../../../services/cryptoApi';

import { ICoin } from '../../../interfaces/ICoin';
import { LineChart } from '../LineChart/LineChart';
import { Spinner } from '../../common/Spinner/Spinner';
import * as S from './CryptoDetails.styles';

const { Title } = Typography;

export const CryptoDetails = () => {
  const [timePeriod, setTimePeriod] = useState('7d');
  const { coinId } = useParams();

  const { data, isLoading } = useGetCryptoDetailsQuery(coinId);
  const { data: coinHistory, isFetching } = useGetCryptoHistoryQuery({
    coinId,
    timePeriod,
  });
  const cryptoDetails: ICoin = data?.data?.coin;

  if (isLoading || isFetching) <Spinner />;

  console.log(coinHistory);

  const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

  const stats = [
    {
      title: 'Price to USD',
      value: `$ ${cryptoDetails?.price && millify(+cryptoDetails?.price)}`,
      icon: <DollarCircleOutlined />,
    },
    { title: 'Rank', value: cryptoDetails?.rank, icon: <NumberOutlined /> },
    {
      title: '24h Volume',
      value: `$ ${
        cryptoDetails?.['24hVolume'] && millify(+cryptoDetails?.['24hVolume'])
      }`,
      icon: <ThunderboltOutlined />,
    },
    {
      title: 'Market Cap',
      value: `$ ${
        cryptoDetails?.marketCap && millify(+cryptoDetails?.marketCap)
      }`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: 'All-time-high(daily avg.)',
      value: `$ ${
        cryptoDetails?.allTimeHigh?.price &&
        millify(+cryptoDetails?.allTimeHigh?.price)
      }`,
      icon: <TrophyOutlined />,
    },
  ];

  const genericStats = [
    {
      title: 'Number Of Markets',
      value: cryptoDetails?.numberOfMarkets,
      icon: <FundOutlined />,
    },
    {
      title: 'Number Of Exchanges',
      value: cryptoDetails?.numberOfExchanges,
      icon: <MoneyCollectOutlined />,
    },
    {
      title: 'Aprroved Supply',
      value: cryptoDetails?.supply?.confirmed ? (
        <CheckOutlined />
      ) : (
        <StopOutlined />
      ),
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: 'Total Supply',
      value: `$ ${
        cryptoDetails?.supply?.total && millify(+cryptoDetails?.supply?.total)
      }`,
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: 'Circulating Supply',
      value: `$ ${
        cryptoDetails?.supply?.circulating &&
        millify(+cryptoDetails?.supply?.circulating)
      }`,
      icon: <ExclamationCircleOutlined />,
    },
  ];

  return (
    <S.Wrapper>
      <S.Header>
        <S.Title level={2}>
          {cryptoDetails?.name} ({cryptoDetails?.symbol}) Price
        </S.Title>
        <p>
          {cryptoDetails?.name} live price in US Dollar (USD). View value
          statistics, market cap and supply.
        </p>
      </S.Header>
      <LineChart
        coinHistory={coinHistory}
        currentPrice={cryptoDetails?.price}
        coinName={cryptoDetails?.name}
      />
      <S.StatsWrapper justify="space-between" align="middle">
        <S.CoinValueStats md={9} sm={24}>
          <Col>
            <Title level={3}>{cryptoDetails?.name} Value Statistics</Title>
            <p>
              An overview showing the statistics of {cryptoDetails?.name}, such
              as the base and quote currency, the rank, and trading volume.
            </p>
          </Col>
          {stats.map(({ icon, title, value }, i) => (
            <S.CoinStats justify="space-between" key={i}>
              <S.CoinStatsName>
                <S.Text>{icon}</S.Text>
                <S.Text>{title}</S.Text>
              </S.CoinStatsName>
              <S.Text strong>{value}</S.Text>
            </S.CoinStats>
          ))}
        </S.CoinValueStats>
        <S.CoinValueStats md={9} sm={24}>
          <Col>
            <Title level={3}>Other Stats Information</Title>
            <p>
              An overview showing the statistics of {cryptoDetails?.name}, such
              as the base and quote currency, the rank, and trading volume.
            </p>
          </Col>
          {genericStats.map(({ icon, title, value }, i) => (
            <S.CoinStats justify="space-between" key={i}>
              <S.CoinStatsName>
                <S.Text>{icon}</S.Text>
                <S.Text>{title}</S.Text>
              </S.CoinStatsName>
              <S.Text strong>{value}</S.Text>
            </S.CoinStats>
          ))}
        </S.CoinValueStats>
      </S.StatsWrapper>
      <S.CoinDescLink justify="space-between">
        <S.CoinDesc sm={12} xs={24}>
          <S.TitleInfo level={3}>What is {cryptoDetails?.name}?</S.TitleInfo>
          {cryptoDetails?.description &&
            HTMLReactParser(cryptoDetails.description)}
        </S.CoinDesc>
        <S.CoinLinks sm={10} xs={24}>
          <S.TitleInfo level={3}>{cryptoDetails?.name} Links</S.TitleInfo>
          {cryptoDetails?.links?.map((link) => (
            <S.CoinLink justify="space-between" key={link.name}>
              <S.LinkName level={5}>{link.type}</S.LinkName>
              <a href={link.url} target="_blank" rel="noreferrer">
                {link.name}
              </a>
            </S.CoinLink>
          ))}
        </S.CoinLinks>
      </S.CoinDescLink>
    </S.Wrapper>
  );
};
