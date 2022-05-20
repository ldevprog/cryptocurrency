import { Section } from '../Section/Section';
import { Stats } from '../Stats/Stats';
import { Cryptocurrencies } from '../../cryptocurrencies/Cryptocurrencies/Cryptocurrencies';
import { News } from '../../news/News/News';

export const Home = () => {
  return (
    <>
      <Section title="Global Crypto Stats">
        <Stats />
      </Section>
      <Section
        title="Top 10 Cryptocurrencies in the world"
        link="/cryptocurrencies"
      >
        <Cryptocurrencies simplified />
      </Section>
      <Section title="Latest Crypto News" link="/news">
        <News />
      </Section>
    </>
  );
};
