import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Twitter from "./Twitter";
import Facebook from "./Facebook";
import { Helmet } from "react-helmet";

interface IProps {
  title?: string;
  description?: string;
  image?: string;
  article?: boolean;
  context: PageContext;
}

const query = graphql`
  query SEOQuery {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl
        defaultImage: logo
        twitter
        siteLanguage
      }
    }
  }
  `;

const SEO = ({context, title = null, description = null, image = null, article = false}: IProps) => {

  return (
    <StaticQuery
      query={query}
      render={({
        site: {
          siteMetadata: {
            defaultTitle,
            titleTemplate,
            defaultDescription,
            siteUrl,
            defaultImage,
            twitter,
          },
        },
      }) => {

        const seo = {
          description: description || defaultDescription,
          image: `${siteUrl}${image || defaultImage}`,
          title: title || defaultTitle,
          url: `${siteUrl}${location.pathname}`,
        };

        return (
          <>
            <Helmet title={seo.title}  titleTemplate={titleTemplate}>
              <meta name="description" content={seo.description} />
              <meta name="image" content={seo.image} />
              {!context.index && <meta name="robots" content="noindex" />}
              <html lang={context.i18n.language} />
              <link rel="canonical" href={seo.url} />
            </Helmet>
            <Facebook
              title={seo.title} desc={seo.description}
              image={seo.image} url={seo.url} type={article ? "article" : null} />
            <Twitter title={seo.title} desc={seo.description} image={seo.image} username={twitter} />
          </>
        );
      }}
    />
  );
};

export default SEO;
