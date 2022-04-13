import * as path from 'path'
import { DataSource } from 'typeorm'
import { IDatabaseInterface } from '../Interfaces/IDatabaseInterface'

export class MysqlDatabase implements IDatabaseInterface<DataSource> {
  private static connection: DataSource

  public createConnection(): void {
    MysqlDatabase.connection = new DataSource({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: 3306,
      username: process.env.MYSQL_USERNAME,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      entities: [
        path.join(__dirname, '..', 'Entities', 'Dao', '*.ts'),
        path.join(__dirname, '..', 'Entities', 'Dao', '*.js')
      ],
      logging: true,
      extra: {
        decimalNumbers: true
      }
    })
  }

  public async connect(): Promise<void> {
    if (!MysqlDatabase.connection) this.createConnection()

    if (!MysqlDatabase.connection.isInitialized) await MysqlDatabase.connection.initialize()
  }

  public static getConnection(): DataSource {
    return MysqlDatabase.connection
  }
}
