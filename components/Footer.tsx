import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gold-500/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-gradient mb-4">ADIRA</h3>
            <p className="text-silver-400 text-sm leading-relaxed">
              Delivering world-class badminton coaching and nurturing young talent to compete at the highest level.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold-500 font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-silver-400 hover:text-gold-500 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="text-silver-400 hover:text-gold-500 transition-colors text-sm">
                  Facilities
                </Link>
              </li>
              <li>
                <Link href="/coaches" className="text-silver-400 hover:text-gold-500 transition-colors text-sm">
                  Our Coaches
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-silver-400 hover:text-gold-500 transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-gold-500 font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-silver-400 text-sm">
              <li>Opening Soon</li>
              <li>8 Professional Courts</li>
              <li>World-Class Facilities</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gold-500/20 text-center">
          <p className="text-silver-500 text-sm">
            © {new Date().getFullYear()} Adira Badminton Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
