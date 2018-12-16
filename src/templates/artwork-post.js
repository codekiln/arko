import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Work from '../components/Work'

const ArtworkPost = ({ data }) => {
  const { markdownRemark: post } = data
  const desc = `${post.frontmatter.medium}, by Arhia Kohlmoos (${post.frontmatter.date})`
  const title = `${post.frontmatter.title})`

  return (
    <Layout>
      <section className="section">
        <Helmet titleTemplate="%s | Arhia Kohlmoos">
          <title>{title}</title>
          <meta name="description" content={desc} />
          <meta property="og:title" content={title} />
          <meta property="og:type" content="product.item" />
          <meta property="og:description" content={desc} />
          <meta
            property="og:image"
            content={post.frontmatter.image.childImageSharp.fluid.src}
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
