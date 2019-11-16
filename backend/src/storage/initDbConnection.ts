import mongoose from "mongoose";
const credentials = { username: "", password: "" }; // TODO: move in .env file
const CONNECTION_STRING = `mongodb+srv://${credentials.username}:${credentials.password}@cluster0-rdv9g.mongodb.net`;

export async function startDbConnection() {
  const { connection } = await mongoose.connect(CONNECTION_STRING, {
    dbName: "sandbox",
    bufferCommands: false,
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  });
  console.log("✅ Connection to MongoDB established");
  return connection;
}
