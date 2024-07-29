<template>
  <div class="w-100 h-100">
    <git-hub-grid-view style="padding-bottom: 25px; padding-top: 25px;" :projects-to-show="cards"/>
    <git-hub-grid-view style="padding-bottom: 25px; padding-top: 25px;" :searchQuery="'name:unity,customdata.description:this is'"/>
    <git-hub-grid-view style="padding-bottom: 25px; padding-top: 25px;" :searchQuery="'name:unity'"/>

    <div>{{GetMetaDataValues("owner.login")}}</div>
  </div>

</template>

<script setup lang="ts">
import {GitHubGridView} from "@/plugins/VueGitHubBrowser/src";
import {GetMetaDataValues} from "./plugins/VueGitHubBrowser/src";

const cards = [
    {
  "id": 834005996,
  "node_id": "R_kgDOMbXr7A",
  "name": "Github-Browser-V2",
  "full_name": "Reddevildragg/Github-Browser-V2",
  "private": false,
  "owner": {
    "login": "Reddevildragg",
    "id": 19800074,
    "node_id": "MDQ6VXNlcjE5ODAwMDc0",
    "avatar_url": "https://avatars.githubusercontent.com/u/19800074?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Reddevildragg",
    "html_url": "https://github.com/Reddevildragg",
    "followers_url": "https://api.github.com/users/Reddevildragg/followers",
    "following_url": "https://api.github.com/users/Reddevildragg/following{/other_user}",
    "gists_url": "https://api.github.com/users/Reddevildragg/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Reddevildragg/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Reddevildragg/subscriptions",
    "organizations_url": "https://api.github.com/users/Reddevildragg/orgs",
    "repos_url": "https://api.github.com/users/Reddevildragg/repos",
    "events_url": "https://api.github.com/users/Reddevildragg/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Reddevildragg/received_events",
    "type": "User",
    "site_admin": false
  },
  "html_url": "https://github.com/Reddevildragg/Github-Browser-V2",
  "description": null,
  "fork": false,
  "url": "https://api.github.com/repos/Reddevildragg/Github-Browser-V2",
  "forks_url": "https://api.github.com/repos/Reddevildragg/Github-Browser-V2/forks",
  "keys_url": "https://api.github.com/repos/Reddevildragg/Github-Browser-V2/keys{/key_id}",
  "collaborators_url": "https://api.github.com/repos/Reddevildragg/Github-Browser-V2/collaborators{/collaborator}",
  "teams_url": "https://api.github.com/repos/Reddevildragg/Github-Browser-V2/teams",
  "hooks_url": "https://api.github.com/repos/Reddevildragg/Github-Browser-V2/hooks",
  "issue_events_url": "https://api.github.com/repos/Reddevildragg/Github-Browser-V2/issues/events{/number}",
  "events_url": "https://api.github.com/repos/Reddevildragg/Github-Browser-V2/events",
  "assignees_url": "https://api.github.com/repos/Reddevildragg/Github-Browser-V2/assignees{/user}",
  "branches_url": "https://api.github.com/repos/Reddevildragg/Github-Browser-V2/branches{/branch}",
  "tags_url": "https://api.github.com/repos/Reddevildragg/Github-Browser-V2/tags",
  "blobs_url": "https://api.github.com/repos/Reddevildragg/Github-Browser-V2/git/blobs{/sha}",
  "git_tags_url": "https://api.github.com/repos/Reddevildragg/Github-Browser-V2/git/tags{/sha}",
  "git_refs_url": "https://api.github.com/repos/Reddevildragg/Github-Browser-V2/git/refs{/sha}",
  "trees_url": "https://api.github.com/repos/Reddevildragg/Github-Browser-V2/git/trees{/sha}",
  "statuses_url": "https://api.github.com/repos/Reddevildragg/Github-Browser-V2/statuses/{sha}",
  "languages_url": "https://api.github.com/repos/Reddevildragg/Github-Browser-V2/languages",
  "stargazers_url": "https://api.github.com/repos/Reddevildragg/Github-Browser-V2/stargazers",
  "contributors_url": "https://api.github.com/repos/Reddevildragg/Github-Browser-V2/contributors",
  "subscribers_url": "https://api.github.com/repos/Reddevildragg/Github-Browser-V2/subscribers",
  "subscription_url": "https://api.github.com/repos/Reddevildragg/Github-Browser-V2/subscription",
  "commits_url": "https://api.github.com/repos/Reddevildragg/Github-Browser-V2/commits{/sha}",
  "git_commits_url": "https://api.github.com/repos/Reddevildragg/Github-Browser-V2/git/commits{/sha}",
  "comments_url": "https://api.github.com/repos/Reddevildragg/Github-Browser-V2/comments{/number}",
  "issue_comment_url": "https://api.github.com/repos/Reddevildragg/Github-Browser-V2/issues/comments{/number}",
  "contents_url": "https://api.github.com/repos/Reddevildragg/Github-Browser-V2/contents/{+path}",
  "compare_url": "https://api.github.com/repos/Reddevildragg/Github-Browser-V2/compare/{base}...{head}",
  "merges_url": "https://api.github.com/repos/Reddevildragg/Github-Browser-V2/merges",
  "archive_url": "https://api.github.com/repos/Reddevildragg/Github-Browser-V2/{archive_format}{/ref}",
  "downloads_url": "https://api.github.com/repos/Reddevildragg/Github-Browser-V2/downloads",
  "issues_url": "https://api.github.com/repos/Reddevildragg/Github-Browser-V2/issues{/number}",
  "pulls_url": "https://api.github.com/repos/Reddevildragg/Github-Browser-V2/pulls{/number}",
  "milestones_url": "https://api.github.com/repos/Reddevildragg/Github-Browser-V2/milestones{/number}",
  "notifications_url": "https://api.github.com/repos/Reddevildragg/Github-Browser-V2/notifications{?since,all,participating}",
  "labels_url": "https://api.github.com/repos/Reddevildragg/Github-Browser-V2/labels{/name}",
  "releases_url": "https://api.github.com/repos/Reddevildragg/Github-Browser-V2/releases{/id}",
  "deployments_url": "https://api.github.com/repos/Reddevildragg/Github-Browser-V2/deployments",
  "created_at": "2024-07-26T08:19:30Z",
  "updated_at": "2024-07-26T08:33:36Z",
  "pushed_at": "2024-07-26T08:33:33Z",
  "git_url": "git://github.com/Reddevildragg/Github-Browser-V2.git",
  "ssh_url": "git@github.com:Reddevildragg/Github-Browser-V2.git",
  "clone_url": "https://github.com/Reddevildragg/Github-Browser-V2.git",
  "svn_url": "https://github.com/Reddevildragg/Github-Browser-V2",
  "homepage": null,
  "size": 46,
  "stargazers_count": 0,
  "watchers_count": 0,
  "language": "Vue",
  "has_issues": true,
  "has_projects": true,
  "has_downloads": true,
  "has_wiki": true,
  "has_pages": false,
  "has_discussions": false,
  "forks_count": 0,
  "mirror_url": null,
  "archived": false,
  "disabled": false,
  "open_issues_count": 0,
  "license": null,
  "allow_forking": true,
  "is_template": false,
  "web_commit_signoff_required": false,
  "topics": [],
  "visibility": "public",
  "forks": 0,
  "open_issues": 0,
  "watchers": 0,
  "default_branch": "master",
  "CustomData": []
}]
</script>

<style scoped>
</style>
