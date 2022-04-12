<template>
  <article :key="post.id" class="h-entry" :class="post.id" role="main" itemscope="" itemtype="https://schema.org/NewsArticle">
    <header>
      <h1 v-html="post.title.rendered"/>
      <time :datetime="post.date" class="fremont-pub">
        <span class="fremont-pub-date" v-html="currentDate(post.date)">Today</span>
        <span class="fremont-pub-time">Updated <span class="css-epvm6">12:00 p.m. PT</span></span>
      </time>
    </header>
    <main v-html="post.content.rendered"/>
  </article>
</template>

<script>
export default {
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    post() {
      return this.posts.find(el => el.slug === this.slug);
    }
  },
  data() {
    return {
      slug: this.$route.params.slug
    };
  },
  created() {
    this.$store.dispatch("getPosts");
  },
  methods: {
    currentDate(d) {
      const postDate = new Date(d);
      const date = `${postDate.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'America/Los_Angeles' })}`;
			return date;
    }
  },
}
</script>
