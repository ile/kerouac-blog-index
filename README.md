kerouac-blog-index
==================

For creating a blog index in kerouac

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