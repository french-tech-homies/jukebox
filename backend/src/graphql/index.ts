import { ApolloServer } from 'apollo-server'

import { createContext } from './context'
import { schema } from './schema'
import { configurationService } from '../services/ConfigurationService'

export async function startGraphQLServer() {
  const server = new ApolloServer({ schema, context: createContext })

  const { url } = await server.listen({ port: configurationService.apolloServerPort })
  /* tslint:disable */
  console.log(`🚀  Server ready at ${url}`)
}
