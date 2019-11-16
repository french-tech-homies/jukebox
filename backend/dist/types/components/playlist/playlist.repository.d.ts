import { Document } from "mongoose";
export declare class PlaylistModel {
    name: string;
    description: string;
}
export declare const playlistRepository: import("@typegoose/typegoose").ReturnModelType<typeof PlaylistModel, unknown>;
declare type Source = Document & PlaylistModel;
export declare const toPlaylistObject: import("morphism").Mapper<import("morphism").StrictSchema<{
    description: string;
    id: string;
    name: string;
}, Source>, {
    description: string;
    id: string;
    name: string;
}>;
export {};
