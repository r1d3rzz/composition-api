import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PostDetail from "../views/PostDetail.vue";
import PostCreate from "../views/PostCreate.vue";
import PostTag from "../views/PostTag.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/post/detail/:id",
    name: "postDetail",
    component: PostDetail,
    props: true,
  },
  {
    path: "/post/create",
    name: "postCreate",
    component: PostCreate,
  },
  {
    path: "/post/tags/:tag",
    name: "postTag",
    component: PostTag,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
