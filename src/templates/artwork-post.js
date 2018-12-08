import React from 'react'
import PropTypes from 'prop-types'
import {kebabCase} from 'lodash'
import Helmet from 'react-helmet'
import {graphql, Link} from 'gatsby'
import Layout from '../components/Layout'
import Content, {HTMLContent} from '../components/Content'
import Img from "gatsby-image";

export const ArtworkPostTemplate = ({
                                        content,
                                        image,
                                        contentComponent,
                                        description,
                                        title,
                                        date,
                                        helmet,
                                    }) => {
    const PostContent = contentComponent || Content

    return (
        <section className="section">
            {helmet || ''}
            <div className="container content">
                <div className="columns">
                    <div className="column is-10 is-offset-1">
                        <Img fluid={image.childImageSharp.fluid} alt={title} style={{"max-width": 561}}/>
                        <p className="work-details margin-bottom-0">{title}</p>
                        <p className="margin-top-0 margin-bottom-0">{date}</p>
                        <p className="margin-top-0">{description}</p>
                        <PostContent content={content}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

ArtworkPostTemplate.propTypes = {
    content: PropTypes.node.isRequired,
    image: PropTypes.node.isRequired,
    contentComponent: PropTypes.func,
    description: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string,
    helmet: PropTypes.object,
}

const ArtworkPost = ({data}) => {
    const {markdownRemark: post} = data

    return (
        <Layout>
            <ArtworkPostTemplate
                content={post.html}
                contentComponent={HTMLContent}
                description={post.frontmatter.description}
                helmet={
                    <Helmet titleTemplate="%s | Blog">
                        <title>{`${post.frontmatter.title}`}</title>
                        <meta
                            name="description"
                            content={`${post.frontmatter.description}`}
                        />
                    </Helmet>
                }
                image={post.frontmatter.image}
                title={post.frontmatter.title}
                date={post.frontmatter.date}
            />
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
        category
      }
    }
  }
`
