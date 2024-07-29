import {reactive,  inject} from 'vue';
import github from "../Service/Github";
import pLimit from 'p-limit';
import {VueGitHubBrowserOptions} from "../vue-git-hub-browser.ts";
import {getNestedPropertyIgnoreCase} from "../helpers.ts";
const limit = pLimit(5);

export const state = reactive({
    projects: []
});

export async function FetchProjects(globalProperties : VueGitHubBrowserOptions | undefined = undefined)
{
    if(globalProperties === undefined)
    {
        globalProperties = inject('GitHubGlobalProperties');
    }
    if(globalProperties === undefined)
    {
        return[]
    }

    console.log(globalProperties)
    try {
        let data:any[] = [];
        for (let i = 0; i < globalProperties.options.userRepos.length; i++) {
            let response = await github.GetUserProjects(globalProperties.options.userRepos[i]);
            data = data.concat(response);
        }
        for (let i = 0; i < globalProperties.options.orgRepos.length; i++) {
            let response = await github.GetOrgProjects(globalProperties.options.orgRepos[i]);
            data = data.concat(response);
        }

        if (globalProperties.options.exclude?.length > 0) {
            data = data.filter((project) => !globalProperties?.options.exclude.includes(project.name));
        }

        await fetchAllProjectDataWithLimit(data);

        state.projects = data;
    } catch (error) {
        alert(error)
        console.log(error)
    }
}

async function fetchAllProjectDataWithLimit(data) {
    // Create an array of limited promises
    const promises = data.map(item => limit(() => FetchProjectCustomData(item)));

    // Wait for all promises to complete
    await Promise.all(promises);
}

async function FetchProjectCustomData(project)
{
    project.CustomData = await github.GetCustomProjectData(project)
}

export function GetMetaDataValues(key)
{
    const uniqueValues = new Set();
    state.projects.forEach(project =>
    {
        let value = getNestedPropertyIgnoreCase(project, key);
        if (value !== undefined)
        {
            uniqueValues.add(value);
        }
    });

    return Array.from(uniqueValues);
}