<template>
	<div class="article-dateline">
		<time :datetime="date">
			<span itemprop="datePublished">{{ $d( new Date(date), 'short' ) || $t(article.dateline.today) }}</span>
		</time>
		<time :datetime="modified">
			<span>{{ $t('article.dateline.updated') }} <span itemprop="dateModified">{{ $d( new Date(modified), 'short' ) || "12:00 p.m. PT" }}</span></span>
		</time>
	</div>
</template>
  
<script>
export default {
  props: {
    date: String,
    modified: String
  },
}
</script>
  
<style lang="scss" scoped>
$content--width: 688px;

div {
  max-width: $content--width;
  margin-left: calc((100% - $content--width) / 2);
  margin-bottom: 8px;
}

time {
  text-transform: uppercase;
  font-size: 0.8125em;
  letter-spacing: 1px;
}
</style>  