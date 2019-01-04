import * as React from "react";
import {MarkdownRemark} from "../../graphql-types";
import Col from "react-bootstrap/lib/Col";
import { get } from "lodash";
import { Link } from "gatsby";

export const BlogSnippet = ({node}: {node: MarkdownRemark}) => {
  const { frontmatter, fields: { slug } } = node;
  const cover = get(frontmatter, "image.children.0.fixed", {});

  return (
    <Col lg={4} md={6} key={slug}>
      <Link to={slug} style={{display: "flex", flexDirection: "column", border: "1px solid lightgray", marginBottom: "4rem"}}>
        <img src={cover.src} srcSet={cover.srcSet} style={{height: "12rem", objectFit: "cover"}} />
        <h4 style={{margin: "1rem auto", maxWidth: "90%"}}>{frontmatter.title}</h4>
      </Link>
    </Col>
  );
};
