export interface ICoin {
  name: string;
  symbol: string;
  price: string;
  rank: number;
  allTimeHigh: { price: string };
  marketCap: string;
  ['24hVolume']: string;
  numberOfMarkets: number;
  numberOfExchanges: number;
  supply: { confirmed: boolean; total: string; circulating: string };
  description: string;
  links: ILink[];
}

interface ILink {
  name: string;
  type: string;
  url: string;
}
