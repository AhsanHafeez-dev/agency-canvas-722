"use client";

import Image from "next/image";

const projects = [
  {
    title: "NovaTech Redesign",
    category: "Web Development",
    image:
      "https://images.pexels.com/photos/29884349/pexels-photo-29884349.jpeg",
    color: "from-indigo-500/90 to-purple-600/90",
  },
  {
    title: "Bloom Wellness",
    category: "Brand Identity",
    image:
      "https://images.unsplash.com/photo-1512850183-6d7990f42385?w=600&auto=format&fit=crop&q=60",
    color: "from-emerald-500/90 to-teal-600/90",
  },
  {
    title: "Vertex Dashboard",
    category: "Product Design",
    image:
      "https://images.pexels.com/photos/831475/pexels-photo-831475.jpeg",
    color: "from-orange-500/90 to-red-600/90",
  },
  {
    title: "Cultivate App",
    category: "Mobile App",
    image:
      "https://images.unsplash.com/photo-1516490701444-1daf45984537?w=600&auto=format&fit=crop&q=60",
    color: "from-sky-500/90 to-blue-600/90",
  },
  {
    title: "Heritage Eats",
    category: "Branding & Packaging",
    image:
      "https://images.unsplash.com/photo-1570161766218-f8488ebb8078?w=600&auto=format&fit=crop&q=60",
    color: "from-rose-500/90 to-pink-600/90",
  },
  {
    title: "Aether Commerce",
    category: "E-Commerce",
    image:
      "https://plus.unsplash.com/premium_photo-1661962627529-73e5d332d04a?w=600&auto=format&fit=crop&q=60",
    color: "from-violet-500/90 to-purple-600/90",
  },
];

export default function Work() {
  return (
    <section id="work" className="py-24 lg:py-32 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 lg:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-xs font-medium tracking-wide mb-4">
            Our Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
            Featured Work
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
            Each project is a story of collaboration, creativity, and
            craftsmanship. Here are some we&apos;re proud to share.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <a
              key={project.title}
              href="#"
              className="group relative block rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer"
              onClick={(e) => e.preventDefault()}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6`}
              >
                <span className="text-white/80 text-xs font-medium tracking-wide uppercase mb-1">
                  {project.category}
                </span>
                <h3 className="text-white text-xl font-bold">
                  {project.title}
                </h3>
              </div>
              {/* Always visible bottom gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <span className="text-white/80 text-xs font-medium tracking-wide uppercase mb-1">
                  {project.category}
                </span>
                <h3 className="text-white text-xl font-bold">
                  {project.title}
                </h3>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 hover:-translate-y-0.5"
          >
            Start Your Project
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
