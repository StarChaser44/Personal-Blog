module.exports = {
    siteMetadata: {
        title: "Engineering Blogster",
        author: "Tyree Adams",
    },
    plugins: [
        {
            resolve: `gatsby-source-contentful`,
            options: {
              spaceId: process.env.CONTENTFUL_SPACE_ID,
              accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            },
        },
        'gatsby-plugin-sass',
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name:'src',
                path: `${__dirname}/src/`
            }
        },
        // {
        //     resolve: "gatsby-source-filesystem",
        //     options: {
        //         name:'images',
        //         path: `${__dirname}/src/Images`
        //     }
        // },
        'gatsby-plugin-sharp',
        //`gatsby-transformer-sharp',
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    'gatsby-remark-relative-images', {
                        resolve: 'gatsby-remark-images', 
                        options: {
                            maxWidth: 750,
                            linkImagesToOriginal: false
                        }
                    }
                ]
            }
        }
    ]
}