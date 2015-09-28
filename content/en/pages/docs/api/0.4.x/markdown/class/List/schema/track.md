#### _schemaHelper_.track (  )  
> _@api_ **private**   

<div class="code-header"><h4>Adds tracking fields to a collection</h4></div><pre class=" language-javascript"><code class="language-javascript"> track: true </code></pre>  

<div class="code-header"> <h4>Added fields</h4></div><pre class=" language-javascript"><code class="language-javascript">    { 
		createdAt: false, 
		createdBy: false,
		updatedAt: false,
		updatedBy: false
	};
</code></pre> 

Uses <code class="default-value"> list.schema.pre('save'...) </code> to alter documents.

<div class="code-header addGitHubLink" data-file="lib/schemaPlugins/track.js"><a href="#" class="loadCode"> code</a></div><pre class=" language-javascript hideCode api"></pre> 
