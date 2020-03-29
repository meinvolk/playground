import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ComponentRenderer from "../components/componentRenderer"

const IndexPage = (props) => {
  const mainContentArea = props.data.cms.homePage.mainContentArea;
  return (
    <Layout>
      <SEO title="Home" />
      {mainContentArea.map(block => ComponentRenderer(block))}
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  {
    cms {
      homePage {
        mainContentArea {
          ... on cms_ComponentComponentHeroCarousel {
            id
            __typename
            slide {
              heroTitle
              heroImage {
                url
              }
              __typename
            }
          }
          ... on cms_ComponentComponentCallToAction {
            id
            __typename
            callToActionItem {
              title
              description
              image {
                url
              }
              __typename
            }
          }
          ... on cms_ComponentComponentRichTextField {
            id
            __typename
            content
          }
        }
      }
    }
  }
`