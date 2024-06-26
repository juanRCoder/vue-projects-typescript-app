import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";
import Principal from "./projects/Principal.vue";
import GithubProfile from "./projects/github-profile/GithubProfile.vue";
import HomePage from "./pages/views/HomePage.vue";
import Product from "./pages/views/Product.vue";
import Contact from "./pages/views/Contact.vue";
import Page from "./pages/Page.vue";



const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Principal },
    { path: "/github-profile", component: GithubProfile },
    {
      path: "/page",
      component: Page,
      children: [
        { path: "", component: HomePage },
        { path: "product", component: Product },
        { path: "contact", component: Contact },
      ],
    },
  ],
});

createApp(App).use(router).mount("#app");
