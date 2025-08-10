import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function OurBrands() {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container">
        <h2 className="text-4xl font-bold text-neutral text-center">
          Our Brands
        </h2>

        <div className="mt-6 sm:mt-10 flex items-start justify-center flex-wrap gap-5">
          <Link
            to=""
            className="w-full sm:w-80 border rounded border-dashed border-secondary/70 p-6 hover:border-secondary hover:bg-base-100 duration-200"
          >
            <img
              src="/images/bnb-power.png"
              alt="bnb-power"
              className="w-1/2"
            />

            <h2 className="my-5 text-2xl text-neutral font-bold">
              BNB Power and Engineering
            </h2>

            <p className="text-sm text-neutral-content">
              BNB Power and Engineering was formed by a group of experienced
              professionals who are highly experienced and well known in the
              market of power and engineering field. The company started its
              journey in 2017 as a supplier and solution provider. The company
              is established with a clear vision to be a significant service
              provider in HV/ MV/LV protection solutions and testing service
              business in Bangladesh and out of the boundary of Bangladesh.
            </p>

            <button className="mt-5">
              <BsArrowRight />
            </button>
          </Link>

          <Link
            to=""
            className="w-full sm:w-80 border rounded border-dashed border-secondary/70 p-6 hover:border-secondary hover:bg-base-100 duration-200"
          >
            <img
              src="/images/bnb-power.png"
              alt="bnb-power"
              className="w-1/2"
            />

            <h2 className="my-5 text-2xl text-neutral font-bold">BNB Agro</h2>

            <p className="text-sm text-neutral-content">
              BNB Power and Engineering was formed by a group of experienced
              professionals who are highly experienced and well known in the
              market of power and engineering field. The company started its
              journey in 2017 as a supplier and solution provider. The company
              is established with a clear vision to be a significant service
              provider in HV/ MV/LV protection solutions and testing service
              business in Bangladesh and out of the boundary of Bangladesh.
            </p>

            <button className="mt-5">
              <BsArrowRight />
            </button>
          </Link>

          <Link
            to=""
            className="w-full sm:w-80 border rounded border-dashed border-secondary/70 p-6 hover:border-secondary hover:bg-base-100 duration-200"
          >
            <img
              src="/images/bnb-power.png"
              alt="bnb-power"
              className="w-1/2"
            />

            <h2 className="my-5 text-2xl text-neutral font-bold">
              BNB Power and Engineering
            </h2>

            <p className="text-sm text-neutral-content">
              BNB Power and Engineering was formed by a group of experienced
              professionals who are highly experienced and well known in the
              market of power and engineering field. The company started its
              journey in 2017 as a supplier and solution provider. The company
              is established with a clear vision to be a significant service
              provider in HV/ MV/LV protection solutions and testing service
              business in Bangladesh and out of the boundary of Bangladesh.
            </p>

            <button className="mt-5">
              <BsArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
