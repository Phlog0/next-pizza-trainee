import { Container, Filters, Title, TopBar } from "@/shared/components/shared";
import { ProductsGroupList } from "@/shared/components/shared";
// import { categories } from "@/prisma/constats";
import { prisma } from "@/prisma/prisma";
import { Suspense } from "react";
import { findPizzas, GetSearchParams } from "@/lib";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<GetSearchParams>;
}) {
  //обратись к ингредиентамЮ верни продукты с их вариациями и ингредиентами (у категории есть связи)
  const categories = await findPizzas(await searchParams);
  return (
    <>
      <Container className="mt-5">
        <Title text="Все пиццы" className="font-extrabold" size="lg" />
      </Container>
      <TopBar categories={categories} />
      <Container className="pb-14 mt-9">
        <div className="flex gap-20">
          <div className="shrink-0">
            <Suspense>
              <Filters />
            </Suspense>
          </div>
          <div className="flex flex-col gap-10">
            {categories.map(
              (category) =>
                category.products.length > 0 && (
                  <ProductsGroupList
                    categoryId={category.id}
                    title={category.title}
                    key={category.id}
                    items={category.products}
                  />
                )
            )}
          </div>
        </div>
      </Container>
    </>
  );
}
