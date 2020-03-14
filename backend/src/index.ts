import { startGraphQLServer } from './graphql';
import { configurationService } from './services/ConfigurationService';
import { logger } from './services/logger';

(async () => {
  logger.info('### Starting Jukebox Backend ###');
  if (configurationService.isDevEnv()) {
    logger.info('### NODE_ENV is DEV ###');
  }
  logger.info('### Starting GraphQL Server ###');
  await startGraphQLServer();
})();
