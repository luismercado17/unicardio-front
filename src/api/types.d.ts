export type TFeatherFindResult<T> = {
  total: number
  limit: number
  skip: number
  data: T[]
}
