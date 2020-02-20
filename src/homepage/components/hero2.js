import React from "react"
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';
import { Link } from 'gatsby';
import '../../common/styles/custom.tachyons.css'
import 'tachyons';

 <StaticQuery
      query={graphql`
        query {
          image: file(relativePath: {eq: "img/author.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1080) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          copy: markdownRemark(frontmatter: {name: {eq: "homepage__bio"}}) {
            html
            frontmatter {
              title
            }
          }
        }  
      `}
      render={(data) => (
        <React.Fragment>
      <Img
      className="w-100 vh-50 mw9 center"
     fluid={data.image.childImageSharp.fluid}
     alt="SEO life" />
<div
      className="h-auto bg-white mw9 w-100 flex flex-column items-center justify-center pv5 ph2 center">
      <span className="fw1 display dark-gray db tc w-100 mw7 f3 f2-ns">{data.copy.frontmatter.title}</span>
      <p className="serif mw6 tc f5 dn dib-l mb4 db" dangerouslySetInnerHTML={{__html: data.copy.html}}></p>
      <Link className="db pv3 ph5 tracked ttu b bg-dark-blue white sans-serif no-underline hover-white" to="/seo-nomad-life/">Nomad Life</Link>
    </div>
  </React.Fragment>
)
