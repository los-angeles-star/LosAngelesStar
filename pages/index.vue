<template>
  <div class="columns">
      <Article v-for="post in $store.state.posts" :key="post.id" :post="post" />
  </div>
  <!-- <Pager :info="$page.allWordPressPost.pageInfo" linkClass="pager-link"/> -->
</template>

<script>
import Post from '~/templates/WordPressPost.vue'
import Article from '~/templates/WordPressPostExcerpt.vue'

export default {
  name: 'Home',
  components: {
    Post,
    Article
  },
  metaInfo: {
    title: 'The Los Angeles Star',
    bodyAttrs: {
      class: ['blog']
    }
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },
  created() {
    this.$store.dispatch("getPosts");
  },
}
</script>

<style lang="scss">
article {
	break-inside: auto;
	&:empty {
    height: 360px;
    background-image: linear-gradient(#2f2f2f 40px,transparent 0),linear-gradient(#2f2f2f 40px,transparent 0),linear-gradient(#2f2f2f 40px,transparent 0),linear-gradient(#2f2f2f 40px,transparent 0),linear-gradient(#2f2f2f 40px,transparent 0),linear-gradient(#2f2f2f 40px,transparent 0),linear-gradient(#2f2f2f 40px,transparent 0),linear-gradient(#2f2f2f 40px,transparent 0),linear-gradient(#2f2f2f 40px,transparent 0),linear-gradient(#f7f7f7 100%,transparent 0);
    background-size: 204px 20px,204px 20px, 204px 14px, 204px 16px,204px 16px,204px 16px,204px 16px,204px 16px,204px 16px,100% 100%;
    background-position: 0px 0.5em,0 2.5625em,0 5.875em,0 9em,0 10.5em,0 12em,0 13.5em,0 15em,0 16.5em,0 0;
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
:link {
  color: cmyk(100%, 100%, 0, 0); // blue
  &:visited {
    color: cmyk(0, 100%, 0, 50%); // purple
  }
  &:focus {
    outline: 2px solid var(--color__process-cyan);
  }
  &:hover {
    color: var(--color__process-cyan);
  }
  &:active {
    color: #8b534e;
  }
}
</style>
