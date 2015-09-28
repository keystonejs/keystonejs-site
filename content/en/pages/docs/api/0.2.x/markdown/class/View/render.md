#### View.render( renderFn, locals, callback )
> *@param* **renderFn** _{Function|String}_  - Render function  
> *@param* **locals** _{Object}_  - Locals  
> *@param* **callback** _{Function}_  - Render callback  

Executes the current queue of init and action methods in series, and then executes the render function.  
If renderFn is a string, it is provided to `res.render`.  
It is expected that *most* init stacks require processing in series, but it is safe to execute actions in parallel.  
If there are several `init` methods that should be run in parallel, queue them as an array, e.g. `view.on('init', [first, second])`.  

<div class="code-header addGitHubLink" data-file="lib/view.js#L312-L375">&nbsp;</div><pre class=" language-javascript hideCode api"></pre> 
