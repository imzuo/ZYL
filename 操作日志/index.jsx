import React, { Component } from 'react';
import {Timeline} from 'antd'
import 'antd/dist/antd.css'
import styles from './index.css'
import Mock from 'mockjs'

let dataSource = Mock.mock({
  'dataSources|10': [{
    'id|+1': 1,
    'date':'@datetime("MM-dd HH:mm")',
    'name|1':['Mable', 'Stan', 'Dipper', 'Yuri', 'Bill'],
    'action|1': ['新建', '删除', '修改', '提交'],
    'object|1': ['医生列表', '诊断报告', '会议日程','进度汇报'],
  }]
})
let data = Array.from(dataSource.dataSources);

const itemColor=(action)=>{
  return(
  action==='新建'? "green":action==='删除'? "red":action==='修改'? "blue":"blue"
  )
}

class Demo extends Component {


  render() {

    return (

        console.log({dataSource}),
        console.log({data}),
      <div>
        <h1 style={{ marginLeft: 200,marginTop:20}}>操作日志</h1>
        <div className={styles.body}>
           <Timeline>
            {
              data.map((logs)=>{
                return <Timeline.Item key={logs.id} color={itemColor(logs.action)}>{logs.date}<br/>{logs.name} {logs.action}了 {logs.object}</Timeline.Item>
              })
            }

          </Timeline>
        </div>
      </div>

    );
  }
}

export default Demo;

