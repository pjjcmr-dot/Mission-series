import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
// import thumbnail from "./assets/tail.png";
// import likeIcon from "./assets/icons/humbnlike.svg";
import { BestProductList } from "./components/BestProductList";
import { ProductList } from "./components/ProductList";

function App() {
  return (
    <>
      <Header />

      <main className="grow max-w-300 mx-auto mt-6.5">
        <h1 className="sr-only">중고마켓 - 판다마켓</h1>

        <section>
          <h2 className="text-[#111827] font-bold text-[20px] leading-8">
            베스트 상품
          </h2>
          <BestProductList />
        </section>

        <section className="mt-10">
          <h2 className="text-[#111827] font-bold text-[20px] leading-8">
            판매중인 상품
          </h2>
          <ProductList />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
