import { createClient } from 'newt-client-js'

const ARTICLE_MODEL_NAME = 'article'

export const getArticleBySlug = async (config, slug) => {
  try {
    const client = createClient({
      projectUid: config.projectUid,
      token: config.token,
      apiType: config.apiType,
    })
    const result = await client.getContents({
      appUid: config.appUid,
      modelUid: ARTICLE_MODEL_NAME,
      query: {
        depth: 2,
        limit: 1,
        slug,
      },
    })
    return result.items.length === 1 ? result.items[0] : null
  } catch (err) {
    return null
  }
}
