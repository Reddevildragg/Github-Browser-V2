// stores/users.js
import {defineStore} from 'pinia'
import Config from "../Config.js";
import github from "../Service/Github.js";

export const useProjectStore = defineStore("Projects", {
    state: () => ({
        projects: undefined
    }),
    getters:
        {},
    actions:
        {
            async FetchProjects() {
                try {
                    let data = [];
                    for (let i = 0; i < Config.userRepos.length; i++) {
                        let response = await github.GetUserProjects(Config.userRepos[i]);
                        data = data.concat(response);
                    }
                    for (let i = 0; i < Config.orgRepos.length; i++) {
                        let response = await github.GetOrgProjects(Config.orgRepos[i]);
                        data = data.concat(response);
                    }

                    async function FetchProjectCustomData(project) {
                        project.CustomData = await github.GetCustomProjectData(project)
                    }

                    for (let i = 0; i < data.length; i++) {
                        FetchProjectCustomData(data[i]);
                    }

                    this.projects = data;
                } catch (error) {
                    alert(error)
                    console.log(error)
                }
            }
        }

})