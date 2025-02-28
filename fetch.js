const fs = require("fs");
const https = require("https");
require("dotenv").config();

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const USE_GITHUB_DATA = process.env.USE_GITHUB_DATA;

const ERR = {
  noUserName: "GitHub Username is undefined. Please set it in your .env file.",
  requestFailed: "The request to GitHub failed. Check your GitHub token."
};

if (!GITHUB_TOKEN) {
  throw new Error("GitHub token is missing. Set REACT_APP_GITHUB_TOKEN in your .env file.");
}

if (USE_GITHUB_DATA === "true") {
  if (!GITHUB_USERNAME) {
    throw new Error(ERR.noUserName);
  }

  console.log(`Fetching profile data for ${GITHUB_USERNAME}`);

  const data = JSON.stringify({
    query: `
    {
      user(login:"${GITHUB_USERNAME}") { 
        name
        bio
        avatarUrl
        location
        pinnedItems(first: 6, types: [REPOSITORY]) {
          totalCount
          edges {
            node {
              ... on Repository {
                name
                description
                forkCount
                stargazers {
                  totalCount
                }
                url
                id
                diskUsage
                primaryLanguage {
                  name
                  color
                }
              }
            }
          }
        }
      }
    }
    `
  });

  const options = {
    hostname: "api.github.com",
    path: "/graphql",
    port: 443,
    method: "POST",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      "User-Agent": "Node.js"
    }
  };

  const req = https.request(options, (res) => {
    let responseData = "";

    console.log(`GitHub API Status: ${res.statusCode}`);
    if (res.statusCode !== 200) {
      throw new Error(ERR.requestFailed);
    }

    res.on("data", (chunk) => {
      responseData += chunk;
    });

    res.on("end", () => {
      fs.writeFile("./public/profile.json", responseData, (err) => {
        if (err) {
          console.error("Error writing profile.json:", err);
        } else {
          console.log("Saved profile data to public/profile.json");
        }
      });
    });
  });

  req.on("error", (error) => {
    console.error("GitHub API Request Error:", error);
  });

  req.write(data);
  req.end();
}