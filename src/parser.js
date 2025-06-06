import yaml from 'js-yaml'

export default (data, format) => {
  if (format === 'json') {
    return JSON.parse(data)
  }

  if (format === 'yml') {
    return yaml.load(data)
  }

  throw Error('unknown format')
}
