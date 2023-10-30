import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
const { Header } = Layout;

const NavBar = () => {
  const menu_list = ['PlanBee'];
  const [menu_number, setmenu_number] = useState(0);
  const navigate = useNavigate();

  const onClick = (e) => {
    setmenu_number(e.key);
    switch (menu_number) {
      case '0':
        navigate('/');
        break;
      default:
        break;
    }
  };

  return (
    <Layout className="layout">
      <Header
        style={{
          display: 'grid',
          alignItems: 'center',
        }}
      >
        <Menu
<<<<<<< HEAD
          onClick={onClick}
=======
>>>>>>> 849bff7f749705a862f337467db64d268a63f873
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