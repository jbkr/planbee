import { Layout, Menu } from 'antd';
import React from 'react';
const { Header } = Layout;

const NavBar = () => {
  const menu_list = ['PlanBee'];

  return (
    <Layout className="layout">
      <Header
        style={{
          display: 'grid',
          alignItems: 'center',
        }}
      >
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['0']}
          items={menu_list.map((menu, index) => {
            const key = index;
            return {
              key,
              label: menu,
            };
          })}
        />
      </Header>
    </Layout>
  );
};
export default NavBar;