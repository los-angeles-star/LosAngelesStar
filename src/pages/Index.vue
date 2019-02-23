<template>
  <Layout>
    <h1 v-html="$page.metaData.siteName"></h1>
    <div class="columns">
      <article v-for="{ node } in $page.allWordPressPost.edges" :key="node.id" itemscope="" itemtype="https://schema.org/NewsArticle">
		<header>
          <h2 v-html="node.title" class="entry-title" itemprop="headline" />
		  <time class="published dt-published" :datetime="node.date" itemprop="datePublished">{{ node.date | moment }}</time>
	    </header>
        <div class="entry-summary" v-html="node.excerpt"/>
        <router-link :to="node.path">Read more</router-link>
	  </article>
	</div>
	<Pager :info="$page.allWordPressPost.pageInfo"/>
  </Layout>
</template>

<page-query>
query Home ($page: Int) {
  metaData {
    siteName
  }
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
    Pager
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
