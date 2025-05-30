import { getProductByHandle } from "@/lib/shopify"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Star } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AddToCartButton from "@/components/add-to-cart-button"
import ProductVariantSelector from "@/components/product-variant-selector"
import PurchaseOptions from "@/components/purchase-options"
import { redirect } from "next/navigation";
import { comingSoonLinkObject } from "@/lib/links"

export default async function ProductPage({ params }: { params: { handle: string } }) {
  const { handle } = params
  const { body } = await getProductByHandle(handle)

  console.log("Product data for rendering:", body)

  if (!body?.data?.productByHandle) {
    //notFound()
    redirect(comingSoonLinkObject.path);
  }

  const product = body.data.productByHandle
  const images = product.images.edges.map((edge: any) => edge.node)
  const variants = product.variants.edges.map((edge: any) => edge.node)
  const firstVariant = variants[0]

  return (
    <div className="bg-cream pb-8">
      <div className="bg-white">
        {/* Product Images */}
        <div className="relative aspect-square">
          <Image
            src={images[0]?.url || `/placeholder.svg?height=600&width=600&query=${product.title}`}
            alt={images[0]?.altText || product.title}
            fill
            className="object-contain p-4"
          />
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex overflow-x-auto gap-2 p-4 border-t border-gray-100">
          {images.map((image: any, i: number) => (
            <div key={i} className="w-16 h-16 flex-shrink-0 border rounded-md overflow-hidden">
              <Image
                src={image.url || "/placeholder.svg"}
                alt={image.altText || `${product.title} - Image ${i + 1}`}
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Product Info */}
      <div className="px-4 py-6">
        <div className="flex items-center mb-2">
          <div className="flex text-yellow-400">
            <Star className="h-4 w-4 fill-current" />
            <Star className="h-4 w-4 fill-current" />
            <Star className="h-4 w-4 fill-current" />
            <Star className="h-4 w-4 fill-current" />
            <Star className="h-4 w-4 fill-current" />
          </div>
          <span className="text-sm ml-2">682 Reviews</span>
        </div>

        <h1 className="text-xl font-bold uppercase mb-2">{product.title}</h1>

        <p className="text-sm text-gray-700 mb-6">{product.description}</p>

        {/* Variant Selector */}
        <ProductVariantSelector product={product} variants={variants} />

        {/* Purchase Options */}
        <PurchaseOptions product={product} variant={firstVariant} />

        {/* Add to Cart Button */}
        <AddToCartButton product={product} variant={firstVariant} />

        {/* Trust Badges */}
        <div className="flex justify-between mt-6">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto bg-coral/10 rounded-full flex items-center justify-center mb-1">
              <Image src="/images/homepage_image_2.jpg" alt="Customer Favorite" width={24} height={24} />
            </div>
            <p className="text-xs">CUSTOMER FAVORITE</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 mx-auto bg-coral/10 rounded-full flex items-center justify-center mb-1">
              <Image src="/images/homepage_image_2.jpg" alt="Made in the USA" width={24} height={24} />
            </div>
            <p className="text-xs">MADE IN THE USA</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 mx-auto bg-coral/10 rounded-full flex items-center justify-center mb-1">
              <Image src="/images/homepage_image_2.jpg" alt="Free Shipping" width={24} height={24} />
            </div>
            <p className="text-xs">FREE SHIPPING</p>
          </div>
        </div>
      </div>

      {/* What's Inside Section */}
      <div className="px-4 py-6 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-coral mb-6">What's Inside?</h2>

        <div className="grid gap-6">
          <div className="flex gap-4">
            <div className="w-16 h-16 bg-coral/10 rounded-full flex items-center justify-center flex-shrink-0">
              <Image src="/images/homepage_image_2.jpg" alt="Copper" width={32} height={32} />
            </div>
            <div>
              <h3 className="font-bold uppercase mb-1">Copper</h3>
              <p className="text-sm">
                Copper activates important enzymes and helps strengthen plant tissue. It supports photosynthesis and
                overall plant strength.
              </p>
              <p className="text-sm font-medium mt-1">Deficiency Signs: Wilting, poor growth, and discoloration.</p>
            </div>
          </div>

          {/* More ingredients would go here */}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="px-4 py-6 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-coral mb-6">Frequently Asked Questions</h2>

        <Tabs defaultValue="what">
          <TabsList className="grid grid-cols-1 mb-4">
            <TabsTrigger value="what" className="text-left py-3 border rounded-md mb-2 px-4">
              What makes TPS Monstera Fertilizer special?
            </TabsTrigger>
            <TabsTrigger value="how" className="text-left py-3 border rounded-md mb-2 px-4">
              How often should I use TPS Monstera Fertilizer?
            </TabsTrigger>
            <TabsTrigger value="is" className="text-left py-3 border rounded-md mb-2 px-4">
              Is this fertilizer safe for pets/children?
            </TabsTrigger>
            <TabsTrigger value="what-is" className="text-left py-3 border rounded-md mb-2 px-4">
              What's the NPK ratio of TPS Monstera?
            </TabsTrigger>
            <TabsTrigger value="can" className="text-left py-3 border rounded-md mb-2 px-4">
              Can I use TPS Monstera fertilizer on other plants?
            </TabsTrigger>
          </TabsList>
          <TabsContent value="what" className="text-sm">
            TPS delivers precise plant-specific nutrition using clean, effective formulas. Our Monstera fertilizer is
            specifically formulated to support the unique needs of Monstera plants, promoting larger leaves, more
            fenestrations, and overall plant health.
          </TabsContent>
          <TabsContent value="how" className="text-sm">
            For best results, use every 2-4 weeks during the growing season (spring and summer) and reduce to once every
            6-8 weeks during fall and winter.
          </TabsContent>
          <TabsContent value="is" className="text-sm">
            While our formulas use clean ingredients, we recommend keeping all fertilizers out of reach of children and
            pets. If ingested, please contact a medical professional.
          </TabsContent>
          <TabsContent value="what-is" className="text-sm">
            The NPK ratio is 3-1-2, which is ideal for foliage plants like Monstera that need more nitrogen for leaf
            growth.
          </TabsContent>
          <TabsContent value="can" className="text-sm">
            While designed specifically for Monstera plants, this fertilizer works well for similar tropical foliage
            plants. For best results with other plants, we recommend using our plant-specific formulas.
          </TabsContent>
        </Tabs>
      </div>

      {/* Bundle Section */}
      <div className="px-4 py-6 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-coral mb-6">Create Your Own Bundle!</h2>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div>
            <Image
              src="/avocado-fertilizer.png"
              alt="Avocado Tree Fertilizer"
              width={100}
              height={200}
              className="w-full h-auto"
            />
            <p className="text-center text-sm font-bold mt-2">AVOCADO TREE FERTILIZER</p>
          </div>
          <div>
            <Image
              src="/placeholder.svg?height=200&width=100&query=apple tree fertilizer bottle"
              alt="Apple Tree Fertilizer"
              width={100}
              height={200}
              className="w-full h-auto"
            />
            <p className="text-center text-sm font-bold mt-2">APPLE TREE FERTILIZER</p>
          </div>
          <div>
            <Image
              src="/placeholder.svg?height=200&width=100&query=azalea fertilizer bottle"
              alt="Azalea Fertilizer"
              width={100}
              height={200}
              className="w-full h-auto"
            />
            <p className="text-center text-sm font-bold mt-2">AZALEA FERTILIZER</p>
          </div>
        </div>

        <button className="w-full bg-coral hover:bg-coral/90 text-white py-3 rounded-md font-medium">
          BUILD A BUNDLE
        </button>
      </div>
    </div>
  )
}
