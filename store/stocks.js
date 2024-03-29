import axios from 'axios'

export const state = () => ({
  marketSummary: {
    0: {
      shortName: 'S&P 500',
      regularMarketTime: {
        raw: 1637791540
      },
      regularMarketChangePercent: {
        raw: 0,
        fmt: '?.??%'
      }
    },
    1: {
      shortName: 'Nasdaq',
      regularMarketTime: {
        raw: 1637792159
      },
      regularMarketChangePercent: {
        raw: 0,
        fmt: '?.??%'
      }
    },
    2: {
      shortName: 'Dow',
      regularMarketTime: {
        raw: 1637791540
      },
      regularMarketChangePercent: {
        raw: 0,
        fmt: '?.??%'
      }
    }
  },
})

export const getters = {
  marketSummary: state => state.marketSummary,
}

export const mutations = {
  updateMarketSummary: (state, marketSummary) => {
    state.marketSummary = marketSummary
  }
}

export const actions = {
  async getMarketSummary({ state, commit }) {
    if (state.marketSummary.length) return

    try {
      let marketSummary = await axios.get(
        '/api/v6/finance/quote/marketSummary?lang=en&region=US'
      ).then((response) => {
        return response.data.marketSummaryResponse.result
      })

      commit("updateMarketSummary", marketSummary)
    } catch (error) {
      console.log(error.name, error.message)
    }
  }
}
