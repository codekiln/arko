import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import WorkDetails from './WorkDetails'

const Work = ({ post, showOutline = true }) => {
  const topLevelClass = 'content work' + (showOutline ? ' box' : '')
  console.log('in work, post is ', post, ' and show outline is: ', showOutline)
  return (
    <div className={topLevelClass} style={{ 'max-width': 561 }} key={post.id}>
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
      slug: PropTypes.string.isRequired,
    }),
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: PropTypes.shape({
        childImageSharp: PropTypes.object.isRequired,
      }),
      dimension: PropTypes.string.isRequired,
      medium: PropTypes.string.isRequired,
    }),
  }),
  showOutline: PropTypes.bool,
}

export default Work