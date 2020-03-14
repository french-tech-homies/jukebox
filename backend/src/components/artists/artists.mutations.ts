import { mutationField } from 'nexus'

export const createArtist = mutationField(t => {
  t.crud.createOneArtist()
})
