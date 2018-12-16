import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const getDetail = (attrName, attrValue, link) => {
  if (!attrValue) return null
  const keyAndClass = 'details-' + attrName
  const classStyles =
    attrName === 'buylink'
      ? ' button is-link is-size-6 has-text-weight-bold'
      : ' is-size-7 has-text-grey-dark is-marginless is-paddingless'
  const classWithBulmaStyle = keyAndClass + classStyles
  return attrName === 'title' ? (
    <Link key={keyAndClass} className={classWithBulmaStyle} to={link}>
      {attrValue}
    </Link>
  ) : attrName === 'buylink' ? (
    <OutboundLink
      key={keyAndClass}
      className={classWithBulmaStyle}
      href={attrValue}
      target="_blank"
      rel="noopener noreferrer"
    >
      Purchase Print
    </OutboundLink>
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
    <div className="columns is-vcentered">
      <div className="column is-two-thirds">
        <div className="work-details">
          {orderedAttrs}
          {isDetail && getDetail('isDetail', '(Detail)')}
        </div>
      </div>
      <div className="column">
        <div className="container">{formatDetail('buylink')}</div>
      </div>
    </div>
  )
}

WorkDetails.propTypes = {
  attrs: PropTypes.object,
  link: PropTypes.string,
  isDetail: PropTypes.bool,
}

export default WorkDetails
