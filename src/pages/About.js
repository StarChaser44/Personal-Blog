import React from 'react'
import {graphql, useStaticQuery } from 'gatsby'
import Layout from '../Components/Layout'
import '../Styles/txtFmt.scss'
const AboutPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark{
                edges {
                    node {
                    frontmatter{
                        title
                    }
                    fields {
                        slug
                    }
                    html
                    }
                }
            }
        }
    `)
    return (
        <Layout>
            <h1 style={{textAlign: 'center'}}>{data.allMarkdownRemark.edges[2].node.frontmatter.title}</h1>
            <p>{data.allMarkdownRemark.edges[2].node.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{__html: data.allMarkdownRemark.edges[2].node.html}}></div>
           
        </Layout>
    )
}

export default AboutPage;