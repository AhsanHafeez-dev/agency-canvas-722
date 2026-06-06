import {
  Palette,
  Code,
  Camera,
  TrendingUp,
  Megaphone,
  Layout,
} from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Branding & Identity",
    description:
      "Crafting memorable brand identities that tell your story and resonate with your audience.",
  },
  {
    icon: Code,
    title: "Web Development",
    description:
      "Building high-performance, responsive websites with cutting-edge technology.",
  },
  {
    icon: Camera,
    title: "Visual Design",
    description:
      "Creating stunning visuals from UI/UX design to motion graphics that captivate.",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description:
      "Data-driven strategies that amplify your reach and drive measurable growth.",
  },
  {
    icon: Megaphone,
    title: "Content Strategy",
    description:
      "Compelling content that communicates your message and engages your target market.",
  },
  {
    icon: Layout,
    title: "Product Design",
    description:
      "End-to-end product design from concept to launch with user-centered approach.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 lg:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-medium tracking-wide mb-4">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Services We Deliver
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            From concept to launch, we provide end-to-end creative solutions
            that help businesses stand out in a crowded digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-indigo-100 hover:bg-indigo-50/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-50"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-100 group-hover:bg-indigo-200 flex items-center justify-center mb-5 transition-colors">
                  <Icon className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
