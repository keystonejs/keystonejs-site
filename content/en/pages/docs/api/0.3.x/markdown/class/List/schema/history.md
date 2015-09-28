#### _schemaHelper_.history (  )  
> _@api_ **private**   

<div class="code-header"> 
#### When enabled, it tracks changes to each document on save or remove.  
Creates a new collection named `yourcollections_revisions` when **boolean** `true`.  
Revisions are noted on all `Save` and `Remove` operations.  
</div><pre class=" language-javascript"><code class="language-javascript">    history: true</code></pre>

Uses <code class="default-value"> list.schema.pre('save'...) </code> and <code class="default-value"> list.schema.pre('remove'...) </code>to alter documents.

<div class="code-header addGitHubLink" data-file="lib/schemaPlugins/history.js"><a href="#" class="loadCode"> code</a></div><pre class=" language-javascript hideCode api"></pre> 
