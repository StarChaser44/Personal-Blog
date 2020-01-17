import React from 'react'
import Layout from '../Components/Layout'
import {graphql} from 'gatsby'
import '../Styles/txtFmt.scss'

export const query = graphql`
query ($slug: String!){
    contentfulBlogPost(slug: {eq: $slug}){
      title
      blogPostsMarkdown{
        childMarkdownRemark{
          html
        }
      }
    }
  }
` 


const Blog = (props) => {
    return (
        <Layout>
            <h2 style={{marginTop: '2rem', paddingTop: '10px', textAlign: 'center'}}>{props.data.contentfulBlogPost.title}</h2>
            {/* <p>{props.data.contentfulBlogPost.publishedDate}</p> */}
            <div dangerouslySetInnerHTML={{__html: props.data.contentfulBlogPost.blogPostsMarkdown.childMarkdownRemark.html}}></div>
        </Layout>
    )
}

export default Blog;