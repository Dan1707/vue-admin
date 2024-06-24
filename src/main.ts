import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createWebHistory, createRouter } from "vue-router";

const app = createApp(App);

const routes: any = [];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(router);
app.mount("#app");
