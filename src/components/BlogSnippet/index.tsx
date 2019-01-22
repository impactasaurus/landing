import * as React from "react";
import {MarkdownRemark} from "../../graphql-types";
import Col from "react-bootstrap/lib/Col";
import { get } from "lodash";
import { Link } from "gatsby";

export const BlogSnippet = ({node, wide}: {node: MarkdownRemark, wide?: boolean}) => {
  const { frontmatter, fields: { slug } } = node;
  const cover = get(frontmatter, "image.children.0.fixed", {});

  const lg = wide === true ? 6 : 4;

  return (
    <Col lg={lg} md={6} key={slug}>
      <Link to={slug} style={{display: "flex", flexDirection: "column", border: "1px solid lightgray", marginBottom: "4rem", minHeight: "21rem"}}>
        <img src={cover.src} srcSet={cover.srcSet} style={{height: "12rem", objectFit: "cover"}} />
        <div style={{flexGrow: 1, display: "flex", justifyContent: "center", alignItems: "center", margin: "1rem 5%"}}>
          <h4 style={{margin: "0"}}>{frontmatter.title}</h4>
        </div>
      </Link>
    </Col>
  );
};
