import { startGraphQLServer } from './graphql';
import { startDbConnection } from './storage/initDbConnection';
import { seedDatabase } from './storage/Seeder';
import { configurationService } from './services/ConfigurationService';

(async () => {
  console.log('### Starting Jukebox Backend ###');
  if (configurationService.isDevEnv()) {
    console.log('### NODE_ENV is DEV ###');
  }
  console.log('### Starting DB Connection ###');
  await startDbConnection().catch(error => {
    console.log("---> DB Connection ERROR : ",error)
    if (error.name == "MongoTimeoutError") {
      console.log("---> Do you have a MongoDB instance started ? ")
    }
    process.exit(1)
  });
  if (configurationService.isDevEnv()) {
    console.log('### Run seeders ###');
    await seedDatabase();
  }
  console.log('### Starting GraphQL Server ###');
  await startGraphQLServer();
})();
