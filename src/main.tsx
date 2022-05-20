import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './styles/GlobalStyle';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';

import store from './store/store';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />

    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
