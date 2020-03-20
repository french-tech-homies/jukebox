import { mutationField } from 'nexus'

export const createSuggestion = mutationField(t => {
  t.crud.createOneSuggestion()
})
