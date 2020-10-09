<template>
  <Layout>
    <h1 v-html="$page.wordPressPost.title"/>
    <div v-html="$page.wordPressPost.fields.content"/>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: wordPressPost (path: $path) {
    id
    title
    date
    fields {
      content
    }
    featuredMedia {
      id
    }
    categories {
      slug
    }
  }
}
</page-query>

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
