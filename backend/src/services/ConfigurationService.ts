import dotenv from "dotenv-flow";
dotenv.config();
class ConfigurationService {
  private getEnvironmentVariable(name: string) {
    return process.env[name];
  }
  private getRequiredEnvironmentVariable(name: string) {
    const variable = process.env[name];
    if (!variable)
      throw new Error(`Environment variable ${[name]} is required`);
    return variable;
  }
  get dbConnection() {
    const dbConnection = this.getEnvironmentVariable("MONGODB_CONNECTION");
    if (!dbConnection)
      throw new Error("Environment variable [MONGODB_CONNECTION] is required");
    return dbConnection;
  }
  get dbName() {
    const dbName = this.getEnvironmentVariable("MONGODB_NAME");
    if (!dbName)
      throw new Error("Environment variable [MONGODB_NAME] is required");
    return dbName;
  }
  get apolloServerPort() {
    return this.getRequiredEnvironmentVariable("APOLLO_SERVER_PORT");
  }
  isDevEnv() {
    return process.env.NODE_ENV == "dev" ? true : false;
  }
}
export const configurationService = new ConfigurationService();
