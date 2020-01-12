import React from "react"
import Layout from '../Components/Layout'
import { graphql, useStaticQuery } from 'gatsby'


const  IndexPage = () => {
    const data = useStaticQuery(graphql`
    query{
        allMarkdownRemark {
        edges {
        node {
            frontmatter{
            title
            }
            html
        }
        }
        }
    }
`)

    return (
        <Layout>
           <div style={{textAlign: 'center'}}>{data.allMarkdownRemark.edges[0].node.frontmatter.title}</div>
            <div dangerouslySetInnerHTML={{__html: data.allMarkdownRemark.edges[0].node.html}}></div>
        </Layout>
    )
}

export default IndexPage;
