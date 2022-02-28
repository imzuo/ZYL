
import { Popover,Button, Tabs} from 'antd';
import React from 'react';
import 'antd/dist/antd.less'


class MessageCoponent extends React.Component {
  state = {
    tab:'',
    visible: false,
  }

  render() {
    return (
      <div style={{ marginLeft: 200}}>
        <Popover
          placement="bottom"
          content= {
            <div>

            'this is a message'
            </div>
          }
          title={
            <Tabs>
              <Tabs.TabPane

                key="msg"
                tab={
                  'messages'
                }
              />
              <Tabs.TabPane

                key='note'
                tab={
                  'notifications'
                }
              />
              <Tabs.TabPane

                key='ale'
                tab={
                  'alerts'
                }
              />
            </Tabs>
          }
          trigger="click"
        >
          <Button type="primary" size={'large'}><img src={require('@/assets/messages.png')} /></Button>
        </Popover>
      </div>

    );
  }
}
export default MessageCoponent
