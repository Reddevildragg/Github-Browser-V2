import GitHubProjectBox from "./Components/GitHubProjectBox.vue";
import GitHubGridView from "./Components/GitHubGridView.vue";
import VueGitHubBrowser from "./vue-git-hub-browser";
import {state, GetMetaDataValues, FetchProjects} from './Store/storedProjects';
import {VueGitHubBrowserPluginOptions, VueGitHubBrowserOptions} from "./vue-git-hub-browser";
import './vue-github-browser.scss'
import {getNestedPropertyIgnoreCase} from "./helpers";

export {GitHubProjectBox, GitHubGridView, state, GetMetaDataValues, FetchProjects, VueGitHubBrowserOptions, getNestedPropertyIgnoreCase}
export type {VueGitHubBrowserPluginOptions}
export default VueGitHubBrowser


