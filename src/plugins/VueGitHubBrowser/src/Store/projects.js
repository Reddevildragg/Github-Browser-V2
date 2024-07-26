// stores/users.js
import {defineStore} from 'pinia'
import github from "../Service/Github.js";
import {inject} from "vue";

export const useProjectStore = defineStore("Projects", {
    state: () => ({
        projects: []
    }),
    getters:
        {},
    actions:
        {
            async FetchProjects() {
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

                    if(globalProperties.options.exclude?.length > 0)
                    {
                        data = data.filter((project) => !globalProperties.options.exclude.includes(project.name));
                    }

                    for (let i = 0; i < data.length; i++) {
                        await this.FetchProjectCustomData(data[i]);
                    }

                    this.projects = data;
                } catch (error) {
                    alert(error)
                    console.log(error)
                }
            },
            async FetchProjectCustomData(project) {
                project.CustomData = await github.GetCustomProjectData(project)
            }
        }
})