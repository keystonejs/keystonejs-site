#### .Field.Types.Money( list, path, options )  
> *@param* **list** _{Object}_  - valid Keystone list   
> *@param* **path** _{String}_  - path   
> *@param* **options** _{Object}_  - options   
> *@api* **public**  

<div class="code-header"> <h4>defaults</h4></div><pre class=" language-javascript"><code class="language-javascript">this.currency = options.currency;
this._nativeType = Number;
this._underscoreMethods = ['format'];
this._properties = ['currency'];
this._fixedSize = 'small';
this._formatString = (options.format === false) ? false : (options.format || '$0,0.00');</code></pre>

<div class="code-header addGitHubLink" data-file="lib/fieldTypes/money.js"> <a href="#" class="loadCode"> code</a></div><pre class=" language-javascript hideCode api"></pre> 

---
<span class="subMethod"> .Field.Types.Money.format( item ) </span>  
> *@param* **item** {Object} - valid field object   
> *@api* **public**     

Formats the field value.  

<div class="code-header addGitHubLink" data-file="lib/fieldTypes/money.js#L29-L46">&nbsp; </div><pre class=" language-javascript hideCode api"></pre>

---
<span class="subMethod"> .Field.Types.Money.validateInput( data [, required, item ] )  </span> 
> *@param* **data** {Object} - valid data object  
> *@param* **required** {Boolean} - true if this is a required field  
> *@param* **item** {Object} - valid item object  
> *@api* **public**   
  
Validates that a value for this field has been provided in a data object.  

<div class="code-header addGitHubLink" data-file="lib/fieldTypes/money.js#L27"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 


---
<span class="subMethod"> .Field.Types.Money.updateItem( item, data )  </span> 
> *@param* **item** {Object} - valid field object  
> *@param* **data** {Object} - data to update  
> *@api* **public**  

Updates the value for this field in the item from a data object.   

<div class="code-header addGitHubLink" data-file="lib/fieldTypes/money.js#L26"> &nbsp;</div><pre class=" language-javascript hideCode api"></pre> 
