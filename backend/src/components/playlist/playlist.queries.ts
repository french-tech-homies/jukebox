import { queryField } from 'nexus'

export const playlists = queryField(t => {
  t.crud.playlists()
})

export const playlist = queryField(t => {
  t.crud.playlist()
})
