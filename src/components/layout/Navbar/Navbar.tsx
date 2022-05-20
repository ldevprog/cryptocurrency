import { Link } from 'react-router-dom';
import { Avatar, Typography, Menu, Row, Col } from 'antd';

import {
  BulbOutlined,
  FundOutlined,
  HomeOutlined,
  MoneyCollectOutlined,
} from '@ant-design/icons';
import icon from '../../../assets/images/logo.png';
import * as S from './Navbar.styles';

export const Navbar = () => {
  return (
    <S.Wrapper justify="space-between" align="middle">
      <S.Logo justify="space-between" align="middle">
        <Avatar src={icon} size="large" />
        <S.Title level={2}>
          <Link to="/">Cryptoverse</Link>
        </S.Title>
      </S.Logo>

      <S.Menu theme="dark">
        <Menu.Item icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined />}>
          <Link to="cryptocurrencies">Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item icon={<MoneyCollectOutlined />}>
          <Link to="exchanges">Exchanges</Link>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined />}>
          <Link to="news">News</Link>
        </Menu.Item>
      </S.Menu>
    </S.Wrapper>
  );
};
