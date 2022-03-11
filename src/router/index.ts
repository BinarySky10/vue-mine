import { createWebHistory, createRouter } from "vue-router";
import { Router, RouteRecordRaw } from 'vue-router'
import MineSweeper from '@/views/mine-sweeper.vue' // todo 引入组件需要手动配置, 可优化成为自动引用文件夹中的

const routes:Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component:MineSweeper,
  },
];

const router:Router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;


