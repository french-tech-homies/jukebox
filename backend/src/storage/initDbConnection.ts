import mongoose from 'mongoose';
import { configurationService } from '../services/ConfigurationService';
export * from '../services/ConfigurationService'
// const credentials = { username: '', password: '' }; // TODO: move in .env file
// const CONNECTION_STRING = `mongodb+srv://jukeboxdbuser:bpM7ZlIq49cgz8Ib@jukebox-nfppq.azure.mongodb.net/test?retryWrites=true&w=majority`;
export async function startDbConnection() {
  const { connection } = await mongoose.connect(configurationService.dbConnection, {
    dbName: 'jukebox',
    bufferCommands: false,
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
  console.log('✅ Connection to MongoDB established with state : ', mongoose.connection.readyState);

  return connection;
}
