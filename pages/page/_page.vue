<template>
  <main class="Container">
    <Cover img="https://as1.ftcdn.net/v2/jpg/03/45/18/76/1000_F_345187680_Eo4rKPDmdB6QTaGXFwU4NE5BaLlpGooL.jpg" />
    <div class="Articles">
      <Dropdown :categories="categories" />
      <div class="Inner">
        <ArticleCard v-for="article in articles" :key="article._id" :article="article" />
      </div>
      <Pagination :total="total" :current="pageNumber" />
    </div>
  </main>
</template>

<script>
import { getArticles } from 'api/article'
import { getCategories } from 'api/category'

export default {
  data() {
    return {
      pageNumber: 1,
      articles: [],
      total: 0,
      categories: []
    }
  },
  async created() {
    const pageNumber = Number(this.$route.params.page)
    if (Number.isNaN(pageNumber)) return this.$router.push('/')
    this.pageNumber = pageNumber

    const [resArticles, resCategories] = await Promise.all([
      getArticles(this.$config, { page: pageNumber }),
      getCategories(this.$config),
    ])

    this.articles = resArticles.articles
    this.total = resArticles.total
    this.categories = resCategories.categories
  }
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