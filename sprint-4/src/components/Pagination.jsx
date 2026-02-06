import arrowRightIcon from "../assets/icons/arrow-right.svg";

const PAGE_BUTTONS = 5;

export function Pagination({
  totalCount,
  pageSize,
  currentPage,
  onPageChange,
}) {
  const totalPages = Math.ceil(totalCount / pageSize);

  if (totalPages <= 1) return null;

  let startPage = currentPage - Math.floor(PAGE_BUTTONS / 2);
  startPage = Math.max(1, startPage); // 스타트 페이지가 최소 1이 되게끔
  startPage = Math.min(startPage, totalPages - PAGE_BUTTONS + 1); // 마지막 페이지 구현
  startPage = Math.max(1, startPage); // 토탈페이지가 페이지 버튼 수보다 작을 때

  const allPages = Array.from(
    { length: Math.min(PAGE_BUTTONS, totalPages) },
    (_, i) => startPage + i,
  );

  return (
    <div className="flex justify-center items-center gap-1 mt-10">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-10 h-10 flex items-center justify-center rounded-full enabled:hover:bg-[#E5E7EB] disabled:opacity-30"
      >
        <img src={arrowRightIcon} alt="이전" className="w-4 h-4" />
      </button>

      {allPages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-10 h-10 rounded-full text-[16px] ${
            page === currentPage
              ? "bg-[#3692FF] text-white font-bold"
              : "text-[#6B7280] hover:bg-[#E5E7EB]"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-10 h-10 flex items-center justify-center rounded-full enabled:hover:bg-[#E5E7EB] disabled:opacity-30"
      >
        <img src={arrowRightIcon} alt="다음" className="rotate-180 w-4 h-4" />
      </button>
    </div>
  );
}
