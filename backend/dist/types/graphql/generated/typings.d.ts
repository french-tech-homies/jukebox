/**
 * This file was automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 */
declare global {
    interface NexusGen extends NexusGenTypes {
    }
}
export interface NexusGenInputs {
}
export interface NexusGenEnums {
}
export interface NexusGenRootTypes {
    Artist: {
        name: string;
        song: string;
    };
    Playlist: {
        description: string;
        id: string;
        name: string;
    };
    Query: {};
    Suggestion: {
        artist: NexusGenRootTypes['Artist'];
        id: string;
        submitter: string;
    };
    String: string;
    Int: number;
    Float: number;
    Boolean: boolean;
    ID: string;
}
export interface NexusGenAllTypes extends NexusGenRootTypes {
}
export interface NexusGenFieldTypes {
    Artist: {
        name: string;
        song: string;
    };
    Playlist: {
        description: string;
        id: string;
        name: string;
    };
    Query: {
        playlistByID: NexusGenRootTypes['Playlist'];
        playlists: NexusGenRootTypes['Playlist'][];
        suggestions: NexusGenRootTypes['Suggestion'][];
    };
    Suggestion: {
        artist: NexusGenRootTypes['Artist'];
        id: string;
        submitter: string;
    };
}
export interface NexusGenArgTypes {
    Query: {
        playlistByID: {
            id: string;
        };
    };
}
export interface NexusGenAbstractResolveReturnTypes {
}
export interface NexusGenInheritedFields {
}
export declare type NexusGenObjectNames = "Artist" | "Playlist" | "Query" | "Suggestion";
export declare type NexusGenInputNames = never;
export declare type NexusGenEnumNames = never;
export declare type NexusGenInterfaceNames = never;
export declare type NexusGenScalarNames = "Boolean" | "Float" | "ID" | "Int" | "String";
export declare type NexusGenUnionNames = never;
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
    allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
    allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes'];
    abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
    abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}
declare global {
    interface NexusGenPluginTypeConfig<TypeName extends string> {
    }
    interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
    }
    interface NexusGenPluginSchemaConfig {
    }
}