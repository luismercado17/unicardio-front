import IUser from 'types/IUser'

export interface IAuthContext {
    isAuth: boolean
    user: IUser | null
    login: (user: IUser, token: string) => void
    logout: () => void
}
