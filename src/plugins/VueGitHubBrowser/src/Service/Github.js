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

    static GetCustomProjectData(project)
    {
            let url = project.html_url;
            url = url.substring("https://github.com/".length);
            url = `https://raw.githubusercontent.com/${url}/${project.default_branch}/.viewer/data.json`;

            return axios.get(url).then((response) =>
            {
                if(response.data)
                {
                    return response.data
                }
                return [];
            }).catch(function (error)
            {
                return []
            });
    }
}