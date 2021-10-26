import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Product, { ProductData } from '../components/Product';

const ProductListStyle = styled.div`
  display: grid;
  padding: 50px;
  grid-template-columns: repeat(4, minmax(0, 25%));
  gap: 30px;

  @media screen and (max-width: 1400px) {
    grid-template-columns: repeat(3, minmax(0, 33%));
    gap: 20px;
  }

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, minmax(0, 55%));
    gap: 20px;
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: 100%;
    gap: 20px 0;
  }
`;

function Products() {
  const [products, setProducts] = useState<ProductData[]>([]);

  async function fetchProducts() {
    const res = await fetch('/api/products');
    const data = await res.json();
    setProducts(data.products);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductListStyle>
      {products.map((product: ProductData) => (
        <Product {...product} key={product.id} />
      ))}
    </ProductListStyle>
  );
}

export default Products;
