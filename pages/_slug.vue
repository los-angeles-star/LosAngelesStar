<template>
  <Post v-if="post" :key="post.id" v-bind="post" />
</template>

<script>
import { mapState } from 'vuex'
import Post from '~/templates/WordPressPost.vue'

export default {
  name: 'slug',
  components: {
    Post
  },
  data() {
    return {
      slug: this.$route.params.slug || this.$route.path.substring(1).split('/')[0]
    };
  },
  created() {
    this.$store.dispatch("getPosts");
    this.$store.dispatch("getAuthors");
  },
  computed: {
    ...mapState({
      posts: 'posts',
      authors: 'authors'
    }),
    post() {
      return this.posts.find(el => el.slug === this.slug);
    },
  },
}
</script>
