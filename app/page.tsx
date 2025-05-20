import Link from "next/link"
import Image from "next/image"
import { getCollections, getAllProducts, getProductsByTag } from "@/lib/shopify"
import { Button } from "@/components/ui/button"
import ProductCard from "@/components/product-card"

export default async function Home() {
  const { body: collectionsData } = await getCollections()
  const { body: productsData } = await getAllProducts()
  const { body: housePlantsData } = await getProductsByTag("Houseplant 1", 5)

  const collections = collectionsData?.data?.collections?.edges || []
  const products = productsData?.data?.products?.edges || []
  const housePlants = housePlantsData?.data?.products?.edges || []

  // Group products by collection for display in sections
  const lawnGarden = products
    .filter(
      (product: any) =>
        product.node.title.toLowerCase().includes("lawn") ||
        product.node.title.toLowerCase().includes("garden") ||
        product.node.title.toLowerCase().includes("tree"),
    )
    .slice(0, 4)

  const hydroAquatic = products
    .filter(
      (product: any) =>
        product.node.title.toLowerCase().includes("hydro") ||
        product.node.title.toLowerCase().includes("aquatic") ||
        product.node.title.toLowerCase().includes("water"),
    )
    .slice(0, 4)

  const specialtySupplements = products
    .filter(
      (product: any) =>
        product.node.title.toLowerCase().includes("supplement") ||
        product.node.title.toLowerCase().includes("specialty") ||
        product.node.title.toLowerCase().includes("nutrient"),
    )
    .slice(0, 4)

  return (
    <div className="bg-cream">
      {/* Header Image */}

      {/* Find Your Plant Section */}
      <section className="bg-cream">
        <div className="bg-coral/90 py-6">
          <h2 className="text-3xl font-bold text-white text-center">
            Find Your Plant
          </h2>
        </div>

        <div className="py-6 px-4 bg-[#f0ede5]">
          <h3 className="text-sm text-gray-500 uppercase mb-4 text-center">
            CHOOSE A COLLECTION
          </h3>

          <div className="grid grid-cols-5 gap-3 overflow-x-auto hide-scrollbar pb-2">
            <a href="#house-plants" className="flex flex-col items-center">
              <div className="w-full aspect-square rounded-md overflow-hidden border border-gray-200 mb-2 relative">
                <Image
                  src="/images/collection_tiles_images/houseplants_tile.jpg"
                  alt="House Plants"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <p className="font-bold text-xs">HOUSE</p>
                <p className="font-bold text-xs">PLANTS</p>
              </div>
            </a>

            <a href="#lawn-garden" className="flex flex-col items-center">
              <div className="w-full aspect-square rounded-md overflow-hidden border border-gray-200 mb-2 relative">
                <Image
                  src="/images/collection_tiles_images/lawn_and_garden_tile.jpg"
                  alt="Lawn & Garden"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center text-gray-500">
                <p className="font-medium text-xs">LAWN &</p>
                <p className="font-medium text-xs">GARDEN</p>
              </div>
            </a>

            <a href="#hydro-aquatic" className="flex flex-col items-center">
              <div className="w-full aspect-square rounded-md overflow-hidden border border-gray-200 mb-2 relative">
                <Image
                  src="/images/collection_tiles_images/hydro_and_aquatic_collection_tile.jpg"
                  alt="Hydro & Aquatic"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center text-gray-500">
                <p className="font-medium text-xs">HYDRO &</p>
                <p className="font-medium text-xs">AQUATIC</p>
              </div>
            </a>

            <a
              href="#specialty-supplements"
              className="flex flex-col items-center"
            >
              <div className="w-full aspect-square rounded-md overflow-hidden border border-gray-200 mb-2 relative">
                <Image
                  src="/images/collection_tiles_images/specialty_supplements_tile.jpg"
                  alt="Specialty Supplements"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center text-gray-500">
                <p className="font-medium text-xs">SPECIALTY</p>
                <p className="font-medium text-xs">SUPPLEMENTS</p>
              </div>
            </a>

            <a href="#bundles" className="flex flex-col items-center">
              <div className="w-full aspect-square rounded-md overflow-hidden border border-gray-200 mb-2 relative">
                <Image
                  src="/images/collection_tiles_images/bundle_builder_tile.jpg"
                  alt="Bundle and Save"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center text-gray-500">
                <p className="font-medium text-xs">BUNDLE</p>
                <p className="font-medium text-xs">AND SAVE</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* House Plants Section */}
      <section id="house-plants" className="px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Houseplants</h2>
          <Link
            href="/collections/house-plants"
            className="text-coral font-medium flex items-center"
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
            className="text-coral font-medium flex items-center"
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
            className="text-coral font-medium flex items-center"
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
            className="text-coral font-medium flex items-center"
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

      {/* Grow Something Beautiful */}
      <div className="text-center mb-8 px-4 py-8">
        <h2 className="text-3xl font-bold mb-4">Grow something beautiful.</h2>
        <Button className="bg-coral hover:bg-coral/90 text-white px-8">
          SHOP SUMMER
        </Button>
      </div>

      {/* Bundle Section */}
      <section id="bundles" className="mt-8 bg-lime-300 py-8 px-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">Create your</h2>
          <h2 className="text-2xl font-bold text-coral">own Bundle!</h2>
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
          <Button className="bg-coral hover:bg-coral/90 text-white px-8">
            BUILD A BUNDLE
          </Button>
        </div>
      </section>

      {/* Value Props Section */}
      <section className="px-4 py-8">
        <div className="relative rounded-lg overflow-hidden mb-6">
          <Image
            src="/person-holding-bottle.png"
            alt="Clean effective formulas"
            width={600}
            height={400}
            className="w-full h-auto"
          />
        </div>

        <h2 className="text-xl font-medium mb-1">Clean, effective formulas.</h2>
        <h2 className="text-xl font-medium mb-4">
          Plant-specific instructions.
        </h2>
        <p className="text-2xl font-bold text-coral mb-6">It's that easy.</p>

        <div className="grid gap-3 mb-6">
          <div className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            <p>Simplify plant care.</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            <p>Support all growers.</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            <p>Nourish every plant.</p>
          </div>
        </div>

        <Button className="bg-coral hover:bg-coral/90 text-white w-full">
          SHOP ALL
        </Button>
      </section>

      {/* Reviews Section */}
      <section className="px-4 py-8">
        <h2 className="text-3xl font-bold text-coral text-center mb-6">
          15,000+ Great Reviews
        </h2>

        <div className="overflow-x-auto pb-4">
          <div className="flex gap-4 w-max">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-64 border border-gray-200 rounded-lg p-4 bg-white"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                    <Image
                      src={`/reviewer-${i}.jpg`}
                      alt="Reviewer"
                      width={40}
                      height={40}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Customer {i}</p>
                    <p className="text-xs text-gray-500">Verified Buyer</p>
                  </div>
                </div>
                <div className="flex text-yellow-400 mb-2">{"★★★★★"}</div>
                <h3 className="font-bold mb-2">
                  {i === 1
                    ? '"My monstera is thriving!"'
                    : i === 2
                    ? '"Bigger leaves with more splits!"'
                    : '"Incredible growth results!"'}
                </h3>
                <p className="text-sm">
                  {i === 1
                    ? "I've used a lot of different fertilizers over the years, and this is by far the best for my monstera."
                    : i === 2
                    ? "I was skeptical at first because I've tried so many products for my plants, but the difference is remarkable."
                    : "After using this fertilizer for about 2 months, my monstera has explosive growth. I follow the directions exactly."}
                </p>
              </div>
            ))}
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
