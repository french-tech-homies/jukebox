import { queryField, idArg } from 'nexus';
import { Playlist } from './playlist.schema';
import { playlistRepository, toPlaylistObject } from './playlist.repository';

export const playlists = queryField('playlists', {
  type: Playlist,
  list: true,
  async resolve() {
    return toPlaylistObject(playlistRepository.find({}) as any);
  },
});

export const playlistByID = queryField('playlistByID', {
  type: Playlist,
  args: {
    id: idArg({ required: true }),
  },
  async resolve(root, { id }) {
    const playlist = await playlistRepository.findOne({ id });
    return toPlaylistObject(playlist) as any;
  },
});
