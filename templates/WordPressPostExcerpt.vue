<template>
  <article :key="post.id" class="h-entry" :class="post.id" role="main" itemscope="" itemtype="https://schema.org/NewsArticle">
    <header>
      <h2 class="p-name" itemprop="headline">{{ post.title.rendered }}</h2>
      <time class="dt-published" :datetime="post.date" itemprop="datePublished">{{ $d( new Date(post.date), 'long' )}}</time>
      <meta itemprop="dateModified" :content="post.modified">
      <span itemprop="publisher" itemscope="itemscope" itemtype="https://schema.org/Organization">
        <meta itemprop="name" content="Los Angeles Star">
        <meta itemprop="logo" url="../assets/los-angeles-star-logo.svg">
      </span>
    </header>
    <div class="p-summary" v-html="post.excerpt.rendered"/>
    <NuxtLink :to="localePath({ name: 'slug', params: { slug: post.slug } })" :title="'Continue reading ‘' + post.title.rendered + '’'">{{ $t('article.excerpt.read_more') }}</NuxtLink>
  </article>
</template>

<script>
export default {
  props: {
    post: {required: true, type: Object},
  }
}
</script>
