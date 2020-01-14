module.exports = {
    pathPrefix: '/Personal-Blog',
    siteMetadata: {
        title: "Engineering Blogster",
        author: "Tyree Adams",
    },
    plugins: [
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
              // The property ID; the tracking code won't be generated without it
              trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
              // Defines where to place the tracking script - `true` in the head and `false` in the body
              head: true,
              // Setting this parameter is optional
              anonymize: true,
              // Setting this parameter is also optional
              respectDNT: true,
              // Avoids sending pageview hits from custom paths
              //exclude: ["/preview/**", "/do-not-track/me/too/"],
              // Delays sending pageview hits on route update (in milliseconds)
              pageTransitionDelay: 0,
              sampleRate: 100,
              siteSpeedSampleRate: 10,
            },
          },
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