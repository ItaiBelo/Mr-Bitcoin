<script>
	import { bitcoinService } from '../services/bitcoin.service.js';
	import btcLogo from '../assets/images/BTC.png';
	import ethLogo from '../assets/images/ETH.png';
	import bnbLogo from '../assets/images/BNB.png';
	import xrpLogo from '../assets/images/XRP.png';
	import maticLogo from '../assets/images/MATIC.png';
	export default {
		data() {
			return {
				coinsData: [],
			};
		},
		methods: {
			async getLogo(symbol) {
				return await require('../assets/' + symbol + '.png');
			},
			coinClick(coin) {
				console.log(coin);
			},
		},
		components: {},
		async mounted() {
			const coinsPrices = await bitcoinService.getMarketPriceHistory();
			this.coinsData = [
				{ symbol: 'BTC', price: coinsPrices.BTC.USD, src: btcLogo },
				{ symbol: 'ETH', price: coinsPrices.ETH.USD, src: ethLogo },
				{ symbol: 'BNB', price: coinsPrices.BNB.USD, src: bnbLogo },
				{ symbol: 'XRP', price: coinsPrices.XRP.USD, src: xrpLogo },
				{ symbol: 'MATIC', price: coinsPrices.MATIC.USD, src: maticLogo },
			];
		},
	};
</script>

<template>
	<div class="home-main-page">
		<div class="home-content-container">
			<section class="login-section">
				<h1 class="login-section-title">
					Buy, trade, and hold 350+ cryptocurrencies on Mr. Bitcoin
				</h1>
				<div class="login-btns">
					<h3>Transfer Bitcoin for Free</h3>
					<div class="sign-up-button-container">
						Sign up with Email or Phone
					</div>
					<div class="separator">
						<div class="separator-line"></div>
						<div class="separator-text">or continue with</div>
						<div class="separator-line"></div>
					</div>
					<div class="sign-in-btns-container">
						<button>
							<img src="../assets/images/google-logo.png" alt="" />
							Google
						</button>
						<button>
							<img src="../assets/images/apple-logo.png" alt="" />
							Apple
						</button>
					</div>
				</div>
			</section>
			<section class="coins-values-section">
				<header class="coin-cards-header">
					<span>Name</span>
					<span>Last price</span>
				</header>
				<div
					v-for="coin in this.$data.coinsData"
					@click="coinClick(coin)"
					class="coin-cards-container"
					:key="coin.symbol">
					<div class="coin-card">
						<div class="coin-card-inner-container">
							<img :src="coin.src" alt="" />
							<span>
								{{ coin.symbol }}
							</span>
						</div>
						<span>
							{{ coin.price }}
						</span>
					</div>
				</div>
			</section>
		</div>
		<footer class="home-footer">
			<div class="footer-text-card">
				<h1 class="text-card-title">$38 billion</h1>
				<span class="text-card-text">Last 24h trading volume</span>
			</div>
			<div class="footer-text-card">
				<h1 class="text-card-title">350+</h1>
				<span class="text-card-text">Cryptocurrencies listed</span>
			</div>
			<div class="footer-text-card">
				<h1 class="text-card-title">120 million</h1>
				<span class="text-card-text">Registered users</span>
			</div>
			<div class="footer-text-card">
				<h1 class="text-card-title">0.10%</h1>
				<span class="text-card-text">Lowest transaction fees</span>
			</div>
		</footer>
	</div>
</template>
