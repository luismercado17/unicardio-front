import feathers from '@feathersjs/client'
import feathersAuth from '@feathersjs/authentication-client'
import feathersRest from '@feathersjs/rest-client'
import axios from 'axios'
import { HOST_API, TOKEN_NAME } from '../../environment'

export const feathersStorage: Storage = {
  getItem: (key) => (typeof window !== 'undefined' ? localStorage.getItem(key) : ''),
  removeItem: (key) => localStorage.removeItem(key),
  setItem: (key, value) => localStorage.setItem(key, value),
  clear: () => localStorage.clear(),
  key: (index) => localStorage.key(index),
  length: typeof localStorage !== 'undefined' ? localStorage.length : 0,
}

const app = feathers()
const restClient = feathersRest(HOST_API())

console.log("HOST_API()", HOST_API())

app.configure(restClient.axios(axios))

app.configure(
  feathersAuth({
    path: '/authentication',
    storageKey: TOKEN_NAME(),
    storage: feathersStorage,
  }),
)

export default app
