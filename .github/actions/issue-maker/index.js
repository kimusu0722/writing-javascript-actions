const core = require("@actions/core");
const github = require("@actions/github");

async function run() {
    try {
        const issueTitle = core.getInput("issue-title");
        const jokeBody = core.getInput("joke");
        const token = core.getInput("repo-token");

        const octkit = github.getOctokit(token);

        const newIssue = octkit.rest.issues.create({
            repo : github.context.repo.repo,
            owner : github.context.repo.owner,
            title : issueTitle,
            body : jokeBody
        });
    } catch (error) {
        core.setFailed(error.message)
    }
}

run();