import {App} from 'vue'
import "./vue-github-browser.scss"
import {FetchProjects} from "./index.ts";

export interface VueGitHubBrowserPluginOptions
{
    userRepos: string[]
    orgRepos: string[]
    exclude: string[]
}

export class VueGitHubBrowserOptions
{
    options: VueGitHubBrowserPluginOptions;

    constructor(options?: VueGitHubBrowserPluginOptions) {
        this.options = options || { userRepos: [], orgRepos: [] , exclude: []};
    }
}

export default {
    install(app: App, options: VueGitHubBrowserPluginOptions)
    {
        const props = new VueGitHubBrowserOptions(options);

        // Provide the global properties to the application
        app.provide('GitHubGlobalProperties',props );

        FetchProjects(props);
    },
}