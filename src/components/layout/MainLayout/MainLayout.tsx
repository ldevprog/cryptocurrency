import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { MainFooter } from '../MainFooter/MainFooter';
import { Navbar } from '../Navbar/Navbar';
import * as S from './MainLayout.styles';

const { Sider, Footer } = Layout;

export const MainLayout = () => {
  return (
    <S.TopLayout>
      <Sider
        width={250}
        breakpoint="lg"
        collapsedWidth={0}
        trigger={null}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <Navbar />
      </Sider>
      <S.BottomLayout>
        <Header />
        <S.Content>
          <Outlet />
        </S.Content>
        <Footer style={{ padding: 0 }}>
          <MainFooter />
        </Footer>
      </S.BottomLayout>
    </S.TopLayout>
  );
};
