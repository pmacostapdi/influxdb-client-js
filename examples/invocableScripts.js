#!/usr/bin/env node
/*
This example shows how to use API-invocable scripts. See also
https://docs.influxdata.com/influxdb/cloud/api-guide/api-invocable-scripts/ .
*/

const {InfluxDB, HttpError} = require('@influxdata/influxdb-client')
const {
  ScriptsAPI,
  FluxScriptInvocationAPI,
} = require('@influxdata/influxdb-client-apis')
const {url, token} = require('./env')

const influxDB = new InfluxDB({url, token})
const scriptsAPI = new ScriptsAPI(influxDB)
const scriptName = 'example_generate_values'

async function listScripts() {
  console.log('*** List scripts ***')
  // current scripts
  const scripts = await scriptsAPI.getScripts()
  console.log(scripts.scripts)
  return scripts
}
async function createScript() {
  console.log('*** Create example script ***')
  // current scripts
  const script = await scriptsAPI.postScripts({
    body: {
      script: `import "generate"

      generate.from(
        count: int(v: params.count),
        fn: (n) => (n + 1) * (n + 2),
        start: 2021-01-01T00:00:00Z,
        stop: 2021-01-02T00:00:00Z,
      )`,
      description:
        'This is an example script generated by a javascript client.',
      name: scriptName,
      language: 'flux',
    },
  })
  console.log(script)
  return script
}
async function deleteScript(id) {
  console.log('*** Delete example script ***')
  if (!id) {
    const scripts = (await scriptsAPI.getScripts()).scripts
    id = scripts.find(x => x.name === scriptName)?.id
  }
  if (id) {
    await scriptsAPI.deleteScriptsID({scriptID: id})
    console.log(`Script ${scriptName} was deleted!`)
  }
}

async function invokeScript(scriptID) {
  console.log('*** Invoke example script ***')

  // parse count as a first script argument or use 10
  const count = Number.parseInt(require('process').argv[2] || '10')

  // execute script with count parameter
  const params = {count: count}
  console.log('Script parameters: ', params)
  // Use FluxScriptInvocationAPI to execute a particular
  // script with specified parametes and process parsed results
  const invocationAPI = new FluxScriptInvocationAPI(influxDB)
  await new Promise((accept, reject) => {
    let count = 0
    invocationAPI.invoke(scriptID, params).consumeRows({
      complete: accept,
      error: reject,
      next(row, tableMetaData) {
        count++
        // console.log(tableMetaData.toObject(row))
        console.log(
          count,
          '*',
          count + 1,
          '=',
          row[tableMetaData.column('_value').index]
        )
      },
    })
  })
  // You can also receive the whole response body. Use with caution,
  // a possibly huge stream of results is copied to memory.
  // const response = await scriptsAPI.postScriptsIDInvoke({
  //   scriptID,
  //   body: {params},
  // })
  // console.log('Response:')
  // console.log(response)
}

async function example() {
  await listScripts()
  await deleteScript()
  const {id} = await createScript()
  await invokeScript(id)
}

example()
  .then(() => console.log('\nFinished SUCCESS'))
  .catch(error => {
    if (error instanceof HttpError && error.statusCode === 404) {
      console.error(
        `API invocable scripts are not available in InfluxDB running at ${url} .`
      )
      console.error('Modify env.js with InfluxDB Cloud URL and token.')
    } else {
      console.error(error)
    }
    console.log('\nFinished ERROR')
  })
