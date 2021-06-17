import * as React from "react";
import { Link } from "gatsby";
import { graphql } from "gatsby";
import {MarkdownRemark, MarkdownRemarkConnection} from "../graphql-types";
import {withLayout, LayoutProps} from "../components/Layout";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Container from "react-bootstrap/lib/Container";
import Hero from "../components/Hero";
import SEO from "../components/SEO/SEO";
import MediaItem, {IMediaItemVersion} from "../components/MediaItem";

interface PressProps extends LayoutProps {
  data: {
    pressReleases: MarkdownRemarkConnection;
  };
  pageContext: PageContext;
}

export const PRSnippet = ({node}: {node: MarkdownRemark}) => {
  const { frontmatter: {title, createdDate, subtitle}, fields: { slug } } = node;
  return (
    <Row>
      <Col style={{textAlign: "center"}}>
        <div>
          <Link to={slug}>
            <span>{createdDate}:  </span>
            <span>{title}</span>
          </Link>
        </div>
        <div>
          {subtitle}
        </div>
      </Col>
    </Row>
  );
};

const MediaItems = () => (
  <Row>
    <Col md={3}>
      <MediaItem thumbnail={"/images/logos/logo.png"} name="impactasaurus-logo" versions={[{
        path: "/images/logos/logo.svg",
        version: "svg",
      }, {
        path: "/images/logos/logo.png",
        version: "png",
      }] as IMediaItemVersion[]} />
    </Col>
    <Col md={3}>
      <MediaItem thumbnail={"/images/logos/logo-inverse.png"} name="impactasaurus-inverted" versions={[{
        path: "/images/logos/logo-inverse.svg",
        version: "svg",
      }, {
        path: "/images/logos/logo-inverse.png",
        version: "png",
      }] as IMediaItemVersion[]} />
    </Col>
    <Col md={3}>
      <MediaItem thumbnail={"/images/logos/logo-full.png"} name="impactasaurus-logo-full" versions={[{
        path: "/images/logos/logo-full.svg",
        version: "svg",
      }, {
        path: "/images/logos/logo-full.png",
        version: "png",
      }] as IMediaItemVersion[]} />
    </Col>
    <Col md={3}>
      <MediaItem thumbnail={"/images/logos/logo-inverse-full.png"} name="impactasaurus-inverted-full" versions={[{
        path: "/images/logos/logo-inverse-full.svg",
        version: "svg",
      }, {
        path: "/images/logos/logo-inverse-full.png",
        version: "png",
      }] as IMediaItemVersion[]} />
    </Col>
  </Row>
);

const PressPage = (props: PressProps) => {
  const prs = props.data.pressReleases.edges.map((e) => e.node);

  return (
    <>
    <SEO
      title="Press"
      description="Impactasaurus' contact information, media kit and press releases. For all media enquiries please contact press@impactasaurus.org."
      context={props.pageContext}
    />
    <Hero>
      <h1>Press</h1>
      <h4><a style={{color: "white"}} href="mailto:press@impactasaurus.org">press@impactasaurus.org</a></h4>
    </Hero>
    <Container className="slanted">
      <h2>Media Kit</h2>
      <MediaItems />
      <h2>Press Releases</h2>
      {prs.map((node) => <PRSnippet node={node} key={node.fields.slug} />)}
    </Container>
    </>
  );
};

export default withLayout(PressPage, false);

export const pageQuery = graphql`
query PagePress ($language: String!) {
  locales: allLocale(filter: {language: {eq: $language}}) {
    edges {
      node {
        ns
        data
        language
      }
    }
  }
  pressReleases: allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___createdDate] },
    filter: {
      frontmatter: { draft: { ne: true } },
      fileAbsolutePath: { regex: "/press/" }
    }
  ) {
    totalCount
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          title
          createdDate(formatString: "DD MMMM, YYYY")
          subtitle
        }
      }
    }
  }
}
`;
