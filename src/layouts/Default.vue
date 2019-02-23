<template>
<div class="paper" itemscope="" itemtype="http://schema.org/Newspaper" itemid="#app">
    <header class="site-header">
		<slot name="header"></slot>
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
    </header>
	<transition name="fade" appear>
    <main>
		<slot></slot>
	</main>
	</transition>
	<footer class="site-footer">
		<small>&copy; <time datetime="1851-05-17">1851</time>&ndash;<time datetime="1864-10-01">1864</time>, <time datetime="1868-05-16">1868</time>&ndash;1879, 2019</small>
	</footer>
</div>
</template>

<!-- <page-query>
query All {
  metaData {
    siteName
  }
}
</page-query> -->

<style lang="scss">
@import "~sanitize.css";
@import url('https://fonts.googleapis.com/css?family=Old+Stand+TT');

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
	text-align: center;

	.flag {
		h1 {
			margin-top: 0.65625in;
			margin-bottom: 0;
		}

		a {
			display: inline-block;
		}
	}

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

.fade-enter-active {
  transition: opacity .5s;
}

.fade-enter {
  opacity: 0;
}
</style>
