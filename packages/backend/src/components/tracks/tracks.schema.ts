import { objectType } from 'nexus'

export const Playlist = objectType({
  name: 'Track',
  definition(t) {
    t.model.id()
    t.model.source()
    t.model.url()
    t.model.suggestions()
    t.model.artists()
  },
})
