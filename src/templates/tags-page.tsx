import * as React from "react";
import Blog from "../pages/blog";
import { graphql } from "gatsby";

export default Blog;

export const pageQuery = graphql`
query TemplateTagPage($tag: String) {
  # Get tags
  tags: allMarkdownRemark(filter: {frontmatter: {draft: {ne: true}}}) {
    group(field: frontmatter___tags) {
      fieldValue
      totalCount
    }
  }

  # Get posts
  posts: allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___createdDate] },
    filter: {
      frontmatter: {
        draft: { ne: true }
        tags: { in: [$tag] }
      },
      fileAbsolutePath: { regex: "/blog/" }
    }
  ) {
    totalCount
    edges {
      node {
        excerpt
        timeToRead
        fields {
          slug
        }
        frontmatter {
          title
          createdDate(formatString: "DD MMMM, YYYY")
          image {
          	children {
              ... on ImageSharp {
                fixed(width: 800, height: 400) {
                  src
                  srcSet
                }
              }
            }
          }
        }
      }
    }
  }
}
`;
