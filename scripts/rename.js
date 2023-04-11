
const fs = require('fs')
const path = require('path')

const imgages = [
  'sm-images',
  'lg-images',
  'svgs'
]

imgages.forEach(item => {
  const dirPath = path.resolve(__dirname, '../', item)
  const files = fs.readdirSync(dirPath)
  files.forEach(fileName => {
    fs.renameSync(`${dirPath}/${fileName}`, `${dirPath}/${fileName.replace(/\s*/g,"")}`)
  })
})