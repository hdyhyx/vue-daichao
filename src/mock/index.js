const Mock = require('mockjs')
var Random = Mock.Random
// 使用mockjs模拟数据
Mock.mock('/api/home/banner', (req, res) => {
  return {
    data: [{
      url: Random.image('375x160')
    },
    {
      url: Random.image('375x160')
    }, {
      url: Random.image('375x160')
    }, {
      url: Random.image('375x160')
    }
    ]
  }
})

Mock.mock('/api/home/product', (req, res) => {
  let data = []
  for (let i = 0; i < 10; i++) {
    let item = {
      name: `click${i}`,
      price: 100000,
      bunga: 0.5,
      hari: 1

    }
    data.push(item)
  }
  return {
    data: data
  }
})
