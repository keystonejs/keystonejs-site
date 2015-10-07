#### .Field.Types.DateArray( list, path, options )  
> *@param* **list** _{Object}_  - valid Keystone list   
> *@param* **path** _{String}_  - path   
> *@param* **options** _{Object}_  - options   
> *@api* **public**  

<div class="code-header"> <h4>defaults</h4></div><pre class=" language-javascript"><code class="language-javascript">this._nativeType = [Date];
this._defaultSize = 'medium';
this._underscoreMethods = ['format'];
this._properties = ['formatString'];
this.parseFormatString = options.parseFormat || 'YYYY-MM-DD';
this.formatString = (options.format === false) ? false : (options.format || 'Do MMM YYYY');</code></pre>

<div class="code-header addGitHubLink" data-file="lib/fieldTypes/datearray.js"> <a href="#" class="loadCode"> code</a></div><pre class=" language-javascript hideCode api"></pre> 

<span class="subMethod"> .Field.Types.DateArray.format( item ) </span>  
> *@param* **item** {Object} - valid field object   
> *@api* **public**     

Formats the field value.

<div class="code-header addGitHubLink" data-file="lib/fieldTypes/datearray.js#L38-L50"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 

---
<span class="subMethod"> .Field.Types.DateArray.validateInput( data [, required, item ] )  </span> 
> *@param* **data** {Object} - valid data object  
> *@param* **required** {Boolean} - true if this is a required field  
> *@param* **item** {Object} - valid item object  
> *@api* **public**   
 

Checks that a valid array of dates has been provided in a data object.  
An empty value clears the stored value and is considered valid.

<div class="code-header addGitHubLink" data-file="lib/fieldTypes/datearray.js#L52-L101"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 


---
<span class="subMethod"> .Field.Types.DateArray.updateItem( item, data )  </span> 
> *@param* **item** {Object} - valid field object  
> *@param* **data** {Object} - data to update  
> *@api* **public**  

Updates the value for this field in the item from a data object 

<div class="code-header addGitHubLink" data-file="lib/fieldTypes/datearray.js#L104-L133"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 
