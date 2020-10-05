<template>
  <Layout>
    <h1 v-html="$page.page.edges[0].node.title">About us</h1>
    <article v-html="$page.page.edges[0].node.content">Lorem ipsum</article>
  </Layout>
</template>

<page-query>
  query Page {
    pages: allWordPressPage {
      edges {
        node {
          id
          title
          date
          slug
          content
          featuredMedia {
            id
          }
        }
      }
    }
  },
  query ($id: ID!) {
    post: blogPost (id: $id) {
      image (width: 720, height: 200, quality: 90)
    }
  }
</page-query>

<script>
export default {}
</script>

<style lang="scss" scoped>
// TBD...
</style>
