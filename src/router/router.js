/* eslint-disable */
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutPage from "../views/AboutPage.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    props: true,
  },
  {
    path: "/:slug",
    name: "DestinationDetails",
    props: true,
    component: () => import(/* webpackChunkName: "DestinationDetails" */
    "../views/DestinationDetails.vue"),
    children: [
      {
        path:':experienceSlug',
        name: 'experienceDetails',
        props: true,
        component: () => import(/* webpackChunkName: "ExperienceDetails" */
        "../views/ExperienceDetails.vue"),
      }
    ]
  },
  {
    path: "/about",
    name: "about",
    component: AboutPage,
  },
];

const router = createRouter({
  linkActiveClass: "vue-active-link",
  history: createWebHistory(),
  routes,
});

export default router;
