import { Link } from "react-router-dom";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMail, MdOutlineLocationOn } from "react-icons/md";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-gray-200 pt-10 pb-5 text-base-100"
      style={{
        backgroundImage: `url('/images/counter_bg.jpg')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 pb-14">
          <div className="md:col-span-2">
            <img
              src="/images/logo.png"
              alt="logo"
              className="w-60"
              loading="lazy"
            />
            <p className="text-sm mt-3 text-gray-100 font-light md:pr-40">
              BNB Group stands as a multi-line business leader in Bangladesh,
              with a robust track record and commitment to quality.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium">Information</h2>
            <ul className="mt-4 text-gray-100 font-light flex flex-col gap-1.5 text-[15px]">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/who-we-are" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/brands" className="hover:underline">
                  Our Brands
                </Link>
              </li>
              <li>
                <Link to="/news-events" className="hover:underline">
                  News & Events
                </Link>
              </li>
              <li>
                <Link to="/e-shop" className="hover:underline">
                  E Shop
                </Link>
              </li>
              <li>
                <Link to={`/contact-us`} className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-medium">Contact</h2>
            <ul className="text-gray-100 font-light mt-4 flex flex-col gap-1.5 text-[15px]">
              <li>
                <p className="flex items-center gap-1.5">
                  <BsTelephone />
                  +88 01717-143521
                </p>
              </li>
              <li>
                <p className="flex items-center gap-1.5">
                  <MdOutlineMail />
                  info@bnb-bd.com
                </p>
              </li>
              <li>
                <div className="flex gap-1">
                  <p className="text-lg mt-1">
                    <MdOutlineLocationOn />
                  </p>
                  <p>
                    <span className="font-medium">Corporate Office:</span>{" "}
                    Sabbir Chamber (2nd Floor) 60, Agrabad, C/Ac,
                    Chittagoang-4100, Bangladesh
                  </p>
                </div>
              </li>
              <li>
                <div className="flex gap-1">
                  <p className="text-lg mt-1">
                    <MdOutlineLocationOn />
                  </p>
                  <p>
                    <span className="font-medium">Dhaka Office address:</span>{" "}
                    Southern Ridge, House: 64 (1st Floor), Road: 03, Block: B,
                    Niketon, Gulshan-1, Dhaka - 1212
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary pt-5">
          <div className="flex justify-between items-center">
            <p className="text-gray-100 text-sm font-light">
              Copyright © {currentYear} BNB Group. All rights reserved.
              developed by{" "}
              <Link
                to="https://emanagerit.com"
                target="_blank"
                className="underline text-primary"
              >
                eManager
              </Link>
            </p>

            <div className="flex gap-2 items-center"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
