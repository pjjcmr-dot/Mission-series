const API_BASE_URL = "https://panda-market-api.vercel.app";
const [bestProducts, setBestProducts] = useState([]);

useEffect(() => {
  const params = new URLSearchParams({
    page: 1,
    pageSize: 4,
    orderBy: "favorite",
  });

  const getBestProducts = async () => {
    const res = await fetch(`${API_BASE_URL}/products?${params.toString()}`);
    const products = await res.json();

    setBestProducts(products.list);
  };

  getBestProducts();
}, []);
