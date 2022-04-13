export interface IDatabaseInterface<TConnection> {
  createConnection(): void

  connect(): Promise<void>
}
