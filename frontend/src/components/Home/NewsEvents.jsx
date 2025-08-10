import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function NewsEvents() {
  return (
    <section className="py-10">
      <div className="container">
        <h2 className="text-4xl text-neutral font-bold text-center">
          News & Events
        </h2>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link to={`/`} className="rounded shadow overflow-hidden">
            <img
              src="/images/resort1.jpg"
              alt="news"
              className="w-full h-60 object-cover"
            />

            <div className="p-4">
              <h2 className="text-2xl font-semibold mt-4">Resort Opening</h2>
              <p className="mt-4 text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit recusandae sapiente, inventore repellendus repudiandae
                ut doloremque non beatae consectetur ea placeat ab, perspiciatis
                consequatur porro, necessitatibus minima natus eius incidunt...
              </p>

              <button className="mt-5">
                <BsArrowRight />
              </button>
            </div>
          </Link>

          <Link to={`/`} className="rounded shadow overflow-hidden">
            <img
              src="/images/resort1.jpg"
              alt="news"
              className="w-full h-60 object-cover"
            />

            <div className="p-4">
              <h2 className="text-2xl font-semibold mt-4">Resort Opening</h2>
              <p className="mt-4 text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit recusandae sapiente, inventore repellendus repudiandae
                ut doloremque non beatae consectetur ea placeat ab, perspiciatis
                consequatur porro, necessitatibus minima natus eius incidunt...
              </p>

              <button className="mt-5">
                <BsArrowRight />
              </button>
            </div>
          </Link>

          <Link to={`/`} className="rounded shadow overflow-hidden">
            <img
              src="/images/resort1.jpg"
              alt="news"
              className="w-full h-60 object-cover"
            />

            <div className="p-4">
              <h2 className="text-2xl font-semibold mt-4">Resort Opening</h2>
              <p className="mt-4 text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit recusandae sapiente, inventore repellendus repudiandae
                ut doloremque non beatae consectetur ea placeat ab, perspiciatis
                consequatur porro, necessitatibus minima natus eius incidunt...
              </p>

              <button className="mt-5">
                <BsArrowRight />
              </button>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
