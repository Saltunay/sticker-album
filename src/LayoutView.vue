<template>
		<div class="landing-page">
			<div class="landing-poster">
				<p>Sticker Album</p>
			</div>
			<div class="button-group position-fixed">
				<button
					@click="openStickerSetModal"
					type="button"
					class="button primary">
					<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 218.166 218.166" style="enable-background:new 0 0 218.166 218.166;" xml:space="preserve">
<g>
	<g>
		<g>
			<path d="M91.233,148.75h-83.3V17.85h166.6V83.3c0,2.192,1.774,3.967,3.967,3.967s3.967-1.774,3.967-3.967V13.883
				c0-2.192-1.774-3.967-3.967-3.967H3.967C1.774,9.917,0,11.691,0,13.883v138.833c0,2.192,1.774,3.967,3.967,3.967h87.267
				c2.192,0,3.967-1.774,3.967-3.967C95.2,150.524,93.426,148.75,91.233,148.75z"/>
			<path d="M91.233,132.883H23.8v-24.141l20.232-20.232l27.003,19.806c1.522,1.119,3.626,1.007,5.02-0.271l42.316-38.633
				l17.234,24.125c1.271,1.782,3.75,2.196,5.532,0.922c1.782-1.271,2.196-3.75,0.922-5.532L122.226,61.16
				c-0.658-0.926-1.681-1.522-2.808-1.639c-1.115-0.12-2.255,0.248-3.091,1.015l-43.219,39.46L45.981,80.1
				c-1.58-1.158-3.769-0.992-5.152,0.395L23.8,97.524V33.717h134.867V83.3c0,2.192,1.774,3.967,3.967,3.967
				c2.192,0,3.967-1.774,3.967-3.967V29.75c0-2.192-1.774-3.967-3.967-3.967h-142.8c-2.192,0-3.967,1.774-3.967,3.967v107.1
				c0,2.192,1.774,3.967,3.967,3.967h71.4c2.192,0,3.967-1.774,3.967-3.967C95.2,134.659,93.426,132.883,91.233,132.883z"/>
			<path d="M162.633,97.183c-30.621,0-55.533,24.912-55.533,55.533c0,30.621,24.912,55.533,55.533,55.533
				c30.621,0,55.533-24.912,55.533-55.533C218.166,122.095,193.255,97.183,162.633,97.183z M162.633,200.318
				c-26.248,0-47.6-21.352-47.6-47.6s21.352-47.6,47.6-47.6s47.6,21.352,47.6,47.6C210.233,178.966,188.882,200.318,162.633,200.318
				z"/>
			<polygon points="166.6,120.983 158.667,120.983 158.667,148.75 130.9,148.75 130.9,156.683 158.667,156.683 158.667,184.451
				166.6,184.451 166.6,156.683 194.367,156.683 194.367,148.75 166.6,148.75 			"/>
			<path d="M43.633,57.517c0,8.751,7.116,15.867,15.867,15.867s15.867-7.116,15.867-15.867c0-8.751-7.116-15.867-15.867-15.867
				S43.633,48.766,43.633,57.517z M67.433,57.517c0,4.373-3.56,7.933-7.933,7.933s-7.933-3.56-7.933-7.933
				c0-4.373,3.56-7.933,7.933-7.933S67.433,53.144,67.433,57.517z"/>
		</g>
	</g>
</g>
						<g>
</g>
						<g>
</g>
						<g>
</g>
						<g>
</g>
						<g>
</g>
						<g>
</g>
						<g>
</g>
						<g>
</g>
						<g>
</g>
						<g>
</g>
						<g>
</g>
						<g>
</g>
						<g>
</g>
						<g>
</g>
						<g>
</g>
</svg>
				</button>
			</div>
		</div>
		<StickerSetsModal />
</template>

<script>
/* eslint-disable */
import scrumTeams from './db/scrumTeams.json'
import StickerSetsModal from "@/components/StickerSetsModal";
export default {
	name: 'LayoutView',
	components: {
		StickerSetsModal
	},
	data() {
		return {
			scrumTeams: scrumTeams,
			stickerSetsModalProps: {
				dailySets: []
			}
		}
	},
	methods: {
		openStickerSetModal: function () {
			this.$store.state.isOpenStickerSetModal = !this.$store.state.isOpenStickerSetModal
		}
	},
	mounted() {
		console.log(this.scrumTeams)
	},
	computed: {
		//isOpenStickerSetModal() {return this.$store.state.isOpenStickerSetModal}
	}
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	display: block;
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
	overflow: hidden;
}

div#app > div {
	width: 100%;
	height: 100%;
	overflow: hidden;
}

html,body {
	margin: 0;
	padding: 0;
	overflow: hidden;
}

body {
	width: 100vw;
	height: 100vh;
	overflow: hidden;
}

p {
	margin: 0;
	padding: 0;
}

a {
	text-decoration: none;
	color: inherit;
}

.landing-page {
	height: 100%;
}

.landing-poster {
	width: 60%;
	margin: 24px auto;
	height: calc(100% - 48px);
	border: 1px solid #2c3e50;
	border-radius: 2px;
	display: flex;
	justify-content: end;
	align-items: end;
	padding: 12px;
	box-sizing: border-box;
}

.button-group.position-fixed {
	position: fixed;
	bottom: 24px;
	right: 16px;
	border-radius: 50%;
	box-shadow: 0 0 #2c3e50;
	width: 48px;
	height: 48px;
}

.button.primary {
	outline: none;
	border: 0;
	border-radius: 50%;
	cursor: pointer;
	width: 100%;
	height: 100%;
	overflow: hidden;
	background: transparent;
}

</style>
