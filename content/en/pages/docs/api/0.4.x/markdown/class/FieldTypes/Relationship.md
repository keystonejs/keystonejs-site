#### .Field.Types.Relationship( list, path, options )  
> *@param* **list** _{Object}_  - valid Keystone list   
> *@param* **path** _{String}_  - path   
> *@param* **options** _{Object}_  - options   
> *@api* **public**  



<div class="code-header"> <h4>defaults</h4></div><pre class=" language-javascript"><code class="language-javascript">this.many = (options.many) ? true : false;
this.filters = options.filters;
this._defaultSize = 'full';
this._nativeType = keystone.mongoose.Schema.Types.ObjectId;
this._underscoreMethods = ['format'];
this._properties = ['isValid', 'many', 'filters'];</code></pre>

<div class="code-header addGitHubLink" data-file="fields/types/relationship/RelationshipType.js"> <a href="#" class="loadCode"> code</a></div><pre class=" language-javascript hideCode api"></pre> 




<span class="subMethod"> .Field.Types.Relationship.addFilterToQuery( filter, query )  </span> 
> *@param* **filter** {Object} - valid filter object  
> *@param* **query** {Object} - valid query object   
> *@api* **public**   
  
Add filters to a query.  

<div class="code-header addGitHubLink" data-file="fields/types/relationship/RelationshipType.js#L98-L117"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 


---
<span class="subMethod"> .Field.Types.Relationship.addFilters( query, item ) </span>   
> *@param* **query** {Object} - valid query object  
> *@param* **item** {Object} - list item  
> *@api* **public**    

Adds relationship filters to a query 

<p class="caution-note">TODO: Deprecate this? Not sure it's used anywhere </p>

<div class="code-header addGitHubLink" data-file="fields/types/relationship/RelationshipType.js#L203-L223">&nbsp; </div><pre class=" language-javascript hideCode api"></pre> 

---  
<span class="subMethod"> .Field.Types.Relationship.addToSchema(  ) </span>  
> *@api* **public**     

Registers the field on the List's Mongoose Schema.  
 
<div class="code-header addGitHubLink" data-file="fields/types/relationship/RelationshipType.js#L63-L96"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 


---  
<span class="subMethod"> .Field.Types.Relationship.format( item ) </span>  
> *@param* **item** {Object} - valid field object   
> *@api* **public**     

force the formatted value to be a string
<p class="caution-note">unexpected things happen with ObjectIds.</p>

<div class="code-header addGitHubLink" data-file="fields/types/relationship/RelationshipType.js#L119-L126"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 




---
<span class="subMethod"> .Field.Types.Relationship.hasFilters </span>   
> *@api* **public**    

Whether the field has any filters defined 

<div class="code-header addGitHubLink" data-file="fields/types/relationship/RelationshipType.js#L194-L201">&nbsp; </div><pre class=" language-javascript hideCode api"></pre> 



---
<span class="subMethod"> .Field.Types.Relationship.isValid </span>   
> *@api* **public**    

Returns true if the relationship configuration is valid  

<div class="code-header addGitHubLink" data-file="fields/types/relationship/RelationshipType.js#L176-L183">&nbsp; </div><pre class=" language-javascript hideCode api"></pre> 



---
<span class="subMethod"> .Field.Types.Relationship.refList </span>   
> *@api* **public**    

Returns the Related List 

<div class="code-header addGitHubLink" data-file="fields/types/relationship/RelationshipType.js#L185-L192">&nbsp; </div><pre class=" language-javascript hideCode api"></pre> 



---
<span class="subMethod"> .Field.Types.Relationship.updateItem( item, data )  </span> 
> *@param* **item** {Object} - valid field object  
> *@param* **data** {Object} - data to update   
> *@api* **public**  

Updates the value for this field in the item from a data object.  
Only updates the value if it has changed.  
Treats an empty string as a null value.  

<div class="code-header addGitHubLink" data-file="fields/types/relationship/RelationshipType.js#L141-L174"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 


---
<span class="subMethod"> .Field.Types.Relationship.validateInput( data )  </span> 
> *@param* **data** {Object} - valid data object  
> *@api* **public**   
  
Validates that a value for this field has been provided in a data object  

<div class="code-header addGitHubLink" data-file="fields/types/relationship/RelationshipType.js#L128-L139"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 





