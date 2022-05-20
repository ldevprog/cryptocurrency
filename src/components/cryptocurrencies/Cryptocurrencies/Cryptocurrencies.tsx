import { useGetCryptosQuery } from '../../../services/CryptoAPI';

import { Spinner } from '../../common/Spinner/Spinner';

interface CryptocurrenciesProps {
  simplified?: boolean;
}

export const Cryptocurrencies: React.FC<CryptocurrenciesProps> = ({
  simplified,
}) => {
  const { data, isLoading } = useGetCryptosQuery('');

  if (isLoading) return <Spinner />;

  const cryptos = data?.data?.coins;

  return (
    <>
      {simplified
        ? cryptos
            .filter((crypto: any, index: number) => index < 10)
            .map((crypto: any) => <p>{crypto.name}</p>)
        : cryptos.map((crypto: any) => <p>{crypto.name}</p>)}
    </>
  );
};
