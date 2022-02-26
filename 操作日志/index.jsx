import React, { Component } from 'react';
import {Timeline,Card} from 'antd'
import 'antd/dist/antd.css'
import styles from './index.css'
import Mock from 'mockjs'

//生成模拟数据
let dataSource = Mock.mock({
  'dataSources|12': [{
    'id|+1': 1,
    'date':'@date("MM-dd")',
    'time':'@time("HH:mm")',
    'name|1':['Mable', 'Stan', 'Dipper', 'Yuri', 'Bill'],
    'action|1': ['新建', '删除', '修改', '审阅'],
    'object|1': ['医生列表', '诊断报告', '会议日程','进度汇报'],
  }]
})

//排列数组
let data = Array.from(dataSource.dataSources);

let sortedData =data.sort((b, a) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time));

console.log({dataSource});
console.log({data});
console.log({sortedData});

//设置颜色
const itemColor=(action)=>{
  return(
  action==='新建'? "green":action==='删除'? "red":action==='修改'? "blue":"blue"
  )
}


class Demo extends Component {

  render() {
    return (
      <div>
        <h1 style={{ marginLeft: 300,marginTop:20}}>操作日志</h1>{/*标题*/}
        <Card className={styles.card}>
          <p>红色圈代表删除</p>
          <p>绿色圈代表新建</p>
          <p>蓝色圈代表修改和审阅</p>
        </Card>
        <div className={styles.body}>
           <Timeline>
            {
              sortedData.map((logs)=>{
                return <Timeline.Item
                  key={logs.id}
                  color={itemColor(logs.action)}
                >
                  {logs.date}  {logs.time}<br/>{logs.name} {logs.action}了 {logs.object}
                </Timeline.Item>
              })
            }

          </Timeline>
        </div>
      </div>

    );
  }
}

export default Demo;

