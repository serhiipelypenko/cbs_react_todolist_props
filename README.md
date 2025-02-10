# Simple React TodoList (using props)


# Steps for deploy to github

npm install gh-pages --save-dev

Add to package.json on top

"homepage": "https://serhiipelypenko.github.io/cbs_react_counter_props",

Add scripts to package.json

    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"

And run this command

"deploy": "gh-pages -d build"