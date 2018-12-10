import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Work from '../components/Work'

const ArtworkPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <section className="section">
        <Helmet titleTemplate="Arhia Kohlmoos | %s">
          <title>{`${post.frontmatter.title}`}</title>
          <meta
            name="description"
            content={`${post.frontmatter.description}`}
          />
        </Helmet>
        <div className="container">
          <Work post={post} showOutline={false} />
        </div>
      </section>
    </Layout>
  )
}

ArtworkPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default ArtworkPost

export const pageQuery = graphql`
  query ArtworkPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
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
            fluid(maxWidth: 561, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        medium
        dimension
        category
        buylink
      }
    }
  }
`
