<template>
  <Layout>
    <h1 v-html="$page.page.title">About us</h1>
    <article v-html="$page.page.content">Lorem ipsum</article>
  </Layout>
</template>

<page-query>
  query About {
    page: wordPressPage (path: "/pages/about/") {
      id
      title
      date
      content
      featuredMedia {
        id
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
