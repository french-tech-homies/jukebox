import { startGraphQLServer } from './graphql'
import { configurationService } from './services/ConfigurationService'
;(async () => {
  console.log('### Starting Jukebox Backend ###')
  if (configurationService.isDevEnv()) {
    console.log('### NODE_ENV is DEV ###')
  }

  console.log('### Starting GraphQL Server ###')
  await startGraphQLServer()
})()
