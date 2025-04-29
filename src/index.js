import parser from '../src/parser.js'
import path from 'path'
import fs from 'fs'

export default (filepath1, filepath2) => {
  const content1 = fs.readFileSync(path.resolve(filepath1), 'utf-8')
  const content2 = fs.readFileSync(path.resolve(filepath2), 'utf-8')

  const extname1 = path.extname(filepath1).slice(1)
  const extname2 = path.extname(filepath2).slice(1)

  const parsedData1 = parser(content1, extname1)
  const parsedData2 = parser(content2, extname2)

  const genDiff = (obj1, obj2) => {
    const keys = [...new Set([...Object.keys(obj1), ...Object.keys(obj2)])].sort()

    const diff = keys.map((key) => {
      if (!Object.hasOwn(obj2, key)) {
        return `  - ${key}: ${obj1[key]}`
      }
      if (!Object.hasOwn(obj1, key)) {
        return `  + ${key}: ${obj2[key]}`
      }
      if (obj1[key] !== obj2[key]) {
        return `  - ${key}: ${obj1[key]}\n  + ${key}: ${obj2[key]}`
      }
      return `    ${key}: ${obj1[key]}`
    })

    return `{\n${diff.join('\n')}\n}`
  }

  return genDiff(parsedData1, parsedData2)
}
