import { IBaseEntity } from './base'

export default interface IUser extends IBaseEntity {
    first_name: string
    last_name: string
    email: string
}
