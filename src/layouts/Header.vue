<template>
	<div slot-scope="{ header }" class="container">
		<meta itemprop="name" content="">
		<transition name="logo" appear :duration="1500">
			<div class="flag" :class="[isLoading ? 'logo-enter' : 'loaded', '']" v-once>
	  		<h1>
	  			<g-link :to="{ name: 'home' }" itemprop="url"><img class="logo responsive" src="@/assets/los-angeles-star-logo.svg" :alt="$static.metadata.siteName" itemprop="logo"></g-link>
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
  		<g-link class="nav__link" to="/about/">About</g-link>
  	</nav>
  </div>
</template>

<static-query>
query {
	metadata {
		siteName
	}
}
</static-query>

<script>
export default {
	name: 'Header',
	props: ["isLoading", "attention"],
}
</script>

<style lang="scss">
img.responsive {
	max-width: 100%;
	height: auto;
}

.nameplate {
	text-align: center;

	.flag {
		background-color: var(--color__brand);
		transition: all 1.5s ease-in-out;

		&::before {
			content: '';
			background-color: var(--color__brand);
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			z-index: 1;
		}

		&.loading {
			&::before {
				// TBD
			}

			h1 {
				display: inline-block;
				margin-top: 0;
			}

			a {
				font-size: 6vw;
			}
		}

		&.loaded {
			&::before {
				// TBD
			}
		}

		h1 {
			margin-top: 0.65625in;
			margin-bottom: 0;
			font-family: "Old English", "Agincourt", "Fette Fraktur", "FF Brokenscript", "Lucida Blackletter", fantasy;
		}

		a {
			display: inline-block;
			text-decoration: none;
		}

		.logo {
			width: 73.81643%;

			@media screen and (min-width: 12in) {
				width: auto;
			}
		}
	}

	.dateline {
		.date {
			order: 1;
			flex: 1 0 auto;

			@media screen and (min-width: 600px) {
				order: 0;
			}
		}

		&::after {
			order: 2;
		}
	}
}

.logo-enter {
	&::before {
		height: 100vh;
	}

	h1 {
		opacity: 0;
		transform: translate3d(0, 33vh, 50px) scale(1.25);
	}
}

.logo-enter-active {
	&::before {
		animation: reveal-bottom 250ms cubic-bezier(0.4, 0.0, 0.2, 1) 1.25s backwards;
	}

	h1 {
		position: relative;
		z-index: 2;
		animation: phase-in 150ms cubic-bezier(0.0, 0.0, 0.2, 1) 0 backwards,
				zoom-out-up 250ms cubic-bezier(0.0, 0.0, 0.2, 1) 1s backwards;
	}
}

@keyframes zoom-out-up {
	0% {
		transform: translate3d(0, 33vh, 50px) scale(1.25);
	}
	50% {
		transform: translate3d(0, 33vh, 50px) scale(1.25);
	}
	100% {
		transform: translate3d(0, 0, 0) scale(1);
	}
}

@keyframes fade-in {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}

@keyframes fade-out {
	from {
		opacity: 1;
	}
	to {
		opacity: 0;
	}
}

@keyframes reveal-bottom {
	0% {
		height: 100vh;
	}
	100% {
		height: 0vh;
	}
}
</style>
