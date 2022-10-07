import { Client } from 'faunadb';
import NextAuth from "next-auth";
import { FaunaAdapter } from "@next-auth/fauna-adapter";

export const fauna = new Client({
  secret: process.env.FAUNADB_KEY,
  domain: 'db.us.fauna.com',
})

export default NextAuth({
  providers: [],
  adapter: FaunaAdapter(fauna)
})