import { FaDotCircle } from "react-icons/fa";
import BNBResort from "../../components/Home/BNBResort";
import BNBResort2 from "../../components/Home/BNBResort2";

export default function BNBAgro() {
  window.scrollTo(0, 0);

  return (
    <section>
      <div>
        <img src="/images/banner2.png" alt="BNB Agro" className="w-full" />
      </div>
      <div className="container">
        <section className="py-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl text-neutral font-semibold">
                About BNB Agro
              </h2>
              <p className="mt-3 text-neutral-content flex flex-col gap-1">
                BNB Agro and Engineering was formed by a group of experienced
                professionals who are highly experienced and well known in the
                market of power and engineering field. The company started its
                journey in 2017 as a supplier and solution provider. The company
                is established with a clear vision to be a significant service
                provider in HV/ MV/LV protection solutions and testing service
                business in Bangladesh and out of the boundary of Bangladesh.
              </p>
            </div>

            <div>
              <img
                src="/images/banner2.png"
                alt="BNB Power"
                className="w-full lg:w-[85%] ml-auto rounded object-cover"
              />
            </div>
          </div>
        </section>

        <BNBResort />
        <BNBResort2 />
      </div>
    </section>
  );
}
