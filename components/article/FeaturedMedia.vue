<template v-if="media">
  <div :id="'image-'+media.id" class="featured-media">
    <figure itemprop="image" aria-label="media">
      <div v-if="media.description !== undefined">
        <div class="overlay"></div>
        <div v-html="media.description.rendered"></div>
      </div>
      <figcaption v-html="media.caption.rendered" />
    </figure>
    <meta itemprop="thumbnailUrl" :content="media.link">
  </div>
</template>

<script>
export default {
  props: {
    featuredMedia: {
      type: Number,
      required: true
    }
  },
  mounted() {
    this.$store.dispatch('getPostMedia', {
      featuredMedia: this.featuredMedia
    })
  },
  computed: {
    media() {
      return this.$store.state.postMedia;
    },
  }
}
</script>

<style lang="scss" scoped>
$content--width: 688px;

figure {
  max-width: $content--width;
  margin-right: auto;
  margin-left: auto;

  & > div {
    position: relative;
  }
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

a {
  display: inline-block;
}

img {
  width: 48px;
  margin-right: 8px;
  border-radius: 50%;
  vertical-align: bottom;
}
</style>
