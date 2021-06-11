const path = require('path');
const slash = require('slash');
const {kebabCase, uniq, get, compact, times} = require('lodash');
const indexableLanguages = require('./locales/indexableLanguages.json');

// Don't forget to update hard code values into:
// - `templates/blog-page.tsx:23`
// - `pages/blog.tsx:26`
// - `pages/blog.tsx:121`
const POSTS_PER_PAGE = 10;
const cleanArray = arr => compact(uniq(arr));

// Create slugs for files.
// Slug will used for blog page path.
exports.onCreateNode = ({node, actions, getNode}) => {
  const {createNodeField} = actions;
  let slug;
  switch (node.internal.type) {
    case `MarkdownRemark`:
      const fileNode = getNode(node.parent);
      const [basePath, name] = fileNode.relativePath.split('/');
      slug = `/${basePath}/${name}/`;
      break;
  }
  if (slug) {
    createNodeField({node, name: `slug`, value: slug});
  }
};

exports.onCreatePage = ({page, actions}) => {
  if (typeof page.context.i18n !== 'object') {
    return;
  }
  const lang = page.context.i18n.language;
  const indexable = indexableLanguages.indexOf(lang) !== -1;

  const {createPage, deletePage} = actions;
  deletePage(page);
  createPage({
    ...page,
    context: {
      ...page.context,
      index: indexable
    }
  });
};

const createDraftBlogPages = (graphql, createPage) => {
  const template = path.resolve(`src/templates/${kebabCase('blogPost')}.tsx`);
  return graphql(
    `
      {
        posts: allMarkdownRemark(
          filter: {
            frontmatter: {
              draft: { eq: true }
            },
            fileAbsolutePath: {regex: "/blog/"},
          }
        ) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.data.posts === null) {
      return;
    }
    const posts = result.data.posts.edges.map(p => p.node);

    posts.filter(post => post.fields.slug.startsWith('/blog/')).forEach(post => {
      createPage({
        path: '/draft' + post.fields.slug,
        component: slash(template),
        context: {
          slug: post.fields.slug
        }
      });
    });
  });
};

const createBlogPages = (graphql, createPage) => {
  return new Promise((resolve, reject) => {
    const templates = ['blogPost', 'tagsPage', 'blogPage']
      .reduce((mem, templateName) => {
        return Object.assign({}, mem,
        {[templateName]: path.resolve(`src/templates/${kebabCase(templateName)}.tsx`)});
      }, {});

    graphql(
      `
      {
        posts: allMarkdownRemark(
          filter: {
            frontmatter: {
              draft: { ne: true }
            },
            fileAbsolutePath: {regex: "/blog/"},
          }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                tags
              }
            }
          }
        }
      }
    `
    ).then(result => {
      if (result.errors) {
        return reject(result.errors);
      }
      const posts = result.data.posts.edges.map(p => p.node);

      // Create blog pages
      posts
        .filter(post => post.fields.slug.startsWith('/blog/'))
        .forEach(post => {
          createPage({
            path: post.fields.slug,
            component: slash(templates.blogPost),
            context: {
              slug: post.fields.slug
            }
          });
        });

      // Create tags pages
      posts
        .reduce((mem, post) =>
          cleanArray(mem.concat(get(post, 'frontmatter.tags')))
        , [])
        .forEach(tag => {
          createPage({
            path: `/blog/tags/${kebabCase(tag)}/`,
            component: slash(templates.tagsPage),
            context: {
              tag
            }
          });
        });

      // Create blog pagination
      const pageCount = Math.ceil(posts.length / POSTS_PER_PAGE);
      times(pageCount, index => {
        createPage({
          path: `/blog/page/${index + 1}/`,
          component: slash(templates.blogPage),
          context: {
            skip: index * POSTS_PER_PAGE
          }
        });
      });

      resolve();
    });
  });
};

const createPressPages = (graphql, createPage) => {
  return new Promise((resolve, reject) => {
    const templates = ['pressRelease']
      .reduce((mem, templateName) => {
        return Object.assign({}, mem,
        {[templateName]: path.resolve(`src/templates/${kebabCase(templateName)}.tsx`)});
      }, {});

    graphql(
      `
      {
        posts: allMarkdownRemark(
          filter: {
            fileAbsolutePath: {regex: "/press/"},
          }
        ) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
    ).then(result => {
      if (result.errors) {
        return reject(result.errors);
      }
      const posts = result.data.posts.edges.map(p => p.node);

      // Create blog pages
      posts.forEach(post => {
        createPage({
          path: post.fields.slug,
          component: slash(templates.pressRelease),
          context: {
            slug: post.fields.slug
          }
        });
      });

      resolve();
    });
  });
};

// Implement the Gatsby API `createPages`.
// This is called after the Gatsby bootstrap is finished
// so you have access to any information necessary to
// programatically create pages.
exports.createPages = ({graphql, actions: {createPage}}) => {
  return Promise.all([
    createBlogPages(graphql, createPage),
    createPressPages(graphql, createPage),
    createDraftBlogPages(graphql, createPage)
  ]);
};
