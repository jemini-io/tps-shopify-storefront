const comingSoon = {
    path: "/coming-soon",
}

const home = {
    label: {
        menu: "Home",
        footer: "Home",
    },
    path: "/",
}

const collections = {
    label: {
        menu: "Collections",
        footer: "Shop All",
    },
    path: "/collections",
}

const bundles = {
    label: {
        menu: "Bundles",
        footer: "Build a Bundle",
    },
    path: "/collections/bundles",
}

const housePlants = {
    label: {
        menu: "House Plants",
        footer: "House Plants",
    },
    path: "/collections/house-plants",
}

const lawnGarden = {
    label: {
        menu: "Lawn & Garden",
        footer: "Lawn & Garden",
    },
    path: "/collections/lawn-garden",
}

const hydroAquatic = {
    label: {
        menu: "Hydro & Aquatic",
        footer: "Hydro & Aquatic",
    },
    path: "/collections/hydro-aquatic",
}

const specialtySupplements = {
    label: {
        menu: "Specialty Supplements",
        footer: "Specialty Supplements",
    },
    path: "/collections/specialty-supplements",
}

const account = {
    label: {
        menu: "My Account",
        footer: "My Account",
    },
    path: comingSoon.path
    // path: "/account",
}

const faq = {
    label: {
        menu: "FAQ",
        footer: "Ask a Question",
    },
    path: comingSoon.path
    // path: "/faq",
}

const blog = {
    label: {
        menu: "Blog",
        footer: "Blog: The Pour Spout",
    },
    path: comingSoon.path
    // path: "/blog",
}

const shipping = {
    label: {
        menu: "Shipping & Returns",
        footer: "Shipping & Returns",
    },
    path: comingSoon.path
    // path: "/shipping",
}

const wholesale = {
    label: {
        menu: "Wholesale",
        footer: "Wholesale",
    },
    path: comingSoon.path
    // path: "/wholesale",
}

const affiliates = {
    label: {
        menu: {
            menu: "Affiliates",
            footer: "Affiliates",
        },
        footer: "Affiliates",
    },
    path: comingSoon.path
    // path: "/affiliates",
}

const terms = {
    label: {
        menu: "Terms of Service",
        footer: "Terms of Service",
    },
    path: comingSoon.path
    // path: "/terms",
}

const privacy = {
    label: {
        menu: "Privacy Policy",
        footer: "Privacy Policy",
    },
    path: comingSoon.path
    // path: "/privacy",
}

export { comingSoon as comingSoonLink }
export { home as homeLink }

export const collectionLinks = {
  collections,
  bundles,
  housePlants,
  lawnGarden,
  hydroAquatic,
  specialtySupplements,
}

export const accountLinks = {
  account,
  faq,
  blog,
  shipping,
  wholesale,
  affiliates,
}

export const legalLinks = {
    terms,
    privacy,
}