<template>
  <Layout>
    <div class="columns">
      <article v-for="{ node } in $page.allWordPressPost.edges" :key="node.id" class="h-entry" itemscope="" itemtype="https://schema.org/NewsArticle">
		<header>
          <h2 v-html="node.title" class="p-name" itemprop="headline" />
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
	</div>
	<Pager :info="$page.allWordPressPost.pageInfo" :class="pagination"/>
  </Layout>
</template>

<page-query>
query Home ($page: Int) {
  allWordPressPost (perPage: 10, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        path
        excerpt
        date
        categories {
          title
        }
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome'
import moment from 'moment'

export default {
  components: {
    Pager,
  },
  filters: {
    moment: function (date) {
      return moment(date).format('dddd, MMMM Do, YYYY');
    }
  },
  metaInfo: {
    bodyAttrs: {
      class: 'blog'
    }
  }
}
</script>

<style lang="scss">
article {
	break-inside: auto;

	&:empty {
		height: 195px;
		background-image: radial-gradient(circle 16px, #2b2d2f 99%, transparent 0), linear-gradient(#2b2d2f 40px, transparent 0), linear-gradient(#f7f7f7 100%, transparent 0);
		background-size: 32px 32px, 204px 16px, 100% 100%;
		background-position: 24px 24px, 0px 76px, 0 0;
	}
}
</style>
