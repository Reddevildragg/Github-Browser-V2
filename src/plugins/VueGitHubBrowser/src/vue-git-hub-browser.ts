import {App} from 'vue'
import "./vue-github-browser.scss"
import {FetchProjects} from "./index.ts";

export interface VueGitHubBrowserPluginOptions
{
    userRepos: string[]
    orgRepos: string[]
    exclude: string[],
    fetchOnInstall: boolean
}

export class VueGitHubBrowserOptions
{
    options: VueGitHubBrowserPluginOptions;

    constructor(options?: VueGitHubBrowserPluginOptions) {
        this.options = options || { userRepos: [], orgRepos: [] , exclude: [], fetchOnInstall:false};
    }
}

export default {
    install(app: App, options: VueGitHubBrowserPluginOptions)
    {
        const props = new VueGitHubBrowserOptions(options);
        // Provide the global properties to the application
        app.provide('GitHubGlobalProperties',props );

        if(options.fetchOnInstall) {
            FetchProjects(props);
        }
    },
}