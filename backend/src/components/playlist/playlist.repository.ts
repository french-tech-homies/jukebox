import { NexusGenFieldTypes } from '../../graphql/generated/typings';
import { prop, getModelForClass } from '@typegoose/typegoose';
import { morphism, createSchema } from 'morphism';
import { Document } from 'mongoose';

export class PlaylistModel {
  @prop({ required: true })
  public name!: string;
  @prop({ required: false })
  public description!: string;
}

export const playlistRepository = getModelForClass(PlaylistModel);

type Source = Document & PlaylistModel;
type Target = NexusGenFieldTypes['Playlist'];
export const toPlaylistObject = morphism(
  createSchema<Target, Source>({
    id: 'id',
    description: 'description',
    name: 'name',
  })
);
