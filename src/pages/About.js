import React from 'react'
import {graphql, useStaticQuery } from 'gatsby'
import Layout from '../Components/Layout'
import '../Styles/txtFmt.scss'
const AboutPage = () => {
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
    `);

    return (
        <Layout>
           <div style={{textAlign: 'center'}}>{data.allMarkdownRemark.edges[0].node.frontmatter.title}</div>
            <div dangerouslySetInnerHTML={{__html: data.allMarkdownRemark.edges[0].node.html}}></div>
        </Layout>
    )
}

export default AboutPage;