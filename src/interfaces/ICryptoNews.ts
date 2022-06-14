export interface ICryptoNews {
  name: string;
  url: string;
  image: { thumbnail: { contentUrl: string } };
  description: string;
  datePublished: string;
  provider: IProvider[];
}

interface IProvider {
  image: { thumbnail: { contentUrl: string } };
  name: string;
}
