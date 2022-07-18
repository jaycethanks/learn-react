import CategoryItem from "../category-item/category-item.component";
import "./directory.styles.scss";

function Directory() {
  const categories = [
    {
      id: 1,
      title: "Hats",
      imageUrl:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/6-9-1646672159.jpg?crop=1.00xw:1.00xh;0,0&resize=980:*",
    },
    {
      id: 2,
      title: "Sneakers",
      imageUrl:
        "https://www.highsnobiety.com/static-assets/thumbor/Pss1HC0aJyDZRGEveoJKm4xMY74=/960x576/www.highsnobiety.com/static-assets/wp-content/uploads/2020/08/07170255/is-it-too-hard-to-buy-sneakers-dropcast-feat.jpg",
    },
    {
      id: 3,
      title: "Jackets",
      imageUrl:
        "https://media.endclothing.com/media/catalog/product/1/2/12-02-2021_AJ_MJ20120-303_1_1.jpg",
    },
    {
      id: 4,
      title: "Womens",
      imageUrl:
        "https://media-exp2.licdn.com/dms/image/C561BAQFNgfkWdxSyhQ/company-background_10000/0/1576848456964?e=1658714400&v=beta&t=W3Kvbi_9PW1uMFpIFEaoNJOENn8fUB4vzpAiUgFR9z0",
    },
    {
      id: 5,
      title: "Mens",
      imageUrl:
        "https://assets.nationbuilder.com/amhf/pages/134/features/original/banr.jpg?1535367354",
    },
  ];
  return (
    <div className='categories-container'>
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  );
}

export default Directory;
