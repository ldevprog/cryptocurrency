import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { BulbOutlined, FundOutlined, HomeOutlined } from '@ant-design/icons';

import * as S from './Navbar.styles';
import { Logo } from '../../common/Logo/Logo';

export const Navbar = () => {
  return (
    <S.Wrapper justify="space-between" align="middle">
      <S.OnlyBigScreen>
        <Logo />
      </S.OnlyBigScreen>

      <S.Menu theme="dark">
        <Menu.Item icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined />}>
          <Link to="cryptocurrencies">Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined />}>
          <Link to="news">News</Link>
        </Menu.Item>
      </S.Menu>
    </S.Wrapper>
  );
};
