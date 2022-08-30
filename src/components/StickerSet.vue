<template>
	<div v-if="$store.state.isOpenStickerSet" class="album-container popup">
		<div class="album-inner">
			<p>Sticker set has opened you have 6 new stickers</p>
			<div class="image-container">
				<div v-for="sticker in stickerSetData" :key="sticker.teamId" class="image-box">
					<img :src="sticker.picture.large" alt="sticker-image">
					<p>{{sticker.name.first + " " + sticker.name.last}}</p>
					<p>{{sticker.teamName}}</p>
					<p>{{sticker.registered.age}} Yıl</p>
				</div>
			</div>
			<div class="button-container right-align">
				<button
					@click="pasteYourAlbum"
					type="button">
					Paste to Your Album
				</button>
			</div>
			<span @click="closeModal" class="close-btn">
				<img :src="closeIcon" alt="close icon">
			</span>
		</div>
	</div>
</template>

<script>
/* eslint-disable */
import closeIcon from '../assets/icons/close-icon.svg'
export default {
	name: "StickerSet",
	props: {
		stickerSetData: []
	},
	data() {
		return {
			closeIcon: closeIcon
		}
	},
	methods: {
		closeModal: function () {
			this.$store.state.isOpenStickerSet = false
		},
		pasteYourAlbum: function () {
			this.$router.push("/team-album")
		}
	},
	computed: {
		isOpenStickerSet() {return this.$state.store.isOpenStickerSet}
	}
}
</script>

<style scoped>
	.popup {
		position: fixed;
		top: 0;
		left: 0;
		width: 80vw;
		height: 60vh;
		overflow: auto;
		background: #fff;
		box-shadow: 0 0 8px -3px #000;
		border-radius: 6px;
		transform: translate(10%, 20%);
	}
	
	.album-inner {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 32px;
		position: relative;
	}
	
	p {
		margin: 0 0 16px 0;
		padding: 0;
		display: block;
	}
	
	.image-container {
		display: flex;
		justify-content: center;
		align-items: center;
		column-gap: 8px;
		margin: 8px;
		box-sizing: content-box;
		flex-direction: row;
		flex-wrap: wrap;
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