#### List.getUniqueValue( path, generator [, _limit_ ], callback )   
> _@param_ **path** {String} - path to check for uniqueness  
> _@param_ **generator** {Function} - generator method to call to generate a new value  
> _@param_ **limit** {Number} - the maximum number of attempts (optional, defaults to 10)  
> _@param_ **callback** {Function} - callback(err, uniqueValue)  


Gets a unique value from a generator method by checking for documents with the same value.  

To avoid infinite loops when a unique value cannot be found, it will bail and pass back an undefined value after 10 attempts.  

<p class="warning-note">Because there will always be a small amount of time between checking for an existing value and saving a document, race conditions can occur and it is possible that another document has the 'unique' value assigned at the same time. <br /> <br /> If true uniqueness is required, you should also create a unique index on the database path, and handle duplicate errors thrown on save. </p>  

 

 
<div class="code-header addGitHubLink" data-file="lib/list/getUniqueValue.js"><a href="#" class="loadCode"> code</a></div><pre class=" language-javascript hideCode api"></pre> 
