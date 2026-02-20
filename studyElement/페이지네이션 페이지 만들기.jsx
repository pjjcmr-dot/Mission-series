const PAGE_BUTTONS = 5;

const totalPages = Math.ceil(totalCount / pageSize);

let startPage = currentPage - Math.floor(PAGE_BUTTONS / 2);
startPage = Math.max(1, startPage);
startPage = Math.min(startPage, totalPages - PAGE_BUTTONS + 1);
startPage = Math.max(1, startPage);

const allPages = Array.from(
  { length: Math.min(PAGE_BUTTONS, totalPages) },
  (_, i) => startPage + i,
);
