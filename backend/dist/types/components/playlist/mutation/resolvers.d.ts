/// <reference types="mongoose" />
/// <reference types="mongodb" />
export declare function create({ name, description }: {
    name: string;
    description: string;
}): Promise<import("mongoose").Document>;
export declare function remove({ id }: {
    id: string;
}): Promise<{
    ok?: number | undefined;
    n?: number | undefined;
} & {
    deletedCount?: number | undefined;
}>;
