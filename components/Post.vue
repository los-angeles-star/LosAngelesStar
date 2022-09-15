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

<style type="scss">
.h-entry main > .margin-right {
  float: right;
  max-width: calc(((100% - 688px) / 2) - 16px);
  margin-left: 0;
}
</style>
