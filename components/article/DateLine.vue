<template>
  <div>
    <time :datetime="date">
      <span v-html="currentDate(date)">{{ $t('article.dateline.today') }}</span>
    </time>
    <time :datetime="modified">
      <span>{{ $t('article.dateline.updated') }} <span v-html="currentDate(modified)">12:00 p.m. PT</span></span>
    </time>
  </div>
</template>

<script>
export default {
  props: {
    date: String,
    modified: String
  },
  methods: {
    currentDate(d) {
      const postDate = new Date(d);
      const date = `${postDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'America/Los_Angeles'
      })}`;
			return date;
    }
  },
}
</script>

<style lang="scss" scoped>
$content--width: 688px;

div {
  max-width: $content--width;
  margin-left: calc((100% - $content--width) / 2);
}

time {
  text-transform: uppercase;
  font-size: 0.8125em;
  letter-spacing: 1px;
}
</style>
