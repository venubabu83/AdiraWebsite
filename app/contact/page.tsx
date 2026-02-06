'use client'

export default function Contact() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-pattern opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6 font-display">
            Contact Us
          </h1>
          <p className="text-xl text-silver-300 leading-relaxed">
            Get in touch with us to learn more about our programs and facilities
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-gradient mb-8 font-display">
                Get In Touch
              </h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-gold-500/20">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">📍</div>
                    <div>
                      <h3 className="text-xl font-bold text-gold-500 mb-2">Location</h3>
                      <p className="text-silver-400">
                        Adira Badminton Academy<br />
                        Opening Soon<br />
                        (Address to be updated)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-gold-500/20">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">📞</div>
                    <div>
                      <h3 className="text-xl font-bold text-gold-500 mb-2">Phone</h3>
                      <p className="text-silver-400">
                        Contact details coming soon
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-gold-500/20">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">✉️</div>
                    <div>
                      <h3 className="text-xl font-bold text-gold-500 mb-2">Email</h3>
                      <p className="text-silver-400">
                        Email address coming soon
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-gold-500/20">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">⏰</div>
                    <div>
                      <h3 className="text-xl font-bold text-gold-500 mb-2">Opening</h3>
                      <p className="text-silver-400">
                        Opening in less than a month
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div>
              <h2 className="text-3xl font-bold text-gradient mb-8 font-display">
                Find Us
              </h2>
              <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-gold-500/20">
                <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center relative overflow-hidden">
                  {/* Placeholder for Google Map - Replace with actual embed code */}
                  <div className="text-center p-8">
                    <div className="text-5xl mb-4">🗺️</div>
                    <p className="text-silver-400 mb-4">
                      Google Map will be embedded here
                    </p>
                    <p className="text-silver-500 text-sm">
                      To add Google Maps, replace this section with an iframe embed code from Google Maps.
                      <br />
                      Example: &lt;iframe src="https://www.google.com/maps/embed?pb=..."&gt;&lt;/iframe&gt;
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-silver-400 text-sm">
                    <strong className="text-gold-500">Note:</strong> Replace the placeholder above with your actual Google Maps embed code. 
                    You can get the embed code by:
                  </p>
                  <ol className="list-decimal list-inside text-silver-500 text-sm mt-2 space-y-1">
                    <li>Go to Google Maps and search for your location</li>
                    <li>Click "Share" → "Embed a map"</li>
                    <li>Copy the iframe code and paste it in the contact page component</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-900 to-black p-10 rounded-2xl border border-gold-500/30">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gradient mb-6 font-display">
                Ready to Join Us?
              </h2>
              <p className="text-silver-300 text-lg mb-8 max-w-2xl mx-auto">
                We're opening soon and excited to welcome aspiring badminton champions. 
                Stay tuned for registration details and opening announcements.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-4xl mb-3">🏸</div>
                  <h3 className="text-lg font-bold text-gold-500 mb-2">8 Courts</h3>
                  <p className="text-silver-400 text-sm">Professional training facilities</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">👨‍🏫</div>
                  <h3 className="text-lg font-bold text-gold-500 mb-2">Expert Coaches</h3>
                  <p className="text-silver-400 text-sm">World-class coaching team</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🏆</div>
                  <h3 className="text-lg font-bold text-gold-500 mb-2">Excellence</h3>
                  <p className="text-silver-400 text-sm">Pathway to professional success</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
