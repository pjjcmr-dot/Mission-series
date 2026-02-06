import likeIcon from "../assets/icons/like.svg";
import { useEffect, useState } from "react";
import { priceFormat } from "../utils/format";

const PAGE_SIZE = 10;

export function ProductList({
  orderBy = "recent",
  keyword = "",
  page = 1,
  onTotalCountChange,
}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const trimmedKeyword = keyword.trim();

    const getProducts = async () => {
      const params = new URLSearchParams({
        page,
        pageSize: PAGE_SIZE,
        orderBy,
      });

      if (trimmedKeyword) {
        params.set("keyword", trimmedKeyword);
      }

      const res = await fetch(
        `https://panda-market-api.vercel.app/products?${params}`,
      );
      const data = await res.json();
      const filtered = trimmedKeyword
        ? data.list.filter((product) => product.name.includes(trimmedKeyword))
        : data.list;
      setProducts(filtered);
      onTotalCountChange?.(data.totalCount);
    };

    const timer = setTimeout(() => {
      getProducts();
    }, 300);

    return () => clearTimeout(timer);
  }, [orderBy, keyword, page]); // orderBy, keyword, page가 변경되면 300ms 후 호출

  return (
    <ul className="grid grid-cols-5 gap-6 mt-4">
      {products.map((product) => {
        return (
          <li key={product.id || product.name}>
            <img
              width={221}
              height={221}
              src={
                product.images?.length > 0
                  ? product.images[0]
                  : `https://picsum.photos/seed/${product.id}/300/300`
              }
              alt="picsum.photos"
              className="aspect-square rounded-2xl object-cover"
            />
            <div className="flex flex-col gap-1.5 mt-4 text-[#1F2937]">
              <h3 className="text-[14px]">{product.name || product.title}</h3>
              <span className="font-bold">
                {product.price?.toLocaleString?.() || priceFormat(product.price)}
                원
              </span>
              <div className="text-[12px] flex gap-1 text-[#4B5563]">
                <img src={likeIcon} alt="좋아요" />{" "}
                {product.favoriteCount || product.likeCount}
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
