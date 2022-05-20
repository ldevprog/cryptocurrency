import { Space, Typography } from 'antd';
import { Link } from 'react-router-dom';

import * as S from './MainFooter.styles';

export const MainFooter = () => {
  return (
    <S.Wrapper>
      <Typography.Title level={5} style={{ color: '#fff' }}>
        Cryptoverse <br />
        All rights reserved
      </Typography.Title>
      <Space>
        <Link to="/">Home</Link>
        <Link to="/exchanges">Exchanges</Link>
        <Link to="news">News</Link>
      </Space>
    </S.Wrapper>
  );
};
