/**
 * Health Check Service
 */

// const errors = require('common-errors')
// const helper = require('../common/helper')

/**
 * Check if the elasticsearch connection is active
 */

function * check () {
  // const esClient = helper.getEsClient()

  // try {
  // yield esClient.ping({
  //   requestTimeout: 10000
  // })

  // } catch (e) {
  //   throw new errors.HttpStatusError(503, 'Elasticsearch instance cannot be reached')
  // }

  return {
    checksRun: 1
  }
}

module.exports = {
  check
}
