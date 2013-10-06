kerouac-blog-index
==================

For creating a blog index in kerouac.

## Usage

In `site.js`, using a default layout:

```javascript
site.plug(require('kerouac-blog')('blog', { layout: 'blog' }));
site.plug(require('kerouac-blog-index')());
```

Using a custom layout:

```javascript
site.plug(require('kerouac-blog')('blog', { layout: 'blog' }));
site.plug(require('kerouac-blog-index')({ layout: 'blog-index' }));
```

## Layouts

A default layout is suplied and used by default. Custom layouts can be defined as well, example:

```html
<% layout('../layout') -%>

<section>
	<ul class="posts">
	  <% posts.forEach(function(post){ %>
	    <li><a href="<%- post.url -%>"><%- post.title || post.url -%></a></li>
	  <% }) %>
	</ul>
</section>
```

