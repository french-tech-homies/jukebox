import { objectType } from 'nexus'

export const Playlist = objectType({
  name: 'Playlist',
  definition(t) {
    t.model.id()
    t.model.description()
    t.model.name()
  },
})
