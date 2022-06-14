import { useState } from 'react';
import { Row, Col, Card, Avatar, Typography, Select } from 'antd';
import { formatDistanceToNow } from 'date-fns';

import { ICryptoNews } from '../../../interfaces/ICryptoNews';
import { ICrypto } from '../../../interfaces/ICrypto';
import { useGetCryptosQuery } from '../../../services/cryptoApi';
import { useGetCryptoNewsQuery } from '../../../services/cryptoNewsApi';

import { Spinner } from '../../common/Spinner/Spinner';
import * as S from './News.styles';

interface NewsProps {
  simplified?: boolean;
}
const { Text } = Typography;
const { Option } = Select;

const demoImage =
  'http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg';

export const News: React.FC<NewsProps> = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  const count = simplified ? 9 : 100;

  const { data } = useGetCryptosQuery(100);
  const { data: cryptoNews, isLoading } = useGetCryptoNewsQuery({
    newsCategory,
    count,
  });

  if (isLoading || !cryptoNews?.value) return <Spinner />;

  console.log(cryptoNews);

  return (
    <S.Wrapper gutter={[20, 25]} justify="space-between" align="top">
      {!simplified && (
        <Col span={24}>
          <Select
            placeholder="Select a Crypto"
            showSearch
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="Cryptocurrency">Cryptocurrency</Option>
            {data?.data?.coins.map((coin: ICrypto) => (
              <Option value={coin.name}>{coin.name}</Option>
            ))}
          </Select>
        </Col>
      )}
      {cryptoNews?.value.map((news: ICryptoNews, i: number) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable>
            <a href={news.url} target="_blank" rel="noreferrer">
              <S.NewsHeader justify="space-between" align="middle">
                <Col span={17}>
                  <S.NewsTitle level={4}>{news.name}</S.NewsTitle>
                </Col>
                <Col span={6}>
                  <S.Image
                    src={news?.image?.thumbnail?.contentUrl || demoImage}
                    alt="news"
                  />
                </Col>
              </S.NewsHeader>
              <p>
                {news.description.length > 100
                  ? `${news.description.substring(0, 100)} ...`
                  : news.description}
              </p>
              <S.ProviderContainer justify="space-between" align="middle">
                <Row align="middle">
                  <Avatar
                    src={
                      news.provider[0]?.image?.thumbnail?.contentUrl ||
                      demoImage
                    }
                    size="small"
                    style={{ marginRight: '5px' }}
                    alt="news"
                  />
                  <Text>{news?.provider[0]?.name}</Text>
                </Row>
                <Text>{formatDistanceToNow(new Date(news.datePublished))}</Text>
              </S.ProviderContainer>
            </a>
          </Card>
        </Col>
      ))}
    </S.Wrapper>
  );
};
