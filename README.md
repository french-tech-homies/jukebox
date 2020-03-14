<h1 align="center">Welcome to the Jukebox 👋</h1>
<p>
</p>

Let's spread your musical taste !

---

- [Usage](#usage)
- [Usage with no existing database](#usage-with-no-existing-database)

---

## Usage

```sh
make start
```

This command will:

- Start a local DB on Docker
- Generate the Prisma Client
- Start the Frontend and the Backend locally

## Usage with no existing database

```sh
make start-new
```

If you running this project for the first time, you might want to run this command once in order to:

- Start a local DB on Docker
- Generate the Prisma Client
- Create the Jukebox DB and apply the migrations
- Seed the DB
- Start the Frontend and the Backend locally
