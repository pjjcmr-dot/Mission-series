// import thumbnail from "../assets/thumbnail.png";
import likeIcon from "../assets/icons/like.svg";
import { useEffect, useState } from "react";

// const defaultProducts = [
//   {
//     src: "",
//     name: "",
//     price: "",
//     title: "",
//     likeCount: 0,
//   }
// ];

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
  {
    src: "https://picsum.photos/seed/5/300/300",
    name: "디자인 탁상 시계",
    price: "55,000",
    title: "세련된 공간 완성 탁상시계",
    likeCount: 19,
  },
  {
    src: "https://picsum.photos/seed/6/300/300",
    name: "포스터 액자 LED 스탠드",
    price: "28,000",
    title: "무드등 겸용 스탠드",
    likeCount: 8,
  },
  {
    src: "https://picsum.photos/seed/7/300/300",
    name: "13~14인치 노트북 파우치",
    price: "47,000",
    title: "방수 기능 노트북 파우치",
    likeCount: 22,
  },
  {
    src: "https://picsum.photos/seed/8/300/300",
    name: "일출부터 일몰까지 반려견",
    price: "33,000",
    title: "강아지 산책 일기",
    likeCount: 41,
  },
  {
    src: "https://picsum.photos/seed/9/300/300",
    name: "무선 보온 머그컵",
    price: "18,000",
    title: "따뜻한 커피 유지",
    likeCount: 36,
  },
  {
    src: "https://picsum.photos/seed/10/300/300",
    name: "캐리어 여행 가방",
    price: "150,000",
    title: "디자인 깔끔한 여행용 캐리어",
    likeCount: 16,
  },
];

export function ProductList() {
  const [products, setProducts] = useState(dummyProducts);

  useEffect(() => {
    const getProducts = async () => {
      const params = new URLSearchParams({
        page: 1,
        pageSize: 10,
        orderBy: "recent",
      });

      const res = await fetch(
        `https://panda-market-api.vercel.app/products?${params.toString()}`,
      );
      const data = await res.json();
      setProducts(data.list);
    };
    getProducts();
  }, []); // 의존성 배열이라고 해서 실행이 딱 한번만 된다.

  // console.log(products);

  return (
    <ul className="grid grid-cols-5 gap-6 mt-4">
      {products.map((product) => {
        return (
          <li key={product.name}>
            <img
              width={221}
              height={221}
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
