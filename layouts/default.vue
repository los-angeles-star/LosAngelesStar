<template>
	<div :class="[ 'paper', attention ? '' : 'idle' ]" itemscope="" itemtype="http://schema.org/Newspaper" itemid="#app">
		<header class="nameplate">
		<Header v-slot:header :attention="attention"></Header>
		</header>
		<transition name="fade" appear>
			<main tabindex="-1" v-cloak>
				<nuxt />
			</main>
		</transition>
		<footer class="site-footer">
			<Footer v-slot:footer></Footer>
		</footer>
	</div>
</template>

<script>
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'

const data = { attention: true }
export default {
	name: 'Default',
	components: {
		Header,
		Footer
	},
	data () {
		return data
	},
	computed: {
		metadata() {
			return this.$store.metadata;
		},
	},
	created() {
		this.$store.dispatch("getMeta");
	},
	methods: {
		onFocus: function () {
			return this.attention = true
		},
		onBlur: function () {
			return this.attention = false
		}
	},
	created () {
		if (typeof window !== "undefined") {
			// Active
			window.addEventListener( 'focus', this.onFocus )
			// Inactive
			window.addEventListener( 'blur', this.onBlur )
		}
	},
	destroyed: function () {
		if (typeof window !== "undefined") {
			window.removeEventListener( 'focus', this.onFocus )
			window.removeEventListener( 'blur', this.onBlur )
		}
	}
}
</script>

<style lang="scss">
:root {
		--color__brand: #f7f7f7;
		--color__text: #2f2f2f;
		--color__text--dark: #121212;
		--color__text--light: #717171;
		--color__border: var(--color__text);
		--color__process-cyan: #00b7eb;
		--color__process-magenta: #cc006b;
		--color__process-yellow: #fff10c;
		--color__process-black: #000;
}
html {
	font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif
}
body {
	font-family: "Old Standard TT", Times, "Times New Roman", serif;
	background-color: var(--color__brand);
}
main strong {
	font-weight: normal;
	font-variant: small-caps;
}
.paper {
	box-sizing: border-box;
	background-color: var(--color__brand);
	max-width: 12in;
	margin: 0 auto;
	padding: 1em;
	@media all and (min-width: 12in) {
		padding: 0.5in;
	}
}
.columns {
	columns: 2;
	column-width: 17em;
	column-gap: 0.08in;
	column-rule: 1px solid var(--color__text);
	@media all and (min-width: 12in) {
		columns: 5;
		column-width: auto;
	}
}
.nameplate {
	.dateline {
			display: flex;
			align-items: center;
			justify-content: space-between;
			flex-wrap: wrap;
			text-transform: uppercase;
			border-top: 2px solid var(--color__border);
			border-bottom: 1px solid var(--color__border);
			letter-spacing: -0.28px;
		&::before,
		&::after {
			content: '';
			width: 100%;
			height: 0.1em;
			flex: 0 0 100%;
			border: 0px solid var(--color__border);
		}
		&::before {
			border-bottom-width: 1px;
		}
		&::after {
			border-top-width: 2px;
			margin-bottom: 1px;
		}
		.volume {
			@media all and (min-width: 12in) {
				padding-left: 0.25in;
			}
		}
		.issue {
			@media all and (min-width: 12in) {
				padding-right: 0.25in;
			}
		}
		@media all and (min-width: 12in) {
			line-height: 0.3875in;
			font-size: 16pt;
			margin-bottom: 0.03in;
		}
	}
}
.entry-title {
	text-align: center;
}
.entry-summary {
	text-align: justify;
}
.nav {
	position: absolute;
	top: 6px;
	left: 0;
	width: 100%;
}
.nav__link {
	display: inline-block;
	margin-left: 20px;
	line-height: 34px;
}
.article {
	max-width: 600px;
	margin: 0 auto;
}
.visually-hidden,
.visually-hidden-focusable:not(:focus):not(:focus-within) {
	position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important; // Fix for https://github.com/twbs/bootstrap/issues/25686
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}
.fade-enter-active {
	animation: coming 1s;
	animation-delay: .5s;
	opacity: 0;
}
.fade-leave-active {
	animation: going 1s;
}
@keyframes going {
	from {
		transform: translate3d(0, 0, 0);
	}
	to {
		transform: translate3d(0, 50px, 0);
		opacity: 0;
	}
}
@keyframes coming {
	from {
		transform: translate3d(0, 50px, 0);
		opacity: 0;
	}
	to {
		transform: translate3d(0, 0, 0);
		opacity: 1;
	}
}
[v-cloak] {
	display: none;
}
</style>
