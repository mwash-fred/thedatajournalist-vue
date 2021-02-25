import { createRouter, createWebHashHistory } from "vue-router";
import axios from "axios";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Blogs from "../views/Blogs.vue";
import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";
import Models from "../views/Models.vue";
import Podcasts from "../views/Podcasts.vue";
import Register from "../views/Register.vue";
import AddBlog from "../components/AddBlog.vue";
import AddPodcast from "../components/AddPodcast.vue";
import AddModel from "../components/AddModel.vue";

axios.defaults.baseURL = "http://192.168.100.22:5000/api/";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/blogs",
    name: "Blogs",
    component: Blogs
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/models",
    name: "Models",
    component: Models
  },
  {
    path: "/podcasts",
    name: "Podcasts",
    component: Podcasts
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  {
    path: "/add-blog",
    name: "AddBlog",
    component: AddBlog
  },
  {
    path: "/add-podcast",
    name: "AddPodcast",
    component: AddPodcast
  },
  {
    path: "/add-model",
    name: "AddModel",
    component: AddModel
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
