<template>
    <article :key="post.id" class="h-entry" :class="post.id" role="main" itemscope="" itemtype="https://schema.org/NewsArticle">
      <header>
        <h1 v-html="post.title"/>
      </header>
      <main v-html="post.content"/>
    </article>
      <meta itemprop="url" :content="slug">
      <article-date-line :date="date" :modified="modified" />
</template>

<script>
export default {
  props: {
    id: Number,
    title: String,
    slug: String,
    date: String,
    modified: String,
    content: String
  },
  methods: {
    currentDate(d) {
      const postDate = new Date(d);
      const date = `${postDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'America/Los_Angeles'
      })}`;
			return date;
    }
  },
}
</script>

<style lang="scss">
:where(img, svg, video) {
  max-width: 100%;
  height: auto;
}
</style>
