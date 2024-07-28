import {reactive,  inject} from 'vue';
import github from "../Service/Github";

const state = reactive({
    projects: []
});

async function FetchProjects()
{
    const globalProperties = inject('GitHubGlobalProperties');
    try {
        let data = [];
        for (let i = 0; i < globalProperties.options.userRepos.length; i++) {
            let response = await github.GetUserProjects(globalProperties.options.userRepos[i]);
            data = data.concat(response);
        }
        for (let i = 0; i < globalProperties.options.orgRepos.length; i++) {
            let response = await github.GetOrgProjects(globalProperties.options.orgRepos[i]);
            data = data.concat(response);
        }

        if (globalProperties.options.exclude?.length > 0) {
            data = data.filter((project) => !globalProperties.options.exclude.includes(project.name));
        }

        for (let i = 0; i < data.length; i++) {
            await this.FetchProjectCustomData(data[i]);
        }

        state.projects = data;
    } catch (error) {
        alert(error)
        console.log(error)
    }
}

async function FetchProjectCustomData(project)
{
    project.CustomData = await github.GetCustomProjectData(project)
}

export default {
    state,
    FetchProjectCustomData,
    FetchProjects,
};