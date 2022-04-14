import * as path from 'path'
import { DataSource } from 'typeorm'
import { IDatabaseInterface } from '../../Adapters/Interfaces/IDatabaseInterface'

export class MysqlDatabase implements IDatabaseInterface {
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
        path.join(__dirname, '..', '..', 'Adapters', 'Entities', 'Dao', '*.ts'),
        path.join(__dirname, '..', '..', 'Adapters', 'Entities', 'Dao', '*.ts')
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
