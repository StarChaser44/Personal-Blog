import React from 'react'
import Layout from '../Components/Layout'
import {graphql} from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import '../Styles/txtFmt.scss'

export const query = graphql`
query($slug: String!) {
    contentfulBlogPost(slug:{eq: $slug}){
        title
        publishedDate(fromNow: true)
        body {
            json
        }
    }
}
` 


const Blog = (props) => {
    return (
        <Layout>
            <h2 style={{marginTop: '2rem', paddingTop: '10px', textAlign: 'center'}}>{props.data.contentfulBlogPost.title}</h2>
            {/* <p>{props.data.contentfulBlogPost.publishedDate}</p> */}
            {
                documentToReactComponents(props.data.contentfulBlogPost.body.json)
            }
        </Layout>
    )
}

export default Blog;