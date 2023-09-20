import ProductCard from "./ProductCard";
const data = [
  {
    id: 0,
    name: "Pizza",
    price: "$15",
    img: "/pizza__1.jpg",
  },
  {
    id: 1,
    name: "Eggs",
    price: "$4",
    img: "/eggshell__1.jpg",
  },
  {
    id: 2,
    name: "Cheese",
    price: "$3",
    img: "/cheese__1.jpg",
  },
  {
    id: 3,
    name: "Breakfast",
    price: "$20",
    img: "/breakfast__1.jpg"
  }
];
const FeatureSectionBreakfast = () => {
  return (
    <div className="container pt-16">
      <div className=" lg:flex justify-between items-center">
        <div>
          <h3 className=" font-medium text-2xl">Breakfast & Diary</h3>
          <p className="text-gray-600 mt-2 uppercase">
          Buy best quality breakfast online from big-basket stop near you!
                    </p>
        </div>

        <div className="space-x-4 mt-8 lg:mt-0">
          <button className="feature_btn">Eggs & Diary</button>
          <button className="text-gray-600 hover:text-accent">
            Pizza
          </button>
          <button className="text-gray-600 hover:text-accent">
            Snacks
          </button>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
        <div>
          <img
            className=" w-full h-full object-cover"
            src="/feature__2.webp"
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

export default FeatureSectionBreakfast;
