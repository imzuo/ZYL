import { Menu, Icon } from 'antd';
import React from 'react';
import 'antd/dist/antd.less'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class MessageCoponent extends React.Component {
  state = {
    current: 'mail',
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <SubMenu title={<span><Icon type="dislike" />Messages</span>}>
          <MenuItemGroup title="Messages">
            <Menu.Item key="msg:1">Message 1</Menu.Item>
            <Menu.Item key="msg:2">Message 2</Menu.Item>
            <SubMenu key="sub1" title="FoldMessages">
              <Menu.Item key="msg:3">Message 3</Menu.Item>
              <Menu.Item key="msg:4">Message 4</Menu.Item>
            </SubMenu>
          </MenuItemGroup>
          <MenuItemGroup title="Notifications">
            <Menu.Item key="note:1">Notification 1</Menu.Item>
            <Menu.Item key="note:2">Notification 2</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
      </Menu>
    );
  }
}
export default MessageCoponent
