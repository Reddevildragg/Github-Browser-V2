import {createApp} from 'vue'
import './design/main.scss'
import App from './App.vue'

import {createPinia} from "pinia";

import vueGitHubBrowser from "./plugins/VueGitHubBrowser/src";

const pinia = createPinia()

const app = createApp(App)
app.use(pinia)

app.use(vueGitHubBrowser, {
    userRepos: ["Reddevildragg"],
    orgRepos: ["Greener-Games"]
})
app.mount('#app')
