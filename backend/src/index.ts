import { startGraphQLServer } from './graphql'
import { seedDatabase } from './storage/Seeder'
import { configurationService } from './services/ConfigurationService'
;(async () => {
  console.log('### Starting Jukebox Backend ###')
  if (configurationService.isDevEnv()) {
    console.log('### NODE_ENV is DEV ###')
  }

  console.log('### Starting GraphQL Server ###')
  await startGraphQLServer()
})()
