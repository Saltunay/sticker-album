<template>
	<div v-for="team in teamInfo" :key="team.teamId" class="team-container">
		<div class="left">
			<div>
				<div class="img-box">
					<img src="" alt="Team logo">
				</div>
				<div>
					<h3>{{team.teamName}}</h3>
					<h4>Lorem ipsum dolor</h4>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
						molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
						numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
						optio, eaque rerum! </p>
				</div>
			</div>
			<div>
				<div class="personal-box">
					<div class="pers-sticker-box">
						<img v-if="team.hasLeadPic" src="" alt="Blank Image">
						<div v-else>Blank Image</div>
					</div>
					<p>{{team.teamLead}}</p>
					<p>Team Lead</p>
				</div>
				<div class="personal-box">
					<div class="pers-sticker-box">
						<img v-if="team.hasLeadPic" src="" alt="Blank Image">
						<div v-else>Blank Image</div>
					</div>
					<p>{{team.productOwn}}</p>
					<p>Sr Product Owner</p>
				</div>
			</div>
		</div>
		<div class="right">
			<div>
				<div v-for="developer in team.developers" :key="developer.name.first" class="personal-box">
					<div class="pers-sticker-box">
						<img v-if="developer.isChosen" :src="developer.picture.medium" alt="Blank Image">
						<div v-else>Blank Image</div>
					</div>
					<p>{{developer.name.first + " " + developer.name.last}}</p>
					<p>Software Developer</p>
					<p>{{developer.registered.age}} Yıl</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
/* eslint-disable */
import scrumTeams from "../db/scrumTeams.json"
export default {
	name: "TeamAlbum",
	data() {
		return {
			scrumTeams: scrumTeams,
			albumData: [],
			teamInfo: []
		}
	},
	mounted() {
		debugger
		this.albumData = this.$store.state.teamAlbumData
		let chosenTeam = this.scrumTeams[this.scrumTeams.findIndex((teamItem) => teamItem["teamId"] == this.albumData[0].teamId)]
		this.teamInfo.push(chosenTeam)
	}
}
</script>

<style scoped>
h3 {
	margin: 0;
}

h4 {
	margin: 0;
}

.team-container:after {
	content: "";
	clear: both;
	display: block;
}

.team-container > div {
	width: calc(50% - 6px);
	border: thin solid;
	display: inline-block;
	vertical-align: top;
	height: 100%;
	overflow: auto;
	box-sizing: border-box;
	padding: 8px;
}

.team-container > div:first-child {
	margin-right: 8px;
	margin-bottom: 8px;
}

.team-container {
	box-sizing: border-box;
	padding: 16px;
}

.team-container > div.left > div:first-child > * {
	display: inline-block;
	vertical-align: top;
	box-sizing: border-box;
	margin: 0 !important;
	width: calc(100% - 129px);
}

.team-container > div.left > div:first-child:after {
	content: "";
	clear: both;
	display: block;
}

.team-container > div.left > div:first-child > .img-box {
	width: 120px;
	height: 180px;
	border: 1px solid;
	margin: 0 8px 0 0 !important;
}

.team-container > div.left > div:last-child {
	display: flex;
	flex-wrap: wrap;
	-moz-column-gap: 8px;
	column-gap: 8px;
	margin-top: 24px;
	justify-content: space-evenly;
}

.team-container .personal-box {
	width: 120px;
	height: auto;
	display: block;
	margin-bottom: 8px;
}

.team-container .personal-box .pers-sticker-box {
	width: 120px !important;
	border: 1px solid;
	height: 120px;
}

.team-container .personal-box .pers-sticker-box > img {
	max-width: 100%;
}

.team-container > div.right > div {
	display: flex;
	column-gap: 12px;
	flex-wrap: wrap;
}

</style>