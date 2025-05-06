import stylishFormatDiff from './stylish.js'

const formatters = {
  stylish: stylishFormatDiff,
}

const selectFormatter = (formatName) => {
  const formatter = formatters[formatName]
  if (!formatter) {
    throw new Error(`Formatter "${formatName}" is not supported`)
  }
  return formatter
}

export default selectFormatter
