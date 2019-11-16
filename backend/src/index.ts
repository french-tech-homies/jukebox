import { startGraphQLServer } from "./graphql";
import { startDbConnection } from "./storage/initDbConnection";

(async () => {
  await startDbConnection();
  await startGraphQLServer();
})();
