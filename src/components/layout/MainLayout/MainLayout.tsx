import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import { MainFooter } from '../MainFooter/MainFooter';
import { Navbar } from '../Navbar/Navbar';
import * as S from './MainLayout.styles';

const { Sider, Footer } = Layout;

export const MainLayout = () => {
  return (
    <Layout>
      <Sider
        width={250}
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
      <Layout style={{ marginLeft: '250px' }}>
        <S.Content>
          <Outlet />
        </S.Content>
        <Footer style={{ padding: 0 }}>
          <MainFooter />
        </Footer>
      </Layout>
    </Layout>
  );
};
