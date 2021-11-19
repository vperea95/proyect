import { connect, connection } from "mongoose";
import {ApolloServer} from 'apollo-server'
import typeDefs from "../gql/schema";
import resolvers from "../gql/resolver";

const conn = {
  isConnected: false,
};

export async function dbConnect() {
  if (conn.isConnected) return;
  const db = await connect(process.env.MONGODB_URL);
  conn.isConnected = db.connections[0].readyState;
  console.log(db.connection.db.databaseName);
}

connection.on("connected", () => {
  console.log("Conexion Exitosa");
});

connection.on("error", (err) => {
  console.log(err);
});

export function server(){
  const serverApollo = new ApolloServer({
        typeDefs,
        resolvers,
      })
  
      serverApollo.listen().then(({url}) => {
        console.log(`Servidor en la url ${url}`);
      })
}