const url = `https://impactasaurus.org`;
module.exports = {
  siteMetadata: {
    title: 'Simple and Free Social Impact Reporting',
    titleTemplate: '%s - Impactasaurus',
    siteLanguage: 'en',
    logo: '/images/logos/logo.png',
    siteUrl: url,
    description: 'Demonstrate your outcomes and social impact with Impactasaurus. Easy to use, free and only takes a few minutes to get started!',
    twitter: '@impactasaurus',
    sentryKey: 'a01a68a753034c548bbeff7c06dd2d37'
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
        trackingId: 'UA-61133305-4',
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

    // Crawler support
    'gatsby-plugin-robots-txt',
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: ['/draft/blog/*']
      }
    },
    `gatsby-plugin-remove-serviceworker`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `testimonials`,
        path: `${__dirname}/data/testimonials`,
        plugins: [
          `gatsby-transformer-json`
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/i18n/locales`,
        name: `locales`,
        ignore: [`**/raw.json`]
      }
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: 'locales',
        languages: require('./i18n/languages.json'),
        defaultLanguage: `en`,
        siteUrl: url,
        i18nextOptions: {
          interpolation: {
            escapeValue: false // Not needed for react as it escapes by default
          }
        }
      }
    }
  ]
};
