import { createClient } from 'newt-client-js'
const ARTICLE_MODEL_NAME = 'article'

export const getArticles = async (config, options={ search: '', query: {} }) => {
  try {
    const client = createClient({
      projectUid: config.projectUid,
      token: config.token,
      apiType: 'cdn',
    })

    const query = {
      ...((options && options.query) || {})
    }
    if (options && options.search) {
      query.or = [
        {
          title: {
            match: options.search
          }
        },
        {
          body: {
            match: options.search
          }
        }
      ]
    }

    const result = await client.getContents({
      appUid:config.appUid,
      modelUid: ARTICLE_MODEL_NAME,
      query: {
        depth: 2,
        ...query
      }
    })
    return {
      ...result,
      articles: result.items,
    }
  } catch (err) {
    return {
      articles: [],
      total: 0,
    }
  }
}

export const getArticleBySlug = async (config, slug) => {
  try {
    const client = createClient({
      projectUid: config.projectUid,
      token: config.token,
      apiType: 'cdn',
    })
    const result = await client.getContents({
      appUid:config.appUid,
      modelUid: ARTICLE_MODEL_NAME,
      query: {
        depth: 2,
        limit: 1,
        slug,
      }
    })
    return result.items.length === 1 ? result.items[0] : null
  } catch (err) {
    return null
  }
}