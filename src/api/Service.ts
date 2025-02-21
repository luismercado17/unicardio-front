import { Id, NullableId, Params, ServiceMethods } from '@feathersjs/feathers'

import { TFeatherFindResult } from './types'

class Service<T> {
  public service: ServiceMethods<T>

  constructor(service: ServiceMethods<T>) {
    this.service = service
    this.find = this.find.bind(this)
    this.create = this.create.bind(this)
    this.get = this.get.bind(this)
    this.patch = this.patch.bind(this)
    this.update = this.update.bind(this)
    this.remove = this.remove.bind(this)
  }

  async create(data: T, params?: Params) {
    const res = await this.service.create(data as any, params)

    return res as unknown as T
  }

  async find(params?: Params) {
    const res = await this.service.find(params)

    return res as unknown as TFeatherFindResult<T>
  }

  async get(id: Id, params?: Params): Promise<T> {
    const res = await this.service.get(id, params)

    return res
  }

  async patch(id: NullableId, data: Partial<T>, params?: Params): Promise<T | T[]> {
    const res = await this.service.patch(id, data, params)

    return res
  }

  async update(id: NullableId, data: T, params?: Params): Promise<T | T[]> {
    const res = await this.service.update(id, data, params)

    return res
  }

  async remove(id: NullableId, params?: Params): Promise<T | T[]> {
    const res = await this.service.remove(id, params)

    return res
  }
}

export default Service
