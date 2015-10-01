#### .Field.Types.Date( list, path, options )  
> *@param* **list** _{Object}_  - valid Keystone list   
> *@param* **path** _{String}_  - path   
> *@param* **options** _{Object}_  - options   
> *@api* **public**  

<div class="code-header"> <h4>defaults</h4></div><pre class=" language-javascript"><code class="language-javascript">this._nativeType = Date;
this._underscoreMethods = ['format', 'moment', 'parse'];
this._fixedSize = 'medium';
this._properties = ['formatString', 'yearRange', 'isUTC'];
this.parseFormatString = options.parseFormat || 'YYYY-MM-DD';
this.formatString = (options.format === false) ? false : (options.format || 'Do MMM YYYY');
this.yearRange = options.yearRange;
this.isUTC = options.utc || false;</code></pre>

<div class="code-header addGitHubLink" data-file="fields/types/date/DateType.js"> <a href="#" class="loadCode"> code</a></div><pre class=" language-javascript hideCode api"></pre> 

<span class="subMethod"> .Field.Types.Date.addFilterToQuery( filter, query ) </span>   
> *@param* **filter** {Object} - valid filter object   
> *@param* **query** {Object} - valid query object   
> *@api* **public**    

Add filters to a query.  
<div class="code-header addGitHubLink" data-file="fields/types/date/DateType.js#L27-L58"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 

---

<span class="subMethod"> .Field.Types.Date.format( item ) </span>  
> *@param* **item** {Object} - valid field object   
> *@api* **public**     

Formats the field value.

<div class="code-header addGitHubLink" data-file="fields/types/date/DateType.js#L60-L69"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 

---
<span class="subMethod"> .Field.Types.Date.moment( item ) </span> 
> *@param* **item** {Object} - valid field object   
> *@api* **public**    

Returns a new `moment` object with the field value.    

<div class="code-header addGitHubLink" data-file="fields/types/date/DateType.js#L71-L78">&nbsp; </div><pre class=" language-javascript hideCode api"></pre> 

---
<span class="subMethod"> .Field.Types.Date.parse( item )  </span>  
> *@param* **item** {Object} - valid field object   
> *@api* **public**  

Parses input using moment, sets the value, and returns the moment object.  
<div class="code-header addGitHubLink" data-file="fields/types/date/DateType.js#L80-L88">&nbsp; </div><pre class=" language-javascript hideCode api"></pre> 

---
<span class="subMethod"> .Field.Types.Date.validateInput( data )  </span> 
> *@param* **data** {Object} - valid data object  
> *@api* **public**   
 

Checks that a valid date has been provided in a data object.   
An empty value clears the stored value and is considered valid.

<div class="code-header addGitHubLink" data-file="fields/types/date/DateType.js#L90-L104"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 


---
<span class="subMethod"> .Field.Types.Date.updateItem( item, data )  </span> 
> *@param* **item** {Object} - valid field object  
> *@param* **data** {Object} - data to update  
> *@api* **public**  

Updates the value for this field in the item from a data object 

<div class="code-header addGitHubLink" data-file="fields/types/date/DateType.js#L106-L122"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 
