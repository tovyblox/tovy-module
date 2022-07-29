const tovy_url = ''
const api_key = ''
const tovy = require('../src/index.js')

const Tovy = new tovy(tovy_url, api_key)

Tovy.setrank('USER ID', 255).then(() => {
    console.log('Rank set')
})