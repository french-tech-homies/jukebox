import { queryField } from 'nexus'

export const artists = queryField(t => {
  t.crud.artists()
})

export const artist = queryField(t => {
  t.crud.artist()
})
