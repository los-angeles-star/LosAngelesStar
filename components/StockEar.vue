<template>
	<div class="stocks">
		<transition-group name="fade" tag="dl">
			<div class="market-index" :class="index == currentIndex ? '' : 'visually-hidden'" v-for="(item, index) in stocks.marketSummary" :key="item.shortName" :data-index="index">
				<dt>
					<span class="name">{{ item.shortName }}</span>
				</dt>
				<dd :class="[ 'change', item.regularMarketChangePercent >= 0 ? 'positive' : 'negative' ]">
					<span>{{ item.regularMarketChangePercent > 0 ? '+'+item.regularMarketChangePercent.toFixed(2)+'%' : item.regularMarketChangePercent.toFixed(2)+'%' }}</span>
					<svg width="5" height="9">
						<title>{{ item.shortName }}</title>
						<path v-if="item.regularMarketChangePercent > 0" fill="currentColor" d="M2 4.092h1V9H2zm2.863 0L2.5 0 .137 4.092h4.726z"/>
						<path v-if="item.regularMarketChangePercent < 0" fill="currentColor" d="M3 4.908H2V0h1v4.908zm-2.863 0L2.5 9l2.363-4.092H.137z"/>
					</svg>
				</dd>
			</div>
		</transition-group>
	</div>
</template>

<script setup lang="ts">
	import { ref, watch } from 'vue';
	import { useStocksStore } from '@/stores/stocks';

	const props = defineProps<{ attention: Boolean }>();

	const currentIndex = ref(0);
	let marketInterval: any = useInterval(() => increaseIndex(), 5000);

	const stocks = useStocksStore();
	stocks.getMarketSummary();

	function increaseIndex() {
		if (0 === currentIndex.value) stocks.getMarketSummary(); 
		// Increment the index or reset to 0 if it exceeds 2
		2 > currentIndex.value ? currentIndex.value += 1 : currentIndex.value = 0;
	}

	// watch(() => props.attention, (val) => {
	// 	if (val === false) {
	// 		clearInterval(marketInterval);
	// 	} else {
	// 		marketInterval = useInterval(() => increaseIndex(), 5000);
	// 	}
	// });
</script>

<style lang="scss" scoped>
.stocks {
	display: flex;
	flex-direction: column;
	width: 100%;
	min-width: 105px;

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
		line-height: 1.125;
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
		color: var(--color__text--dark);
		font-size: 0.75rem;
	}
	.change {
		margin: 0;
		&.positive {
			color: var(--color__info--positive);
		}
		&.negative {
			color: var(--color__info--negative);
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
	@media (prefers-reduced-motion) {
		transition: opacity 1s ease;
	}
}
.fade-enter-to,
.fade-leave-to
/* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}
.fade-move {
	transition: transform .5s;
	@media (prefers-reduced-motion) {
		transition: none;
	}
}
@media (prefers-reduced-motion) {
	.fade-move {
		transition: none 0;
	}
}
</style>  