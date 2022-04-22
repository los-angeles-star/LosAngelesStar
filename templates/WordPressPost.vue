<template>
  <article :key="id" class="h-entry" :class="'post-'+id" role="main" itemscope="" itemtype="https://schema.org/NewsArticle">
    <header>
      <h1 v-html="title.rendered" itemprop="headline"/>
      <meta itemprop="url" :content="link">
      <article-featured-media v-if="featured_media" :key="featured_media" :featuredMedia="featured_media" />
      <article-date-line :date="date" :modified="modified" />
      <article-by-line v-if="author" :key="author" :authorId="author" />
    </header>
    <main v-html="content.rendered" itemprop="articleBody"/>
  </article>
</template>

<script>
export default {
  props: {
    id: Number,
    title: Object,
    slug: String,
    link: String,
    author: Number,
    date: String,
    modified: String,
    featured_media: Number,
    excerpt: Object,
    content: Object,
    categories: Array,
    tags: Array
  },
}
</script>

<style lang="scss">
$content--width: 688px;

:where(img, svg, video) {
  max-width: 100%;
  height: auto;
}

h3 {
  font-size: 1.25em;
}

blockquote {
  max-width: 640px;
  margin-left: calc((100% - $content--width + 96px) / 2);
  font-size: 1.375em;
  font-weight: bold;

  &::before {
    content: '\201C';
    font-size: 2.5em;
    position: absolute;
    left: -0.72727em;
    top: -0.29091em;
  }
}

.h-entry {
  h1 {
    font-size: 2.5em;
    line-height: 1.15;
    margin-left: auto;
    margin-right: auto;
    max-width: $content--width;
    letter-spacing: -0.0125em;
    font-style: italic;
  }

  main {
    & > * {
      max-width: $content--width;
      margin-left: calc((100% - $content--width) / 2);
    }

    & > p,
    & > ul {
      font-size: 1.25em;
      line-height: 1.6;
    }
  }
}
</style>
