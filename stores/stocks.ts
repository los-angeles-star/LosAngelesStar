import { defineStore } from 'pinia';
import yahooFinance from 'yahoo-finance2';

// Define the structure of a single market summary item
interface MarketSummaryItem {
  shortName: string;
  regularMarketTime: number;
  regularMarketChangePercent: number;
}

// Define the structure of the market summary
type MarketSummary = MarketSummaryItem[];

export const useStocksStore = defineStore('stocks', {
	// convert to a function
	state: () => {
		return {
			marketSummary: [
				{
					shortName: 'S&P 500',
					regularMarketTime: 1637791540,
					regularMarketChangePercent: 0,
				},
				{
					shortName: 'Nasdaq',
					regularMarketTime: 1637792159,
					regularMarketChangePercent: 0,
				},
				{
					shortName: 'Dow',
					regularMarketTime: 1637791540,
					regularMarketChangePercent: 0,
				}
			] as MarketSummary
		}
	},
	actions: {
		async getMarketSummary() {
			try {
				const response = await yahooFinance.quote(['^GSPC', '^IXIC', '^DJI']);

				const marketSummary: MarketSummary = response.map(item => ({
          shortName: item.shortName || 'Unknown', // Provide a default value if undefined
          regularMarketTime: item.regularMarketTime ? Date.parse(item.regularMarketTime?.toString()) : 0,
          regularMarketChangePercent: item.regularMarketChangePercent || 0,
        }));

				this.updateMarketSummary(marketSummary);
			} catch (error: unknown) {
				if (error instanceof Error) {
					console.log(error.name, error.message);
				}
			}
		},
		updateMarketSummary(marketSummary: MarketSummary) {
			this.marketSummary = marketSummary;
		}
	},
	// hydrate(state, initialState) {
	// 	state.marketSummmary = this.getMarketSummary();
	// }
});