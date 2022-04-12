<template>
  <Layout>
    <article :key="post.id" class="h-entry" :class="post.id" role="main" itemscope="" itemtype="https://schema.org/NewsArticle">
      <header>
        <h1 v-html="post.title"/>
        <time :datetime="post.date" class="fremont-pub">
          <span class="fremont-pub-date" v-html="currentDate(post.date)">Today</span>
          <span class="fremont-pub-time">Updated <span class="css-epvm6">12:00 p.m. PT</span></span>
        </time>
      </header>
      <main v-html="post.content"/>
    </article>
  </Layout>
</template>

<script>
export default {
  methods: {
    currentDate(d) {
      const postDate = new Date(d);
      const date = `${postDate.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'America/Los_Angeles' })}`;
			return date;
    }
  },
}
</script>
