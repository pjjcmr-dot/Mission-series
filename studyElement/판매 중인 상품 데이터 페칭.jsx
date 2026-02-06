const API_BASE_URL = "https://panda-market-api.vercel.app";
const [products, setProducts] = useState({ list: [], totalCount: 0 });
const [sort, setSort] = useState("recent");
const [search, setSearch] = useState("");

useEffect(() => {
  const params = new URLSearchParams({
    page: currentPage,
    pageSize: 10,
    orderBy: sort,
    keyword: search,
  });

  const getProducts = async () => {
    const res = await fetch(`${API_BASE_URL}/products?${params.toString()}`);
    const products = await res.json();

    setProducts(products);
  };

  getProducts();
}, [sort, search, currentPage]);
