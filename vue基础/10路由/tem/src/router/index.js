import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogView from "@/views/BlogView";
import VideoView from "@/views/VideoView";
import LoginView from "@/views/LoginView";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: "/blog",
        name: 'Blog',
        component: BlogView
    },
    {
        path: "/video",
        name: "Video",
        component: VideoView
    },
    {
        path: "/login",
        name: "Login",
        component: LoginView
    }
]



const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

//导航守卫
router.beforeEach((to, from, next) => {
    if (to.path !== "/login") {
        if (localStorage.getItem("usr")) {
            next();
        } else {
            next("/login")
        }
    } else {
        next();
    }
})

export default router
