import { LATEST_API_VERSION } from "@shopify/shopify-api"

const domain = process.env.SHOPIFY_STORE_DOMAIN || ""
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN || ""
const apiKey = process.env.SHOPIFY_API_KEY || ""
const apiSecretKey = process.env.SHOPIFY_API_SECRET_KEY || ""

// console.log("************** DEBUG INFO **************")
// console.log("SHOPIFY_STORE_DOMAIN:", domain)
// console.log("SHOPIFY_STOREFRONT_ACCESS_TOKEN:", storefrontAccessToken)
// console.log("SHOPIFY_API_KEY:", apiKey)
// console.log("SHOPIFY_API_SECRET_KEY:", apiSecretKey)
// console.log("****************************************")

export async function shopifyFetch({
  query,
  variables = {},
}: {
  query: string
  variables?: any
}) {
  try {
    const endpoint = `https://${domain}/api/${LATEST_API_VERSION}/graphql.json`

    // console.log("ENDPOINT:", endpoint)

    const result = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
      },
      body: JSON.stringify({ query, variables }),
    })

    // console.log("RESULT:", result)

    return {
      status: result.status,
      body: await result.json(),
    }
  } catch (error) {
    console.error("Error:", error)
    return {
      status: 500,
      error: "Error fetching data",
    }
  }
}

export async function getAllProducts() {
  return shopifyFetch({
    query: `
      query GetAllProducts {
        products(first: 100) {
          edges {
            node {
              id
              title
              handle
              description
              tags
              priceRange {
                minVariantPrice {
                  amount
                  currencyCode
                }
              }
              images(first: 1) {
                edges {
                  node {
                    url
                    altText
                  }
                }
              }
            }
          }
        }
      }
    `,
  })
}

export async function getProductsByTag(tag: string, first = 5) {
  return shopifyFetch({
    query: `
      query GetProductsByTag($tag: String!, $first: Int!) {
        products(first: $first, query: $tag) {
          edges {
            node {
              id
              title
              handle
              description
              tags
              priceRange {
                minVariantPrice {
                  amount
                  currencyCode
                }
              }
              images(first: 1) {
                edges {
                  node {
                    url
                    altText
                  }
                }
              }
            }
          }
        }
      }
    `,
    variables: {
      tag: `tag:${tag}`,
      first: first,
    },
  })
}

export async function getProductByHandle(handle: string) {
  return shopifyFetch({
    query: `
      query GetProductByHandle($handle: String!) {
        productByHandle(handle: $handle) {
          id
          title
          handle
          description
          descriptionHtml
          options {
            id
            name
            values
          }
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          variants(first: 100) {
            edges {
              node {
                id
                title
                availableForSale
                price {
                  amount
                  currencyCode
                }
                selectedOptions {
                  name
                  value
                }
              }
            }
          }
          images(first: 10) {
            edges {
              node {
                url
                altText
              }
            }
          }
        }
      }
    `,
    variables: {
      handle,
    },
  })
}

export async function getCollectionByHandle(handle: string) {
  return shopifyFetch({
    query: `
      query GetCollectionByHandle($handle: String!) {
        collectionByHandle(handle: $handle) {
          id
          title
          description
          image {
            url
            altText
          }
          products(first: 12) {
            edges {
              node {
                id
                title
                handle
                priceRange {
                  minVariantPrice {
                    amount
                    currencyCode
                  }
                }
                images(first: 1) {
                  edges {
                    node {
                      url
                      altText
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
    variables: {
      handle,
    },
  })
}

export async function getCollections() {
  return shopifyFetch({
    query: `
      query GetCollections {
        collections(first: 10) {
          edges {
            node {
              id
              title
              handle
              image {
                url
                altText
              }
            }
          }
        }
      }
    `,
  })
}
