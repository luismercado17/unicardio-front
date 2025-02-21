import feathersClient from './client.config'
import * as authService from './authentication.service'

import Service from './Service'
import IUser from '@/types/IUser'
import IResults from '@/types/IResults'

const getService = (service: string) => feathersClient.service(service)

export const usersService = new Service<IUser>(getService('users'))

export const resultsService = new Service<IResults>(getService('user-medical-result'))

export const s3UploaderService = new Service<any>(getService('s3-uploader'))

export const authenticationService = authService
