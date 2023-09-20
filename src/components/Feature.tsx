import FeatureCard from "./FeatureCard";
import {
  LiaShippingFastSolid,
  LiaMoneyBillWaveSolid,
  LiaGiftSolid,
} from "react-icons/lia";
import { FiPhoneCall } from "react-icons/fi";

const data = [
  {
    title: "Free Shipping",
    icon: <LiaShippingFastSolid />,
    text: "Enjoy cost-free delivery on your orders.",
  },
  {
    title: "Best Price Guarantee",
    icon: <LiaMoneyBillWaveSolid />,
    text: "Shop with confidence, it's the best prices available.",

  },
  {
    title: "Free Curbside Pickup",
    icon: <LiaGiftSolid />,
    text: " Collect your purchases without leaving your vehicle.",

  },
  {
    title: "Support 24 /7",
    icon: <FiPhoneCall />,
    text: "Our Agents Are Always There For You.",
  },
];

const Feature = () => {
  return (
    <div className=" container pt-16">
      <div className=" grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {data.map((el) => (
          <FeatureCard key={el.title} title={el.title} icon={el.icon} text={el.text} />
        ))}
      </div>
    </div>
  );
};

export default Feature;
