var kerouac = require('kerouac')

exports = module.exports = function(options) {
  options = options || {};

  function create_archive(page, next) {
    var pages = page.pages;

    var posts = Object.keys(pages).map(function(path) {
        return pages[path];
      }).filter(function(page) {
        return page.post == true;
      });

    console.log(posts);
    // for template
    page.locals.posts = posts;

    // what should we do with this?
    page.locals.title = page.locals.title || '';

    // render posts
    // default layout is node_modules/kerouac-blog-index/lib/index.ejs, this can be overriden
    page.render(options.layout || __dirname + '/index');
    next();
  }

  return function robots(site, pages) {
    site.page('/blog/index.html', kerouac.url()
                                , create_archive);

  }
}



