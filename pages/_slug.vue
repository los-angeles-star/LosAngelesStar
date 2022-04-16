<template>
  <post :key="post.id" v-bind="post" />
</template>

<script>
import Post from '~/templates/WordPressPost.vue'

export default {
  components: {
    Post
  },
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
}
</script>
