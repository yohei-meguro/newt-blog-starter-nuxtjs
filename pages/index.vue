<template>
  <main class="Container">
    <Cover img="https://as1.ftcdn.net/v2/jpg/03/45/18/76/1000_F_345187680_Eo4rKPDmdB6QTaGXFwU4NE5BaLlpGooL.jpg" />
    <div class="Articles">
      <Dropdown :items="categories" />
      <div class="Inner">
        <ArticleCard v-for="article in articles" :key="article._id" :article="article" />
      </div>
      <Pagination />
    </div>
  </main>
</template>

<script>
import { getArticles } from 'api/article'

export default {
  async asyncData(context) {
    const result = await getArticles(context.$config)
    return {
      articles: result.items,
      total: result.total,
    }
  },
  data() {
    return {
      categories: [
        { label: 'All posts' },
        { label: 'Category01' },
        { label: 'Category02' },
        { label: 'Category03' }
      ]      
    }
  },
}
</script>

<style scoped>
.Articles {
  padding: 24px 24px 40px 24px;
  margin: 0 auto;
}
.Inner {
  display: flex;
  flex-wrap: wrap;
}
@media (min-width: 600px) {
  .Articles {
    padding: 60px;
  }
}
@media (min-width: 960px) {
  .Articles {
    max-width: 1024px;
  }
}
</style>