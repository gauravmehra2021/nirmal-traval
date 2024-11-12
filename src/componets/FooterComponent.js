import React from 'react';
import { Row, Col, Divider, Typography, Space } from 'antd';
import {
  GithubOutlined,
  HeartOutlined,
  AntDesignOutlined,
  CloudOutlined,
  CodeOutlined
} from '@ant-design/icons';

const { Title, Text, Link } = Typography;

const FooterComponent = () => {
  return (
    <footer style={{ backgroundColor: '#001529', padding: '40px 20px', color: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Row gutter={[32, 32]}>
          {/* Section 1 */}
          <Col md={6} sm={24} xs={24}>
            <Title level={4} style={{ color: '#fff' }}>Ant Design Landing</Title>
            <Space direction="vertical">
              <Link href="https://github.com/ant-design/ant-design-landing" target="_blank" style={{ color: '#ccc' }}>
                <GithubOutlined /> GitHub Landing
              </Link>
              <Link href="https://github.com/ant-motion" target="_blank" style={{ color: '#ccc' }}>
                <GithubOutlined /> Ant Motion GitHub
              </Link>
              <Link href="http://ant-design-landing.gitee.io/" target="_blank" style={{ color: '#ccc' }}>
                Ant Design Gitee
              </Link>
            </Space>
          </Col>

          {/* Section 2 */}
          <Col md={6} sm={24} xs={24}>
            <Title level={4} style={{ color: '#fff' }}>Products</Title>
            <Space direction="vertical">
              <Link href="http://ant.design" target="_blank" style={{ color: '#ccc' }}>
                <AntDesignOutlined /> Ant Design
              </Link>
              <Link href="https://pro.ant.design/" target="_blank" style={{ color: '#ccc' }}>
                <AntDesignOutlined /> Ant Design Pro
              </Link>
              <Link href="http://mobile.ant.design" target="_blank" style={{ color: '#ccc' }}>
                <AntDesignOutlined /> Ant Design Mobile
              </Link>
              <Link href="http://motion.ant.design" target="_blank" style={{ color: '#ccc' }}>
                Ant Motion
              </Link>
            </Space>
          </Col>

          {/* Section 3 */}
          <Col md={6} sm={24} xs={24}>
            <Title level={4} style={{ color: '#fff' }}>Resources</Title>
            <Space direction="vertical">
              <Link href="https://yuque.com/" target="_blank" style={{ color: '#ccc' }}>
                <CloudOutlined /> Yuque
              </Link>
              <Link href="https://antv.alipay.com/" target="_blank" style={{ color: '#ccc' }}>
                <CloudOutlined /> AntV
              </Link>
              <Link href="https://eggjs.org/" target="_blank" style={{ color: '#ccc' }}>
                <CodeOutlined /> Egg.js
              </Link>
            </Space>
          </Col>

          {/* Section 4 */}
          <Col md={6} sm={24} xs={24}>
            <Title level={4} style={{ color: '#fff' }}>Community</Title>
            <Space direction="vertical">
              <Link href="https://github.com/ant-design/ant-design-landing/issues" target="_blank" style={{ color: '#ccc' }}>
                Report Issues
              </Link>
              <Link href="https://yuque.com/afx/blog" target="_blank" style={{ color: '#ccc' }}>
                Blog
              </Link>
              <Link href="http://xcloud.alipay.com/" target="_blank" style={{ color: '#ccc' }}>
                AFX Cloud
              </Link>
            </Space>
          </Col>
        </Row>

        {/* Divider and Bottom Bar */}
        <Divider style={{ borderColor: '#ccc', marginTop: '40px', marginBottom: '20px' }} />
        <div style={{ textAlign: 'center', color: '#ccc' }}>
          Made with <HeartOutlined style={{ color: 'red' }} /> by <Link href="https://yuque.com/afx/blog" target="_blank" style={{ color: '#1890ff' }}>AFX</Link>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
