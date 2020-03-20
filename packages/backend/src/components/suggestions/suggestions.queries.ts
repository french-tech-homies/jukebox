import { queryField } from 'nexus'

export const suggestions = queryField(t => {
  t.crud.suggestions()
})

export const suggestion = queryField(t => {
  t.crud.suggestion()
})
