const abouts = [
  {
    _id: "1",
    title: "Our Mission",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nisi repudiandae, ipsam quas sequi molestias! Consectetur delectus modi nostrum illo expedita in praesentium soluta voluptatibus et? Saepe eos sit omnis vero. Cumque et debitis placeat hic perspiciatis, fuga, quibusdam sit rem quae optio dolor repellat impedit unde, aperiam autem aliquam cum. Esse ut laboriosam natus maiores quam exercitationem, autem sint tempora minima cupiditate veniam maxime iure provident odit qui nisi? Necessitatibus labore libero reiciendis deserunt! Debitis excepturi aliquam tempore corrupti architecto odit! Officiis dolores dignissimos molestiae itaque fugit sed repellendus sit voluptatibus cum, ullam suscipit facere praesentium labore quaerat odio.",
    image: "/images/mission.png",
  },
  {
    _id: "2",
    title: "Our Vission",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nisi repudiandae, ipsam quas sequi molestias! Consectetur delectus modi nostrum illo expedita in praesentium soluta voluptatibus et? Saepe eos sit omnis vero. Cumque et debitis placeat hic perspiciatis, fuga, quibusdam sit rem quae optio dolor repellat impedit unde, aperiam autem aliquam cum. Esse ut laboriosam natus maiores quam exercitationem, autem sint tempora minima cupiditate veniam maxime iure provident odit qui nisi? Necessitatibus labore libero reiciendis deserunt! Debitis excepturi aliquam tempore corrupti architecto odit! Officiis dolores dignissimos molestiae itaque fugit sed repellendus sit voluptatibus cum, ullam suscipit facere praesentium labore quaerat odio.",
    image: "/images/vission.png",
  },
  {
    _id: "2",
    title: "Our Values",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nisi repudiandae, ipsam quas sequi molestias! Consectetur delectus modi nostrum illo expedita in praesentium soluta voluptatibus et? Saepe eos sit omnis vero. Cumque et debitis placeat hic perspiciatis, fuga, quibusdam sit rem quae optio dolor repellat impedit unde, aperiam autem aliquam cum. Esse ut laboriosam natus maiores quam exercitationem, autem sint tempora minima cupiditate veniam maxime iure provident odit qui nisi? Necessitatibus labore libero reiciendis deserunt! Debitis excepturi aliquam tempore corrupti architecto odit! Officiis dolores dignissimos molestiae itaque fugit sed repellendus sit voluptatibus cum, ullam suscipit facere praesentium labore quaerat odio.",
    image: "/images/values.png",
  },
];

export default function MoreAbout() {
  return (
    <section className="py-10">
      <div className="container">
        <div className="flex flex-col">
          {abouts?.map((about) => (
            <div key={about?._id} className="more_about_card">
              <div className="content">
                <h2 className="text-4xl font-semibold">{about?.title}</h2>
                <p className="mt-1 text-gray-200 text-sm">
                  {about?.description}
                </p>
              </div>

              <div className="image">
                <img
                  src={about?.image}
                  alt={about?.title}
                  className="w-[80%] sm:w-[60%] mx-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
