import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import WorkDetails from '../components/WorkDetails'

export default class IndexPage extends React.Component {
  showOutline = false

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <section className="section">
          <div className="container">
            {posts.map(({ node: post }) => (
              <div key={post.id}>
                <div
                  className="full-width-image-container"
                  style={{
                    backgroundImage: `url(${
                      post.frontmatter.frontispiece.childImageSharp
                        ? post.frontmatter.frontispiece.childImageSharp.fluid
                            .src
                        : post.frontmatter.frontispiece
                    })`,
                  }}
                />
                <WorkDetails
                  attrs={post}
                  link={post.fields.slug}
                  isDetail={true}
                />
              </div>
            ))}
          </div>
        </section>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "artwork-post" } } }
      limit: 1
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
            frontispiece {
              id
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
