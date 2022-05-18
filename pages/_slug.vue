<template>
  <Post :key="post.id" v-bind="post" />
</template>

<script>
import Post from '~/templates/WordPressPost.vue'

export default {
  name: 'slug',
  components: {
    Post
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    post() {
      return this.posts.find(el => el.slug === this.slug);
    },
    authors() {
      return this.$store.state.authors;
    }
  },
  data() {
    return {
      slug: this.$route.params.slug
    };
  },
  created() {
    this.$store.dispatch("getPosts");
    this.$store.dispatch("getAuthors");
  },
}
</script>
