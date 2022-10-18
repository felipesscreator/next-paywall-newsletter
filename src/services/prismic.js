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
import * as prismicNext from '@prismicio/next'
import sm from '../../sm.json'

/**
 * The project's Prismic repository name.
 */
export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint)

// Update the routes array to match your project's route structure
/** @type {prismic.ClientConfig['routes']} **/
const routes = [
  {
    type: 'posts',
    path: '/posts',
  },
]

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config {prismicNext.CreateClientConfig} - Configuration for the Prismic client.
 */
export const createClient = (config = {}) => {
  const client = prismic.createClient(sm.apiEndpoint, {
    routes,
    ...config,
  })

  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  })

  return client
}

// const repoName = 'newsletter-next'
// const endpoint = prismic.getEndpoint(repoName)
// export const client = prismic.createClient(endpoint, { fetch })
