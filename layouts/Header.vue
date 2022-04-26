<template>
	<div slot-scope="{ header }" class="container">
		<meta itemprop="name" content="$store.state.metadata.description">
		<transition name="logo" appear :duration="1500">
			<div class="flag" :class="[isLoading ? 'logo-enter' : 'loaded', '']" v-once>
	  		<h1>
	  			<NuxtLink :to="localePath({ name: 'index' })" itemprop="url">
						<img class="logo responsive" src="@/assets/los-angeles-star-logo.svg" :alt="$store.state.metadata.name" itemprop="logo">
					</NuxtLink>
	  		</h1>
	  	</div>
    </transition>
		<section id="masthead-bar">
			<div class="ear left"></div>
			<div class="ear right">
				<WeatherEar  :attention="attention" :key="componentKey" />
				<StockEar :attention="attention" />
			</div>
		</section>
  	<div class="dateline">
  		<div class="volume" itemprop="hasPart" itemscope="" itemtype="http://schema.org/PublicationVolume" itemid="#vol1"><abbr :title="$t('dateline.volume')">{{ $t('dateline.vol') }}</abbr>&nbsp;<span itemprop="volumeNumber">1</span>.</div>
  		<div class="date">{{ $t('los_angeles') }}, <time datetime="1852-02-28" pubdate="pubdate dt-published" itemprop="datePublished">{{ $d( new Date(1852, 1, 28), 'long' ) }}</time>.</div>
  		<div class="issue" itemprop="hasPart" itemscope="" itemtype="http://schema.org/PublicationIssue" itemid="#iss42"><abbr :title="$t('dateline.number')">{{ $t('dateline.no') }}</abbr>&nbsp;<span itemprop="issueNumber">42</span>.</div>
  	</div>
  	<nav class="nav">
  		<NuxtLink class="nav__link" :to="localePath({ name: 'index' })">{{ $t('home') }}</NuxtLink>
  		<NuxtLink class="nav__link" to="/about/">{{ $t('about') }}</NuxtLink>
			<NuxtLink v-for="lang in $i18n.locales" :key="lang.code" class="nav__link" :to="switchLocalePath(lang.code)">{{ lang.name }}</NuxtLink>
  	</nav>
  </div>
</template>

<script>
import WeatherEar from '~/components/WeatherEar.vue'
import StockEar from '~/components/StockEar.vue'

export default {
	name: 'Header',
	props: ["isLoading", "attention"],
	data () {
		return {
			componentKey: 0,
		}
	},
	components: {
		WeatherEar,
		StockEar
	},
	watch: {
		attention: function (val, oldVal) {
			if ( val === true ) {
				this.componentKey += 1
			}
		}
	},
}
</script>

<style lang="scss">
img.responsive {
	max-width: 100%;
	height: auto;
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
		@media (prefers-reduced-motion) {
			animation: fade-out 250ms cubic-bezier(0.4, 0.0, 0.2, 1) 1.25s backwards;
		}
	}
	h1 {
		position: relative;
		z-index: 2;
		animation: phase-in 150ms cubic-bezier(0.0, 0.0, 0.2, 1) 0 backwards,
				zoom-out-up 250ms cubic-bezier(0.0, 0.0, 0.2, 1) 1s backwards;
		@media (prefers-reduced-motion) {
			animation: none;
		}
	}
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
		@media (prefers-reduced-motion) {
			transition: none;
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

	section {
		display: flex;
		align-items: center;
		justify-content: space-around;
		font-size: 11px;
		padding: 13px 20px 12px;
		border-bottom: 1px solid #e2e2e2;

		@media screen and (min-width: 740px) {
			position: relative;
		}

		@media screen and (min-width: 1024px) {
			align-items: flex-end;
			justify-content: space-between;
			border: none;
			padding: 0;
			height: 0;
			transform: translateY(-18px);
		}
	}

	.ear.right {
		display: none;

		@media screen and (min-width: 1024px) {
			display: unset;
		}
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
