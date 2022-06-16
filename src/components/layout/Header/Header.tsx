import { MenuOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import { useState } from 'react';

import { Logo } from '../../common/Logo/Logo';
import { Navbar } from '../Navbar/Navbar';
import * as S from './Header.styles';

export const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbarHandler = () => {
    setShowNavbar((prevState) => !prevState);
  };

  return (
    <S.Wrapper>
      <Row justify="space-between" align="middle">
        <Logo />
        <Col onClick={toggleNavbarHandler}>
          <MenuOutlined style={{ color: '#fff', fontSize: '1.5rem' }} />
        </Col>
      </Row>
      {showNavbar && (
        <div onClick={toggleNavbarHandler}>
          <Navbar />
        </div>
      )}
    </S.Wrapper>
  );
};
