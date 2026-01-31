import { Music2, Users, Award, Calendar, Image, Video, Filter, Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import MusicParticles from '../components/MusicParticles';

export default function Home() {
  const [filter, setFilter] = useState<'all' | 'image' | 'video'>('all');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const placeholderItems = [
    {
      id: '1',
      title: 'Concert Performance',
      description: 'Annual music concert featuring student performances',
      media_url: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800',
      media_type: 'image' as const,
    },
    {
      id: '2',
      title: 'Orchestra Practice',
      description: 'Symphony orchestra rehearsal session',
      media_url: 'https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg?auto=compress&cs=tinysrgb&w=800',
      media_type: 'image' as const,
    },
    {
      id: '3',
      title: 'Jazz Ensemble',
      description: 'Student jazz ensemble performing live',
      media_url: 'https://images.pexels.com/photos/995301/pexels-photo-995301.jpeg?auto=compress&cs=tinysrgb&w=800',
      media_type: 'image' as const,
    },
    {
      id: '4',
      title: 'Piano Recital',
      description: 'Solo piano recital showcase',
      media_url: 'https://images.pexels.com/photos/210764/pexels-photo-210764.jpeg?auto=compress&cs=tinysrgb&w=800',
      media_type: 'image' as const,
    },
    {
      id: '5',
      title: 'Guitar Workshop',
      description: 'Guitar masterclass with renowned artist',
      media_url: 'https://images.pexels.com/photos/1751731/pexels-photo-1751731.jpeg?auto=compress&cs=tinysrgb&w=800',
      media_type: 'image' as const,
    },
    {
      id: '6',
      title: 'Choir Performance',
      description: 'Student choir at regional competition',
      media_url: 'https://images.pexels.com/photos/8191603/pexels-photo-8191603.jpeg?auto=compress&cs=tinysrgb&w=800',
      media_type: 'image' as const,
    },
  ];

  const filteredItems = placeholderItems.filter(
    (item) => filter === 'all' || item.media_type === filter
  );

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitting(false);
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  const handleContactChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-black text-white">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          <MusicParticles />
          <div className="absolute top-20 right-20 w-64 h-64 bg-red-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 text-center px-4">
          <div className="mb-8 inline-block">
            <div className="w-16 h-16 mx-auto mb-4 bg-red-500/20 rounded-full flex items-center justify-center">
              <Music2 className="w-8 h-8 text-red-500" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-wide mb-6 animate-fade-in">
            KVTR's Music Library
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Discover the art of music through our diverse programs and talented artists
          </p>
          <button 
            onClick={() => {
              const aboutSection = document.getElementById('about-us');
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="px-8 py-3 border-2 border-red-500 text-red-500 hover:bg-red-500/10 font-semibold rounded-md transition-all transform hover:scale-105 backdrop-blur-sm"
          >
            Explore Our Department
          </button>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full p-1">
            <div className="w-1.5 h-3 bg-gray-600 rounded-full mx-auto animate-pulse"></div>
          </div>
        </div>
      </section>

      <section id="about-us" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            About Our <span className="text-red-500">Department</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Our music department is dedicated to nurturing musical talent and fostering a deep appreciation for the art of sound. With state-of-the-art facilities and experienced instructors, we provide comprehensive music education across various disciplines.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                From classical to contemporary, we offer programs that cater to all skill levels. Our students have gone on to perform on international stages, compose award-winning pieces, and inspire the next generation of musicians.
              </p>
            </div>
            <div className="relative flex justify-center">
              <div className="w-80 h-80 rounded-lg overflow-hidden border border-gray-800 shadow-lg">
                <img
                  src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Music performance"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="text-red-500">Us</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Experience excellence in music education with our comprehensive programs and world-class facilities
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 p-8 rounded-xl border border-gray-800/50 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-red-500/20 to-red-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-7 h-7 text-red-500" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-red-500 transition-colors">Expert Faculty</h3>
                <p className="text-gray-400 leading-relaxed">
                  Learn from accomplished musicians and educators with decades of experience
                </p>
              </div>
            </div>
            <div className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 p-8 rounded-xl border border-gray-800/50 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-red-500/20 to-red-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Music2 className="w-7 h-7 text-red-500" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-red-500 transition-colors">Premium Instruments</h3>
                <p className="text-gray-400 leading-relaxed">
                  Access to world-class instruments and recording equipment
                </p>
              </div>
            </div>
            <div className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 p-8 rounded-xl border border-gray-800/50 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-red-500/20 to-red-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Award className="w-7 h-7 text-red-500" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-red-500 transition-colors">Award Winning</h3>
                <p className="text-gray-400 leading-relaxed">
                  Our students consistently win prestigious music competitions
                </p>
              </div>
            </div>
            <div className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 p-8 rounded-xl border border-gray-800/50 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-red-500/20 to-red-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Calendar className="w-7 h-7 text-red-500" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-red-500 transition-colors">Regular Events</h3>
                <p className="text-gray-400 leading-relaxed">
                  Concerts, recitals, and masterclasses throughout the year
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-b from-gray-900 to-black">
        <div className="absolute top-10 left-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-red-500">Gallery</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore memorable moments from our performances, events, and daily musical journey
            </p>
          </div>

          <div className="flex items-center justify-center space-x-4 mb-12">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2.5 rounded-md font-medium transition-all border-2 backdrop-blur-sm ${
                filter === 'all'
                  ? 'border-red-500 text-red-500 bg-red-500/10 shadow-lg shadow-red-500/30'
                  : 'border-gray-700 text-gray-400 hover:border-red-500/50 hover:text-red-500/70 hover:shadow-md hover:shadow-red-500/20'
              }`}
            >
              <Filter className="w-4 h-4 inline-block mr-2" />
              All
            </button>
            <button
              onClick={() => setFilter('image')}
              className={`px-6 py-2.5 rounded-md font-medium transition-all border-2 backdrop-blur-sm ${
                filter === 'image'
                  ? 'border-red-500 text-red-500 bg-red-500/10 shadow-lg shadow-red-500/30'
                  : 'border-gray-700 text-gray-400 hover:border-red-500/50 hover:text-red-500/70 hover:shadow-md hover:shadow-red-500/20'
              }`}
            >
              <Image className="w-4 h-4 inline-block mr-2" />
              Photos
            </button>
            <button
              onClick={() => setFilter('video')}
              className={`px-6 py-2.5 rounded-md font-medium transition-all border-2 backdrop-blur-sm ${
                filter === 'video'
                  ? 'border-red-500 text-red-500 bg-red-500/10 shadow-lg shadow-red-500/30'
                  : 'border-gray-700 text-gray-400 hover:border-red-500/50 hover:text-red-500/70 hover:shadow-md hover:shadow-red-500/20'
              }`}
            >
              <Video className="w-4 h-4 inline-block mr-2" />
              Videos
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-red-500/50 transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.media_url}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-20 px-4 overflow-hidden bg-black">
        <div className="absolute top-10 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="text-red-500">Touch</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Have questions about our programs? We'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="space-y-8 mb-12">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                    <p className="text-gray-400">
                      KVTR's CBSE School<br />
                      shirpur , 425405
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                    <p className="text-gray-400">
                      Main: (+91) 968-946-2674<br />
                      Admissions: (+91) 968-946-2675
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                    <p className="text-gray-400">
                      info@musicodept.edu<br />
                      admissions@musicodept.edu
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-black rounded-lg p-8 border border-gray-800">
                <h3 className="text-2xl font-bold mb-4">Office Hours</h3>
                <div className="space-y-2 text-gray-400">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="text-white">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="text-white">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="text-white">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black rounded-lg p-8 border border-gray-800">
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              {submitted && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-md text-green-500">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleContactChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-md focus:outline-none focus:border-red-500 transition-colors"
                    placeholder="KVTR CBSE"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleContactChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-md focus:outline-none focus:border-red-500 transition-colors"
                    placeholder="kvtr@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleContactChange}
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-md focus:outline-none focus:border-red-500 transition-colors"
                    placeholder="Program Inquiry"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleContactChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-md focus:outline-none focus:border-red-500 transition-colors resize-none"
                    placeholder="Tell us about your interest in our music programs..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full px-8 py-3 bg-red-500 hover:bg-red-600 disabled:bg-gray-700 text-white font-semibold rounded-md transition-all flex items-center justify-center space-x-2"
                >
                  {submitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
