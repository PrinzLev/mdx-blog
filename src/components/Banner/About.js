import React from 'react'
import SocialLinks from '../../constants/socialLinks'
import Image from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import Title from './Title'
import styled from 'styled-components'

const query = graphql`
  {
    file(relativePath: { eq: "banner-about.jpeg" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const About = () => {
  const {
    file: {
      childImageSharp: { fixed },
    },
  } = useStaticQuery(query)
  return (
    <Wrapper>
      <Title title="About Me" />
      <Image fixed={fixed} className="img" />
      <p>
        I gave it a cold? I gave it a virus. A computer virus. Yeah, but John,
        if The Pirates of the Caribbean breaks down, the pirates don’t eat the
        tourists.
      </p>
      <SocialLinks styleClass="banner-icons" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  p {
    color: var(--clr-grey-5);
  }
  .img {
    border-radius: 50%;
  }
`
export default About
