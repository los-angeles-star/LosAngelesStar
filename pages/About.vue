<template>
    <article :key="page.id" :class="'page-'+page.id" role="main" itemscope="" itemtype="https://schema.org/AboutPage">
          <header>
              <h1 v-if="page.title" v-html="page.title.rendered" itemprop="headline"/>
              <meta itemprop="url" :content="page.link">
              <div v-if="page.excerpt" class="lead" v-html="page.excerpt.rendered" />
              <article-featured-media v-if="page.featured_media" :key="page[0].featured_media" :featuredMedia="page[0].featured_media" />
          </header>
          <main v-if="page.content" v-html="page.content.rendered"/>
      </article>
</template>

<script setup>
import { usePostStore } from "@/stores/index.js";

const postStore = usePostStore();
const route = useRoute();

postStore.getCurrentPage(route.path.substring(1).split('/')[0].toLowerCase())
await useAsyncData('currentPage', () => postStore.getCurrentPage(route.path.substring(1).split('/')[0].toLowerCase()))

const page = computed(() => postStore.currentPage );
</script>
<script>
export default {
    name: 'About',
}
</script>

<style lang="scss">
article {
    container-type: inline-size;
}
article p {
    font-size: clamp(1rem, 2.935606cqw, 5rem);
    line-height: 1.64516129;
}
</style>