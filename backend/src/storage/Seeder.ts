class Seeder {
  async seed() {}
  async seedSuggestions() {
    const tasks = await [Promise.resolve()];
    return Promise.all(tasks);
  }
}
export async function seedDatabase() {
  const seeder = new Seeder();
  await seeder.seed();
}
