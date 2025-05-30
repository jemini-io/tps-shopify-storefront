// Fake products data

// ok
const fiddleLeafFigPlantFood = {
  id: 'gid://shopify/Product/10096668639565',
  title: 'My Fiddle Leaf Fig Plant Food',
  handle: 'my-fiddle-leaf-fig-plant-food',
  description: 'Description for My Fiddle Leaf Fig Plant Food',
  descriptionHtml: '<p>Description for My Fiddle Leaf Fig Plant Food</p>',
  options: [
    {
      id: 'gid://shopify/ProductOption/12687588262221',
      name: 'Title',
      values: [], //[Array]
    }
  ],
  priceRange: { minVariantPrice: { amount: '14.99', currencyCode: 'EUR' } },
  variants: { edges: [
        {
            node: {
                id: 'gid://shopify/ProductVariant/51690275340621',
                title: 'Default Title',
                availableForSale: false,
                price: { amount: '14.99', currencyCode: 'EUR' },
                selectedOptions: [ { name: 'Title', value: 'Default Title' } ],
            }
        }
    ]},
  images: { edges: [
        {
            node: {
                url: '/images/fake_images/fake_products/fiddle.jpg',
                altText: 'Fiddle Leaf Fig Plant Food Image'
            }
        } 
    ]}
}

// ok
const monasteriaPlantFood = {
  id: 'gid://shopify/Product/10091450761549',
  title: 'My Monasteria Plant Food',
  handle: 'monasteria-plant-food',
  description: 'THIS IS THE DESCRIPTION FOR THE Monasteria Plant Food FROM YEN',
  descriptionHtml: '<p>THIS IS THE DESCRIPTION FOR THE Monasteria Plant Food FROM YEN <br></p>',
  options: [
    {
      id: 'gid://shopify/ProductOption/12681992601933',
      name: 'Title',
      values: [], // [Array]
    }
  ],
  priceRange: { minVariantPrice: { amount: '14.99', currencyCode: 'EUR' } },
  variants: { edges: [
        {
            node: {
                id: 'gid://shopify/ProductVariant/51690275340621',
                title: 'Default Title',
                availableForSale: false,
                price: { amount: '14.99', currencyCode: 'EUR' },
                selectedOptions: [ { name: 'Title', value: 'Default Title' } ],
            }
        }
    ]},
  images: { edges: [
        {
            node: {
                url: '/images/fake_images/fake_products/monasteria.jpg',
                altText: 'Monasteria Plant Food Image'
            }
        } 
    ]}
}

// ok
const indoorPlantFood = {
  id: 'gid://shopify/Product/10091449319757',
  title: 'My Indoor Plant Food',
  handle: 'indoor-plant-food',
  description: 'THIS IS THE DESCRIPTION FOR THE My Indoor Plant Food FROM YEN',
  descriptionHtml: '<p>THIS IS THE DESCRIPTION FOR THE My Indoor Plant Food FROM YEN</p>',
  options: [
    {
      id: 'gid://shopify/ProductOption/12681991127373',
      name: 'Title',
      values: [], //[Array]
    }
  ],
  priceRange: { minVariantPrice: { amount: '14.99', currencyCode: 'EUR' } },
  variants: { edges: [
        {
            node: {
                id: 'gid://shopify/ProductVariant/51690275340621',
                title: 'Default Title',
                availableForSale: false,
                price: { amount: '14.99', currencyCode: 'EUR' },
                selectedOptions: [ { name: 'Title', value: 'Default Title' } ],
            }
        }
    ]},
  images: { edges: [
        {
            node: {
                url: '/images/fake_images/fake_products/indoor.jpg',
                altText: 'Indoor Plant Food Image'
            }
        } 
    ]}
}

const succulentPlantFood = {
    id: 'gid://shopify/Product/10096672932173',
    title: 'My Succulent Plant Food',
    handle: 'my-succulent-plant-food',
    description: 'This is a description for My Succulent Plant Food',
    descriptionHtml: '<p>This is a description for My Succulent Plant Food<br></p>',
    options: [
        {
        id: 'gid://shopify/ProductOption/12681991127373',
        name: 'Title',
        values: [], //[Array]
        }
    ],
    priceRange: { minVariantPrice: { amount: '14.99', currencyCode: 'EUR' } },
    variants: { edges: [
        {
            node: {
                id: 'gid://shopify/ProductVariant/51690275340621',
                title: 'Default Title',
                availableForSale: false,
                price: { amount: '14.99', currencyCode: 'EUR' },
                selectedOptions: [ { name: 'Title', value: 'Default Title' } ],
           }
        }
    ]},
    images: { edges: [
        {
            node: {
                url: '/images/fake_images/fake_products/succulent.jpg',
                altText: 'Succulent Plant Food Image'
            }
        } 
    ]}
}

const lemonTreeFertilizer = {
    id: 'gid://shopify/Product/10091451842893',
    title: 'My Lemon Tree Fertilizer',
    handle: 'lemon-tree-fertilizer',
    description: 'THIS IS THE DESCRIPTION FOR THE LEMON TREE FERTILIZER FROM YEN',
    descriptionHtml: '<p>THIS IS THE DESCRIPTION FOR THE LEMON TREE FERTILIZER FROM YEN</p>',
    options: [
        {
        id: 'gid://shopify/ProductOption/12681991127373',
        name: 'Title',
        values: [], //[Array]
        }
    ],
    priceRange: { minVariantPrice: { amount: '14.99', currencyCode: 'EUR' } },
    variants: { edges: [
        {
            node: {
                id: 'gid://shopify/ProductVariant/51690282582349',
                title: 'Default Title',
                availableForSale: false,
                price: { amount: '14.99', currencyCode: 'EUR' },
                selectedOptions: [ { name: 'Title', value: 'Default Title' } ],
            }
        }
    ]},
    images: { edges: [
        {
            node: {
                url: '/images/fake_images/fake_products/lemon.jpg',
                altText: 'Succulent Plant Food Image'
            }
        } 
    ]}
  }


// Fake collections data

const housePlantsCollection ={
    id: 'gid://shopify/Collection/640400916813',
    title: 'House Plants',
    description: 'This is the description for House Plants collection',
    handle: 'house-plants',
    image: {
        url: '/images/fake_images/fake_collections/houseplants.jpg',
        altText: 'House Plants Collection Image',
    },
    products: { edges: [
        { node: fiddleLeafFigPlantFood },
        { node: monasteriaPlantFood },
        { node: indoorPlantFood },
    ]},
}

const lawnAndGardenCollection = {
    id: 'gid://shopify/Collection/640401506637',
    title: 'Lawn & Garden',
    description: 'This is the description for Lawn & Garden collection',
    handle: 'lawn-garden',
    image: {
        url: '/images/fake_images/fake_collections/lawn_and_garden.jpg',
        altText: 'Lawn & Garden Collection Image',
    },
    products: { edges: [
        { node: succulentPlantFood },
        { node: lemonTreeFertilizer },
    ]},
}

const hydroAndAquaticCollection = {
    id: 'gid://shopify/Collection/640401801549',
    title: 'Hydro & Aquatic',
    description: 'This is the description for Hydro & Aquatic collection',
    handle: 'hydro-aquatic',
    image: {
        url: '/images/fake_images/fake_collections/hydro_and_aquatic.jpg',
        altText: 'Hydro & Aquatic Collection Image',
    },
    products: { edges: [
        { node: monasteriaPlantFood },
    ]},
}

const specialtyPlantsCollection = {
    id: 'gid://shopify/Collection/640401932621',
    title: 'Specialty Supplements',
    description: 'This is the description for Specialty Supplements collection',
    handle: 'specialty-supplements',
    image: {
        url: '/images/fake_images/fake_collections/specialty_supplements.jpg',
        altText: 'Specialty Supplements Collection Image',
    },
    products: { edges: [
        { node: monasteriaPlantFood },
        { node: indoorPlantFood },
    ]},
}

const bundlesCollection = {
    id: 'gid://shopify/Collection/640402030925',
    title: 'Bundles',
    description: 'This is the description for Bundles collection',
    handle: 'bundles',
    image: {
        url: '/images/fake_images/fake_collections/bundle.jpg',
        altText: 'Bundles Collection Image',
    },
    products: { edges: [
        { node: indoorPlantFood },
    ]},
}

export function getFAKECollections() {
  return { 
    status: 200, 
    body: { 
        data: { 
            collections: {
                edges: [
                    { node: housePlantsCollection },
                    { node: lawnAndGardenCollection },
                    { node: hydroAndAquaticCollection },
                    { node: specialtyPlantsCollection },
                    { node: bundlesCollection },
                ]
            }
        } 
    } 
  }
}


export function getFAKECollectionByHandle(handle: string) {
  const fakeCollectionsByHandle: Record<string, any> = {
    'house-plants': housePlantsCollection,
    'lawn-garden': lawnAndGardenCollection,
    'hydro-aquatic': hydroAndAquaticCollection,
    'specialty-supplements': specialtyPlantsCollection,
    'bundles': bundlesCollection,
  }
  return { 
    status: 200, 
    body: { 
        data: { 
            collectionByHandle: fakeCollectionsByHandle[handle] || null 
        } 
    } 
  }
}

export function getFAKEProductByHandle(handle: string) {
  const fakeProductsByHandle: Record<string, any> = {
    'my-fiddle-leaf-fig-plant-food': fiddleLeafFigPlantFood,
    'monasteria-plant-food': monasteriaPlantFood,
    'indoor-plant-food': indoorPlantFood,
    'my-succulent-plant-food': succulentPlantFood,
    'lemon-tree-fertilizer': lemonTreeFertilizer,
  }
  return { 
    status: 200, 
    body: { 
        data: { 
            productByHandle: fakeProductsByHandle[handle] || null 
        } 
    } 
  }
}