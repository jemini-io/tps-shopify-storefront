import Link from "next/link"
import Image from "next/image"
import { getAllProducts, getProductsByTag } from "@/lib/shopify"
import { Button } from "@/components/ui/button"
import ProductCard from "@/components/product-card"
import HeaderSection from "@/components/header-section"
import ReviewCard from "@/components/review-card"
import CollectionStickyWrapper from "@/components/collection-sticky-wrapper"

export default async function Home() {
  const { body: productsData } = await getAllProducts()
  const { body: housePlantsData } = await getProductsByTag("Houseplant 1", 5)

  const products = productsData?.data?.products?.edges || []
  // const housePlants = housePlantsData?.data?.products?.edges || []

  // Group products by collection for display in sections
    const housePlants = products
    .filter(
      (product: any) =>
        product.node.title.toLowerCase().includes("lawn") ||
        product.node.title.toLowerCase().includes("garden") ||
        product.node.title.toLowerCase().includes("succulent") ||
        product.node.title.toLowerCase().includes("fiddle") ||
        product.node.title.toLowerCase().includes("monstera") ||
        product.node.title.toLowerCase().includes("indoor"),
    )
    .slice(0, 4)

  const lawnGarden = products
    .filter(
      (product: any) =>
        product.node.title.toLowerCase().includes("lawn") ||
        product.node.title.toLowerCase().includes("garden") ||
        product.node.title.toLowerCase().includes("succulent") ||
        product.node.title.toLowerCase().includes("lemon"),
    )
    .slice(0, 4)

  const hydroAquatic = products
    .filter(
      (product: any) =>
        product.node.title.toLowerCase().includes("hydro") ||
        product.node.title.toLowerCase().includes("aquatic") ||
        product.node.title.toLowerCase().includes("water") ||
        product.node.title.toLowerCase().includes("monasteria"),
    )
    .slice(0, 4)

  const specialtySupplements = products
    .filter(
      (product: any) =>
        product.node.title.toLowerCase().includes("supplement") ||
        product.node.title.toLowerCase().includes("specialty") ||
        product.node.title.toLowerCase().includes("nutrient") ||
        product.node.title.toLowerCase().includes("monasteria") ||
        product.node.title.toLowerCase().includes("indoor"),
    )
    .slice(0, 4)

  return (
    <div className="bg-cream">
      <HeaderSection />

      {/* Grow Something Beautiful Section */}
      <section className="bg-cream flex flex-col items-center justify-center py-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-black text-center mb-6">
          Grow something beautiful.
        </h2>
        <Button className="bg-[var(--color-coral)] hover:bg-[var(--color-coral)]/90 text-white text-lg font-bold px-10 py-4 rounded-full shadow-md">
          SHOP SUMMER
        </Button>
      </section>

      {/* Find Your Plant Section */}
      <section className="bg-cream">
        <div className="bg-[var(--color-coral)]/90 py-6 pl-8">
          <h2 className="text-3xl font-bold text-[var(--color-coral)] text-left">
            Shop By Plant
          </h2>
          <h3 className="text-left text-gray-700 mt-2">
            What are you growing?
          </h3>
        </div>

        <CollectionStickyWrapper>
          <h3 className="text-sm text-gray-500 uppercase mb-4 text-center">
            CHOOSE A COLLECTION
          </h3>

          <div className="grid grid-cols-5 gap-3 overflow-x-auto hide-scrollbar pb-2">
            <a
              href="#house-plants"
              className="flex flex-col items-center group"
            >
              <div className="w-full aspect-square rounded-md overflow-hidden border mb-2 relative transition-all duration-150 border-gray-200 group-hover:border-black">
                <Image
                  src="/images/collection_tiles_images/houseplants_tile.jpg"
                  alt="House Plants"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <p className="font-bold text-xs group-hover:text-black">
                  HOUSE
                </p>
                <p className="font-bold text-xs group-hover:text-black">
                  PLANTS
                </p>
              </div>
            </a>

            <a href="#lawn-garden" className="flex flex-col items-center group">
              <div className="w-full aspect-square rounded-md overflow-hidden border mb-2 relative transition-all duration-150 border-gray-200 group-hover:border-black">
                <Image
                  src="/images/collection_tiles_images/lawn_and_garden_tile.jpg"
                  alt="Lawn & Garden"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center text-gray-500">
                <p className="font-medium text-xs group-hover:text-black">
                  LAWN &
                </p>
                <p className="font-medium text-xs group-hover:text-black">
                  GARDEN
                </p>
              </div>
            </a>

            <a
              href="#hydro-aquatic"
              className="flex flex-col items-center group"
            >
              <div className="w-full aspect-square rounded-md overflow-hidden border mb-2 relative transition-all duration-150 border-gray-200 group-hover:border-black">
                <Image
                  src="/images/collection_tiles_images/hydro_and_aquatic_collection_tile.jpg"
                  alt="Hydro & Aquatic"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center text-gray-500">
                <p className="font-medium text-xs group-hover:text-black">
                  HYDRO &
                </p>
                <p className="font-medium text-xs group-hover:text-black">
                  AQUATIC
                </p>
              </div>
            </a>

            <a
              href="#specialty-supplements"
              className="flex flex-col items-center group"
            >
              <div className="w-full aspect-square rounded-md overflow-hidden border mb-2 relative transition-all duration-150 border-gray-200 group-hover:border-black">
                <Image
                  src="/images/collection_tiles_images/specialty_supplements_tile.jpg"
                  alt="Specialty Supplements"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center text-gray-500">
                <p className="font-medium text-xs group-hover:text-black">
                  SPECIALTY
                </p>
                <p className="font-medium text-xs group-hover:text-black">
                  SUPPLEMENTS
                </p>
              </div>
            </a>

            <a href="#bundles" className="flex flex-col items-center group">
              <div className="w-full aspect-square rounded-md overflow-hidden border mb-2 relative transition-all duration-150 border-gray-200 group-hover:border-black">
                <Image
                  src="/images/collection_tiles_images/bundle_builder_tile.jpg"
                  alt="Bundle and Save"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center text-gray-500">
                <p className="font-medium text-xs group-hover:text-black">
                  BUNDLE
                </p>
                <p className="font-medium text-xs group-hover:text-black">
                  AND SAVE
                </p>
              </div>
            </a>
          </div>
        </CollectionStickyWrapper>
      </section>

      {/* House Plants Section */}
      <section id="house-plants" className="px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Houseplants</h2>
          <Link
            href="/collections/house-plants"
            className="text-[var(--color-coral)] font-medium flex items-center"
          >
            SEE ALL
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          {housePlants.map((product: any) => (
            <ProductCard key={product.node.id} product={product.node} />
          ))}
        </div>
      </section>

      {/* Lawn & Garden Section */}
      <section id="lawn-garden" className="px-4 py-8 bg-[#f8f7f4]">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Lawn & Garden</h2>
          <Link
            href="/collections/lawn-garden"
            className="text-[var(--color-coral)] font-medium flex items-center"
          >
            SEE ALL
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          {lawnGarden.map((product: any) => (
            <ProductCard key={product.node.id} product={product.node} />
          ))}
        </div>
      </section>

      {/* Hydro & Aquatic Section */}
      <section id="hydro-aquatic" className="px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Hydro & Aquatic</h2>
          <Link
            href="/collections/hydro-aquatic"
            className="text-[var(--color-coral)] font-medium flex items-center"
          >
            SEE ALL
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          {hydroAquatic.map((product: any) => (
            <ProductCard key={product.node.id} product={product.node} />
          ))}
        </div>
      </section>

      {/* Specialty Supplements Section */}
      <section id="specialty-supplements" className="px-4 py-8 bg-[#f8f7f4]">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Specialty Supplements</h2>
          <Link
            href="/collections/specialty-supplements"
            className="text-[var(--color-coral)] font-medium flex items-center"
          >
            SEE ALL
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          {specialtySupplements.map((product: any) => (
            <ProductCard key={product.node.id} product={product.node} />
          ))}
        </div>
      </section>

      {/* Bundle Section */}
      {/* <section id="bundles" className="mt-8 bg-lime-300 py-8 px-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">Create your</h2>
          <h2 className="text-2xl font-bold text-[var(--color-coral)]">own Bundle!</h2>
        </div>

        <div className="flex justify-center gap-4">
          <div className="w-1/3">
            <Image
              src="/avocado-fertilizer.png"
              alt="Avocado Tree Fertilizer"
              width={100}
              height={300}
              className="w-full h-auto"
            />
          </div>
          <div className="w-1/3">
            <Image
              src="/apple-fertilizer.png"
              alt="Apple Tree Fertilizer"
              width={100}
              height={300}
              className="w-full h-auto"
            />
          </div>
          <div className="w-1/3">
            <Image
              src="/azalea-fertilizer.png"
              alt="Azalea Fertilizer"
              width={100}
              height={300}
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <Button className="bg-[var(--color-coral)] hover:bg-[var(--color-coral)]/90 text-white px-8">
            BUILD A BUNDLE
          </Button>
        </div>
      </section> */}

      {/* Value Props Section */}
      <section className="px-4 py-8">
        <div className="relative rounded-lg overflow-hidden mb-6">
          <Image
            src="/images/person_holding_bottle.png"
            alt="Clean effective formulas"
            width={600}
            height={400}
            className="w-full h-auto"
          />
        </div>

        <h2 className="text-2xl font-medium mb-1 text-center">Clean, effective formulas.</h2>
        <h2 className="text-2xl font-medium mb-4 text-center">
          Plant-specific instructions.
        </h2>
        <p className="text-3xl font-bold text-[var(--color-coral)] mb-6 text-center">
          It's that easy.
        </p>

        <div className="grid gap-3 mb-6">
          <div className="flex items-center justify-center gap-2">
            <Image
              src="/logos/label_logo/leaf_icon.png"
              alt="Leaf icon"
              width={16}
              height={16}
            />
            <p>Simplify plant care.</p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Image
              src="/logos/label_logo/leaf_icon.png" 
              alt="Leaf icon"
              width={16}
              height={16}
            />
            <p>Support all growers.</p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Image
              src="/logos/label_logo/leaf_icon.png"
              alt="Leaf icon" 
              width={16}
              height={16}
            />
            <p>Nourish every plant.</p>
          </div>
        </div>

        <Button className="bg-[var(--color-coral)] hover:bg-[var(--color-coral)]/90 text-white w-full">
          SHOP ALL
        </Button>
      </section>

      {/* Reviews Section */}
      <section className="px-4 py-8">
        <h2 className="text-3xl font-bold text-[var(--color-coral)] text-center mb-6">
          15,000+ Great Reviews
        </h2>

        <div className="overflow-x-auto pb-4">
          <div className="flex gap-4 w-max">
            <ReviewCard
              imageSrc="/images/customer_review_image_exports/woman_1.png"
              name="Jennifer S."
              quote="My monstera is thriving!"
              review="I've used a lot of different fertilizers over the years, and this is by far the best for my monstera."
            />
            <ReviewCard
              imageSrc="/images/customer_review_image_exports/man_3.png"
              name="Mike R."
              quote="Bigger leaves with more splits!"
              review="I was skeptical at first because I've tried so many products for my plants, but the difference is remarkable."
            />
            <ReviewCard
              imageSrc="/images/customer_review_image_exports/woman_3.png"
              name="Samantha K."
              quote="Incredible growth results!"
              review="After using this fertilizer for about 2 months, my monstera has explosive growth. I follow the directions exactly - diluting as recommended and applying every 2 weeks. The leaves are darker..."
            />
          </div>
        </div>
      </section>

      {/* Email Signup */}
      <section className="px-4 py-8 bg-[#8B7E6D] text-white">
        <h2 className="text-2xl font-bold text-center mb-2">Save 20%!</h2>
        <p className="text-center mb-4">
          Knock 20% off your first order and stay afloat of the latest deals.
        </p>

        <form className="flex gap-2">
          <input
            type="email"
            placeholder="ENTER YOUR EMAIL"
            className="flex-1 px-4 py-2 rounded-full text-black"
          />
          <Button
            type="submit"
            variant="ghost"
            size="icon"
            className="rounded-full bg-white/20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Button>
        </form>
      </section>
    </div>
  );
}
