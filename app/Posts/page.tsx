import Link from "next/link";
import { use } from "react";

async function getPost() {
  const products = await fetch("https://dummyjson.com/products");
  return products.json();
}

export default async function Page() {
  const { products } = await getPost();

  return products.map((product: any) => (
    <>
      <div key={product.id} style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0.5rem",
        borderBottom: "1px solid #ccc",
      }}>
        <strong>
          <Link href={`/Posts/${product.id}`}>{product.title} </Link>- $
          {product.price}
        </strong>
      </div>
    </>
  ));
}
