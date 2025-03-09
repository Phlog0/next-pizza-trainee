import {
  Container,
  Filters,
  ProductCard,
  Title,
  TopBar,
} from "@/components/shared";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <Container className="mt-5">
        <Title text="Все пиццы" className="font-extrabold" size="lg" />
      </Container>
      <TopBar />
      <Container className="pb-14 mt-9">
        <div className="flex gap-[60px]">
          <div className="w-[250px">
            <Filters />
          </div>
          <div className="flex flex-col gap-16">
            <ProductCard
              id={1}
              title="pizza"
              imageUrl="https://media.dodostatic.net/image/r:584x584/0194491914e478b4aa3e18d44e07eed9.avif"
              price={300}
            />
          </div>
        </div>
      </Container>
    </>
  );
}
