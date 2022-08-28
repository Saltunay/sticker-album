<template>
	<div>
		<div class="landing-page">
			<div class="landing-poster">
				<p>Sticker Album</p>
			</div>
			<div class="button-group position-fixed">
				<button
					@click="openStickerSetModal"
					type="button"
					class="button primary">
					Get Your Daily Stickers
				</button>
			</div>
		</div>
		<StickerSetsModal />
	</div>
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
	max-width: calc(100% - 500px);
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
}

.button.primary {
	outline: none;
	border: 1px solid #2c3e50;
	padding: 8px 24px;
	border-radius: 2px;
	width: 190px;
	cursor: pointer;
}

</style>
