// eslint-disable-next-line
import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import WorkList from "../../components/WorkList";

export default class PaintingsIndexPage extends WorkList {
  // noinspection JSUnusedGlobalSymbols
  showOutline = true;
}

PaintingsIndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query PaintingsIndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: {
          templateKey: { eq: "artwork-post" }
          category: { eq: "Paintings" }
        }
      }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "YYYY")
            image {
              id
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            medium
            category
            dimension
          }
        }
      }
    }
  }
`;
