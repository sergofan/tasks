import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import logo from '../logo.svg';
import '../styles/components/app.less';
import '../styles/components/app-layout.less';
import FormList from './FormList';

const { Header, Footer, Sider, Content } = Layout;

class AppLayout extends Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <Layout>
        <Sider
          breakpoint="xxl"
          collapsedWidth="0"
          collapsed={this.state.collapsed}
          onCollapse={(collapsed, type) => { this.toggle() }}
        >
          <Menu
            style={{ height: "100%" }}
            // theme="dark"
            mode="vertical"
            defaultSelectedKeys={['1']}
          >
            <Menu.Item key="1">
              <Icon type="user" />
              <span className="nav-text">nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span className="nav-text">nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span className="nav-text">nav 3</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="user" />
              <span className="nav-text">nav 4</span>
            </Menu.Item>
          </Menu>
        </Sider>
      <Layout>
        <Header style={{ minHeight: 112, padding: '16px', textAlign: 'center' }}>
          <img src={logo} className="App-logo" alt="logo" />
        </Header>
          <Content style={{ padding: 24, minHeight: 'calc(100vh - 112px - 69px)' }}>
            <FormList />
          </Content>
        <Footer style={{textAlign: 'right'}}>Sergofan &reg;</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default AppLayout;
