import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";
import Principal from "./Principal.vue";
import GithubProfile from "./github-profile/GithubProfile.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Principal },
    { path: "/github-profile", component: GithubProfile },
  ],
});

createApp(App).use(router).mount("#app");
