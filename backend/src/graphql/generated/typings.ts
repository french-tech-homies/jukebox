/**
 * This file was automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 */

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {}

export interface NexusGenEnums {}

export interface NexusGenRootTypes {
  Artist: {
    // root type
    name: string; // String!
    song: string; // String!
  };
  Playlist: {
    // root type
    description: string; // String!
    id: string; // ID!
    name: string; // String!
  };
  Query: {};
  Suggestion: {
    // root type
    artist: NexusGenRootTypes['Artist']; // Artist!
    id: string; // ID!
    submitter: string; // String!
  };
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {}

export interface NexusGenFieldTypes {
  Artist: {
    // field return type
    name: string; // String!
    song: string; // String!
  };
  Playlist: {
    // field return type
    description: string; // String!
    id: string; // ID!
    name: string; // String!
  };
  Query: {
    // field return type
    playlistByID: NexusGenRootTypes['Playlist']; // Playlist!
    playlists: NexusGenRootTypes['Playlist'][]; // [Playlist!]!
    suggestions: NexusGenRootTypes['Suggestion'][]; // [Suggestion!]!
  };
  Suggestion: {
    // field return type
    artist: NexusGenRootTypes['Artist']; // Artist!
    id: string; // ID!
    submitter: string; // String!
  };
}

export interface NexusGenArgTypes {
  Query: {
    playlistByID: {
      // args
      id: string; // ID!
    };
  };
}

export interface NexusGenAbstractResolveReturnTypes {}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = 'Artist' | 'Playlist' | 'Query' | 'Suggestion';

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = 'Boolean' | 'Float' | 'ID' | 'Int' | 'String';

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes:
    | NexusGenTypes['objectNames']
    | NexusGenTypes['enumNames']
    | NexusGenTypes['unionNames']
    | NexusGenTypes['interfaceNames']
    | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes'];
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}

declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {}
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {}
  interface NexusGenPluginSchemaConfig {}
}
