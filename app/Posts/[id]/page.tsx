import Link from "next/link";

async function getProductDetail(id) {
  let postsDetail = await fetch(`https://dummyjson.com/products/${id}`);
  return postsDetail.json();
}

export default async function Page({ params }) {
  const productDetail = await getProductDetail(params.id);
  console.log({ productDetail: productDetail });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "0.5rem",
        backgroundColor: "white",
        border: "1px solid #e0e0e0",
        borderRadius: "4px",
        width: "100%",
        height: "100%",
      }}
    >
      <p>Brand: {productDetail.brand}</p>
      <p>Series: {productDetail.title}</p>
      <p>Category: {productDetail.category}</p>
      <p>Price: ${productDetail.price}</p>
      <p>Rating: {productDetail.rating}%</p>
      <p>Stock: {productDetail.stock}</p>
      <p>Description: {productDetail.description}</p>
    </div>
  );
}

// {
//   productDetail: {
//     id: 1,
//     title: 'iPhone 9',
//     description: 'An apple mobile which is nothing like apple',
//     price: 549,
//     discountPercentage: 12.96,
//     rating: 4.69,
//     stock: 94,
//     brand: 'Apple',
//     category: 'smartphones',
//     thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
//     images: [
//       'https://i.dummyjson.com/data/products/1/1.jpg',
//       'https://i.dummyjson.com/data/products/1/2.jpg',
//       'https://i.dummyjson.com/data/products/1/3.jpg',
//       'https://i.dummyjson.com/data/products/1/4.jpg',
//       'https://i.dummyjson.com/data/products/1/thumbnail.jpg'
//     ]
//   }
// }
