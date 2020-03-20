import { queryField } from 'nexus'

export const tracks = queryField(t => {
  t.crud.tracks()
})

export const track = queryField(t => {
  t.crud.track()
})
