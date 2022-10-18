import * as prismic from '@prismicio/client'
import * as prismicNext from '@prismicio/next'

import sm from '../../sm.json'

export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint)

export const createClient = ({
  previewData,
  req,
  ...config
}: prismicNext.CreateClientConfig = {}) => {
  const client = prismic.createClient(sm.apiEndpoint, {
    ...config,
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  })

  prismicNext.enableAutoPreviews({
    client,
    previewData,
    req,
  })

  return client
}
