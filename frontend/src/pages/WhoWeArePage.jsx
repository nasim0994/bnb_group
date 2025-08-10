import { useEffect } from "react";
import Whoweare from "../components/Home/Whoweare";
import MoreAbout from "../components/Home/MoreAbout";
import Counter from "../components/Home/Counter";
import OurClients from "../components/Home/OurClients";

export default function WhoWeArePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "BNB - Who We Are";
  }, []);

  return (
    <>
      <Whoweare />
      <MoreAbout />
      <Counter />
      <OurClients />
    </>
  );
}
