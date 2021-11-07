<template>
  <article :key="node.id" class="h-entry" :class="node.id" role="main" itemscope="" itemtype="https://schema.org/NewsArticle">
    <header>
      <h2 class="p-name" itemprop="headline">{{ node.title }}</h2>
      <time class="dt-published" :datetime="node.date" itemprop="datePublished">{{ node.date | moment }}</time>
      <meta itemprop="dateModified" :content="node.modified">
      <span itemprop="publisher" itemscope="itemscope" itemtype="https://schema.org/Organization">
        <meta itemprop="name" content="Los Angeles Star">
        <meta itemprop="logo" url="@/assets/los-angeles-star-logo.svg">
      </span>
    </header>
    <div class="p-summary" v-html="node.excerpt"/>
    <router-link :to="node.path">Read more</router-link>
  </article>
</template>

<script>
import moment from 'moment'

export default {
  props: {
    node: {required: true, type: Object},
  },
  filters: {
    moment: function (date) {
      return moment(date).format('dddd, MMMM Do, YYYY');
    }
  }
}
</script>
