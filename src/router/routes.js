import Main from "@/pages/Main";
import PostPage from "@/pages/PostPage";
import About from "@/pages/About";
import PostItemPage from "@/pages/PostItemPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: Main, name: "home" },
  { path: "/posts", component: PostPage },
  { path: "/about", component: About },
  { path: "/posts/:id", component: PostItemPage },
  {
    path: "/forms",
    name: "main-form",
    component: () => import("@/pages/FormPages"),
    children: [
      {
        path: "",
        name: "form-1",
        component: () => import("@/pages/FormPages/Form1"),
      },
      {
        path: "1",
        name: "form-2",
        component: () => import("@/pages/FormPages/Form2"),
      },
    ],
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
