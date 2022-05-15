import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { sessionSetup } from './app.setup'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  /* app setup*/
  sessionSetup(app)
  
  const port = +process.env.SERVER_PORT || 3000
  await app.listen(port)
}
bootstrap()
