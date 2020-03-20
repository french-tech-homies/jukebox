import { mutationField } from 'nexus'

export const createTrack = mutationField(t => {
  t.crud.createOneTrack()
})
