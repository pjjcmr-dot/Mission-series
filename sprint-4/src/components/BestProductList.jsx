import likeIcon from "../assets/icons/like.svg";
import { useEffect, useState } from "react";
import { priceFormat } from "../utils/format";

export function BestProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getBestProducts = async () => {
      const params = new URLSearchParams({
        page: 1,
        pageSize: 4,
        orderBy: "favorite",
      });

      const res = await fetch(
        `https://panda-market-api.vercel.app/products?${params.toString()}`,
      );
      const data = await res.json();
      setProducts(data.list);
    };
    getBestProducts();
  }, []); // 의존성 배열이라고 해서 실행이 딱 한번만 된다.

  // console.log(products);

  return (
    <ul className="flex gap-6 mt-4">
      {products.map((product) => {
        const [imgSrc] = product.images;

        return (
          <li key={product.id || product.name}>
            <img
              width={282}
              height={282}
              src={imgSrc}
              alt="thumbnail"
              className="aspect-square rounded-2xl"
            />
            <div className="flex flex-col gap-1.5 mt-4 text-[#1F2937]">
              <h3 className="text-[14px]">{product.name}</h3>
              <span className="font-bold">{priceFormat(product.price)}원</span>
              <div className="text-[12px] flex gap-1 text-[#4B5563]">
                <img src={likeIcon} alt="좋아요" /> {product.favoriteCount}
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
