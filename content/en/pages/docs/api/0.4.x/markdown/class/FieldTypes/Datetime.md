#### .Field.Types.Datetime( list, path, options )  
> *@param* **list** _{Object}_  - valid Keystone list   
> *@param* **path** _{String}_  - path   
> *@param* **options** _{Object}_  - options   
> *@api* **public**  

<div class="code-header"> <h4>defaults</h4></div><pre class=" language-javascript"><code class="language-javascript">var parseFormats = ['YYYY-MM-DD', 'YYYY-MM-DD h:m:s a', 'YYYY-MM-DD h:m a', 'YYYY-MM-DD H:m:s', 'YYYY-MM-DD H:m'];
   
...
this._nativeType = Date;
this._underscoreMethods = ['format', 'moment', 'parse'];
this._fixedSize = 'full';
this._properties = ['formatString', 'isUTC'];
this.typeDescription = 'date and time';
this.parseFormatString = options.parseFormat || parseFormats;
this.formatString = (options.format === false) ? false : (options.format || 'YYYY-MM-DD h:m:s a');
this.isUTC = options.utc || false;</code></pre>

<div class="code-header addGitHubLink" data-file="fields/types/datetime/DatetimeType.js"> <a href="#" class="loadCode"> code</a></div><pre class=" language-javascript hideCode api"></pre> 

<span class="subMethod"> .Field.Types.Datetime.addFilterToQuery( filter, query ) </span>   
> *@param* **filter** {Object} - valid filter object   
> *@param* **query** {Object} - valid query object   
> *@api* **public**    

Add filters to a query.  
<div class="code-header addGitHubLink" data-file="fields/types/datetime/DatetimeType.js#L34"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 

---

<span class="subMethod"> .Field.Types.Datetime.format( item ) </span>  
> *@param* **item** {Object} - valid field object   
> *@api* **public**     

Formats the field value.

<div class="code-header addGitHubLink" data-file="fields/types/datetime/DatetimeType.js#L35"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 

---
<span class="subMethod"> .Field.Types.Datetime.moment( item ) </span> 
> *@param* **item** {Object} - valid field object   
> *@api* **public**    

Returns a new `moment` object with the field value.    

<div class="code-header addGitHubLink" data-file="fields/types/datetime/DatetimeType.js#L36">&nbsp; </div><pre class=" language-javascript hideCode api"></pre> 

---
<span class="subMethod"> .Field.Types.Datetime.parse( item )  </span>  
> *@param* **item** {Object} - valid field object   
> *@api* **public**  

Parses input using moment, sets the value, and returns the moment object.  
<div class="code-header addGitHubLink" data-file="fields/types/datetime/DatetimeType.js#L37">&nbsp; </div><pre class=" language-javascript hideCode api"></pre> 

---

<span class="subMethod"> .Field.Types.Datetime.getInputFromData( data ) </span>  
> *@param* **data** {Object} - valid data object   
> *@api* **public**     

Get the value from a data object; may be simple or a pair of fields

<div class="code-header addGitHubLink" data-file="fields/types/datetime/DatetimeType.js#L39-L48"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 

---
<span class="subMethod"> .Field.Types.Datetime.validateInput( data [, required, item ] )  </span> 
> *@param* **data** {Object} - valid data object  
> *@param* **required** {Boolean} - true if this is a required field  
> *@param* **item** {Object} - valid item object  
> *@api* **public**   
  
Checks that a valid date has been provided in a data object  
An empty value clears the stored value and is considered valid.

<div class="code-header addGitHubLink" data-file="fields/types/datetime/DatetimeType.js#L50-L64"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 


---
<span class="subMethod"> .Field.Types.Datetime.updateItem( item, data )  </span> 
> *@param* **item** {Object} - valid field object  
> *@param* **data** {Object} - data to update  
> *@api* **public**  

Updates the value for this field in the item from a data object 

<div class="code-header addGitHubLink" data-file="fields/types/datetime/DatetimeType.js#L66-L82"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 
