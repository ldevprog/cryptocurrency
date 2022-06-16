import { Link } from 'react-router-dom';
import { Avatar } from 'antd';

import icon from '../../../assets/images/logo.png';

import * as S from './Logo.styles';

export const Logo = () => {
  return (
    <S.Logo justify="space-between" align="middle">
      <Avatar src={icon} size="large" />
      <S.Title level={2}>
        <Link to="/">Cryptoverse</Link>
      </S.Title>
    </S.Logo>
  );
};
