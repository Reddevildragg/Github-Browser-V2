import {App} from 'vue'
import "./vue-github-browser.scss"

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
        // Provide the global properties to the application
        app.provide('GitHubGlobalProperties', new VueGitHubBrowser(options));
    },
}