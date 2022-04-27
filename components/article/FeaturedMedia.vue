<template>
  <div :id="'image-'+media.id" class="featured-media" v-if="isLoaded">
    <figure itemprop="image" aria-label="media">
      <div v-if="media.description !== undefined">
        <div class="overlay"></div>
        <div v-html="media.description.rendered"></div>
      </div>
      <figcaption v-if="media.caption" v-html="media.caption.rendered" />
    </figure>
    <meta itemprop="thumbnailUrl" :content="media.link">
  </div>
  <div v-else class="featured-media placeholder" aria-busy="true">
    <figure>
      Loading<span>.</span><span>.</span><span>.</span>
    </figure>
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
  created() {
    this.$store.dispatch('getPostMedia', {
      featuredMedia: this.featuredMedia
    })
  },
  computed: {
    ...mapState({
      media: 'postMedia'
    }),
    isLoaded() {
      if (Object.keys(this.media).length >= 1) {
        return true;
      } else {
        return false;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$content--width: 688px;

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

.featured-media {
  margin-top: 2.375;

  &.placeholder figure {
    background-color: lightgray;
    min-height: 256px;
    aspect-ratio: 1.6180339887;
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
