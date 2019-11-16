import { GraphQLObjectType, GraphQLInputObjectType } from 'graphql';
declare const PlaylistType: GraphQLObjectType<any, any, {
    [key: string]: any;
}>;
declare const PlaylistCreateType: GraphQLInputObjectType;
declare const PlaylistCountType: GraphQLObjectType<any, any, {
    [key: string]: any;
}>;
export { PlaylistType, PlaylistCountType, PlaylistCreateType };
