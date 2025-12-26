export const products = [
  {
    title: "Омлет с ветчиной и грибами",
    categoryId: 2,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/11ef5ed5f8f64595a6d6a99c1fe6f7f0.png",
  },
  {
    title: "Омлет с пепперони",
    categoryId: 2,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/11ef5ed5f8f64595a6d6a99c1fe6f7f0.png",
  },
  {
    title: "Кофе латте",
    categoryId: 2,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/11ef5ed5f8f64595a6d6a99c1fe6f7f0.png",
  },
  {
    title: "Дэнвич ветчина и сыр",
    categoryId: 2,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/11ef5ed5f8f64595a6d6a99c1fe6f7f0.png",
  },
  {
    title: "Куриные нагетсы",
    categoryId: 3,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/11ef5ed5f8f64595a6d6a99c1fe6f7f0.png",
  },
  {
    title: "Свинячие нагетсы",
    categoryId: 3,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/11ef5ed5f8f64595a6d6a99c1fe6f7f0.png",
  },
  {
    title: "Нагетсы",
    categoryId: 3,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/11ef5ed5f8f64595a6d6a99c1fe6f7f0.png",
  },
  {
    title: "Нагетсы",
    categoryId: 3,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/11ef5ed5f8f64595a6d6a99c1fe6f7f0.png",
  },
  {
    title: "Молочный коктейль с печеньем Орео",
    categoryId: 4,
    imageUrl:
      "https://media.dodostatic.net/image/r:584x584/0198227b830478b599cefb215fad4e36.avif",
  },
  {
    title: "Классический молочный коктейль",
    categoryId: 4,
    imageUrl:
      "https://media.dodostatic.net/image/r:584x584/0198227af85e7443b2a25aa7e79aea7a.avif",
  },
  {
    title: "Клубничный молочный коктейль",
    categoryId: 4,
    imageUrl:
      "https://media.dodostatic.net/image/r:584x584/0198227d306776d897d4781cc1a225bd.avif",
  },
  {
    title: "Латте Темный лес",
    categoryId: 5,
    imageUrl:
      "https://media.dodostatic.net/image/r:584x584/01963614bb0976d3b5cb5ca10bcc1ab8.avif",
  },
  {
    title: "Капучино Яблочный пирог",
    categoryId: 5,
    imageUrl:
      "https://media.dodostatic.net/image/r:584x584/019855f96ed874489375d653f238b26f.avif",
  },
  {
    title: "Кофе Карамельный капучино",
    categoryId: 5,
    imageUrl:
      "https://media.dodostatic.net/image/r:584x584/019855f8981f7781aedc4b373d96c060.avif",
  },
  {
    title: "Айсти зеленый со вкусом лесных ягод",
    categoryId: 6,
    imageUrl:
      "https://media.dodostatic.net/image/r:584x584/0198a7fe871b78fa9d851008cf535f66.avif",
  },
  {
    title: "Айсти зеленый со вкусом лимона",
    categoryId: 6,
    imageUrl:
      "https://media.dodostatic.net/image/r:584x584/0198a803239b7654a365c797b823cdd2.avif",
  },
  {
    title: "Добрый Кола Ледяной Лимон",
    categoryId: 6,
    imageUrl:
      "https://media.dodostatic.net/image/r:584x584/0197f864b10576268f6cc150c744dd69.avif",
  },
].map((item, index) => ({
  ...item,
  title: `${item.title}-${index + 1}`,
  //   id: index + 1,
}));
