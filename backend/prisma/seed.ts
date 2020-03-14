import { PrismaClient, TrackSource } from '@prisma/client'
import faker from 'faker'

// dotenv.config({path: path.join(process.cwd(), './src/backend')})
const PLAYLISTS_COUNT = 10
const SUGGESTIONS_COUNT = 20

const prisma = new PrismaClient()

async function seed() {
  // Add Playlists
  const playlists = Array(PLAYLISTS_COUNT)
    .fill(null)
    .map(() => prisma.playlist.create({ data: createPlaylist() }))
  await Promise.all(playlists)
  console.log('✅ Playlists added')

  // Add Suggestions
  const suggestions = Array(SUGGESTIONS_COUNT)
    .fill(null)
    .map(() => prisma.suggestion.create({ data: createSuggestion() }))
  await Promise.all(suggestions)
  console.log('✅ Suggestions added')
}

seed()
  .then(async () => {
    console.log('✅ DB successfully seeded')
    await prisma.disconnect()
  })
  .catch(() => {
    console.error('An error has occurred during DB seeding')
  })

function createPlaylist() {
  return {
    name: faker.name.title(),
    description: faker.lorem.words(20),
  }
}

function createSuggestion() {
  return {
    submitter: faker.internet.userName(),
    track: { create: { source: TrackSource.Spotify, url: faker.internet.url(), artists: { create: createArtist() } } },
  }
}

function createArtist() {
  return {
    name: faker.internet.userName(),
  }
}
