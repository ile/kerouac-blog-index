kerouac-blog-index
==================

For creating a blog index in [kerouac](https://github.com/jaredhanson/kerouac).

## Usage

In `site.js`, using a default layout:

```javascript
site.plug(require('kerouac-blog')('blog', { layout: 'blog' }));
site.plug(require('kerouac-blog-index')('blog'));
```

Using a custom layout:

```javascript
site.plug(require('kerouac-blog')('blog', { layout: 'blog' }));
site.plug(require('kerouac-blog-index')('blog', { layout: 'blog-index' }));
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

