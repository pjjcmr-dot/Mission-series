import { ProductList } from "./ProductList";
import searchIcon from "../assets/icons/search.svg";
import arrowDownIcon from "../assets/icons/arrow-down.svg";
import { useState } from "react";

export function ProductListSection() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState("recent");

  const sortOptions = [
    { value: "recent", label: "최신순" },
    { value: "favorite", label: "좋아요순" },
  ];

  const currentLabel = sortOptions.find((opt) => opt.value === sortOrder)?.label;

  const handleSortChange = (value) => {
    setSortOrder(value);
    setIsDropdownOpen(false);
  };

  return (
    <section className="mt-10">
      <div className="flex justify-between items-center">
        <h2 className="text-[#111827] font-bold text-[20px] leading-8">
          판매중인 상품
        </h2>
        <div className="flex gap-3 items-center">
          <div className="relative">
            <img
              src={searchIcon}
              alt=""
              className="absolute top-1/2 -translate-y-1/2 left-4"
            />
            <input
              name="search"
              type="text"
              placeholder="검색할 상품을 입력해주세요"
              className="pl-11 pr-4 py-2.25 text-[#9CA3AF] bg-[#F3F4F6] rounded-xl outline-0 w-81.25"
            />
          </div>
          <a
            href=""
            className="flex items-center justify-center w-33.25 h-10.5 rounded-lg bg-[#3692FF] text-[#F3F4F6]"
          >
            상품 등록하기
          </a>
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center justify-between gap-1 w-[130px] px-4 py-2 border border-[#E5E7EB] rounded-xl"
            >
              <span>{currentLabel}</span>
              <img src={arrowDownIcon} alt="정렬" />
            </button>
            {isDropdownOpen && (
              <ul className="absolute top-full right-0 mt-1 bg-white border border-[#E5E7EB] rounded-xl shadow-lg z-10 min-w-full">
                {sortOptions.map((option) => (
                  <li key={option.value}>
                    <button
                      onClick={() => handleSortChange(option.value)}
                      className="w-full px-4 py-2 text-left hover:bg-[#F3F4F6] first:rounded-t-xl last:rounded-b-xl"
                    >
                      {option.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      <ProductList orderBy={sortOrder} />
    </section>
  );
}
