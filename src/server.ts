import * as dotenv from 'dotenv'
import { app } from './app'
import { MysqlDatabase } from './Databases/MysqlDatabase'

dotenv.config()

app.set('port', 2408)

app.listen(app.get('port'), async () => {
  console.info('App is running at http://localhost:%d in %s mode', app.get('port'), app.get('env'))

  await new MysqlDatabase().connect()

  console.info('Connection with database created')
})
