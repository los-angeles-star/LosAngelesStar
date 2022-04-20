<template>
  <div itemprop="author" itemscope itemtype="https://schema.org/Person">
    <link itemprop="sameas" :href="author.url">
    <Nuxt-link :to="'author/'+author.slug"><img v-if="author.avatar_urls" :alt="author.name" :src="author.avatar_urls[48]" itemprop="image"/></Nuxt-link> <span>{{ $t('article.byline.by') }}</span><span itemprop="name"><Nuxt-link :to="'author/'+author.slug">{{ author.name }}</Nuxt-link></span>
  </div>
</template>

<script>
export default {
  props: {
    authorId: {
      type: Number,
      required: true
    }
  },
  created() {
    this.$store.dispatch('getCurrentAuthor', {
      authorId: this.authorId
    })
  },
  computed: {
    author() {
      return this.$store.state.currentAuthor;
    },
  },
}
</script>

<style lang="scss" scoped>
$content--width: 688px;

div {
  max-width: $content--width;
  margin-left: calc((100% - $content--width) / 2);
}

img {
  border-radius: 50%;
}
</style>
