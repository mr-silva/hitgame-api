import { v4 } from 'uuid'

export class Base {
  constructor(
    protected readonly id: string
  ) {
    if (!id) this.id = v4()
  }

  public getId(): string {
    return this.id
  }
}