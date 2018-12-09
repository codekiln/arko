import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import WorkDetails from './WorkDetails'

const Work = post => {
  return (
    <div className="content" style={{ 'max-width': 561 }} key={post.id}>
      <Link className="has-text-primary" to={post.fields.slug}>
        <Img
          fluid={post.frontmatter.image.childImageSharp.fluid}
          alt={post.frontmatter.title}
        />
      </Link>
      {WorkDetails(post, post.fields.slug)}
    </div>
  )
}

Work.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string,
    fields: PropTypes.shape({
      slug: PropTypes.string,
    }),
    frontmatter: PropTypes.shape({
      title: PropTypes.string,
      image: PropTypes.shape({
        childImageSharp: PropTypes.object,
      }),
      dimension: PropTypes.string,
      medium: PropTypes.string,
    }),
  }),
}

export default Work
