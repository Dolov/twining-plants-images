
const fs = require('fs')
const ncp = require('copy-paste')
const imgs = require('../imgs.json')


const table = imgs.reduce((previousValue, currentValue, index) => {
  const { title, subtitle } = currentValue
  return previousValue += `| ![img](sm-images/${title}-${subtitle}.jpg) | ![img](lg-images/${title}-${subtitle}.jpg) | ![img](svgs/${title}-${subtitle}.svg) |
  `
}, `
| 压缩图片 | 高清图片 | svg |
| :----: | :-----: | :--: |
`)

ncp.copy(table, function () {
  console.log('readme table 内容复制成功')
})