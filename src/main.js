import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd"

const app = createApp(App).mount('#app')
app.use(Antd);
