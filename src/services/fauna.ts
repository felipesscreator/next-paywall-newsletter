import NextAuth from "next-auth";
import { Client } from 'faunadb';
import { FaunaAdapter } from "@next-auth/fauna-adapter";

export const fauna = new Client({
  secret: process.env.FAUNADB_KEY
})

export default NextAuth({
  providers: [],
  adapter: FaunaAdapter(fauna)
})