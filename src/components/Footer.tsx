"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                C
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Canvas<span className="text-indigo-400">.</span>
              </span>
            </a>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              A full-service creative agency crafting digital experiences that
              make an impact.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                "Branding",
                "Web Development",
                "UI/UX Design",
                "Digital Marketing",
                "Content Strategy",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {[
                { label: "About", href: "#" },
                { label: "Careers", href: "#" },
                { label: "Our Process", href: "#" },
                { label: "Blog", href: "#" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex gap-3">
              {["Twitter", "LinkedIn", "Dribbble", "Instagram"].map(
                (platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-indigo-600 flex items-center justify-center text-xs font-medium text-gray-400 hover:text-white transition-all"
                    onClick={(e) => e.preventDefault()}
                  >
                    {platform[0]}
                  </a>
                )
              )}
            </div>
            <p className="mt-4 text-xs text-gray-500">
              Subscribe to our newsletter for the latest insights.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Canvas Agency. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
              onClick={(e) => e.preventDefault()}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
              onClick={(e) => e.preventDefault()}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
