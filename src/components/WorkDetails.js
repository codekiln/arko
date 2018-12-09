import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const getDetail = (attrName, attrValue, link) => {
  if (!attrValue) return null
  const keyAndClass = 'details-' + attrName
  const classWithBulmaStyle =
    keyAndClass + ' is-size-7 has-text-grey-dark is-marginless is-paddingless'
  return attrName === 'title' ? (
    <Link key={keyAndClass} className={classWithBulmaStyle} to={link}>
      {attrValue}
    </Link>
  ) : (
    <p key={keyAndClass} className={classWithBulmaStyle}>
      {attrValue}
    </p>
  )
}

const WorkDetails = ({ attrs, link, isDetail = false }) => {
  const attrs2 = attrs.hasOwnProperty('frontmatter') ? attrs.frontmatter : attrs
  const formatDetail = key =>
    attrs2.hasOwnProperty(key) ? getDetail(key, attrs2[key], link) : null
  const orderedAttrs = ['title', 'date', 'medium', 'dimension'].map(
    formatDetail
  )
  return (
    <div className="work-details">
      {orderedAttrs}
      {isDetail && getDetail('isDetail', '(Detail)')}
    </div>
  )
}

WorkDetails.propTypes = {
  attrs: PropTypes.object,
  link: PropTypes.string,
  isDetail: PropTypes.bool,
}

export default WorkDetails
