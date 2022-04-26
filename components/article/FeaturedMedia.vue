  <div :id="'image-'+media.id" class="featured-media">
<template>
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
import { mapState } from 'vuex'

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
  computed: mapState({
    media: state => state.postMedia
  })
}
</script>

<style lang="scss" scoped>
$content--width: 688px;

.featured-media {
  margin-top: 2.375;
}

figure {
  max-width: $content--width;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 2.75em;

  & > div {
    position: relative;
  }

  figcaption {
    font-size: 0.9375em;
    line-height: 1.06667;
    margin-top: 1.33333em;
    color: #666;
    margin-right: 2.13333em;

    p {
      margin: 0;
    }
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
