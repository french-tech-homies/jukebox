import { makeSchema } from 'nexus'
import path from 'path'
import { nexusPrismaPlugin } from 'nexus-prisma'

import * as PlaylistSchema from '../components/playlist'
import * as SuggestionsSchema from '../components/suggestions'

import pkg from '../../package.json'

export const schema = makeSchema({
  types: [PlaylistSchema, SuggestionsSchema],
  plugins: [nexusPrismaPlugin()],
  outputs: {
    schema: path.join(__dirname, '/generated/schema.graphql'),
    typegen: path.join(__dirname, '/generated/nexus.ts'),
  },
  prettierConfig: pkg.prettier,
  typegenAutoConfig: {
    headers: ['/* tslint:disable */', '/* This file was automatically generated, do not edit */'],
    contextType: 'Context.Context',
    sources: [
      {
        source: '@prisma/client',
        alias: 'prisma',
      },
      {
        source: require.resolve('./context'),
        alias: 'Context',
      },
    ],
  },
})
