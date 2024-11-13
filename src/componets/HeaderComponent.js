// HeaderComponent.js
import React from 'react';
import { Layout, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Header } = Layout;

const HeaderComponent = () => (
  <>
  <Header
    style={{
      position: 'sticky',
      top: 0,
      zIndex: 1,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between', // Space between logo and profile icon
      padding: '0 20px',
    }}
  >
    <div className='top-logo' style={{ display: 'flex', alignItems: 'center' }}>
    <img src="https://i.imghippo.com/files/StpI2202KEY.jpeg" alt="" border="0"   style={{ height: 50, marginRight: 10 }}/>
    </div>
    <Avatar
      size="large"
      icon={<UserOutlined />}
      style={{ cursor: 'pointer' }}
    />
  </Header>
  <div className='visas-on-time'>
    <div className='per-visas'>
      <p>99.2% visas on time</p>
    </div>
    <div className='get-your-visa'>
      <h2>Get Your Visa on Time with NTS</h2>
    </div>

  </div>
  </>
);

export default HeaderComponent;
