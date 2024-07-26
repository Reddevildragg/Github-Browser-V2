import {App} from 'vue'
import { createPinia } from 'pinia';

export interface VueGitHubBrowserPluginOptions
{
    userRepos: string[]
    orgRepos: string[]
    exclude: string[]
}

export class VueGitHubBrowser
{
    options: VueGitHubBrowserPluginOptions;

    constructor(options?: VueGitHubBrowserPluginOptions) {
        this.options = options || { userRepos: [], orgRepos: [] , exclude: []};
    }
}

export default {
    install(app: App, options: VueGitHubBrowserPluginOptions) {

        const pinia = createPinia();
        app.use(pinia);

        // Provide the global properties to the application
        app.provide('GitHubGlobalProperties', new VueGitHubBrowser(options));
    },
}