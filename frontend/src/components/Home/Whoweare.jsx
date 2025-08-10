export default function Whoweare() {
  return (
    <section className="py-10">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-5xl text-neutral font-bold">
              BNB Group – A Vision Transformed into Success
            </h2>

            <div className="mt-4 text-neutral/90 flex flex-col gap-1 text-[17px]">
              BNB GROUP is more than just a business; it’s a story of ambition,
              innovation, and excellence. As one of Bangladesh’s most trusted
              and forward-thinking enterprises, we have been delivering
              top-quality products for over two decades. Our expertise spans
              across multiple industries, including electrical accessories,
              renewable energy, home appliances, water purifiers, cables,
              shipping lines, research & development, and charcoal
              manufacturing.
            </div>

            <button className="mt-6 primary_btn">Know More</button>
          </div>

          <div>
            <img
              src="/images/about.jpg"
              alt="about"
              className="h-80 sm:h-96 w-full rounded object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
