const getLocalEnv = require('./env')

const {baseOptions, urlPathes} = getLocalEnv()

module.exports = function(request) {
  return async function(sessionId, elementId, options) {

    if(!options) options = {...baseOptions}
    const {body} = await request.get(urlPathes.displayed(sessionId, elementId), null, options)
    return body
  }
}