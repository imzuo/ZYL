import React from 'react';
import {Timeline,Card,DatePicker,Pagination,Icon} from 'antd'
import Mock from 'mockjs'
import moment from 'moment';
import 'antd/dist/antd.css'
import styles from './index.css'

//生成模拟数据
let dataSource = Mock.mock({
  'dataSources|18': [{
    'id|+1': 1,
    'date':'@date("MM-dd")',
    'time':'@time("HH:mm")',
    'name|1':['Mable', 'Stan', 'Dipper', 'Yuri', 'Bill'],
    'action|1': ['新建', '删除', '修改', '审阅'],
    'object|1': ['医生列表', '诊断报告', '会议日程','进度汇报'],
  }]
})


const {RangePicker} = DatePicker;
const dateFormat = 'MM-DD';

//排列数组
let data = Array.from(dataSource.dataSources);

let sortedData =data.sort((b, a) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time));
let filteredData = sortedData;
let filteredData1 = filteredData.slice(0,9);
let filteredData2 = filteredData.slice(9);

console.log({dataSource});
console.log({data});
console.log({sortedData});

//设置颜色
const itemColor=(action)=>{
  return(
    action==='新建'? "green":action==='删除'? "red":action==='修改'? "blue":"blue"
  )
}




function Demo() {

  const [dateRange,setDateRange] = React.useState(0)
  const [pageNumber,setPageNumber] = React.useState(1)

//按照时间筛选
  function onDateChange(date, dateString) {
    setDateRange(dateRange +1)
    let sDateArr = dateString[0].split("-");
    let eDateArr = dateString[1].split("-");

//  console.log({sDateArr})
//  console.log({eDateArr})

    filteredData = sortedData.filter((logs) =>{

      const lDateArr = logs.date.split("-");
//    console.log({lDateArr})
      return lDateArr[0] === sDateArr[0] ?
        lDateArr[1] >= sDateArr[1] : lDateArr[0] === eDateArr[0] ?
          lDateArr[1] <= eDateArr[1] : sDateArr[0] < lDateArr[0] && lDateArr[0] < eDateArr[0]
    })
    filteredData1 = filteredData.slice(0,9);
    filteredData2 = filteredData.slice(9);
    console.log({filteredData})
  }

//分页
  function onPageChange(page){
    setPageNumber(page)
  }

    return (
      <div>
        {/*标题*/}
        <h1 style={{ marginLeft: 350,marginTop:20}}>操作日志</h1>
        <br/>
        <hr style={{height:1}} />
        {/*卡片*/}
        <Card className={styles.card} title="index">
          <p>红色圈代表删除</p>
          <p>绿色圈代表新建</p>
          <p>蓝色圈代表修改和审阅</p>
        </Card>

        {/*日期选择*/}
        <p className={styles.dataPicker2}>按时间筛选：</p>
        <RangePicker
          className={styles.dataPicker}
          onChange={onDateChange}
          defaultValue={[moment('01-01', dateFormat), moment('12-31', dateFormat)]}
          format={dateFormat}
        />
        {/*主体*/}
        <div className={styles.body}>
           <Timeline>
            {
               pageNumber === 1 ? dateRange >= 0 ?
                filteredData1.map((logs)=>{
                  return <Timeline.Item
                    key={logs.id}
                    color={itemColor(logs.action)}
                  >
                    2022-{logs.date}  {logs.time}<br/><font color={itemColor(logs.action)}>{logs.name} </font>{logs.action}了 {logs.object}
                  </Timeline.Item>
                }):{}: pageNumber === 2 ?
                 filteredData2.map((logs)=>{
                   return <Timeline.Item
                     key={logs.id}
                     color={itemColor(logs.action)}
                   >
                     2022-{logs.date}  {logs.time}<br/><font color={itemColor(logs.action)}>{logs.name} </font>{logs.action}了 {logs.object}
                   </Timeline.Item>
                 }):<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Icon type="exclamation-circle" style={{ color: 'red' }} />&nbsp;&nbsp;&nbsp;无结果</p>

            }

          </Timeline>
          <Pagination size="small" total={50} className={styles.pagination} current={pageNumber} onChange={onPageChange}/>
          <br/>
          <br/>
        </div>
      </div>
    );
}

export default Demo;

