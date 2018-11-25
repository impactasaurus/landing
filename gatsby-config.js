module.exports = {
  siteMetadata: {
    title: 'Impact Reporting for All',
    titleTemplate: '%s - Impactasaurus',
    siteLanguage: 'en',
    logo: '/images/logos/logo.png',
    siteUrl: `https://impactasaurus.org`,
    description: 'Demonstrate and improve your social impact with Impactasaurus! No matter what your budget or the size of your organisation',
    twitter: '@impactasaurus',
    googleVerification: 'abcdefz'
  },
  mapping: {
    'MarkdownRemark.frontmatter.author': 'AuthorJson'
  },
  plugins: [
    // Expose `/data` to graphQL layer
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/data`
      }
    },

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID',
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true
      }
    },

    // Parse all markdown files (each plugin add/parse some data into graphQL layer)
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 690,
              backgroundColor: `#f7f0eb`
            }
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-autolink-headers`
        ]
      }
    },

    // Parse all images files and make available via graphql
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/static/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    // Parse JSON files
    `gatsby-transformer-json`,

    // Add typescript stack into webpack
    `gatsby-plugin-typescript`,

    // Css preprocessors
    `gatsby-plugin-less`,
    `gatsby-plugin-sass`,

    // This plugin generates a service worker and AppShell
    // html file so the site works offline and is otherwise
    // resistant to bad networks. Works with almost any
    // site!
    `gatsby-plugin-offline`,

    // Crawler support
    'gatsby-plugin-robots-txt',
    `gatsby-plugin-sitemap`
  ]
};
