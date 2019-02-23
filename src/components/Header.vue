<template v-slot:header>
  <Layout>
	<meta itemprop="name" content="">
  	<div class="flag">
  		<h1>
  			<g-link :to="{ name: 'home' }" itemprop="url"><img class="logo" src="img/los-angeles-star-logo.svg" alt="Los Angeles Star" itemprop="logo"></g-link>
  		</h1>
  	</div>
  	<div class="dateline">
  		<div class="volume" itemprop="hasPart" itemscope="" itemtype="http://schema.org/PublicationVolume" itemid="#vol1"><abbr title="Volume">Vol.</abbr>&nbsp;<span itemprop="volumeNumber">1</span>.</div>
  		<div class="date">Los Angeles, <time datetime="1852-02-28" pubdate="pubdate dt-published" itemprop="datePublished">Saturday, February 28, 1852</time>.</div>
  		<div class="issue" itemprop="hasPart" itemscope="" itemtype="http://schema.org/PublicationIssue" itemid="#iss42"><abbr title="Number">No.</abbr>&nbsp;<span itemprop="issueNumber">42</span>.</div>
  	</div>
  	<nav class="nav">
  		<g-link class="nav__link" :to="{ name: 'home' }">Home</g-link>
  		<g-link class="nav__link" :to="{ name: 'about' }">About</g-link>
  	</nav>
  </Layout>
</template>

<!-- <page-query>
query Category ($path: String!) {
  wordPressCategory (path: $path) {
    title
  }
}
</page-query> -->

<script>
export default {}
</script>
