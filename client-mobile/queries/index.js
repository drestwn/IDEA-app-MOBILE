import { gql } from "@apollo/client";

export const GET_PRODUCT = gql`
  query Query {
    products {
      id
      name
      slug
      description
      price
      mainImg
      categoryId
      authorId
      Category {
        id
        name
      }
      Images {
        id
        productId
        imgUrl
      }
    }
  }
`;

export const GET_PRODUCT_BY_ID = gql`
  query Query($productDetailId: Int!) {
    productDetail(id: $productDetailId) {
      id
      name
      slug
      description
      price
      mainImg
      categoryId
      authorId
    }
  }
`;
export const GET_CATEGORY = gql`
  query Query {
    categories {
      id
      name
    }
  }
`;
