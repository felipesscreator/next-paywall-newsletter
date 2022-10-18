import Prismic from '@prismicio/client';

export function getPrismicClient(req?: unknown) {
  const prismic = Prismic.client(
    process.env.PRISMIC_ENDPOINT,
    {
      req,
      accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    }
  )

  return prismic
}

// import * as prismic from '@prismicio/client'

// const endpoint = prismic.getEndpoint('newsletter-next')
// export const getPrismicClient = prismic.createClient(endpoint)