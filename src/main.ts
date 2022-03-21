// 全局样式
import '@/styles/index.scss'
// vue
import { createApp } from 'vue';
import router from '@/router/index';
// elementPlus
import elementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 主页
import App from '@/App.vue';
//图标库
// https://remixicon.com/
import 'remixicon/fonts/remixicon.css'
var a = 20;
createApp(App)
  .use(elementPlus)
  .use(router)
  .mount('#app')

