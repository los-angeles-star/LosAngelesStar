<template>
  <Layout>
    <h1 v-html="$page.page.edges[0].node.title">About us</h1>
    <article v-html="$page.page.edges[0].node.content">Lorem ipsum</article>
  </Layout>
</template>

<page-query>
query Page ($path: String) {
  page: allWordPressPage (regex: $path) {
    edges {
      node {
    	title
        content
        featuredMedia {
        	url
        	mimeType
        }
      }
    }
  }
}
</page-query>

<script>
export default {}
</script>

<style lang="scss" scoped>
// TBD...
</style>
