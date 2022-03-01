import Mock from 'mockjs'

const url = {
  tableDataOne: 'http://test/mock/',
}
module.exports = [
  Mock.mock(url.tableDataOne, {
    'dataSource|7':[{
      'id|+1': 1,
      'name|1':['Mable', 'Stan', 'Dipper', 'Yuri', 'Bill'],
      'action|1': ['新建', '删除', '修改', '提交'],
      'object|1': ['医生列表', '诊断报告', '会议日程'],
      'time': '@date("yyyy-MM-dd")'
    }]
  })
]
