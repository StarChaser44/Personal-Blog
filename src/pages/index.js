import React from "react"
import Layout from '../Components/Layout'
import { graphql, useStaticQuery } from 'gatsby'


const  IndexPage = () => {
    const data = useStaticQuery(graphql`
    query{
        allMarkdownRemark (
        sort: { fields: frontmatter___date, order: ASC}
      ){ 
        edges {
          node {
            id
            frontmatter{
              title,
              date
            }
            html
          }
        }
        }
    }
`)

    return (
        <Layout>
           <div style={{textAlign: 'center'}}>{data.allMarkdownRemark.edges[1].node.frontmatter.title}</div>
            <div dangerouslySetInnerHTML={{__html: data.allMarkdownRemark.edges[1].node.html}}></div>
        </Layout>
    )
}

export default IndexPage;
