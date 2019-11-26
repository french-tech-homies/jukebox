import { queryField, idArg } from 'nexus';
import { Suggestion } from './suggestions.schema';

export const suggestions = queryField('suggestions', {
  type: Suggestion,
  list: true,
  async resolve() {
    return [];
  },
});
