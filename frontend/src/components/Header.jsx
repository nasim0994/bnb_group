import "../assets/css/header.css";
import { useEffect, useMemo, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useGetLogosQuery } from "../Redux/logoApi";
import { useGetAllCompanyQuery } from "../Redux/companyApi";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const { data: company } = useGetAllCompanyQuery();
  const companies = company?.data;

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (
        e.target.closest(".menu_wrap ul li a") &&
        !e.target.closest(".menu_btn") &&
        !e.target.closest(".menu_wrap ul li a svg")
      ) {
        setMobileMenu(false);
      }
    });
  }, []);

  return (
    <header className="sticky top-0 bg-[#ffffffcc] backdrop-blur-[30px] z-50 py-1.5 md:py-0 border-b">
      <div className="container">
        <div className="flex justify-between items-center">
          <Link to="/">
            <img
              src="/images/logo.png"
              alt="logo"
              className="w-20 sm:w-24 xl:w-56"
              loading="lazy"
            />
          </Link>

          <nav className="menu_wrap flex items-center gap-2">
            <button
              onClick={() => setMobileMenu(false)}
              className={`menu_overlay ${mobileMenu && "menu_overlay_show"}`}
            ></button>

            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="md:hidden menu_btn"
            >
              <HiOutlineMenuAlt3 className="text-2xl" />
            </button>

            <ul
              className={`flex items-center gap-3 font-medium ${
                mobileMenu && "show"
              }`}
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>

              <li>
                <NavLink to="/who-we-are">About Us</NavLink>
              </li>

              <li>
                <NavLink to="/brands">Our Brands</NavLink>
              </li>

              <li>
                <NavLink to="news-events">News & Events</NavLink>
              </li>

              <li>
                <NavLink to="e-shop">E Shop</NavLink>
              </li>

              <li>
                <NavLink to="/contact-us">Contact Us</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
