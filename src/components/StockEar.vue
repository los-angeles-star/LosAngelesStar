<template>
  <div class="stocks">
    <transition-group name="fade" tag="dl">
      <div class="market-index" v-for="(item, index) in markets" :key="item.shortName" :data-index="index" v-show="index == currentIndex">
        <dt>
          <span class="name">{{ item.shortName }}</span>
        </dt>
        <dd :class="[ 'change', item.regularMarketChangePercent.raw >= 0 ? 'positive' : 'negative' ]">
          <span>{{ item.regularMarketChangePercent.raw > 0 ? '+'+item.regularMarketChangePercent.raw : item.regularMarketChangePercent.raw }}%</span>
          <svg width="5" height="9">
            <title>{{ item.shortName }}</title>
            <path v-if="item.regularMarketChangePercent.raw > 0" fill="currentColor" d="M2 4.092h1V9H2zm2.863 0L2.5 0 .137 4.092h4.726z"/>
            <path v-if="item.regularMarketChangePercent.raw < 0" fill="currentColor" d="M3 4.908H2V0h1v4.908zm-2.863 0L2.5 9l2.363-4.092H.137z"/>
          </svg>
        </dd>
      </div>
    </transition-group>
  </div>
</template>

<script>
import axios from 'axios'

const data = {
  currentIndex: 0,
  marketInterval: null,
  markets: {
    0: {
      shortName: 'S&P 500',
      regularMarketTime: {
        raw: 1637791540
      },
      regularMarketChangePercent: {
        raw: 0.72
      }
    },
    1: {
      shortName: 'Nasdaq',
      regularMarketTime: {
        raw: 1637792159
      },
      regularMarketChangePercent: {
        raw: -1.0
      }
    },
    2: {
      shortName: 'Dow',
      regularMarketTime: {
        raw: 1637791540
      },
      regularMarketChangePercent: {
        raw: -1.26
      }
    }
  }
}

export default {
	name: 'stock-ticker',
	data () {
		return data
	},
  props: {
    attention: Boolean
  },
  mounted() {
    this.marketInterval = setInterval( () => {
      2 > this.currentIndex ? this.currentIndex += 1 : this.currentIndex = 0;
    }, 5000);

    this.getMarkets();
  },
  watch: {
    attention: function (val, oldVal) {
      if ( val === false ) {
        clearInterval(this.marketInterval)
      } else {
        this.marketInterval = setInterval( () => {
          2 > this.currentIndex ? this.currentIndex += 1 : this.currentIndex = 0;
        }, 5000);
      }
    }
  },
  methods: {
    async getMarkets() {
      try {
        const results = await axios.get(
          'https://query1.finance.yahoo.com/v6/finance/quote/marketSummary?lang=en&region=US'
        )

        console.log(this.results)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.stocks {

  dl {
    height: 1.125em;
    max-height: 1.15em;
    overflow: hidden;
    margin: 0;
    position: relative;
  }

  .market-index {
    position: absolute;
    display: flex;
    -moz-box-pack: justify;
    justify-content: space-between;
    -moz-box-align: baseline;
    align-items: baseline;
    padding: 3px 0px 4px;
    opacity: 1;
    // animation: 0s ease 0s 1 normal none running none;

    @media screen and (min-width: 1070px) {
      -moz-box-align: baseline;
      align-items: baseline;
      opacity: 1;
      flex-direction: row;
      padding: 0px;
      // animation: 5s ease 0s 1 normal forwards running animation-7y3qfv;
      display: flex;
      width: 100%;
    }
  }

  .name {
    color: rgb(18, 18, 18);
    font-size: 0.75rem;
  }

  .change {
    margin: 0;

    &.positive {
      color: #3a7f36;
    }

    &.negative {
      color: rgb(166, 27, 30);
    }

    span {
      font-size: 0.75rem;
      margin-right: 5px;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-to,
.fade-leave-to
/* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.fade-move {
  transition: transform .5s;
}

@media (prefers-reduced-motion) {
  .fade-move {
    transition: none 0;
  }
}
</style>
