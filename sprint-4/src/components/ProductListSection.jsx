import { ProductList } from "./ProductList";

export function ProductListSection() {
  return (
    <section className="mt-10">
      <h2 className="text-[#111827] font-bold text-[20px] leading-8">
        판매중인 상품
      </h2>
      <ProductList />
    </section>
  );
}
