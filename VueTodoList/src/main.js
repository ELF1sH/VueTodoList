import { createApp } from 'vue'
import App from './App.vue'
import { VuesticPlugin } from 'vuestic-ui'
import 'vuestic-ui/dist/vuestic-ui.css'
import router from "./router/router";
import store from "./store/index.js";

createApp(App)
    .use(VuesticPlugin)  // UI framework
    .use(router)
    .use(store)
    .mount('#app')
