import { startGraphQLServer } from './graphql';
import { startDbConnection } from './storage/initDbConnection';
import { seedDatabase } from './storage/Seeder';

(async () => {
  await startDbConnection();
  await seedDatabase();
  await startGraphQLServer();
})();
