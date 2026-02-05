import likeIcon from "../assets/icons/like.svg";
import { useState } from "react";

// const defaultProducts = [
//   {
//     src: "",
//     name: "",
//     price: "",
//     title: "",
//     likeCount: 0,
//   }
// ];

//더미데이터로 우선 강의 설명하는 상호아임

const dummyProducts = [
  {
    src: "https://picsum.photos/seed/1/300/300",
    name: "빈티지 우드 테이블",
    price: "120,000",
    title: "원목 느낌 살아있는 빈티지 테이블",
    likeCount: 24,
  },
  {
    src: "https://picsum.photos/seed/2/300/300",
    name: "무선 블루투스 헤드폰",
    price: "89,000",
    title: "노이즈 캔슬링 지원",
    likeCount: 58,
  },
  {
    src: "https://picsum.photos/seed/3/300/300",
    name: "캠핑용 접이식 의자",
    price: "35,000",
    title: "가볍고 튼튼한 캠핑 의자",
    likeCount: 12,
  },
  {
    src: "https://picsum.photos/seed/4/300/300",
    name: "커피 드립 세트",
    price: "42,000",
    title: "홈카페 필수 아이템",
    likeCount: 31,
  },
];

export function BestProductList() {
  const [products] = useState(dummyProducts);

  // useEffect(() => {
  //   const getBestProducts = async () => {
  //     const res = await fetch(
  //       "https://panda-market-api.vercel.app/products?page=1&pageSize=4&orderBy=favorite",
  //     );
  //     const data = await res.json();
  //     setProducts(data.list);
  //   };
  //   getBestProducts();
  // }, []); // 의존성 배열이라고 해서 실행이 딱 한번만 된다.

  // console.log(products);
  // 렌더링 하고 싶을때는 배열 매소드 사용한다.
  return (
    <ul className="flex gap-6 mt-4">
      {products.map((product) => {
        return (
          <li key={product.name}>
            <img
              width={282}
              height={282}
              src={product.src}
              alt="thumbnail"
              className="aspect-square rounded-2xl"
            />
            <div className="flex flex-col gap-1.5 mt-4 text-[#1F2937]">
              <h3 className="text-[14px]">{product.title}</h3>
              <span className="font-bold">{product.price}</span>
              <div className="text-[12px] flex gap-1 text-[#4B5563]">
                <img src={likeIcon} alt="좋아요" /> {product.likeCount}
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
