import {
  Container,
  Filters,
  Title,
  TopBar,
} from "@/components/shared";
import { ProductsGroupList } from "@/components/shared/products-group-list";


export default function Home() {
  return (
    <>
      <Container className="mt-5">
        <Title text="Все пиццы" className="font-extrabold" size="lg" />
      </Container>
      <TopBar />
      <Container className="pb-14 mt-9">
        <div className="flex gap-[80px]">
          <div className="shrink-0">
            <Filters />
          </div>
          <div className="flex flex-col gap-16">
            <ProductsGroupList
              title="Пицца"
              categoryId={1}
              items={[
                {
                  id: 1,
                  title: "Чизбургер-пицца",
                  imageUrl:
                    "https://media.dodostatic.net/image/r:584x584/11ee7d612fc7b7fca5be822752bee1e5.avif",
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 2,
                  title: "Чизбургер-пицца",
                  imageUrl:
                    "https://media.dodostatic.net/image/r:584x584/11ee7d612fc7b7fca5be822752bee1e5.avif",
                  price: 550,
                  items: [{ price: 550 }],
                },
              ]}
            />
            <ProductsGroupList
              title="Комбо"
              categoryId={2}
              items={[
                {
                  id: 1,
                  title: "Чизбургер-пицца",
                  imageUrl:
                    "https://media.dodostatic.net/image/r:584x584/11ee7d612fc7b7fca5be822752bee1e5.avif",
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 2,
                  title: "Чизбургер-пицца",
                  imageUrl:
                    "https://media.dodostatic.net/image/r:584x584/11ee7d612fc7b7fca5be822752bee1e5.avif",
                  price: 550,
                  items: [{ price: 550 }],
                },
              ]}
            />
          </div>
        </div>
      </Container>
    </>
  );
}
