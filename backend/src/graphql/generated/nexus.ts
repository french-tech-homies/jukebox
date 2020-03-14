/* tslint:disable */
/* This file was automatically generated, do not edit */
import * as Context from '../context'
import * as prisma from '@prisma/client'

declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  ArtistCreateManyWithoutTrackInput: {
    // input type
    connect?: NexusGenInputs['ArtistWhereUniqueInput'][] | null // [ArtistWhereUniqueInput!]
    create?: NexusGenInputs['ArtistCreateWithoutTrackInput'][] | null // [ArtistCreateWithoutTrackInput!]
  }
  ArtistCreateWithoutTrackInput: {
    // input type
    id?: string | null // String
    name: string // String!
  }
  ArtistWhereUniqueInput: {
    // input type
    id?: string | null // String
  }
  PlaylistCreateInput: {
    // input type
    description?: string | null // String
    id?: string | null // String
    name: string // String!
  }
  PlaylistWhereUniqueInput: {
    // input type
    id?: string | null // String
  }
  SuggestionCreateInput: {
    // input type
    id?: string | null // String
    submitter: string // String!
    track: NexusGenInputs['TrackCreateOneWithoutSuggestionsInput'] // TrackCreateOneWithoutSuggestionsInput!
  }
  SuggestionWhereUniqueInput: {
    // input type
    id?: string | null // String
  }
  TrackCreateOneWithoutSuggestionsInput: {
    // input type
    connect?: NexusGenInputs['TrackWhereUniqueInput'] | null // TrackWhereUniqueInput
    create?: NexusGenInputs['TrackCreateWithoutSuggestionsInput'] | null // TrackCreateWithoutSuggestionsInput
  }
  TrackCreateWithoutSuggestionsInput: {
    // input type
    artists?: NexusGenInputs['ArtistCreateManyWithoutTrackInput'] | null // ArtistCreateManyWithoutTrackInput
    id?: string | null // String
    source: NexusGenEnums['TrackSource'] // TrackSource!
    url: string // String!
  }
  TrackWhereUniqueInput: {
    // input type
    id?: string | null // String
  }
}

export interface NexusGenEnums {
  TrackSource: prisma.TrackSource
}

export interface NexusGenRootTypes {
  Mutation: {}
  Playlist: prisma.Playlist
  Query: {}
  Suggestion: prisma.Suggestion
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  ArtistCreateManyWithoutTrackInput: NexusGenInputs['ArtistCreateManyWithoutTrackInput']
  ArtistCreateWithoutTrackInput: NexusGenInputs['ArtistCreateWithoutTrackInput']
  ArtistWhereUniqueInput: NexusGenInputs['ArtistWhereUniqueInput']
  PlaylistCreateInput: NexusGenInputs['PlaylistCreateInput']
  PlaylistWhereUniqueInput: NexusGenInputs['PlaylistWhereUniqueInput']
  SuggestionCreateInput: NexusGenInputs['SuggestionCreateInput']
  SuggestionWhereUniqueInput: NexusGenInputs['SuggestionWhereUniqueInput']
  TrackCreateOneWithoutSuggestionsInput: NexusGenInputs['TrackCreateOneWithoutSuggestionsInput']
  TrackCreateWithoutSuggestionsInput: NexusGenInputs['TrackCreateWithoutSuggestionsInput']
  TrackWhereUniqueInput: NexusGenInputs['TrackWhereUniqueInput']
  TrackSource: NexusGenEnums['TrackSource']
}

export interface NexusGenFieldTypes {
  Mutation: {
    // field return type
    createOnePlaylist: NexusGenRootTypes['Playlist'] // Playlist!
    createOneSuggestion: NexusGenRootTypes['Suggestion'] // Suggestion!
  }
  Playlist: {
    // field return type
    description: string | null // String
    id: string // String!
    name: string // String!
  }
  Query: {
    // field return type
    playlist: NexusGenRootTypes['Playlist'] | null // Playlist
    playlists: NexusGenRootTypes['Playlist'][] // [Playlist!]!
    suggestion: NexusGenRootTypes['Suggestion'] | null // Suggestion
    suggestions: NexusGenRootTypes['Suggestion'][] // [Suggestion!]!
  }
  Suggestion: {
    // field return type
    id: string // String!
    submitter: string // String!
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createOnePlaylist: {
      // args
      data: NexusGenInputs['PlaylistCreateInput'] // PlaylistCreateInput!
    }
    createOneSuggestion: {
      // args
      data: NexusGenInputs['SuggestionCreateInput'] // SuggestionCreateInput!
    }
  }
  Query: {
    playlist: {
      // args
      where: NexusGenInputs['PlaylistWhereUniqueInput'] // PlaylistWhereUniqueInput!
    }
    playlists: {
      // args
      after?: NexusGenInputs['PlaylistWhereUniqueInput'] | null // PlaylistWhereUniqueInput
      before?: NexusGenInputs['PlaylistWhereUniqueInput'] | null // PlaylistWhereUniqueInput
      first?: number | null // Int
      last?: number | null // Int
      skip?: number | null // Int
    }
    suggestion: {
      // args
      where: NexusGenInputs['SuggestionWhereUniqueInput'] // SuggestionWhereUniqueInput!
    }
    suggestions: {
      // args
      after?: NexusGenInputs['SuggestionWhereUniqueInput'] | null // SuggestionWhereUniqueInput
      before?: NexusGenInputs['SuggestionWhereUniqueInput'] | null // SuggestionWhereUniqueInput
      first?: number | null // Int
      last?: number | null // Int
      skip?: number | null // Int
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = 'Mutation' | 'Playlist' | 'Query' | 'Suggestion'

export type NexusGenInputNames =
  | 'ArtistCreateManyWithoutTrackInput'
  | 'ArtistCreateWithoutTrackInput'
  | 'ArtistWhereUniqueInput'
  | 'PlaylistCreateInput'
  | 'PlaylistWhereUniqueInput'
  | 'SuggestionCreateInput'
  | 'SuggestionWhereUniqueInput'
  | 'TrackCreateOneWithoutSuggestionsInput'
  | 'TrackCreateWithoutSuggestionsInput'
  | 'TrackWhereUniqueInput'

export type NexusGenEnumNames = 'TrackSource'

export type NexusGenInterfaceNames = never

export type NexusGenScalarNames = 'Boolean' | 'Float' | 'ID' | 'Int' | 'String'

export type NexusGenUnionNames = never

export interface NexusGenTypes {
  context: Context.Context
  inputTypes: NexusGenInputs
  rootTypes: NexusGenRootTypes
  argTypes: NexusGenArgTypes
  fieldTypes: NexusGenFieldTypes
  allTypes: NexusGenAllTypes
  inheritedFields: NexusGenInheritedFields
  objectNames: NexusGenObjectNames
  inputNames: NexusGenInputNames
  enumNames: NexusGenEnumNames
  interfaceNames: NexusGenInterfaceNames
  scalarNames: NexusGenScalarNames
  unionNames: NexusGenUnionNames
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames']
  allOutputTypes:
    | NexusGenTypes['objectNames']
    | NexusGenTypes['enumNames']
    | NexusGenTypes['unionNames']
    | NexusGenTypes['interfaceNames']
    | NexusGenTypes['scalarNames']
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames']
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes
}

declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {}
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {}
  interface NexusGenPluginSchemaConfig {}
}
