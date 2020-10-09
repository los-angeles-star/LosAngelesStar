<template>
	<div class="paper" itemscope="" itemtype="http://schema.org/Newspaper" itemid="#app">
	    <header class="site-header">
			<Header v-slot:header></Header>
	    </header>
		<transition name="fade" appear>
	    <main tabindex="-1" v-cloak>
				<slot></slot>
			</main>
		</transition>
		<footer class="site-footer">
			<small>&copy; <time datetime="1851-05-17">1851</time>&ndash;<time datetime="1864-10-01">1864</time>, <time datetime="1868-05-16">1868</time>&ndash;1879, 2019&ndash;<time :datetime="currentDate()">{{ currentYear() }}</time></small>
		</footer>
	</div>
</template>

<script>
import Header from '../layouts/Header'

export default {
	name: 'Default',
	components: {
		Header,
	},
	methods: {
    currentDate() {
      const today = new Date();
      const date = `${today.toISOString('en-US', { timeZone: 'America/Los_Angeles' })}`;
			return date;
    },
		currentYear() {
			const today = new Date();
			const date = `${today.getFullYear()}`;
			return date;
		}
  },
}
</script>

<style lang="scss">
@import "~sanitize.css";

:root {
    --color__brand: #f7f7f7;
    --color__text: #2f2f2f;
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
.site-header {
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
.nav__link {
  margin-left: 20px;
}

.article {
	max-width: 600px;
	margin: 0 auto;
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
