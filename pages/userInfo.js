import React, { useState } from 'react'
import {
  Form,
  DatePicker,
  Input,
  InputNumber,
  Spin,
  Upload,
  Button,
  message
} from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import { cloneDeep, isEmpty } from 'lodash'
const AV = require('leancloud-storage')
const { TextArea } = Input
import moment from 'moment'
import 'moment/locale/zh-cn'
import { addUserItem } from '../service/collectInfo'

moment.locale('zh-cn')
import style from '../styles/userInfo.module.less'

const locale = {
  lang: {
    placeholder: '请选择日期',
    rangePlaceholder: ['开始日期', '结束日期'],
    today: '今天',
    now: '此刻',
    backToToday: '返回今天',
    ok: '确定',
    clear: '清空',
    month: '月',
    year: '年',
    timeSelect: '选择时间',
    dateSelect: '选择日期',
    monthSelect: '选择月份',
    yearSelect: '选择年份',
    decadeSelect: '选择年代',
    yearFormat: 'YYYY',
    dateFormat: 'M/D/YYYY',
    dayFormat: 'D',
    dateTimeFormat: 'M/D/YYYY HH:mm:ss',
    monthBeforeYear: true,
    previousMonth: '上个月 (PageUp)',
    nextMonth: '下个月 (PageDown)',
    previousYear: '去年 (Control + left)',
    nextYear: '明年 (Control + right)',
    previousDecade: '上个年代',
    nextDecade: '下个年代',
    previousCentury: '上个世纪',
    nextCentury: '下个世纪'
  }
}

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)

    reader.onload = () => resolve(reader.result)

    reader.onerror = (error) => reject(error)
  })

const UserInfo = (props) => {
  const {
    handleFinish,
    handleCancel,
    isModalVisible,
    data,
    items,
    selectProject
  } = props
  let newData = cloneDeep(data)
  const [form] = Form.useForm()
  const [isDsable, setIsDsable] = useState(false)
  const [fileList, setFileList] = useState(newData?.material || [])
  const [loading, setLoading] = useState(false)
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e
    }
    return e?.fileList.map((item) => item.originFileObj)
  }

  const handleChange = ({ file, fileList: newFileList }) => {
    file.status = 'uploading'
    setIsDsable(true)
    return setFileList(newFileList)
  }
  const beforeUpload = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file)
    }
    const data = { base64: file.preview }
    const files = new AV.File(file.name, data)
    files.save().then(
      (value) => {
        file.status = 'done'
        setIsDsable(false)
        file.url = value.url()
        setFileList([file])
        return true
      },
      (error) => {
        file.status === 'error'
        // 保存失败，可能是文件无法被读取，或者上传过程中出现问题
        message.error('上传失败!')
        return false
      }
    )
  }

  const onFinish = (values) => {
    console.log('Success:', values)
    const rangeValue = values['period']
    setLoading(true)
    // values.material = (values?.material || []).map((item) => item.url)
    // values.period = [
    //   rangeValue[0].format('YYYY-MM-DD'),
    //   rangeValue[1].format('YYYY-MM-DD')
    // ]

    addUserItem(values).then((res) => {
      if (res) {
        message.success('提交成功，感谢您的支持！')
        form.resetFields()
        setFileList([])
        setLoading(false)
      } else {
        message.error('保存失败！')
        setLoading(false)
      }
    })
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  const rangeConfig = {
    rules: [
      {
        type: 'array',
        required: true,
        message: '请输入产品周期!'
      }
    ]
  }
  return (
    <Spin spinning={loading}>
      <div className={style.container}>
        <h1 className={style.title}>非常感谢您选择金翁农业</h1>
        <p>请填写您的基本信息，我们会第一时间和您取得联系</p>
        <Form
          form={form}
          name="time_related_controls"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 12 }}
          initialValues={newData}
          preserve={false}
          style={{
            // height: '450px',
            padding: '30px 0',
            width: '90%',
            overflow: 'auto'
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="name"
            label="姓名"
            rules={[
              {
                type: 'string',
                required: true,
                message: '请填写公司或姓名!'
              }
            ]}
          >
            <Input placeholder="如王先生" />
          </Form.Item>
          <Form.Item
            name="phone"
            label="联系方式"
            rules={[
              {
                type: 'string',
                required: true,
                message: '请填写联系方式!'
              }
            ]}
          >
            <Input placeholder="如微信号/手机号" />
          </Form.Item>
          <Form.Item
            name="company"
            label="公司"
            rules={[
              {
                type: 'string',
                required: true,
                message: '请填写您的公司!'
              }
            ]}
          >
            <Input placeholder="如金翁农业科技有限公司" />
          </Form.Item>
          <Form.Item
            name="email"
            label="邮箱"
            rules={
              [
                // {
                //   type: 'string',
                //   required: true,
                //   message: '请输入您的邮箱!'
                // }
              ]
            }
          >
            <Input />
          </Form.Item>
          <Form.Item name="remark" label="备注">
            <TextArea />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 18, span: 1 }}>
            <Button size="large" shape="round" type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Spin>
  )
}

export default UserInfo
