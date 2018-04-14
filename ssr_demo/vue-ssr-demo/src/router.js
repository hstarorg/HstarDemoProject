import * as pages from "./pages";

import Router from "vue-router";
import Vue from "vue";

Vue.use(Router);
const routes = [{ path: "/", component: pages.Home }];

export function createRouter() {
  return new Router({
    mode: "history",
    routes
  });
}
