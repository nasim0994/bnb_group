import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useGetCounterQuery } from "../../Redux/counterApi";

export default function Counter() {
  const [count, setCount] = useState(false);

  const { data } = useGetCounterQuery();
  const counter = data?.data;

  return (
    <section
      className="py-10 sm:py-20 text-base-100"
      style={{
        backgroundImage: `linear-gradient(80deg, #00000024, #0000009a),url('/images/counter_bg.jpg')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div>
          <div className="text-center">
            <h2 className="text-4xl font-bold text-base-100">
              Empowering Success Nationwide.
            </h2>
            <p className="mt-3 text-lg lg:w-1/2 mx-auto">
              BNB Group stands as a multi-line business leader in Bangladesh,
              with a robust track record and commitment to quality.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 gap-2 sm:gap-4">
            <div className="flex flex-col gap-1 items-center text-center">
              <ScrollTrigger
                onEnter={() => setCount(true)}
                onExit={() => setCount(false)}
              >
                {count && (
                  <h2 className="text-2xl sm:text-4xl font-semibold">
                    <CountUp start={0} end={10} />+
                  </h2>
                )}
              </ScrollTrigger>
              <p className="text-base text-gray-300">Years of Experience</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <ScrollTrigger
                onEnter={() => setCount(true)}
                onExit={() => setCount(false)}
              >
                {count && (
                  <h2 className="text-2xl sm:text-4xl font-semibold">
                    <CountUp start={0} end={1000} />+
                  </h2>
                )}
              </ScrollTrigger>
              <p className="text-base text-gray-300">Employee</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <ScrollTrigger
                onEnter={() => setCount(true)}
                onExit={() => setCount(false)}
              >
                {count && (
                  <h2 className="text-2xl sm:text-4xl font-semibold">
                    <CountUp start={0} end={2000} />+
                  </h2>
                )}
              </ScrollTrigger>
              <p className="text-base text-gray-300">Dealers</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <ScrollTrigger
                onEnter={() => setCount(true)}
                onExit={() => setCount(false)}
              >
                {count && (
                  <h2 className="text-2xl sm:text-4xl font-semibold">
                    <CountUp start={0} end={10} />+
                  </h2>
                )}
              </ScrollTrigger>
              <p className="text-base text-gray-300">Outlets</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
