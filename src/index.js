import parser from '../src/parser.js'
import treeBuilder from '../src/buildTree.js'
import selectFormatter from './formatters/index.js'
import path from 'path'
import fs from 'fs'

export default (filepath1, filepath2, formatName = 'stylish') => {
  const content1 = fs.readFileSync(path.resolve(filepath1), 'utf-8')
  const content2 = fs.readFileSync(path.resolve(filepath2), 'utf-8')

  const extname1 = path.extname(filepath1).slice(1)
  const extname2 = path.extname(filepath2).slice(1)

  const parsedData1 = parser(content1, extname1)
  const parsedData2 = parser(content2, extname2)

  const diff = treeBuilder(parsedData1, parsedData2)

  return selectFormatter(formatName)(diff)
}
