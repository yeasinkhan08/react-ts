import type { ProductType } from "../../type";

export interface ProductProps {
  product: ProductType;
}

export default function Product({ product }: ProductProps) {
  console.log(product);

  return (
    <>
      <div className="w-80 rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition">
        <div className="h-40 w-full flex items-center justify-center overflow-hidden rounded-lg bg-gray-50">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-full object-contain p-2"
          />
        </div>

        <div className="mt-3">
          <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
            {product.category}
          </span>
          <h3 className="truncate text-sm font-semibold text-gray-800">
            {product.title}
          </h3>

          <div className="mt-1 flex items-center justify-between">
            <span className="text-base font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
            <span className="text-xs text-amber-500 font-medium">
              ★ {product.rating.rate} ({product.rating.count})
            </span>
          </div>
        </div>

        <button className="mt-3 w-full rounded-lg bg-gray-900 py-2 text-xs font-medium text-white hover:bg-gray-800 active:scale-[0.98] transition">
          Add to Cart
        </button>
      </div>
    </>
  );
}
