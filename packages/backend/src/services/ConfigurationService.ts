import dotenv from 'dotenv-flow';
dotenv.config();
class ConfigurationService {
  // private getEnvironmentVariable(name: string) {
  //   return process.env[name];
  // }
  private getRequiredEnvironmentVariable(name: string) {
    const variable = process.env[name];
    if (!variable) throw new Error(`Environment variable ${[name]} is required`);
    return variable;
  }
  get apolloServerPort() {
    return this.getRequiredEnvironmentVariable('APOLLO_SERVER_PORT');
  }
  isDevEnv() {
    return process.env.NODE_ENV == 'development' ? true : false;
  }
}
export const configurationService = new ConfigurationService();
