<template>
  <Layout>
    <h1 v-html="$page.category.title"/>
    <div v-html="$page.category.count"/>
  </Layout>
</template>

<page-query>
query Category ($path: String!) {
  category: wordPressCategory (path: $path) {
    title
    count
  }
}
</page-query>

<script>
export default {}
</script>
