import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import IndexPage from '../index'

export default class DrawingsIndexPage extends IndexPage {
  // noinspection JSUnusedGlobalSymbols
  showOutline = true
}

DrawingsIndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query DrawingsIndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: {
          templateKey: { eq: "artwork-post" }
          category: { eq: "Drawings" }
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
`
