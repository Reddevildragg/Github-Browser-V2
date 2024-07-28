import {createApp} from 'vue'
import './design/main.scss'
import App from './App.vue'


import vueGitHubBrowser from "./plugins/VueGitHubBrowser/src";
const app = createApp(App)

app.use(vueGitHubBrowser, {
    userRepos: ["Reddevildragg"],
    orgRepos: ["Greener-Games"]
})
app.mount('#app')
