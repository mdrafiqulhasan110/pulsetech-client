import { useState } from "react";
import ProductCard from "./ProductCard";

const Products = ({ loadedProducts, title }) => {
  const [products, setProducts] = useState(loadedProducts);

  {
    if (products.length < 1) {
      return (
        <div>
          <p className='text-2xl font-bold text-center'>Sorry, No products Here</p>
        </div>
      );
    } else {
      return (
        <div>
          <h1 className='border-b-2 border-[#3497DA] mb-6'>
            <span
              className='bg-[#3497DA] py-1 pl-2 pr-10 text-2xl font-semibold text-white'
              style={{ clipPath: "polygon(0 0,85% 0,95% 100%,0% 100%)" }}
            >
              {title}
            </span>
          </h1>
          <div className='grid grid-cols-1  lg:grid-cols-2 2xl:grid-cols-4 gap-6'>
            {products.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
                products={products}
                setProducts={setProducts}
              ></ProductCard>
            ))}
          </div>
        </div>
      );
    }
  }
};

export default Products;
