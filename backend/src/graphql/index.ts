import { ApolloServer } from 'apollo-server'

import { createContext } from './context'
import { schema } from './schema'
import { configurationService } from '../services/ConfigurationService'
import { logger } from '../services/logger';

export async function startGraphQLServer() {
  const server = new ApolloServer({
    schema, context: createContext,
    engine: {
      debugPrintReports: true,
    },
    ...defineAppoloFormatConfig(),
  })

  const { url } = await server.listen({ port: configurationService.apolloServerPort })
  /* tslint:disable */
  logger.info(`🚀 Server ready at ${url}`)
}


function defineAppoloFormatConfig() {
  if (configurationService.isDevEnv()) {
    return {
      formatError: (error: Error) => {
        logger.error("Graphql Error", {error});
        return error;
      },
      formatResponse: (response: any) => {
        logger.info("Graphql Response", {response});
        return response;
      },
    };
  }
  return null;
}
