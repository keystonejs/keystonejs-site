#### List.add( fields )
> *@param* **fields** _{Object}_  - Object of valid Keystone/Mongoose document fields  
> _@return_ **this** 

Adds one or more fields to the List  
Based on Mongoose's `Schema.add` 

```javascript
Post.add({
    title: { type: String, required: true },
    state: { type: Types.Select, options: 'draft, published, archived', default: 'draft' },
    author: { type: Types.Relationship, ref: 'User' },
    createdAt: { type: Date, default: Date.now },
    publishedAt: Date,
    image: { type: Types.CloudinaryImage },
    content: {
        brief: { type: Types.Html, wysiwyg: true, height: 150 },
        extended: { type: Types.Html, wysiwyg: true, height: 400 }
    }
});
```
<div class="code-header addGitHubLink" data-file="lib/list/add.js"> <a href="#" class="loadCode">code</a> </div><pre class=" language-javascript hideCode api"></pre> 
