import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { CartContext } from '../App';
import { ProductData } from '../components/Product';

interface ParamsData {
  id: string;
}

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  padding: 40px;
  justify-content: space-between;

  > section {
    &:first-of-type {
      flex: 0 0 57%;
    }

    &:last-of-type {
      flex: 0 0 40%;
    }

    h1 {
      font-size: 40px;
    }

    span {
      font-size: 24px;
    }
  }

  .price {
    padding-right: 10px;
  }

  img {
    width: 100%;
    max-width: 100%;
  }
`;

function ProductDetails(props: any) {
  const { id }: ParamsData = useParams();
  const [details, setDetails] = useState<ProductData | null>(null);

  async function fetchProductDetails() {
    const res = await fetch(`/api/products/${id}`);
    const data = await res.json();

    setDetails(data.product);
  }
  useEffect(() => {
    fetchProductDetails();
  }, []);

  return (
    <StyledDiv>
      {!!details && (
        <>
          <section>
            <div>
              <img src={details.image} alt="" />
            </div>
          </section>
          <section>
            <h1>{details.name}</h1>
            <span className="price">Cena:</span>
            <span className="price-val">{details.price}</span>
            <p>{details.description}</p>
            <div>Na stanie: {details.inStock} szt.</div>
          </section>
        </>
      )}
    </StyledDiv>
  );
}

export default ProductDetails;
