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

<script>
import { mapState } from 'vuex'

export default {
  name: 'About',
  computed: mapState({
  		page: 'currentPage'
  }),
	created() {
		this.$store.dispatch('getCurrentPage', {
      slug: this.$route.path.substring(1).split('/')[0]
    });
	}
}
</script>
