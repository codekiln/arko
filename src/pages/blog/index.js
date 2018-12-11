import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import { HTMLContent } from '../../components/Content'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    // noinspection CheckTagEmptyBody
    return (
      <Layout>
        <section className="section">
          <div className="columns is-centered">
            <div className="column is-three-fifths">
              {posts.map(({ node: post }) => (
                <div className="box" key={post.id}>
                  <div className="content">
                    <h2 className="is-size-4 is-bold-light">
                      <Link to={post.fields.slug}>
                        {post.frontmatter.title}
                      </Link>
                    </h2>
                    <small>{post.frontmatter.date}</small>
                    <span> &bull; </span>
                    <small><em>{post.frontmatter.description}</em></small>
                  </div>
                  <hr />

                  <HTMLContent content={post.html} />
                </div>
              ))}
            </div>
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
  query PostsIndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 600)
          id
          html
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            description
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
