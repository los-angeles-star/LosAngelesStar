<template>
  <Layout>
    <div class="columns">
	</div>
	<Pager :info="$page.allWordPressPost.pageInfo" linkClass="pager-link"/>
        <Article  v-for="{ node } in $page.allWordPressPost.edges" :key="node.id" :node="node" />
  </Layout>
</template>

<page-query>
query Home ($page: Int) {
  allWordPressPost (perPage: 10, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
      isFirst
      isLast
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
import Post from '~/templates/WordPressPost.vue'
import Article from '~/templates/WordPressPostExcerpt.vue'

export default {
  components: {
    Pager,
    Post,
    Article
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

[aria-label="Pagination Navigation"] {
	.pager-link {
		display: inline-block;
		line-height: 2.75;
		padding: 0 1em;

		&.active--exact {
			text-decoration: none;
			color: inherit;
			cursor: default;
		}
	}
}
</style>
