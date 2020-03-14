import { ApolloServer } from 'apollo-server';
import { makeSchema } from 'nexus';
import path from 'path';
import * as PlaylistSchema from '../components/playlist';
import * as SuggestionsSchema from '../components/suggestions';
import { configurationService } from '../services/ConfigurationService';
import { logger } from '../services/logger';

export async function startGraphQLServer() {
  const schema = makeSchema({
    types: [PlaylistSchema, SuggestionsSchema],
    outputs: {
      schema: path.join(process.cwd(), '/src/graphql/generated/schema.graphql'),
      typegen: path.join(process.cwd(), '/src/graphql/generated/typings.ts'),
    },
  });

  const server = new ApolloServer({
    schema,
    engine: {
      debugPrintReports: true,
    },
    ...defineAppoloFormatConfig(),
  });

  const { url } = await server.listen({
    port: configurationService.apolloServerPort,
  });
  logger.info(`🚀 Server ready at ${url}`);
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
