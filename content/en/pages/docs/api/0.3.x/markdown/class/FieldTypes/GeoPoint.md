#### .Field.Types.GeoPoint( list, path, options )  
> *@param* **list** _{Object}_  - valid Keystone list   
> *@param* **path** _{String}_  - path   
> *@param* **options** _{Object}_  - options   
> *@api* **public**  

<div class="code-header"> <h4>defaults</h4></div><pre class=" language-javascript"><code class="language-javascript">this._fixedSize = 'medium';

// TODO: implement filtering, usage disabled for now
options.nofilter = true;

</code></pre>

<div class="code-header addGitHubLink" data-file="fields/types/geopoint/GeoPointType.js"> <a href="#" class="loadCode"> code</a></div><pre class=" language-javascript hideCode api"></pre> 

---
<span class="subMethod"> .Field.Types.GeoPoint.addToSchema(  ) </span>      
> *@api* **public**    

Registers the field on the List's Mongoose Schema.  
Adds a 2dsphere indexed lat/lng pair.      
<div class="code-header addGitHubLink" data-file="fields/types/geopoint/GeoPointType.js#L34-L45"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 

---

<span class="subMethod"> .Field.Types.GeoPoint.getData( item ) </span>  
> *@param* **item** {Object} - valid item object       
> *@api* **public**     

Gets the field's data from an Item, as used by the React components

<div class="code-header addGitHubLink" data-file="fields/types/geopoint/GeoPointType.js#L48-L55"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 

---
<span class="subMethod"> .Field.Types.GeoPoint.format( item ) </span>  
> *@param* **item** {Object} - valid field object   
> *@api* **public**     

Formats the field value.
```javascript
return item.get(this.paths.html);
```
<div class="code-header addGitHubLink" data-file="fields/types/geopoint/GeoPointType.js#L58-L69"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 

---
<span class="subMethod"> .Field.Types.GeoPoint.validateInput( data [, required, item ] )  </span> 
> *@param* **data** {Object} - valid data object  
> *@param* **required** {Boolean} - true if this is a required field  
> *@param* **item** {Object} - valid item object  
> *@api* **public**   
  
Validates that a value for this field has been provided in a data object.  

<div class="code-header addGitHubLink" data-file="fields/types/geopoint/GeoPointType.js#L72-L93"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 


---
<span class="subMethod"> .Field.Types.GeoPoint.updateItem( item, data )  </span> 
> *@param* **item** {Object} - valid field object  
> *@param* **data** {Object} - data to update  
> *@api* **public**  

Updates the value for this field in the item from a data object.    

<div class="code-header addGitHubLink" data-file="fields/types/geopoint/GeoPointType.js#L96-L130"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 
