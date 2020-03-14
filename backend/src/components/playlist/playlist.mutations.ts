import { mutationField } from 'nexus'

export const createPlaylist = mutationField(t => {
  t.crud.createOnePlaylist()
})
