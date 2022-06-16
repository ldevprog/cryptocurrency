import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Card, Image, Input, Row } from 'antd';
import millify from 'millify';

import { ICrypto } from '../../../interfaces/ICrypto';
import { useGetCryptosQuery } from '../../../services/cryptoApi';

import { Spinner } from '../../common/Spinner/Spinner';
import * as S from './Cryptocurrencies.styles';

interface CryptocurrenciesProps {
  simplified?: boolean;
}

export const Cryptocurrencies: React.FC<CryptocurrenciesProps> = ({
  simplified,
}) => {
  const count = simplified ? 10 : 50;
  const { data: cryptosList, isLoading } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState<ICrypto[]>();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const filteredCryptos = cryptosList?.data?.coins.filter((coin: ICrypto) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setCryptos(filteredCryptos);
  }, [cryptosList, searchTerm]);

  const searchTermHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  if (isLoading) return <Spinner />;

  return (
    <>
      {!simplified && (
        <S.SearchWrapper>
          <Input
            style={{ width: 300 }}
            size="large"
            placeholder="search cryptocurrency"
            onChange={searchTermHandler}
          />
        </S.SearchWrapper>
      )}
      <S.CardGrid gutter={[25, 25]}>
        {cryptos?.map((crypto) => (
          <Col xs={24} sm={12} lg={6}>
            <Link to={`/crypto/${crypto.uuid}`}>
              <Card
                style={{ borderRadius: '10px' }}
                title={`${crypto.rank}. ${crypto.name}`}
                hoverable
                extra={
                  <Image
                    src={crypto.iconUrl}
                    alt={crypto.name}
                    preview={false}
                    width={20}
                  />
                }
              >
                <p>Price: {millify(+crypto.price)}$</p>
                <p>Market Cap: {millify(+crypto.marketCap)}</p>
                <p>Daily Change: {millify(+crypto.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </S.CardGrid>
    </>
  );
};
