<template>
  <article :key="id" class="h-entry" :class="id" role="main" itemscope="" itemtype="https://schema.org/NewsArticle">
    <header>
      <h1 v-html="title.rendered"/>
      <meta itemprop="url" :content="slug">
      <article-date-line :date="date" :modified="modified" />
    </header>
    <main v-html="content.rendered"/>
  </article>
</template>

<script>
export default {
  props: {
    id: Number,
    title: Object,
    slug: String,
    date: String,
    modified: String,
    content: Object
  },
  methods: {
    currentDate(d) {
      const postDate = new Date(d);
      const date = `${postDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'America/Los_Angeles'
      })}`;
			return date;
    }
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
    margin-left: auto;
    margin-right: auto;
    max-width: $content--width;
    letter-spacing: -0.0125em;
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
