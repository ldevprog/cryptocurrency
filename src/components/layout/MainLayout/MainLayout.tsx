import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import { MainFooter } from '../MainFooter/MainFooter';
import { Navbar } from '../Navbar/Navbar';
import * as S from './MainLayout.styles';

const { Sider, Footer } = Layout;

export const MainLayout = () => {
  return (
    <Layout>
      <Sider width={250}>
        <Navbar />
      </Sider>
      <Layout>
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
