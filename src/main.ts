import App from './App.svelte'
import { Amplify } from 'aws-amplify'
import config from './aws-exports'

console.time('configuring Amplify')
Amplify.configure(config)
console.timeEnd('configuring Amplify')

const app = new App({
  target: document.getElementById('app'),
})

export default app
