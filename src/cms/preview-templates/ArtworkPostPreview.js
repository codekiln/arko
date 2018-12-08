import React from 'react'
import PropTypes from 'prop-types'
import { ArtworkPostTemplate } from '../../templates/artwork-post'

const ArtworkPostPreview = ({ entry, widgetFor }) => (
  <ArtworkPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    title={entry.getIn(['data', 'title'])}
  />
)

ArtworkPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ArtworkPostPreview
