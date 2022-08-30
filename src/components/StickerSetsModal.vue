<template>
	<div v-if="$store.state.isOpenStickerSetModal" class="popup-overlay">
		<div class="popup-window">
			<div class="popup-container">
				<p>Daily stickers set you have 3 sticker sets to open</p>
				<div class="sticker-box-container">
					<div v-for="set in stickerSetCount" :key="set" class="sticker-box">
						<div class="sticker-set">
							<p>Sticker Set</p>
						</div>
						<button
							@click="getDailyStickers"
							type="button"
							class="button">
							OPEN
						</button>
					</div>
				</div>
				<span @click="closeModal" class="close-btn">
					<img :src="closeIcon" alt="close icon">
				</span>
			</div>
		</div>
	</div>
	<StickerSet :sticker-set-data="this.stickerSetData"  />
</template>

<script>
/* eslint-disable */
import closeIcon from "../assets/icons/close-icon.svg"
import scrumTeams from "../db/scrumTeams.json"
import StickerSet from "@/components/StickerSet";
export default {
	name: "StickerSetsModal",
	components: {
		StickerSet
	},
	props: {
		stickerSetsModalProps: {}
	},
	data() {
		return {
			scrumTeams: scrumTeams,
			closeIcon: closeIcon,
			stickerSetData: [],
			isOpenStickerSetModalsss: false,
			stickerSetCount: []
		}
	},
	methods: {
		chooseDeveloperRandom: function (devCount, teams) {
			let choosenDev = []
				do {
					let teamIndex = Math.random()*teams.length //76
					teamIndex = Math.floor(teamIndex)
					let devIndex = Math.random()*10 //5
					devIndex = Math.floor(devIndex)
					let developer = teams[teamIndex].developers[devIndex]
					developer["teamName"] = teams[teamIndex].teamName
					developer["teamId"] = teams[teamIndex].teamId
					choosenDev.push(developer)
				} while (choosenDev.length < 6);
			return choosenDev
		},
		getDailyStickers: function () {
			let stickerSetDevs = this.chooseDeveloperRandom(6, this.scrumTeams)
			this.stickerSetData = stickerSetDevs
			this.$store.state.teamAlbumData = stickerSetDevs
			this.isOpenStickerSetModal = true
			this.$store.state.isOpenStickerSet = !this.$store.state.isOpenStickerSet
			event.target.parentNode.remove()
			this.$store.state.stickerSetCount.pop()
		},
		closeModal: function () {
			this.$store.state.isOpenStickerSetModal = false
		}
	},
	mounted() {
		this.stickerSetCount = this.$store.state.stickerSetCount
		if (this.stickerSetCount.length == 0) {
			this.$store.state.isOpenStickerSetModal = false
		}
	}
}
</script>

<style scoped>
.popup-overlay{
	position: fixed;
	background: rgb(44, 62, 80, .8);
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
}

.popup-window {
	border: 1px solid #2c3e50;
	border-radius: 4px;
	box-sizing: border-box;
	max-width: 80%;
	max-height: 90vh;
	overflow: auto;
}

.popup-container {
	height: 100%;
	box-sizing: border-box;
	padding: 43px 16px 16px 16px;
	background: #ffffff;
	position: relative;
}

p {
	display: block;
	padding: 0 8px;
	text-align: center;
	margin-bottom: 16px;
}

.sticker-box-container {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 12px;
	column-gap: 8px;
	flex-wrap: wrap;
}

.sticker-box {
	margin-top: 12px;
}

.sticker-set {
	border: 1px solid #2c3e50;
	width: 160px;
	height: 180px;
	background-color: #ffffff;
	margin-bottom: 12px;
}

.button {
	width: 100%;
	border: 1px solid #2c3e50;
	padding: 8px 16px;
	cursor: pointer;
}
.close-btn {
	position: absolute;
	top: 8px;
	right: 8px;
	width: 28px;
	height: 28px;
	cursor: pointer;
	overflow: hidden;
}

.close-btn img {
	max-width: 100%;
}
</style>