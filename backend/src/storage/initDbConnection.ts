import mongoose from 'mongoose';
const credentials = { username: '', password: '' }; // TODO: move in .env file
const CONNECTION_STRING = `mongodb+srv://jukeboxdbuser:bpM7ZlIq49cgz8Ib@jukebox-nfppq.azure.mongodb.net/test?retryWrites=true&w=majority`;

export async function startDbConnection() {
  const { connection } = await mongoose.connect(CONNECTION_STRING, {
    dbName: 'sandbox',
    bufferCommands: false,
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
  console.log('✅ Connection to MongoDB established');
  return connection;
}
