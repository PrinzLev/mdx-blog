import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Posts from '../components/Posts'
import { graphql } from 'gatsby'

const CategoryTemplate = props => {
  const {
    pageContext: { category },
  } = props
  const {
    data: {
      allMdx: { nodes: posts },
    },
  } = props
  return (
    <Layout>
      <Hero />
      <Posts posts={posts} title={`Category / ${category}`} />
    </Layout>
  )
}
export const query = graphql`
  query CategoryQuery($category: String) {
    allMdx(
      filter: { frontmatter: { category: { eq: $category } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          author
          title
          readTime
          slug
          date(formatString: "MMMM Do, YYYY")
          category
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
export default CategoryTemplate
