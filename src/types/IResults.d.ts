import { IBaseEntity } from './base'

export default interface IResults extends IBaseEntity {
    description: string
    user_id: string
    date: string
    file_path: string
}
