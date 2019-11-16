import { create, remove } from './resolvers';
export declare const playlistCreate: {
    type: import("graphql").GraphQLObjectType<any, any, {
        [key: string]: any;
    }>;
    args: {
        name: {
            type: import("graphql").GraphQLScalarType;
        };
        description: {
            type: import("graphql").GraphQLScalarType;
        };
    };
    resolve: typeof create;
};
export declare const playlistRemove: {
    type: import("graphql").GraphQLObjectType<any, any, {
        [key: string]: any;
    }>;
    args: {
        id: {
            type: import("graphql").GraphQLScalarType;
        };
    };
    resolve: typeof remove;
};
