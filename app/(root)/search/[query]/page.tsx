import ProductCard from "@/app/components/ProductCard";
import { getSearchedProducts } from "@/lib/action";

const SearchPage = async ({ params }: { params: { query: string }}) => {
  const searchedProducts = await getSearchedProducts(params.query)

  const decodedQuery = decodeURIComponent(params.query)

  return (
    <div className='px-10 py-5'>
      <p className='text-bold my-10'>Search results for {decodedQuery}</p>
      {!searchedProducts || searchedProducts.length === 0 && (
        <p className='text-md my-5'>No result found</p>
      )}
      <div className='flex flex-wrap justify-between gap-16'>
        {searchedProducts?.map((product: ProductType) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  )
}

export const dynamic = "force-dynamic";

export default SearchPage