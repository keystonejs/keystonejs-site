#### .Field.Types.Location( list, path, options )  
> *@param* **list** _{Object}_  - valid Keystone list   
> *@param* **path** _{String}_  - path   
> *@param* **options** _{Object}_  - options   
> *@api* **public**  

<div class="code-header"> <h4>defaults</h4></div><pre class=" language-javascript"><code class="language-javascript">this._underscoreMethods = ['format', 'googleLookup', 'kmFrom', 'milesFrom'];
this._fixedSize = 'full';

this.enableMapsAPI = (options.geocodeGoogle===true || (options.geocodeGoogle !== false && keystone.get('google server api key'))) ? true : false;

this._properties = ['enableMapsAPI'];
this.requiredPaths = ['street1', 'suburb'];</code></pre>

<div class="code-header addGitHubLink" data-file="lib/fieldTypes/location.js"> <a href="#" class="loadCode"> code</a></div><pre class=" language-javascript hideCode api"></pre> 

<span class="subMethod"> .Field.Types.Location.addToSchema(  ) </span>  
> *@api* **public**     

Registers the field on the List's Mongoose Schema.  
<div class="code-header addGitHubLink" data-file="lib/fieldTypes/location.js#L62-L138"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 

---

<span class="subMethod"> .Field.Types.Location.format( item ) </span>  
> *@param* **item** {Object} - valid field object   
> *@api* **public**     

Formats a list of the values stored by the field. Only paths that have values will be included.  
Optionally provide a space-separated list of values to include.  
Delimiter defaults to `', '`.

<div class="code-header addGitHubLink" data-file="lib/fieldTypes/location.js#L141-L166"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 

---
<span class="subMethod"> .Field.Types.Location.isModified( item ) </span> 
> *@param* **item** {Object} - valid field object   
> *@api* **public**    

Detects whether the field has been modified.  

<div class="code-header addGitHubLink" data-file="lib/fieldTypes/location.js#L169-L185">&nbsp; </div><pre class=" language-javascript hideCode api"></pre> 

---
<span class="subMethod"> .Field.Types.Location.validateInput( data )  </span> 
> *@param* **data** {Object} - valid data object  
> *@api* **public**   
  
Validates that a value for this field has been provided in a data object.  
`options.required` specifies an Array or space-delimited list of paths that are required (defaults to street1, suburb).  

<div class="code-header addGitHubLink" data-file="lib/fieldTypes/location.js#L188-L230"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 


---
<span class="subMethod"> .Field.Types.Location.updateItem( item, data )  </span> 
> *@param* **item** {Object} - valid field object  
> *@param* **data** {Object} - data to update  
> *@api* **public**  

Updates the value for this field in the item from a data object.

<div class="code-header addGitHubLink" data-file="lib/fieldTypes/location.js#L233-L293"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 

---
<span class="subMethod"> .Field.Types.Location.getRequestHandler( item, req [, paths, callback ] )  </span>
> *@param* **item** {Object} - valid field object  
> *@param* **req** {Object} - valid file object  
> *@param* **paths** {Object} - valid field paths (optional)  
> *@param* **callback** {Function} - optional callback (optional)  
> *@api* **public**  

Returns a callback that handles a standard form submission for the field.  
Expected form parts are:  
`field.paths.improve` in `req.body` - improves data via `.googleLookup()`.  
`field.paths.overwrite` in `req.body` - in conjunction with `improve`, overwrites existing data.   
<div class="code-header addGitHubLink" data-file="lib/fieldTypes/location.js#L296-L333">&nbsp; </div><pre class=" language-javascript hideCode api"></pre> 

---
<span class="subMethod"> .Field.Types.Location.handleRequest( item, req [, paths, callback ] )  </span> 
> *@param* **item** {Object} - valid field object  
> *@param* **req** {Object} - valid file object  
> *@param* **paths** {Object} - valid field paths (optional)  
> *@param* **callback** {Function} - optional callback (optional)  
> *@api* **public**  

Immediately handles a standard form submission for the field (see `.Field.Types.Location.getRequestHandler()`).  

<div class="code-header addGitHubLink" data-file="lib/fieldTypes/location.js#L336-L344"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre>

---
<span class="subMethod"> .Field.Types.Location.googleLookup( item, region [, update ], callback )  </span> 
> *@param* **item** {Object}   
> *@param* **region** {String}  
> *@param* **update** {Boolean|String} -  (optional)  
> *@param* **callback** {Function}   
> *@api* **public**  

Autodetect the full address and lat, lng from the stored value.  
Internal status codes mimic the Google API status codes.
<p class="caution-note">Uses Google's Maps API and may only be used in conjunction with a Google map.   
Geocoding results without displaying them on a map is prohibited.  
Please make sure your Keystone app complies with the Google Maps API License. </p>
  

<div class="code-header addGitHubLink" data-file="lib/fieldTypes/location.js#L336-L344"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre>

---
<span class="subMethod"> .Field.Types.Location.kmFrom( item, point )  </span> 
> *@param* **item** {Object} - valid field object  
> *@param* **point** {Number}  
> *@api* **public**  

Returns the distance from a [lat, lng] point in kilometres.   

<div class="code-header addGitHubLink" data-file="lib/fieldTypes/location.js#L529-L537"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre>


---
<span class="subMethod"> .Field.Types.Location.milesFrom( item, point )  </span> 
> *@param* **item** {Object} - valid field object  
> *@param* **point** {Number}  
> *@api* **public**  

Returns the distance from a [lat, lng] point in miles.   

<div class="code-header addGitHubLink" data-file="lib/fieldTypes/location.js#L540-L548"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre>
