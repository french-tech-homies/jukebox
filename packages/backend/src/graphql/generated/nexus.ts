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
  ArtistCreateInput: {
    // input type
    id?: string | null // String
    name: string // String!
    tracks?: NexusGenInputs['TrackCreateManyWithoutArtistsInput'] | null // TrackCreateManyWithoutArtistsInput
  }
  ArtistCreateManyWithoutTracksInput: {
    // input type
    connect?: NexusGenInputs['ArtistWhereUniqueInput'][] | null // [ArtistWhereUniqueInput!]
    create?: NexusGenInputs['ArtistCreateWithoutTracksInput'][] | null // [ArtistCreateWithoutTracksInput!]
  }
  ArtistCreateWithoutTracksInput: {
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
  SuggestionCreateManyWithoutTrackInput: {
    // input type
    connect?: NexusGenInputs['SuggestionWhereUniqueInput'][] | null // [SuggestionWhereUniqueInput!]
    create?: NexusGenInputs['SuggestionCreateWithoutTrackInput'][] | null // [SuggestionCreateWithoutTrackInput!]
  }
  SuggestionCreateWithoutTrackInput: {
    // input type
    id?: string | null // String
    submitter: string // String!
  }
  SuggestionWhereUniqueInput: {
    // input type
    id?: string | null // String
  }
  TrackCreateInput: {
    // input type
    artists?: NexusGenInputs['ArtistCreateManyWithoutTracksInput'] | null // ArtistCreateManyWithoutTracksInput
    id?: string | null // String
    source: NexusGenEnums['TrackSource'] // TrackSource!
    suggestions?: NexusGenInputs['SuggestionCreateManyWithoutTrackInput'] | null // SuggestionCreateManyWithoutTrackInput
    url: string // String!
  }
  TrackCreateManyWithoutArtistsInput: {
    // input type
    connect?: NexusGenInputs['TrackWhereUniqueInput'][] | null // [TrackWhereUniqueInput!]
    create?: NexusGenInputs['TrackCreateWithoutArtistsInput'][] | null // [TrackCreateWithoutArtistsInput!]
  }
  TrackCreateOneWithoutSuggestionsInput: {
    // input type
    connect?: NexusGenInputs['TrackWhereUniqueInput'] | null // TrackWhereUniqueInput
    create?: NexusGenInputs['TrackCreateWithoutSuggestionsInput'] | null // TrackCreateWithoutSuggestionsInput
  }
  TrackCreateWithoutArtistsInput: {
    // input type
    id?: string | null // String
    source: NexusGenEnums['TrackSource'] // TrackSource!
    suggestions?: NexusGenInputs['SuggestionCreateManyWithoutTrackInput'] | null // SuggestionCreateManyWithoutTrackInput
    url: string // String!
  }
  TrackCreateWithoutSuggestionsInput: {
    // input type
    artists?: NexusGenInputs['ArtistCreateManyWithoutTracksInput'] | null // ArtistCreateManyWithoutTracksInput
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
  Artist: prisma.Artist
  Mutation: {}
  Playlist: prisma.Playlist
  Query: {}
  Suggestion: prisma.Suggestion
  Track: prisma.Track
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  ArtistCreateInput: NexusGenInputs['ArtistCreateInput']
  ArtistCreateManyWithoutTracksInput: NexusGenInputs['ArtistCreateManyWithoutTracksInput']
  ArtistCreateWithoutTracksInput: NexusGenInputs['ArtistCreateWithoutTracksInput']
  ArtistWhereUniqueInput: NexusGenInputs['ArtistWhereUniqueInput']
  PlaylistCreateInput: NexusGenInputs['PlaylistCreateInput']
  PlaylistWhereUniqueInput: NexusGenInputs['PlaylistWhereUniqueInput']
  SuggestionCreateInput: NexusGenInputs['SuggestionCreateInput']
  SuggestionCreateManyWithoutTrackInput: NexusGenInputs['SuggestionCreateManyWithoutTrackInput']
  SuggestionCreateWithoutTrackInput: NexusGenInputs['SuggestionCreateWithoutTrackInput']
  SuggestionWhereUniqueInput: NexusGenInputs['SuggestionWhereUniqueInput']
  TrackCreateInput: NexusGenInputs['TrackCreateInput']
  TrackCreateManyWithoutArtistsInput: NexusGenInputs['TrackCreateManyWithoutArtistsInput']
  TrackCreateOneWithoutSuggestionsInput: NexusGenInputs['TrackCreateOneWithoutSuggestionsInput']
  TrackCreateWithoutArtistsInput: NexusGenInputs['TrackCreateWithoutArtistsInput']
  TrackCreateWithoutSuggestionsInput: NexusGenInputs['TrackCreateWithoutSuggestionsInput']
  TrackWhereUniqueInput: NexusGenInputs['TrackWhereUniqueInput']
  TrackSource: NexusGenEnums['TrackSource']
}

export interface NexusGenFieldTypes {
  Artist: {
    // field return type
    id: string // String!
    name: string // String!
    tracks: NexusGenRootTypes['Track'][] // [Track!]!
  }
  Mutation: {
    // field return type
    createOneArtist: NexusGenRootTypes['Artist'] // Artist!
    createOnePlaylist: NexusGenRootTypes['Playlist'] // Playlist!
    createOneSuggestion: NexusGenRootTypes['Suggestion'] // Suggestion!
    createOneTrack: NexusGenRootTypes['Track'] // Track!
  }
  Playlist: {
    // field return type
    description: string | null // String
    id: string // String!
    name: string // String!
  }
  Query: {
    // field return type
    artist: NexusGenRootTypes['Artist'] | null // Artist
    artists: NexusGenRootTypes['Artist'][] // [Artist!]!
    playlist: NexusGenRootTypes['Playlist'] | null // Playlist
    playlists: NexusGenRootTypes['Playlist'][] // [Playlist!]!
    suggestion: NexusGenRootTypes['Suggestion'] | null // Suggestion
    suggestions: NexusGenRootTypes['Suggestion'][] // [Suggestion!]!
    track: NexusGenRootTypes['Track'] | null // Track
    tracks: NexusGenRootTypes['Track'][] // [Track!]!
  }
  Suggestion: {
    // field return type
    id: string // String!
    submitter: string // String!
    track: NexusGenRootTypes['Track'] // Track!
  }
  Track: {
    // field return type
    artists: NexusGenRootTypes['Artist'][] // [Artist!]!
    id: string // String!
    source: NexusGenEnums['TrackSource'] // TrackSource!
    suggestions: NexusGenRootTypes['Suggestion'][] // [Suggestion!]!
    url: string // String!
  }
}

export interface NexusGenArgTypes {
  Artist: {
    tracks: {
      // args
      after?: NexusGenInputs['TrackWhereUniqueInput'] | null // TrackWhereUniqueInput
      before?: NexusGenInputs['TrackWhereUniqueInput'] | null // TrackWhereUniqueInput
      first?: number | null // Int
      last?: number | null // Int
      skip?: number | null // Int
    }
  }
  Mutation: {
    createOneArtist: {
      // args
      data: NexusGenInputs['ArtistCreateInput'] // ArtistCreateInput!
    }
    createOnePlaylist: {
      // args
      data: NexusGenInputs['PlaylistCreateInput'] // PlaylistCreateInput!
    }
    createOneSuggestion: {
      // args
      data: NexusGenInputs['SuggestionCreateInput'] // SuggestionCreateInput!
    }
    createOneTrack: {
      // args
      data: NexusGenInputs['TrackCreateInput'] // TrackCreateInput!
    }
  }
  Query: {
    artist: {
      // args
      where: NexusGenInputs['ArtistWhereUniqueInput'] // ArtistWhereUniqueInput!
    }
    artists: {
      // args
      after?: NexusGenInputs['ArtistWhereUniqueInput'] | null // ArtistWhereUniqueInput
      before?: NexusGenInputs['ArtistWhereUniqueInput'] | null // ArtistWhereUniqueInput
      first?: number | null // Int
      last?: number | null // Int
      skip?: number | null // Int
    }
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
    track: {
      // args
      where: NexusGenInputs['TrackWhereUniqueInput'] // TrackWhereUniqueInput!
    }
    tracks: {
      // args
      after?: NexusGenInputs['TrackWhereUniqueInput'] | null // TrackWhereUniqueInput
      before?: NexusGenInputs['TrackWhereUniqueInput'] | null // TrackWhereUniqueInput
      first?: number | null // Int
      last?: number | null // Int
      skip?: number | null // Int
    }
  }
  Track: {
    artists: {
      // args
      after?: NexusGenInputs['ArtistWhereUniqueInput'] | null // ArtistWhereUniqueInput
      before?: NexusGenInputs['ArtistWhereUniqueInput'] | null // ArtistWhereUniqueInput
      first?: number | null // Int
      last?: number | null // Int
      skip?: number | null // Int
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

export type NexusGenObjectNames = 'Artist' | 'Mutation' | 'Playlist' | 'Query' | 'Suggestion' | 'Track'

export type NexusGenInputNames =
  | 'ArtistCreateInput'
  | 'ArtistCreateManyWithoutTracksInput'
  | 'ArtistCreateWithoutTracksInput'
  | 'ArtistWhereUniqueInput'
  | 'PlaylistCreateInput'
  | 'PlaylistWhereUniqueInput'
  | 'SuggestionCreateInput'
  | 'SuggestionCreateManyWithoutTrackInput'
  | 'SuggestionCreateWithoutTrackInput'
  | 'SuggestionWhereUniqueInput'
  | 'TrackCreateInput'
  | 'TrackCreateManyWithoutArtistsInput'
  | 'TrackCreateOneWithoutSuggestionsInput'
  | 'TrackCreateWithoutArtistsInput'
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
