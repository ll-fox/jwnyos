const AV = require('leancloud-storage')

AV.init({
  appId: 'RgJnG8EpuIlP35di6d98C8sK-MdYXbMMI',
  appKey: '5jaazvJechfzPLn2dsCcelj4',
  serverURL: 'https://admin.jwny.xyz'
})

const addItem = async (val) => {
  const QA = AV.Object.extend('CollectInfo')
  const qa = new QA()
  try {
    qa.set(val)
    const res = await qa.save()
    return res.toJSON()
  } catch (e) {
    console.log(e)
  }
}

const addUserItem = async (val) => {
  const QA = AV.Object.extend('CollectUserInfo')
  const qa = new QA()
  try {
    qa.set(val)
    const res = await qa.save()
    return res.toJSON()
  } catch (e) {
    console.log(e)
  }
}

const updateItem = async (val, id) => {
  const QA = AV.Object.createWithoutData('Aftersales', id)
  try {
    QA.set(val)
    const res = await QA.save()
    return res.toJSON()
  } catch (e) {
    console.log(e)
  }
}

const fetchTable = async () => {
  const QA = new AV.Query('Aftersales')
  try {
    QA.limit(1000)
    const data = await QA.find()
    const records = data.reverse().map((x) => {
      const json = x.toJSON()
      return json
    })
    return records
  } catch (e) {
    console.log(e)
  }
}

const judgeContains = async (val) => {
  const QA = new AV.Query('Aftersales')
  QA.equalTo('odd', val)
  return QA.find()
}

export { addItem, addUserItem, fetchTable, updateItem, judgeContains }
