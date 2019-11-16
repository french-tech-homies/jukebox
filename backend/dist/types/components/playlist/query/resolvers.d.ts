/// <reference types="mongoose" />
export declare function get({ id }: {
    id: string;
}): Promise<import("mongoose").Document | null>;
export declare function getCount(): Promise<{
    playlistCount: number;
}>;
export declare function getAll(): Promise<import("mongoose").Document[]>;
