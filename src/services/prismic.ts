// import Prismic from '@prismicio/client';

// export function getPrismicClient(req?: unknown) {
//   const prismic = Prismic.client(
//     process.env.PRISMIC_ENDPOINT,
//     {
//       req,
//       accessToken: process.env.PRISMIC_ACCESS_TOKEN,
//     }
//   )

//   return prismic
// }

import * as prismic from '@prismicio/client'
import fetch from 'node-fetch'

const repoName = 'newsletter-next'
const endpoint = prismic.getEndpoint(repoName)
export const client = prismic.createClient(endpoint, { fetch })
