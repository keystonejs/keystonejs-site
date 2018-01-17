#### List.customAction( name, [options], action )
> *@param* **name** _{String}_  - The name given to the action. Appears on the button.  
> *@param* **options** _{Object}_  - Options  
> *@param* **action** _{Function}_  - callback(req, res, next)  
> _@return_ **this**

Add a custom action to an item page, accessible via a button. The custom action is exposed on an endpoint located at `/api/:list/:id/actions/:customAction`, where `customAction` is a slug of the name of the custom action.

The `action` is provided the `req` request object and the `res` response object. `req.item` provides access to the item object the operation is to be performed upon. `req.body` is an object containing the contents of the form when the button was pressed. `next(message)` must be called once the action callback is complete. It can optionally be passed a `message` that will show as a success message to the user. `throw new Error(message)` can be used to indicate a failure. `message` will be shown an error message to the user.

Options can contain the following keys:

* `slug` - Override the slug given to the action that is to be used on the endpoint URL.
* `mobileText` - Provide short form text that will be displayed on the button in mobile view. Defaults to `name`.
* `title` - Provide a tooltip on hover. Defaults to `name`.
* `type` - Provide a type to assign to the button. Defaults to `hollow-primary`.
* `dependsOn`- Provide an [expression-match](https://github.com/inquisive/expression-match) expression to define if the button should be enabled or disabled. This is verified on the client side and the server side. Defaults to `undefined`.
* `save` - An object in the form `{ pre: true|false, post: true|false }`. If `pre` is true, the body of the form from `req.body` will be used to update and save `req.item` before `action` is called. If `post` is true, any modifications to `req.item` will be saved after the `action` callback has completed. Defaults to  `{ pre: false, post: false }`.

```javascript
Post.customAction('Archive', {
    dependsOn: {status: {$not: 'archived'}},
    title: 'Archive a post',
    save: {pre: false, post: true}
}, function(req, res, next) {
	req.item.status = 'archived';
	next("Your post was archived successfully");
});
```
<div class="code-header addGitHubLink" data-file="lib/list/customAction.js"> <a href="#" class="loadCode">code</a> </div><pre class=" language-javascript hideCode api"></pre>
