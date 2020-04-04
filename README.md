

Hello and welcome to my personal site! 

# How to start
1) Clone project to local computer
2) run npm install - ensure python and node are first installed on your computer. 
If on windows; run "npm install --global --production windows-build-tools" before trying to install.
3) run "npm start" to start the app 
main site is on http://localhost:8000/
GraphQL http://localhost:8000/___graphql


# Project Info

This is a gatsby based project, so there are some gatsby related files. See below for an explaination:

**`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

**`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

**`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

**`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

**`Emotion`**: Used to style components. https://emotion.sh/docs/styled

# Project Layout

**`pages`**: Contains various website pages.

**`components`**: Contains various components used throughout the site.

**`images`**: Contains various images used for the site. The `posts` subfolder is used for blog post images. 

**`templates`**: Contains the blog posts, which are added in MD form. This may change in the future. 


# TroubleShooting
---

Sometimes there are issues with versioning, if so try removing node_modules are reinstalling. 

rm -rf node_modules
npm install

Additionally since gatsby relies on 130+ dependencies, make sure to kee these and gatsby updated... to avoid security issues. Upgrading these versions may require removing and reinstalling node_modules (see above)