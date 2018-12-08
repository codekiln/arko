import React from 'react'
import PropTypes from 'prop-types'
import {Link, graphql} from 'gatsby'
import Layout from '../../components/Layout'
import Img from "gatsby-image";

export default class PaintingsIndexPage extends React.Component {
    render() {
        const {data} = this.props
        const {edges: posts} = data.allMarkdownRemark

        return (
            <Layout>
                <section className="section">
                    <div className="container">
                        {posts.map(({node: post}) => (
                            <div
                                className="content"
                                style={{"max-width": 561}}
                                key={post.id}
                            >
                                <Link className="has-text-primary" to={post.fields.slug}>
                                    <Img fluid={post.frontmatter.image.childImageSharp.fluid} alt={post.title}/>
                                </Link>
                                <p>
                                    <Link className="has-text-primary" to={post.fields.slug}>
                                        {post.frontmatter.title}
                                    </Link>
                                    <span> &bull; </span>
                                    <small>{post.frontmatter.date}</small>
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </Layout>
        )
    }
}

PaintingsIndexPage.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
}

export const pageQuery = graphql`
query PaintingsIndexQuery {
  allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {
      frontmatter: {
        templateKey: {eq: "artwork-post"}, category: {eq: "Paintings"}
      }
    }) {
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
        }
      }
    }
  }
}
`
