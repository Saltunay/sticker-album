import {createRouter, createWebHistory} from 'vue-router'
import TeamAlbum from "@/components/TeamAlbum";
import LayoutView from "@/LayoutView";

const routes = [
	{
		path: "/",
		name: "LayoutView",
		component: LayoutView
	},
	{
		path: "/team-album",
		name: "TeamAlbum",
		component: TeamAlbum
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})
export default router