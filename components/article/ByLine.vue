<template>
    <div :class="['article-byline', author.avatar_urls ? 'has-avatar' : '']" itemprop="author" itemscope itemtype="https://schema.org/Person">
		<div>
			<div v-if="author.url || author.avatar_urls">
				<link v-if="author.url" itemprop="sameas" :href="author.url">
				<NuxtLink v-if="author.avatar_urls" :to="'author/'+author.slug">
					<img
						:alt="author.name"
						:srcset="
						author.avatar_urls[96] + ' 2x, ' +
						author.avatar_urls[48] + ' 1x, ' +
						author.avatar_urls[24] + ' 0.5x'
						"
						:src="author.avatar_urls[24]"
						itemprop="image"/>
				</NuxtLink>
			</div>
			<div>
				<span>{{ $t('article.byline.by') }}</span><span itemprop="name"><Nuxt-link :to="'author/'+author.slug">{{ author.name }}</Nuxt-link></span>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { usePostStore } from '@/stores/index.js';

interface Author {
	name: string;
	slug: string;
	url?: string;
	avatar_urls?: { [key: number]: string };
}

const props = defineProps({
	authorId: {
		type: Number,
		required: true
	}
})

const post = usePostStore();
post.getCurrentAuthor({ authorId: props.authorId });

const author = computed<Author>(() => {
	return post.currentAuthor as Author; // Cast to Author type
});
</script>
  
<style lang="scss" scoped>
$content--width: 688px;

div[itemprop="author"] {
	max-width: $content--width;
	margin-left: calc((100% - $content--width) / 2);
	margin-bottom: 1.1875em;

	&.has-avatar {
		margin-bottom: 1.6875em;
	}

	& > div {
		display: flex;
		width: 100%;
		align-items: center;
		margin-bottom: 0.75rem;
	}
}

a {
	display: inline-block;
}

img {
	width: 48px;
	margin-right: 8px;
	border-radius: 50%;
	vertical-align: bottom;
}
</style>