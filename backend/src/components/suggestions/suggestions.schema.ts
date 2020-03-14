import { objectType } from 'nexus'

export const Suggestion = objectType({
  name: 'Suggestion',
  definition(t) {
    t.model.id()
    t.model.submitter()
    t.model.track()
  },
})
