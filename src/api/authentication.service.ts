import { TOKEN_NAME } from '../../environment'
import feathersClient, { feathersStorage } from './client.config'

export const login = async (data: any): Promise<any> => {
  return await feathersClient
    .authenticate(data)
    .then(async (res: any) => {
      return res
    })
    .catch((err: any) => {
      throw err
    })
}

export const retryLogin = async (token?: string) => {
  return await feathersClient
    .authenticate({
      strategy: 'jwt',
      accessToken: token || feathersStorage.getItem(TOKEN_NAME()),
    })
    .catch(() => {
      return undefined
    })
}

export const logoutFeathers = async () => {
  return await feathersClient
    .logout()
    .then(async (res: any) => {
      return res
    })
    .catch((err: any) => {
      throw err
    })
}
