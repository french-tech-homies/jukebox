import { ApolloServer } from "apollo-server";
import { makeSchema } from "nexus";
import path from "path";
import * as PlaylistSchema from "../components/playlist";
import * as SuggestionsSchema from "../components/suggestions";
export async function startGraphQLServer() {
  const schema = makeSchema({
    types: [PlaylistSchema, SuggestionsSchema],
    outputs: {
      schema: path.join(process.cwd(), "/src/graphql/generated/schema.graphql"),
      typegen: path.join(process.cwd(), "/src/graphql/generated/typings.ts")
    }
  });

  const server = new ApolloServer({ schema });

  const { url } = await server.listen();
  console.log(`🚀  Server ready at ${url}`);
}
