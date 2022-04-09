<template>
  <Layout>
    <article :key="$page.post.id" class="h-entry" :class="$page.post.id" role="main" itemscope="" itemtype="https://schema.org/NewsArticle">
      <header>
        <h1 v-html="$page.post.title"/>
        <time :datetime="$page.post.date" class="fremont-pub">
          <span class="fremont-pub-date" v-html="currentDate($page.post.date)">Today</span>
          <span class="fremont-pub-time">Updated <span class="css-epvm6">12:00 p.m. PT</span></span>
        </time>
      </header>
      <main v-html="$page.post.content"/>
    </article>
  </Layout>
</template>

<script>
import gql from 'graphql-tag'

export default {
  methods: {
    currentDate(d) {
      const postDate = new Date(d);
      const date = `${postDate.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'America/Los_Angeles' })}`;
			return date;
    }
  },
  apollo: {
    characters: gql`
      query Post ($path: String!) {
        post: wordPressPost (path: $path) {
          id
          title
          date
          content
          featuredMedia {
            id
          }
          categories {
            slug
          }
        }
      }
    `,
  },
}
</script>
