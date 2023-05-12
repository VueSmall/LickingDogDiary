import {createApp} from 'vue'
import App from './App.vue'
import 'vant/lib/index.css'

const app = createApp(App)
import {NoticeBar} from "vant";

app.use(NoticeBar)
app.mount('#app')
