# keystonejs-site

[keystonejs.com](http://keystonejs.com) site and docs.

## Running locally

    $ npm install  
    $ npm start  
    
## Gulp
Run `gulp` for a menu of commands.  

For `dev-push` and `dev-deploy` you need to supply a repo. You can also supply a branch (*src*) and a dir to store the clone (*./dev/.gh-pages-development*).
```javascript
gulp dev-deploy --repo git@github.com:snowkeeper/snowkeeper.github.io.git --branch master --clone /tmp/gh-pages-master
```

## Client
