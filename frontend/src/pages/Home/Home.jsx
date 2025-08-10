import "../../assets/css/home.css";
import Banner from "../../components/Home/Banner";
import Whoweare from "../../components/Home/Whoweare";
import OurClients from "../../components/Home/OurClients";
import Counter from "../../components/Home/Counter";
import BNBResort from "../../components/Home/BNBResort";
import BNBResort2 from "../../components/Home/BNBResort2";
import OurBrands from "../../components/Home/OurBrands";
import NewsEvents from "../../components/Home/NewsEvents";

export default function Home() {
  window.scrollTo(0, 0);

  return (
    <>
      <Banner />
      <OurBrands />
      <Whoweare />
      <Counter />
      <BNBResort />
      <BNBResort2 />
      <OurClients />
      <NewsEvents />
    </>
  );
}
