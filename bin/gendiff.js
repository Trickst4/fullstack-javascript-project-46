#!/usr/bin/env node
import { Command } from 'commander'
import getDiff from '../src/index.js'

const program = new Command()

const gendiff = program
  .name('gendiff')
  .description(`Compares two configuration files and shows a difference.`)
  .option('-V, --version', 'output the version number')
  .option('-f, --format [type]', 'output format', 'stylish')
  .arguments('<filepath1> <filepath2>', 'path for files')
  .action((filepath1, filepath2, options) => {
    console.log(getDiff(filepath1, filepath2, options.format))
  })

gendiff.parse()
