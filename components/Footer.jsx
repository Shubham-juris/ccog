import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-20">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* About */}
        <div>
          <h2 className="text-xl font-bold text-red-500 mb-4">CCOG</h2>
          <p className="text-gray-400 text-sm">
            CCOG is a modern learning platform providing professional
            training and career-focused courses to help students grow.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/" className="hover:text-red-500">Home</Link></li>
            <li><Link href="/about" className="hover:text-red-500">About</Link></li>
            <li><Link href="/courses" className="hover:text-red-500">Courses</Link></li>
            <li><Link href="/contact" className="hover:text-red-500">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Online Training</li>
            <li>Career Guidance</li>
            <li>Certification</li>
            <li>Internship Support</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>
          <p className="text-gray-400 text-sm">
            Email: info@ccog.com
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Phone: +91 9876543210
          </p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} CCOG. All rights reserved.
      </div>
    </footer>
  );
}
