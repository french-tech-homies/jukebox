import { startGraphQLServer } from './graphql';
import { startDbConnection } from './storage/initDbConnection';
import { seedDatabase } from './storage/Seeder';
import { configurationService } from './services/ConfigurationService';
import { logger } from './services/logger';

(async () => {
  logger.info('### Starting Jukebox Backend ###');
  if (configurationService.isDevEnv()) {
    logger.info('### NODE_ENV is DEV ###');
  }
  logger.info('### Starting DB Connection ###');
  // await startDbConnection().catch(error => {
  //   logger.info("---> DB Connection ERROR : ",error)
  //   if (error.name == "MongoTimeoutError") {
  //     logger.info("---> Do you have a MongoDB instance started ? ")
  //   }
  //   process.exit(1)
  // });
  // if (configurationService.isDevEnv()) {
  //   logger.info('### Run seeders ###');
  //   await seedDatabase();
  // }
  logger.info('### Starting GraphQL Server ###');
  await startGraphQLServer();
})();
