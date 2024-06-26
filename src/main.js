import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import registerElement from './global/register-element'
import 'normalize.css'
// import axios from 'axios'
import { setupLogin } from '@/store'
import store from '@/store'
import '@/assets/css/markdown.css'
import '@/assets/css/imagehover.min.css'
import * as Icons from '@ant-design/icons-vue'
// axios.defaults.baseURL = 'http://101.34.205.91:8181'




const app = createApp(App)
app.use(store)
registerElement(app)

// 全局使用图标，遍历引入
const icons = Icons;
for (const i in icons) {
    app.component(i, icons[i]);
}

// app.config.globalProperties.axios = axios
setupLogin()
app.use(router).mount('#app')