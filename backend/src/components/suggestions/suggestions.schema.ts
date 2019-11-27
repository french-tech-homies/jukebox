import { objectType } from 'nexus';

export const Suggestion = objectType({
  name: 'Suggestion',
  definition(t) {
    t.id('id');
    t.string('submitter');
    t.string('url');
    t.field('artist', {
      type: objectType({
        name: 'Artist',
        definition(t) {
          t.string('name');
          t.string('song');
        },
      }),
    });
  },
});
