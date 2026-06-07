import Image from "next/image";

const team = [
  {
    name: "Sarah Chen",
    role: "Creative Director",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&auto=format&fit=crop&q=60",
    bio: "Visionary leader with 12+ years crafting brand stories for global clients.",
  },
  {
    name: "Marcus Rivera",
    role: "Lead Developer",
    image:
      "https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?w=400&auto=format&fit=crop&q=60",
    bio: "Full-stack architect who turns complex problems into elegant solutions.",
  },
  {
    name: "Elena Voss",
    role: "Design Lead",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&auto=format&fit=crop&q=60",
    bio: "Pixel-perfect designer obsessed with creating intuitive user experiences.",
  },
  {
    name: "James Park",
    role: "Strategy Director",
    image:
      "https://plus.unsplash.com/premium_photo-1661580574627-9211124e5c3f?w=400&auto=format&fit=crop&q=60",
    bio: "Data-driven strategist who finds the intersection of creativity and ROI.",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 lg:py-32 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 lg:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-xs font-medium tracking-wide mb-4">
            Our Team
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
            Meet the Creators
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
            A diverse team of thinkers, makers, and dreamers united by a passion
            for extraordinary work.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {team.map((member) => (
            <div key={member.name} className="group text-center">
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden ring-2 ring-gray-100 dark:ring-gray-700 group-hover:ring-indigo-200 dark:group-hover:ring-indigo-600 transition-all duration-300">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="192px"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {member.name}
              </h3>
              <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium mt-1">
                {member.role}
              </p>
              <p className="text-sm text-gray-400 dark:text-gray-500 mt-3 leading-relaxed max-w-xs mx-auto">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
