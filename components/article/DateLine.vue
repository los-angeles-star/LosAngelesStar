<template>
  <div>
    <time :datetime="date">
      <span v-html="$d( new Date(date), 'short' )" itemprop="datePublished">{{ $t('article.dateline.today') }}</span>
    </time>
    <time :datetime="modified">
      <span>{{ $t('article.dateline.updated') }} <span v-html="$d( new Date(modified), 'short' )" itemprop="dateModified">12:00 p.m. PT</span></span>
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
