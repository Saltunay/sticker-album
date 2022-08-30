<template>
	<div v-for="(team, index) in teamInfo" :key="team.teamId" data-index="0" :class="cssClass">
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
		<span class="pagination">{{index + 1}} / {{teamInfo.length}}</span>
	</div>
	<span @click="nextAlbum" class="next-button">
		<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
			<g>
				<g>
					<path d="M256,0C114.62,0,0,114.62,0,256s114.62,256,256,256s256-114.62,256-256S397.38,0,256,0z M256,486.4 C128.956,486.4,25.6,383.044,25.6,256S128.956,25.6,256,25.6S486.4,128.956,486.4,256S383.044,486.4,256,486.4z"/>
				</g>
			</g>
			<g>
				<g>
					<path d="M341.854,246.955l-128-128.009c-5.001-5.001-13.099-5.001-18.099,0c-5.001,5-5.001,13.099,0,18.099L314.701,256 L195.746,374.946c-5.001,5-5.001,13.099,0,18.099c2.5,2.509,5.777,3.755,9.054,3.755c3.277,0,6.554-1.246,9.054-3.746l128-128 C346.854,260.053,346.854,251.955,341.854,246.955z"/>
				</g>
			</g>
			<g></g>
<g></g>
<g></g>
<g></g>
<g></g>
<g></g>
<g></g>
<g></g>
<g></g>
<g></g>
<g></g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
	</span>
	<span @click="prevAlbum" class="prev-button">
		<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
			<g>
				<g>
					<path d="M256,0C114.62,0,0,114.62,0,256s114.62,256,256,256s256-114.62,256-256S397.38,0,256,0z M256,486.4 C128.956,486.4,25.6,383.044,25.6,256S128.956,25.6,256,25.6S486.4,128.956,486.4,256S383.044,486.4,256,486.4z"/>
				</g>
			</g>
			<g>
				<g>
					<path d="M341.854,246.955l-128-128.009c-5.001-5.001-13.099-5.001-18.099,0c-5.001,5-5.001,13.099,0,18.099L314.701,256 L195.746,374.946c-5.001,5-5.001,13.099,0,18.099c2.5,2.509,5.777,3.755,9.054,3.755c3.277,0,6.554-1.246,9.054-3.746l128-128 C346.854,260.053,346.854,251.955,341.854,246.955z"/>
				</g>
			</g>
			<g></g>
<g></g>
<g></g>
<g></g>
<g></g>
<g></g>
<g></g>
<g></g>
<g></g>
<g></g>
<g></g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
	</span>
</template>

<script>
/* eslint-disable */
import scrumTeams from "../db/scrumTeams.json"
export default {
	name: "TeamAlbum",
	components: {
	},
	data() {
		return {
			scrumTeams: scrumTeams,
			albumData: [],
			teamInfo: [],
			cssClass: "team-container",
		}
	},
	methods: {
		nextAlbum: () => {
			debugger
			//çizilen takım sayısı kadar div alındı
			let teamDOMElems = document.querySelectorAll(".team-container")
			//teamDOMElems NodeArray olduğu için array method kullanılamıyor
			//bu yüzden array içerisine atıldı her bir node
			let elems = []
			teamDOMElems.forEach((elem) => {
				elems.push(elem)
			})
			
			//başlangıçta opacity 1(diğer elemanlar 0 -> gizli) olan ilk eleman gizlendi
			let currentElem = document.querySelector(".current")
			
			//current alacak nesne last child mi last child ise başa dön
			if (elems[elems.findLastIndex((elem) => elem)].classList.contains("current")){
				teamDOMElems.forEach((item) => {
					item.classList.remove("current")
				})
				teamDOMElems[0].classList.add("current")
			}else {
				teamDOMElems.forEach((item) => {
					item.classList.remove("current")
				})
				//current null mı? null ise ilk nesne current idi. currentı index 1e ver
				//current null değilse geçerli current'dan sonraki nesneye ver
				if (currentElem == null){
					teamDOMElems[0].style.opacity = 0
					teamDOMElems[1].classList.add("current")
				}else {
					currentElem.nextElementSibling.classList.add("current")
				}
			}
			
		},
		
		prevAlbum: () => {
			debugger
			//çizilen takım sayısı kadar div alındı
			let teamDOMElems = document.querySelectorAll(".team-container")
			//teamDOMElems NodeArray olduğu için array method kullanılamıyor
			//bu yüzden array içerisine atıldı her bir node
			let elems = []
			teamDOMElems.forEach((elem) => {
				elems.push(elem)
			})
			
			//başlangıçta opacity 1(diğer elemanlar 0 -> gizli) olan ilk eleman gizlendi
			let currentElem = document.querySelector(".current")
			
			if (currentElem !== null && teamDOMElems[0] !== currentElem){
				teamDOMElems.forEach((item) => item.classList.remove("current"))
				currentElem.previousElementSibling.classList.add("current")
			}
		}
	},
	mounted() {
		//seçilen developerlar
		this.albumData = this.$store.state.teamAlbumData
		
		let chosenTeam = []
		//seçilen takımlar
		this.albumData.forEach((team) => {
			chosenTeam.push(this.scrumTeams[team.teamId])
		})
		
		//fotoğraf gösterilecek developerlar belirleniyor
		for (let i = 0; i < this.albumData.length; i++) {
			let developers = this.albumData[i]
			chosenTeam[i].developers.forEach((dev) => {
				if (dev.devId == developers.devId) {
					dev["isChosen"] = true
				}
			})
		}
		
		//render etmek için seçilen takım değşkene atandı
		this.teamInfo = chosenTeam
	},
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
	opacity: 0;
	position: fixed;
	top: 0;
	left: 0;
	height: 100%;
}

.team-container:first-child {
	opacity: 1;
}


.team-container.current{
	opacity: 1 !important;
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

.next-button {
	position: fixed;
	width: 32px;
	height: 32px;
	line-height: 32px;
	text-align: center;
	top: 50%;
	right: 16px;
	margin-top: -16px;
	z-index: 1;
	padding: 16px;
	cursor: pointer;
}

.prev-button {
	position: fixed;
	width: 32px;
	height: 32px;
	line-height: 32px;
	text-align: center;
	top: 50%;
	left: 16px;
	margin-top: -16px;
	border-radius: 50%;
	z-index: 1;
	padding: 16px;
	cursor: pointer;
	transform: rotate(180deg);
}

span.pagination {
	position: absolute;
	bottom: 24px;
	left: 24px;
}
</style>