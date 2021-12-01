import { createClient } from 'newt-client-js'
const ARTICLE_MODEL_NAME = 'article'

export const getArticles = async (config) => {
  try {
    const client = createClient({
      projectUid: config.projectUid,
      token: config.token,
      apiType: 'cdn',
    })
    return await client.getContents({
      appUid:config.appUid,
      modelUid: ARTICLE_MODEL_NAME,
      query: {
        depth: 2
      }
    })
  } catch (err) {
    return {
      items: [],
      total: 0,
    }
  }
}