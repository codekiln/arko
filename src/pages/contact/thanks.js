import React from 'react'
import Layout from '../../components/Layout'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

export default () => (
  <Layout>
    <section className="section">
      <div className="columns is-centered">
        <div className="column is-two-fifths">
          <div className="content">
            <h1>Thank you!</h1>
            <p>
              For more information, please also see my{' '}
              <OutboundLink
                href="https://www.facebook.com/ArhiaKohlmoosArt"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook Artist Page
              </OutboundLink>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)
