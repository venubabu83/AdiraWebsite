export default function Facilities() {
  const facilities = [
    {
      category: 'Courts',
      items: [
        { name: '8 Professional Courts', description: 'All courts equipped with Yonex mats for optimal performance', icon: '🏸' },
        { name: 'Latest Lighting', description: 'State-of-the-art lighting system for perfect visibility', icon: '💡' },
      ],
    },
    {
      category: 'Training & Fitness',
      items: [
        { name: 'Gym', description: 'Fully equipped gymnasium for strength and conditioning', icon: '💪' },
        { name: 'Fitness Training Area', description: 'Huge dedicated space for fitness training programs', icon: '🏋️' },
      ],
    },
    {
      category: 'Amenities',
      items: [
        { name: 'Yonex Pro Shop', description: 'Official Yonex equipment and gear available on-site', icon: '🛍️' },
        { name: 'Huge Gallery', description: 'Spacious viewing gallery for spectators and events', icon: '👥' },
        { name: 'Kitchen', description: 'Fully functional kitchen for nutrition support', icon: '🍽️' },
      ],
    },
    {
      category: 'Accommodation',
      items: [
        { name: 'Boys Dormitory', description: 'Comfortable accommodation for male athletes', icon: '🛏️' },
        { name: 'Girls Dormitory', description: 'Safe and secure accommodation for female athletes', icon: '🛏️' },
      ],
    },
    {
      category: 'Infrastructure',
      items: [
        { name: 'Huge Parking Area', description: 'Ample parking space for visitors and members', icon: '🚗' },
        { name: 'CCTV Coverage', description: 'Complete security coverage throughout the academy', icon: '📹' },
      ],
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-pattern opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6 font-display">
            World-Class Facilities
          </h1>
          <p className="text-xl text-silver-300 leading-relaxed">
            State-of-the-art infrastructure designed to support excellence in badminton training
          </p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {facilities.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h2 className="text-3xl font-bold text-gradient mb-8 font-display text-center">
                {category.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((facility, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-gold-500/20 hover:border-gold-500/50 transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="text-4xl mb-4">{facility.icon}</div>
                    <h3 className="text-xl font-bold text-gold-500 mb-2">{facility.name}</h3>
                    <p className="text-silver-400">{facility.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Highlight Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-900 to-black p-10 rounded-2xl border border-gold-500/30">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gradient mb-4 font-display">
                Premium Equipment
              </h2>
              <p className="text-silver-300 text-lg">
                We partner with Yonex, the world's leading badminton equipment brand
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🏸</div>
                <h3 className="text-xl font-bold text-gold-500 mb-2">Yonex Mats</h3>
                <p className="text-silver-400">
                  All 8 courts feature professional-grade Yonex mats for optimal performance and safety
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🛍️</div>
                <h3 className="text-xl font-bold text-gold-500 mb-2">Yonex Pro Shop</h3>
                <p className="text-silver-400">
                  Official Yonex equipment, rackets, shoes, and accessories available on-site
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
