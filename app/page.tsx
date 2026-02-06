import Link from 'next/link'

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-pattern opacity-30"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-silver-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-block mb-6">
              <div className="relative w-32 h-32 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500 via-gold-600 to-gold-700 rounded-full opacity-90 animate-pulse"></div>
                <div className="absolute inset-2 bg-black rounded-full flex items-center justify-center">
                  <span className="text-5xl font-bold text-gradient">A</span>
                </div>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gradient font-display">
              ADIRA
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-gradient-silver mb-6">
              Badminton Academy
            </h2>
            <p className="text-xl md:text-2xl text-silver-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              World-Class Coaching • Excellence • Professional Training
            </p>
            <p className="text-lg text-silver-400 max-w-2xl mx-auto mb-10">
              Nurturing young talent to compete at the highest level and represent India professionally
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/about"
                className="px-8 py-4 bg-gradient-to-r from-gold-600 to-gold-700 text-black font-bold rounded-lg hover:from-gold-500 hover:to-gold-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-gold-500/50"
              >
                Our Vision
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-gold-500 text-gold-500 font-bold rounded-lg hover:bg-gold-500 hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4 font-display">
              Why Choose Adira?
            </h2>
            <p className="text-silver-400 text-lg max-w-2xl mx-auto">
              A focused, high-performance environment supporting every athlete's journey toward excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🏸',
                title: '8 Professional Courts',
                description: 'All courts equipped with Yonex mats and latest lighting technology for optimal training conditions',
              },
              {
                icon: '👨‍🏫',
                title: 'Expert Coaches',
                description: 'Coaches with international experience, including current Indian team coach and former national players',
              },
              {
                icon: '🏆',
                title: 'World-Class Facilities',
                description: 'Yonex Pro Shop, Gym, Gallery, Dormitories, and comprehensive fitness training areas',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-gold-500/20 hover:border-gold-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gold-500 mb-3">{feature.title}</h3>
                <p className="text-silver-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Categories Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4 font-display">
              Training Programs
            </h2>
            <p className="text-silver-400 text-lg max-w-2xl mx-auto">
              Comprehensive training programs for players at every level
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Professional', level: 'Elite' },
              { name: 'Semi Professional', level: 'Advanced' },
              { name: 'Regular Players', level: 'Intermediate' },
              { name: 'Beginners', level: 'Foundation' },
              { name: 'Health Badminton', level: 'Membership' },
              { name: 'General Public', level: 'Hourly Booking' },
            ].map((program, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-lg border border-silver-500/20 hover:border-gold-500/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-gold-500">{program.name}</h3>
                  <span className="text-xs text-silver-500 bg-silver-900/50 px-2 py-1 rounded">
                    {program.level}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6 font-display">
            Opening Soon
          </h2>
          <p className="text-xl text-silver-300 mb-8">
            Join us in less than a month as we open our doors to aspiring badminton champions
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-gradient-to-r from-gold-600 to-gold-700 text-black font-bold rounded-lg hover:from-gold-500 hover:to-gold-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-gold-500/50"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}
