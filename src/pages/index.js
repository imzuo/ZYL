
import React, { useState, useRef } from 'react';
import { Input, Button, Radio,message} from 'antd';
import ProForm, { ProFormText } from '@ant-design/pro-form';
import {CloudUploadOutlined} from '@ant-design/icons';
import { Card } from 'antd';
import styles from './index.css'
import 'antd/dist/antd.css'


export default () => {

  const formRef = useRef()
  const [userInfo,setUserInfo]=React.useState({
    id: 1,
    name: 'zyl',
    password: '3374',
    gender: 2,
    mobile: '17561933374',
    telephone: null,
    email: "sss@ustc.edu.cn",
    quote: 'Alls well that ends well',
    avatar: null,
    access: 0,
    team: '软件开发组',
    organization_id: null,
    creatTime: '2022-03-01 18:10:10'
  })
  const [loading,setLoading]=useState(false)
  const [radioValue,setRadioValue]=useState(userInfo.gender)

  async function handleSubmit () {
    const newUserInfo= formRef.current.getFieldsValue()

    setUserInfo({
      ...newUserInfo,
      gender: radioValue,
    })

    setLoading(true)
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    })
    message.success('提交成功');
    setLoading(false)
    console.log(userInfo)
  }

  function handleCancel(){
    setRadioValue(userInfo.gender)
    formRef.current.setFieldsValue(
      userInfo
    )
  }

  return (
    <Card style={{margin:20}}>
      <ProForm onSubmit={handleSubmit} className={styles.body} formRef={formRef} layout={'horizontal'}
         submitter={{
           render: () => {
             return [
               <Button type="button" key="rest" onClick={handleCancel} style={{marginLeft:260}}>
                 Cancel
               </Button>,
               <Button type="primary" key="submit" onClick={handleSubmit} loading={loading} style={{marginLeft:50}}>
                 Save
               </Button>,
             ];
           },
         }}>
        <img
          src='http://bpic.588ku.com/element_origin_min_pic/16/11/25/3a367e4a97407db917e14541f6e7c5c0.jpg'
          alt="avatar"
          className={styles.avatar}>
        </img>
        <ProFormText
          label="ID"
          name="id"
          labelCol={{ span: 4 }}
          width={260}
          initialValue={userInfo.id}
        >
          <Input defaultValue={userInfo.id} disabled={true} style={{width: 260}}/>
        </ProFormText>
        <ProFormText
          label="Name"
          name="name"
          labelCol={{ span: 4 }}
          width={260}
          initialValue={userInfo.name}
        />

        <ProFormText.Password
          label="Password"
          name="password"
          labelCol={{ span: 4 }}
          width={260}
          initialValue={userInfo.password}
        >
        </ProFormText.Password>
        <ProFormText
          label="Gender"
          name="gender"
          labelCol={{ span: 4 }}
          width={260}
          initialValue={userInfo.gender}
        >
          <Radio.Group style={{width: 260}} value={radioValue}
                       onChange={(e)=>{setRadioValue(e.target.value)}}>
            <Radio value={0}>Male</Radio>
            <Radio value={1}>Female</Radio>
            <Radio value={2}>Unknown</Radio>
          </Radio.Group>
        </ProFormText>
        <ProFormText
          label="Mobile"
          name="mobile"
          labelCol={{ span: 4 }}
          width={260}
          initialValue={userInfo.mobile}
        >
        </ProFormText>
        <ProFormText
          label="Telephone"
          name="telephone"
          labelCol={{ span: 4 }}
          width={260}
          initialValue={userInfo.telephone}
        >
        </ProFormText>
        <ProFormText
          label="Email"
          name="email"
          labelCol={{ span: 4 }}
          width={260}
          initialValue={userInfo.email}
        >
        </ProFormText>
        <ProFormText
          label="Quote"
          name="quote"
          labelCol={{ span: 4 }}
          width={260}
          initialValue={userInfo.quote}
        >
        </ProFormText>
        <ProFormText
          label="Access"
          name="access"
          labelCol={{ span: 4 }}
          width={260}
          initialValue={userInfo.access}
        >
        </ProFormText>
        <ProFormText
          label="Creat time"
          name="creatTime"
          labelCol={{ span: 4 }}
          width={260}
          initialValue={userInfo.creatTime}
        >
        </ProFormText>
        <ProFormText
          label="Team"
          name="team"
          labelCol={{ span: 4 }}
          width={260}
          initialValue={userInfo.team}
        >
        </ProFormText>
        <ProFormText
          label="Organization"
          name="organization_id"
          labelCol={{ span: 4 }}
          width={260}
          initialValue={userInfo.organization_id}
        >
        </ProFormText>
      </ProForm>
      <Button className={styles.avatarTitle}  type="primary"><CloudUploadOutlined />Change Avatar</Button>
    </Card>
  );
}
