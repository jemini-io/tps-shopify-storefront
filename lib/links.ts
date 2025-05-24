const comingSoonLinkObject = {
    path: "/coming-soon",
}

const homeLinkObject = {
    label: {
        menu: "Home",
        footer: "Home",
    },
    path: "/",
}

const collectionSlug = "collections"
const collectionsLinkObject = {
    label: {
        menu: "Collections",
        footer: "Shop All",
    },
    path: `/${collectionSlug}`,
    anchor: `#${collectionSlug}`,
    slug: collectionSlug,
}

const bundlesSlug = "bundles"
const bundlesLinkObject = {
    label: {
        menu: "Bundles",
        footer: "Build a Bundle",
    },
    path: `/${collectionSlug}/${bundlesSlug}`,
    anchor: `#${bundlesSlug}`,
    slug: bundlesSlug,
}

const housePlantsSlug = "house-plants"
const housePlantsLinkObject = {
    label: {
        menu: "House Plants",
        footer: "House Plants",
    },
    path: `/${collectionSlug}/${housePlantsSlug}`,
    anchor: `#${housePlantsSlug}`,
    slug: housePlantsSlug,
}

const lawnGardenSlug = "lawn-garden"
const lawnGardenLinkObject = {
    label: {
        menu: "Lawn & Garden",
        footer: "Lawn & Garden",
    },
    path: `/${collectionSlug}/${lawnGardenSlug}`,
    anchor: `#${lawnGardenSlug}`,
    slug: lawnGardenSlug,
}

const hydroAquaticSlug = "hydro-aquatic"
const hydroAquaticLinkObject = {
    label: {
        menu: "Hydro & Aquatic",
        footer: "Hydro & Aquatic",
    },
    path: `/${collectionSlug}/${hydroAquaticSlug}`,
    anchor: `#${hydroAquaticSlug}`,
    slug: hydroAquaticSlug,
}

const specialtySupplementsSlug = "specialty-supplements"
const specialtySupplementsLinkObject = {
    label: {
        menu: "Specialty Supplements",
        footer: "Specialty Supplements",
    },
    path: `/${collectionSlug}/${specialtySupplementsSlug}`,
    anchor: `#${specialtySupplementsSlug}`,
    slug: specialtySupplementsSlug,
}

const accountSlug = "account"
const accountLinkObject = {
    label: {
        menu: "My Account",
        footer: "My Account",
    },
    path: comingSoonLinkObject.path,
    // path: `/${accountSlug}`,
    anchor: `#${accountSlug}`,
    slug: accountSlug,
}

const faqSlug = "faq"
const faqLinkObject = {
    label: {
        menu: "FAQ",
        footer: "Ask a Question",
    },
    path: comingSoonLinkObject.path,
    // path: `/${faqSlug}`,
    anchor: `#${faqSlug}`,
    slug: faqSlug,
}

const blogSlug = "blog"
const blogLinkObject = {
    label: {
        menu: "Blog",
        footer: "Blog: The Pour Spout",
    },
    path: comingSoonLinkObject.path,
    // path: `/${blogSlug}`,
    anchor: `#${blogSlug}`,
    slug: blogSlug,
}

const shippingSlug = "shipping"
const shippingLinkObject = {
    label: {
        menu: "Shipping & Returns",
        footer: "Shipping & Returns",
    },
    path: comingSoonLinkObject.path,
    // path: `/${shippingSlug}`,
    anchor: `#${shippingSlug}`,
    slug: shippingSlug,
}

const wholesaleSlug = "wholesale"
const wholesaleLinkObject = {
    label: {
        menu: "Wholesale",
        footer: "Wholesale",
    },
    path: comingSoonLinkObject.path,
    // path: `/${wholesaleSlug}`,
    anchor: `#${wholesaleSlug}`,
    slug: wholesaleSlug,
}

const affiliatesSlug = "affiliates"
const affiliatesLinkObject = {
    label: {
        menu: "Affiliates",
        footer: "Affiliates",
    },
    path: comingSoonLinkObject.path,
    // path: `/${affiliatesSlug}`,
    anchor: `#${affiliatesSlug}`,
    slug: affiliatesSlug,
}

const termsSlug = "terms"
const termsLinkObject = {
    label: {
        menu: "Terms of Service",
        footer: "Terms of Service",
    },
    path: comingSoonLinkObject.path,
    // path: `/${termsSlug}`,
    anchor: `#${termsSlug}`,
    slug: termsSlug,
}

const privacySlug = "privacy"
const privacyLinkObject = {
    label: {
        menu: "Privacy Policy",
        footer: "Privacy Policy",
    },
    path: comingSoonLinkObject.path,
    // path: `/${privacySlug}`,
    anchor: `#${privacySlug}`,
    slug: privacySlug,
}

export { comingSoonLinkObject, homeLinkObject }

export const collectionLinks = {
  collectionsLinkObject,
  bundlesLinkObject,
  housePlantsLinkObject,
  lawnGardenLinkObject,
  hydroAquaticLinkObject,
  specialtySupplementsLinkObject,
}

export const accountLinks = {
  accountLinkObject,
  faqLinkObject,
  blogLinkObject,
  shippingLinkObject,
  wholesaleLinkObject,
  affiliatesLinkObject,
}

export const legalLinks = {
    termsLinkObject,
    privacyLinkObject,
}