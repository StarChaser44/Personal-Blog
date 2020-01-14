import React from "react"
import Layout from '../Components/Layout'
import { Link, graphql, useStaticQuery } from 'gatsby'
import blogstyles from '../Styles/blog.module.scss'
import { Card } from 'react-bootstrap'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query {
        allContentfulBlogPost (
          sort: {
            fields: publishedDate,
            order: DESC
          }
        ) {
          edges {
            node {
              title
              slug
              publishedDate(formatString: "MMMM DD, YYYY")
              description
            }
          }
        }
      }
    `);
    return (
            <Layout>
            <div style={{background: 'white'}}>
            <h1 style={{textAlign:'center'}}>Recent Blogs</h1>
            <ol className={blogstyles.posts}>
            {data.allContentfulBlogPost.edges.map((edge) => {
                return (
                    <li>
                        <Link id={blogstyles.fmt} to={`/blog/${edge.node.slug}`}>
                        <Card className={blogstyles.card}bg="dark" text="white">
                          <Card.Header>{edge.node.title}</Card.Header>
                          <Card.Body>
                            <Card.Text className={blogstyles.post}>
                              {edge.node.description}
                            </Card.Text>
                          </Card.Body>
                          <p className={blogstyles.pText}> {edge.node.publishedDate}</p>
                        </Card>
                        </Link>
                    </li>
                )
            })}
            </ol>
            </div>
            </Layout >
    )
}

export default BlogPage