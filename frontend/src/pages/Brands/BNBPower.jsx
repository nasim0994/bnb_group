import { FaDotCircle } from "react-icons/fa";

export default function BNBPower() {
  window.scrollTo(0, 0);

  return (
    <section>
      <div>
        <img src="/images/banner.jpg" alt="BNB Power" />
      </div>
      <div className="container">
        {/* about bnb power */}
        <section className="py-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl text-neutral font-semibold">
                About BNB Power
              </h2>
              <p className="mt-3 text-neutral-content flex flex-col gap-1">
                BNB Power and Engineering was formed by a group of experienced
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
                src="/images/bnb-power.png"
                alt="BNB Power"
                className="w-full lg:w-[85%] ml-auto rounded object-cover"
              />
            </div>
          </div>
        </section>

        <section className="py-10">
          <h3 className="text-2xl sm:text-4xl font-semibold text-neutral text-center">
            <span className="primary_text">BNB Power Products</span>
          </h3>

          <div className="container">
            <div className="mt-6">
              <div>
                <h3 className="text-lg font-medium text-neutral w-max bg-gray-300 rounded-3xl px-4 py-1 mx-auto">
                  Breakers and LPS
                </h3>

                <p className="mt-3 text-neutral/80 text-sm">
                  BNB Power and Engineering is the provider all kind of LV/MV/HV
                  electrical circuit breakers and lightning protection system
                  devices. we provide early streamer emission LPS (such as
                  OPR30, OPR45,OPR60) and services.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap justify-center gap-8">
                <img
                  src="https://cdn.shakedeal.com/images/thumbnails/330/330/detailed/350/SDSMS0057000.jpg?t=1699519456"
                  alt="service"
                  className="w-28 h-28 rounded-full border border-neutral"
                />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6TqUuUu4vkUEW0cnbxTHqRajIky-f7iXXX-FKZWihzV2nNmaV"
                  alt="service"
                  className="w-32 h-32 rounded-full border border-neutral"
                />
                <img
                  src="https://www.industrymart.com.bd/wp-content/uploads/2024/06/ABB-MCB-DP-16A-6KA-300x300.jpeg"
                  alt="service"
                  className="w-28 h-28 rounded-full border border-neutral"
                />
                <img
                  src="https://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF,c_pad,dpr_1.0,f_auto,q_auto,w_700/c_pad,w_700/R2437038-01"
                  alt="service"
                  className="w-32 h-32 rounded-full border border-neutral"
                />
                <img
                  src="https://p.globalsources.com/IMAGES/PDT/B1081462713/lightning-protection-system-ESE-SEFCO-ABB-lightning-arrestor-air-terminal-rod-strike-counter.jpg"
                  alt="service"
                  className="w-28 h-28 rounded-full border border-neutral"
                />
                <img
                  src="https://cdn.productimages.abb.com/9PAA00000045326_400x400.jpg"
                  alt="service"
                  className="w-28 h-28 rounded-full border border-neutral"
                />
                <img
                  src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTtkERoZJwsYwc0NoudrWt_oZFOr6yR1W2TH8QWuiNOtt4eLx8d"
                  alt="service"
                  className="w-28 h-28 rounded-full border border-neutral"
                />
              </div>

              <div className="mt-10">
                <div className="flex items-center gap-6">
                  <img src="/images/siemens.png" alt="" className="w-32" />
                  <p>-</p>
                  <p className="text-sm text-neutral/80">
                    Channel Partner for Bangladesh
                  </p>
                </div>
                <div className="flex items-center gap-6">
                  <img src="/images/abb.png" alt="" className="w-32" />
                  <p>-</p>
                  <p className="text-sm text-neutral/80">Importer</p>
                </div>
                <div className="flex items-center gap-6">
                  <img src="/images/schneider.png" alt="" className="w-32" />
                  <p>-</p>
                  <p className="text-sm text-neutral/80">Importer</p>
                </div>
              </div>
            </div>

            <div className="mt-20">
              <div className="mt-6 flex flex-col gap-6">
                <div>
                  <h3 className="text-lg font-medium text-neutral w-max bg-gray-300 rounded-3xl px-4 py-1 mx-auto">
                    Ball Bearings
                  </h3>
                  <ul className="mt-6 grid sm:grid-cols-2 gap-2 text-sm text-neutral">
                    <li className="flex items-center gap-2">
                      <i>
                        <FaDotCircle className="text-xs" />
                      </i>
                      <p>Angular Contact Ball Bearings</p>
                    </li>
                    <li className="flex items-center gap-2">
                      <i>
                        <FaDotCircle className="text-xs" />
                      </i>
                      <p>Self-Aligning Ball Bearings</p>
                    </li>
                    <li className="flex items-center gap-2">
                      <i>
                        <FaDotCircle className="text-xs" />
                      </i>
                      <p>Thrust Ball Bearings</p>
                    </li>
                    <li className="flex items-center gap-2">
                      <i>
                        <FaDotCircle className="text-xs" />
                      </i>
                      <p>Angular Contact Thrust Ball Bearing</p>
                    </li>
                    <li className="flex items-center gap-2">
                      <i>
                        <FaDotCircle className="text-xs" />
                      </i>
                      <p>Deep Groove Ball Bearings</p>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold">Roller Bearings</h2>
                  <ul className="mt-2 grid sm:grid-cols-2 gap-2 text-sm text-neutral">
                    <li className="flex items-center gap-2">
                      <i>
                        <FaDotCircle className="text-xs" />
                      </i>
                      <p>Cylinderical Roller Bearings</p>
                    </li>
                    <li className="flex items-center gap-2">
                      <i>
                        <FaDotCircle className="text-xs" />
                      </i>
                      <p>Full Complement Cylinderical Roller Bearings</p>
                    </li>
                    <li className="flex items-center gap-2">
                      <i>
                        <FaDotCircle className="text-xs" />
                      </i>
                      <p>Needle Rolle Bearings</p>
                    </li>
                    <li className="flex items-center gap-2">
                      <i>
                        <FaDotCircle className="text-xs" />
                      </i>
                      <p>Tapered Roller Bearings</p>
                    </li>
                    <li className="flex items-center gap-2">
                      <i>
                        <FaDotCircle className="text-xs" />
                      </i>
                      <p>Spherical Roller Bearings</p>
                    </li>
                    <li className="flex items-center gap-2">
                      <i>
                        <FaDotCircle className="text-xs" />
                      </i>
                      <p>Cylinderical Roller Thrust Bearings</p>
                    </li>
                    <li className="flex items-center gap-2">
                      <i>
                        <FaDotCircle className="text-xs" />
                      </i>
                      <p>Needle Roller Thrust Bearings</p>
                    </li>
                    <li className="flex items-center gap-2">
                      <i>
                        <FaDotCircle className="text-xs" />
                      </i>
                      <p>Tapered Roller Thrust Bearings</p>
                    </li>
                    <li className="flex items-center gap-2">
                      <i>
                        <FaDotCircle className="text-xs" />
                      </i>
                      <p>Spherical Roller Thrust Bearings</p>
                    </li>
                    <li className="flex items-center gap-2">
                      <i>
                        <FaDotCircle className="text-xs" />
                      </i>
                      <p>Cam Rollers</p>
                    </li>
                    <li className="flex items-center gap-2">
                      <i>
                        <FaDotCircle className="text-xs" />
                      </i>
                      <p>Giant Roller Bearings</p>
                    </li>
                    <li className="flex items-center gap-2">
                      <i>
                        <FaDotCircle className="text-xs" />
                      </i>
                      <p>Support Rollers</p>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold">Roller Bearings</h2>
                  <ul className="mt-2 grid sm:grid-cols-2 gap-2 text-sm text-neutral">
                    <li className="flex items-center gap-2">
                      <i>
                        <FaDotCircle className="text-xs" />
                      </i>
                      <p>Automotive Bearings</p>
                    </li>
                    <li className="flex items-center gap-2">
                      <i>
                        <FaDotCircle className="text-xs" />
                      </i>
                      <p>Clutch Bearings</p>
                    </li>
                    <li className="flex items-center gap-2">
                      <i>
                        <FaDotCircle className="text-xs" />
                      </i>
                      <p>Sliding Bearings</p>
                    </li>
                    <li className="flex items-center gap-2">
                      <i>
                        <FaDotCircle className="text-xs" />
                      </i>
                      <p>Precision Bearings</p>
                    </li>
                    <li className="flex items-center gap-2">
                      <i>
                        <FaDotCircle className="text-xs" />
                      </i>
                      <p>Linear Guide Bearings</p>
                    </li>
                    <li className="flex items-center gap-2">
                      <i>
                        <FaDotCircle className="text-xs" />
                      </i>
                      <p>Pillow Block Bearings</p>
                    </li>
                    <li className="flex items-center gap-2">
                      <i>
                        <FaDotCircle className="text-xs" />
                      </i>
                      <p>Spherical Bearings</p>
                    </li>
                    <li className="flex items-center gap-2">
                      <i>
                        <FaDotCircle className="text-xs" />
                      </i>
                      <p>Magnetic Bearings</p>
                    </li>
                    <li className="flex items-center gap-2">
                      <i>
                        <FaDotCircle className="text-xs" />
                      </i>
                      <p>Fluid Bearings</p>
                    </li>
                    <li className="flex items-center gap-2">
                      <i>
                        <FaDotCircle className="text-xs" />
                      </i>
                      <p>Cam Followers</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="container">
            <h3 className="text-2xl sm:text-4xl font-semibold text-neutral text-center">
              <span className="primary_text">List of Equipment's</span>
            </h3>

            <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 text-sm">
              <div className="flex flex-col items-center gap-2">
                <img
                  src="https://www.omicronenergy.com/fileadmin/_processed_/3/9/csm_CPC-100-keyvisual_b7a8508ff6.png"
                  alt="MultifunctionalPrimaryTestset"
                  className="w-28"
                />
                <p className="text-center text-neutral">
                  Multifunctional Primary Test Set
                </p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <img
                  src="https://www.megger.com/sites/g/files/utfabz201/files/styles/megger_square/public/acquiadam/2022-11/TTRU3_WEBI_001.png.webp?itok=yLvcRHL5"
                  alt="MultifunctionalPrimaryTestset"
                  className="w-28"
                />
                <p className="text-center text-neutral">
                  ThreePhase Transformer Tester
                </p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <img
                  src="https://carelabz.com/wp-content/uploads/2017/12/Primary-Injection-Test.jpg"
                  alt="MultifunctionalPrimaryTestset"
                  className="w-28"
                />
                <p className="text-center text-neutral">
                  Primary Current Injector
                </p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <img
                  src="https://www.omicronenergy.com/fileadmin/_processed_/0/f/csm_CT-Analyzer-description_19dda8e6ed.png"
                  alt="MultifunctionalPrimaryTestset"
                  className="w-28"
                />
                <p className="text-center text-neutral">CT Analyzer</p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgJX92MiIh_h6e_VM_Al2HQG6talm4pitw6g&s"
                  alt="MultifunctionalPrimaryTestset"
                  className="w-28"
                />
                <p className="text-center text-neutral">Relay Testing Set</p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn3bG3JIP6C7SeJHWE7mk_969UiHL-OHIhxw&s"
                  alt="MultifunctionalPrimaryTestset"
                  className="w-28"
                />
                <p className="text-center text-neutral">Tan Delta Tester</p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzNeJJoUhYWpjHpwPfJEvZLCESU6AHWdZcEg&s"
                  alt="MultifunctionalPrimaryTestset"
                  className="w-28"
                />
                <p className="text-center text-neutral">
                  DC Winding Resistance Tester
                </p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY9MsCzBApgfNLcqI5dTdp2OO7cwFi-0yqwQ&s"
                  alt="MultifunctionalPrimaryTestset"
                  className="w-28"
                />
                <p className="text-center text-neutral">
                  Circuit Breaker Analyzer
                </p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdfMYWrZhKhTv2MHyIZ75421M5X5SqCJkNZQ&s"
                  alt="MultifunctionalPrimaryTestset"
                  className="w-28"
                />
                <p className="text-center text-neutral">Tripping Time Tester</p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGIyBUKMN-jp9pb6LcUjsZtPyMin3wytvsig&s"
                  alt="MultifunctionalPrimaryTestset"
                  className="w-28"
                />
                <p className="text-center text-neutral">
                  Transformer Oil Tester
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="container">
            <h3 className="text-2xl sm:text-3xl font-semibold text-neutral text-center">
              <span className="primary_text">
                BNB POWER & ENGINEERING PROJECT DIVISION TEAM
              </span>
            </h3>

            {/* table */}
            <div className="overflow-x-auto mt-6">
              <table className="w-full">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Designation</th>
                    <th>Contact</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>MD. Badrul Hasan</td>
                    <td>MD/CEO</td>
                    <td>
                      <p>badrul@bnb-bd.com</p>
                      <p>Phone: +880 1713-462148</p>
                    </td>
                  </tr>
                  <tr>
                    <td>MD. Azahar Uddin</td>
                    <td>Chief Engineer</td>
                    <td>
                      <p>azahar@bnb-bd.com</p>
                      <p>Phone: +88 01324-344348</p>
                    </td>
                  </tr>
                  <tr>
                    <td>MD. Ryhan Khan Bipul</td>
                    <td>Project Director</td>
                    <td>
                      <p>bipul@bnb-bd.com</p>
                      <p>Phone: +88 01717-143521</p>
                    </td>
                  </tr>
                  <tr>
                    <td>Md. Parves</td>
                    <td>Project Manager (operations)</td>
                    <td>
                      <p>parves@bnb-bd.com</p>
                      <p>Phone: +880 1819 - 045434</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="overflow-x-aut">
              <table className="w-full">
                <thead>
                  <tr>
                    <th colSpan={2} className="text-center">
                      Singapore Office
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>MR. PC CHUA</td>
                    <td className="text-center">Phone: +65 9661 7921</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="overflow-x-aut">
              <table className="w-full">
                <thead>
                  <tr>
                    <th colSpan={2} className="text-center">
                      MatarBari ,Cox’s Office
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Mr. Hyder</td>
                    <td className="text-center">Phone: +88 01837-282263</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
