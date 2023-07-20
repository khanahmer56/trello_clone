import { Client, Databases, Storage, Account, ID } from "appwrite";

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(`64763d0019a92eb816f2`);

const account = new Account(client);
const database = new Databases(client);
const storage = new Storage(client);
export { client, account, database, storage, ID };
