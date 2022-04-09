<template>
  <div>
    <h2 v-html="post.title" />
    <div v-html="post.excerpt" />
    <Nuxt-link :to="post.path">
      Read More
    </Nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>
