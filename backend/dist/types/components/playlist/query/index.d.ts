import { GraphQLList } from 'graphql';
import { getAll, get, getCount } from './resolvers';
export declare const playlists: {
    type: GraphQLList<import("graphql").GraphQLType>;
    resolve: typeof getAll;
};
export declare const playlist: {
    type: import("graphql").GraphQLObjectType<any, any, {
        [key: string]: any;
    }>;
    args: {
        id: {
            type: import("graphql").GraphQLScalarType;
        };
    };
    resolve: typeof get;
};
export declare const playlistsCount: {
    type: import("graphql").GraphQLObjectType<any, any, {
        [key: string]: any;
    }>;
    resolve: typeof getCount;
};
