import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Spinner } from '../common/Spinner/Spinner';
import { MainLayout } from '../layout/MainLayout/MainLayout';

const HomePage = lazy(() => import('../../pages/HomePage'));
const ExchangesPage = lazy(() => import('../../pages/ExchangesPage'));
const CryptocurrenciesPage = lazy(
  () => import('../../pages/CryptocurrenciesPage')
);
const CryptoDetailsPage = lazy(() => import('../../pages/CryptoDetailsPage'));
const NewsPage = lazy(() => import('../../pages/NewsPage'));

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="exchanges" element={<ExchangesPage />} />
            <Route path="cryptocurrencies" element={<CryptocurrenciesPage />} />
            <Route path="crypto/:coinId" element={<CryptoDetailsPage />} />
            <Route path="news" element={<NewsPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
