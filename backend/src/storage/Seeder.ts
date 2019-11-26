import { suggestionsRepository, SuggestionModel } from '../components/suggestions/suggestions.repository';
class Seeder {
  async seed() {}
  async seedSuggestions() {
    const suggestions: SuggestionModel[] = [
      { artist: { name: 'Booba', song: 'Friday' }, submitter: { name: 'Julien' } },
      { artist: { name: 'Low Roar', song: "Don't be so serious" }, submitter: { name: 'Alex' } }
    ];
    const tasks = suggestions.map(s => suggestionsRepository.create(s));
    return Promise.all(tasks);
  }
}
export async function seedDatabase() {
  const seeder = new Seeder();
  await seeder.seed();
}
