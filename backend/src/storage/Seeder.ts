import { suggestionsRepository, SuggestionModel } from '../components/suggestions/suggestions.repository';
class Seeder {
  async seed() {
    console.log('Seeding database...');
    await this.seedSuggestions();
    console.log('Database successfully seeded 🌱');
  }

  async seedSuggestions() {
    const suggestions: SuggestionModel[] = [
      { artist: { name: 'Booba', song: 'Friday' }, submitter: { name: 'Julien' }, url:'https://www.youtube.com/watch?v=5WpLtZNafzU' },
      { artist: { name: 'Low Roar', song: "Don't be so serious" }, submitter: { name: 'Alex' }, url:'https://www.youtube.com/watch?v=IB1URcYIaOE' },
      { artist: { name: 'Patrick Sebastien', song: "Les Sardines" }, submitter: { name: 'Yann' }, url:'https://www.youtube.com/watch?v=PA3P1-aSvKQ' }
    ];
    const tasks = suggestions.map(s => suggestionsRepository.create(s));
    return Promise.all(tasks);
  }

  async dumpDB() {
    console.log('Droping collections...');
    suggestionsRepository.collection.drop()
    console.log('Collections dropped 🗑');
  }


}
export async function seedDatabase() {
  const seeder = new Seeder();
  await seeder.dumpDB()
  await seeder.seed();
}

