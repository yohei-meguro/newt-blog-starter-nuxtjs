<template>
  <main class="Container">
    <div class="Search">
      <p class="Search_Text">Found {{total}} results for your search</p>
      <div class="Search_Results">
        <article v-for="article in articles" :key="article._id" class="Article">
          <NuxtLink :to="`/article/${article.slug}`" class="Article_Link">
            <h2 class="Article_Title">{{article.title}}</h2>
            <p class="Article_Description">{{toPlainText(article.body)}}</p>
          </NuxtLink>
        </article>
        <Pagination />
      </div>
    </div>
  </main>
</template>

<script>
import { getArticles } from 'api/article'
import { toPlainText } from 'utils/markdown'

export default {
  data() {
    return {
      articles: [],
      total: 0,
    }
  },
  async created() {
    const { articles, total } = await getArticles(this.$config, {
      search: this.$route.query.q || '',
      query: {
        body: {
          fmt: 'text'
        }
      }
    })
    this.articles = articles
    this.total = total
  },
  methods: {
    toPlainText
  }
}
</script>

<style scoped>
.Search {
  margin: 0 auto;
  padding: 24px;
}
.Search_Text {
  padding: 0;
  margin: 0;
}
.Search_Results {
  padding: 24px 0 0 0;
}
.Article {
  border: 1px solid #e5e5e5;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.05);
  border-radius: 4px;
  margin: 0 0 16px 0;
}
.Article_Link {
  display: block;
  padding: 16px;
  line-height: 1.5;
  color: #333;
  text-decoration: none;
  border-radius: 4px;
  transition: background .2s;
  background: #fff;
}
.Article_Link:hover {
  background: #f8f8f8;
}
.Article_Link:active {
  background: none;
  transition: none;
}
.Article_Title {
  font-size: 1.4rem;
  margin: 0 0 4px 0;
  padding: 0;
}
.Article_Description {
  margin: 0;
  padding: 0;
  font-size: 1.2rem;
}
@media (min-width: 600px) {
  .Search {
    max-width: 700px;
    padding: 60px;
  }
  .Search_Text {
    padding: 0;
  }
  .Search_Results {
    padding: 24px 0 0 0;
  }
}
</style>