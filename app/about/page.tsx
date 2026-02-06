export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-pattern opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6 font-display">
            Our Vision
          </h1>
          <p className="text-xl text-silver-300 leading-relaxed">
            To deliver world-class badminton coaching and nurture young talent to compete at the highest level
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gradient mb-6 font-display">
                Our Mission
              </h2>
              <p className="text-silver-300 text-lg leading-relaxed mb-4">
                Adira Badminton Academy was founded by 5 passionate coaches and 3 parents, united by a shared vision: 
                to create a focused, high-performance environment that supports every athlete's journey toward excellence.
              </p>
              <p className="text-silver-300 text-lg leading-relaxed mb-4">
                With deep expertise, unwavering commitment, and strong values, we aim to nurture young talent 
                to compete at the highest level — including representing India professionally.
              </p>
              <p className="text-silver-300 text-lg leading-relaxed">
                Our academy is built on the foundation of world-class coaching, state-of-the-art facilities, 
                and a commitment to excellence in every aspect of training.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-gold-500/20">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">🎯</div>
                  <div>
                    <h3 className="text-xl font-bold text-gold-500 mb-2">Excellence</h3>
                    <p className="text-silver-400">Striving for the highest standards in coaching and training</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">💪</div>
                  <div>
                    <h3 className="text-xl font-bold text-gold-500 mb-2">Commitment</h3>
                    <p className="text-silver-400">Unwavering dedication to every athlete's success</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">🌟</div>
                  <div>
                    <h3 className="text-xl font-bold text-gold-500 mb-2">Expertise</h3>
                    <p className="text-silver-400">Coaches with international experience and proven track records</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient mb-4 font-display">
              Our Foundation
            </h2>
            <p className="text-silver-400 text-lg">
              Built by passionate professionals dedicated to badminton excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-gold-500/20 text-center">
              <div className="text-5xl mb-4">👨‍🏫</div>
              <h3 className="text-2xl font-bold text-gold-500 mb-2">5 Coaches</h3>
              <p className="text-silver-400">Passionate professionals with deep expertise</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-gold-500/20 text-center">
              <div className="text-5xl mb-4">👨‍👩‍👧‍👦</div>
              <h3 className="text-2xl font-bold text-gold-500 mb-2">3 Parents</h3>
              <p className="text-silver-400">Dedicated supporters of young talent</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-gold-500/20 text-center">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold text-gold-500 mb-2">Shared Vision</h3>
              <p className="text-silver-400">Unified commitment to excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Management Structure */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient mb-4 font-display">
              Academy Structure
            </h2>
            <p className="text-silver-400 text-lg">
              Organized management for optimal operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-gold-500/20">
              <h3 className="text-2xl font-bold text-gold-500 mb-4">Management Committee</h3>
              <p className="text-silver-300 leading-relaxed">
                A dedicated management committee oversees the smooth operation of the academy, 
                ensuring all aspects run efficiently and effectively.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-gold-500/20">
              <h3 className="text-2xl font-bold text-gold-500 mb-4">Coaching Panel</h3>
              <p className="text-silver-300 leading-relaxed">
                Led by our Head Coach, the coaching panel consists of experienced professionals 
                working together to deliver comprehensive training programs.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-gold-500/20">
              <h3 className="text-2xl font-bold text-gold-500 mb-4">Security & Safety</h3>
              <p className="text-silver-300 leading-relaxed">
                The entire academy is covered with CCTV cameras, ensuring a safe and secure 
                environment for all athletes and staff.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-gold-500/20">
              <h3 className="text-2xl font-bold text-gold-500 mb-4">Future Tournaments</h3>
              <p className="text-silver-300 leading-relaxed">
                We plan to conduct tournaments in the future, providing competitive opportunities 
                for players to showcase their skills and progress.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
