<template>
	<div slot-scope="{ header }" class="container">
		<meta itemprop="name" content="">
		<transition name="v">
		<div class="flag">
	  		<h1 v-once>
	  			<g-link :to="{ name: 'home' }" itemprop="url"><img class="logo" src="img/los-angeles-star-logo.svg" alt="Los Angeles Star" itemprop="logo"></g-link>
	  		</h1>
	  	</div>
	    </transition>
	  	<div class="dateline">
	  		<div class="volume" itemprop="hasPart" itemscope="" itemtype="http://schema.org/PublicationVolume" itemid="#vol1"><abbr title="Volume">Vol.</abbr>&nbsp;<span itemprop="volumeNumber">1</span>.</div>
	  		<div class="date">Los Angeles, <time datetime="1852-02-28" pubdate="pubdate dt-published" itemprop="datePublished">Saturday, February 28, 1852</time>.</div>
	  		<div class="issue" itemprop="hasPart" itemscope="" itemtype="http://schema.org/PublicationIssue" itemid="#iss42"><abbr title="Number">No.</abbr>&nbsp;<span itemprop="issueNumber">42</span>.</div>
	  	</div>
	  	<nav class="nav">
	  		<g-link class="nav__link" :to="{ name: 'home' }">Home</g-link>
	  		<g-link class="nav__link" :to="{ name: 'about' }">About</g-link>
	  	</nav>
  </div>
</template>

<static-query>
query Header {
  header: Header (path: "/layouts/Header") {
    content
  }
}
</static-query>

<script>
export default {
	name: 'Header',
}
</script>

<style>
.v-enter-active {
  animation: bounce-in .5s;
}
.v-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
