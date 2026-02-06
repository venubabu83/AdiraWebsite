export default function Coaches() {
  // Sample coach data - based on the provided profile
  const coaches = [
    {
      name: 'V Jyothi Swarupa',
      role: 'Senior Coach',
      education: 'M.B.A',
      achievements: [
        'Represented Indian Team as Coach - Senior at Li Ning Sri Lanka International Series 2024',
        'Represented Indian Team as Coach - Asian U15 & U17 Junior Championships at Chengdu, China (2023)',
        'Served as Coach at National Center of Excellence, Guwahati for World Junior Team Camp',
        'India No. 7 (2007-08 BAI Rankings) in Women\'s Doubles',
        'India No. 4 (2004-05 BAI Rankings) in U-19 Girls Doubles',
        'Multiple State Championships Winner',
        'Bharath Sanchar Kreeda Award Winner (2007-08, 2009, 2015)',
      ],
      highlights: [
        'International Coaching Experience',
        'Former National Level Player',
        'Extensive Training Camp Experience',
      ],
    },
    {
      name: 'Current Indian Team Coach',
      role: 'Head Coach',
      education: 'Professional Badminton Coach',
      achievements: [
        'Current Coach of Indian National Badminton Team',
        'International Level Coaching Experience',
        'Trained Multiple National Champions',
      ],
      highlights: [
        'Highest Level Coaching Credentials',
        'International Tournament Experience',
        'Elite Player Development',
      ],
    },
    {
      name: 'International Representative Coach',
      role: 'Senior Coach',
      education: 'Professional Badminton Coach',
      achievements: [
        'Represented India at International Level',
        'Extensive Training Experience',
        'Multiple Championship Wins',
      ],
      highlights: [
        'International Playing Experience',
        'Professional Training Expertise',
        'Championship Winning Record',
      ],
    },
    {
      name: 'Experienced Training Coach',
      role: 'Coach',
      education: 'Professional Badminton Coach',
      achievements: [
        'Years of Training Experience',
        'Developed Multiple Talented Players',
        'Specialized Training Programs',
      ],
      highlights: [
        'Proven Training Methods',
        'Player Development Focus',
        'Technical Expertise',
      ],
    },
    {
      name: 'Expert Badminton Coach',
      role: 'Coach',
      education: 'Professional Badminton Coach',
      achievements: [
        'Comprehensive Coaching Experience',
        'Youth Development Specialist',
        'Performance Optimization',
      ],
      highlights: [
        'Youth Training Expertise',
        'Performance Enhancement',
        'Technical Mastery',
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
            Our Coaches
          </h1>
          <p className="text-xl text-silver-300 leading-relaxed">
            World-class coaching expertise with international experience and proven track records
          </p>
        </div>
      </section>

      {/* Coaches Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {coaches.map((coach, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-gold-500/20 hover:border-gold-500/50 transition-all duration-300"
              >
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h2 className="text-2xl font-bold text-gold-500 mb-1">{coach.name}</h2>
                      <p className="text-silver-400">{coach.role}</p>
                    </div>
                    <div className="text-4xl">👨‍🏫</div>
                  </div>
                  {coach.education && (
                    <p className="text-sm text-silver-500 mb-4">Education: {coach.education}</p>
                  )}
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gold-400 mb-3">Key Highlights</h3>
                  <ul className="space-y-2">
                    {coach.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-gold-500 mr-2">✓</span>
                        <span className="text-silver-300 text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gold-400 mb-3">Achievements</h3>
                  <ul className="space-y-2">
                    {coach.achievements.slice(0, 4).map((achievement, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-gold-500 mr-2">🏆</span>
                        <span className="text-silver-400 text-sm">{achievement}</span>
                      </li>
                    ))}
                    {coach.achievements.length > 4 && (
                      <li className="text-silver-500 text-sm italic">
                        + {coach.achievements.length - 4} more achievements
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coaching Philosophy */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-900 to-black p-10 rounded-2xl border border-gold-500/30">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gradient mb-4 font-display">
                Coaching Philosophy
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-gold-500 mb-2">Excellence</h3>
                <p className="text-silver-400 text-sm">
                  Striving for the highest standards in every training session
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-xl font-bold text-gold-500 mb-2">Expertise</h3>
                <p className="text-silver-400 text-sm">
                  Leveraging international experience and proven methodologies
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🌟</div>
                <h3 className="text-xl font-bold text-gold-500 mb-2">Development</h3>
                <p className="text-silver-400 text-sm">
                  Nurturing talent from beginner to professional level
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
