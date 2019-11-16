import { ApolloServer } from "apollo-server";
import { makeSchema } from "nexus";
import path from "path";
import * as PlaylistSchema from "../components/playlist";

export async function startGraphQLServer() {
  console.log(
    "path",
    path.join(process.cwd(), "/src/graphql/generated/schema.graphql")
  );
  const schema = makeSchema({
    types: [PlaylistSchema],
    outputs: {
      schema: path.join(process.cwd(), "/src/graphql/generated/schema.graphql"),
      typegen: path.join(process.cwd(), "/src/graphql/generated/typings.ts")
    }
  });

  const server = new ApolloServer({ schema });

  const { url } = await server.listen();
  console.log(`🚀  Server ready at ${url}`);
}
