import Product from "@/components/Product";
import Review from "@/components/Review";
import React, { Suspense } from "react";

const ProductDetail = () => {
  return (
    <div>
      <h1>Product Detail Page</h1>
      <Suspense fallback={<p>Loading Product Page..........</p>}>
        <Product />
      </Suspense>
      <Suspense fallback={<p>Loading Review Page..........</p>}>
        <Review />
      </Suspense>
    </div>
  );
};

export default ProductDetail;
