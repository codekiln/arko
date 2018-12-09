import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Img from 'gatsby-image'

const getDetail = ([attrName, attrValue]) => {
  if (!attrValue) return null
  const keyAndClass = 'details-' + attrName
  const classWithBulmaStyle =
    keyAndClass + ' is-size-7 has-text-grey-dark is-marginless is-paddingless'
  return (
    <p key={keyAndClass} className={classWithBulmaStyle}>
      {attrValue}
    </p>
  )
}

const WorkDetails = attrs => (
  <div className="work-details">{Object.entries(attrs).map(getDetail)}</div>
)

WorkDetails.propTypes = {
  data: PropTypes.object,
}

export default WorkDetails
