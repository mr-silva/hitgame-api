export interface IDatabaseInterface {
  createConnection(): void

  connect(): Promise<void>
}
