import axios from 'axios'

export default class github
{
    static GetUserProjects(username)
    {
        return axios.get( `https://api.github.com/users/${username}/repos`).then((response) => response.data)
    }

    static GetOrgProjects(org)
    {
        return axios.get(`https://api.github.com/orgs/${org}/repos`).then((response) => response.data)
    }

    static async GetCustomProjectData(project) {
        let url = project.html_url;
        url = url.substring("https://github.com/".length);
        url = `https://raw.githubusercontent.com/${url}/${project.default_branch}/.viewer/data.json`;

        try {
            const response = await axios.get(url);
            if (response.data) {
                return response.data;
            }
            return []; // Return empty array if response.data is falsy
        } catch (error) {
            // Handle specific error cases if needed
            //console.error('Error fetching project data:', error.message);
            return []; // Return empty array in case of error
        }
    }
}