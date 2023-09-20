import ProductCard from "./ProductCard";
const data = [
  {
    id: 0,
    name: "KIWI'S",
    price: "$7",
    img: "/product__1.webp",
  },
  {
    id: 1,
    name: "MANGO'S",
    price: "$9",
    img: "/mango__1.jpg",
  },
  {
    id: 2,
    name: "APPLE'S",
    price: "$2",
    img: "/apples__1.jpg",
  },
  {
    id: 3,
    name: "CARROT'S",
    price: "$3",
    img: "/carrots__1.jpg"
  }
];
const FeatureSectionFruit = () => {
  return (
    <div className="container pt-16">
      <div className=" lg:flex justify-between items-center">
        <div>
          <h3 className=" font-medium text-2xl">Fruits & Vegetables</h3>
          <p className="text-gray-600 mt-2 uppercase">
            Buy Farm Fresh Fruits And Vegetables Online At The Best Prices !
          </p>
        </div>

        <div className="space-x-4 mt-8 lg:mt-0">
          <button className="feature_btn">Fruits</button>
          <button className="text-gray-600 hover:text-accent">
            Vegetables
          </button>
          <button className="text-gray-600 hover:text-accent">
            Bread & Bakery
          </button>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
        <div>
          <img
            className=" w-full h-full object-cover"
            src="/feature__1.webp"
            alt="banner"
          />
        </div>

        {data.map((el) => (
  <ProductCard
    key={el.id}
    img={el.img}
    name={el.name}
    price={el.price}
  />
))}

      </div>
    </div>
  );
};

export default FeatureSectionFruit;
