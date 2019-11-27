import { mutationField, idArg, stringArg } from 'nexus';
import { Suggestion } from './suggestions.schema';
import { suggestionsRepository } from './suggestions.repository';

export const createSuggestion = mutationField("createSuggestion", {
  type: Suggestion,
  args: { 
    url: stringArg({required: true}),
    submitter: stringArg({required: true}),
  },
  async resolve(_root, {url, submitter}) {
    return await suggestionsRepository.create({url:url, submitter:submitter}) as any;
  },
});