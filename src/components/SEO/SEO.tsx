import React from "react";
import Helmet from "react-helmet";
import { StaticQuery } from "gatsby";
import Twitter from "./Twitter";
import Facebook from "./Facebook";

interface IProps {
  title: string;
  description: string;
  image: string;
  pathname: string;
  article: boolean;
}

const query = graphql`
  query SEOQuery {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: logo
        twitter
        siteLanguage
      }
    }
  }
  `;

const SEO = ({title = null, description = null, image = null, pathname = null, article = false}: IProps) => (
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
          siteLanguage,
        },
      },
    }) => {

      const seo = {
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        title: title || defaultTitle,
        url: `${siteUrl}${pathname || "/"}`,
      };

      return (
        <>
          <Helmet title={seo.title}  titleTemplate={titleTemplate}>
            <html lang={siteLanguage} />
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
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

export default SEO;
