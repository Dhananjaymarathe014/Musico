import { Music2, Users, Award, Calendar } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-black text-white">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
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
          <button className="px-8 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md transition-all transform hover:scale-105">
            Explore Our Department
          </button>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full p-1">
            <div className="w-1.5 h-3 bg-gray-600 rounded-full mx-auto animate-pulse"></div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
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
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Music2 className="w-32 h-32 text-red-500/50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Why Choose <span className="text-red-500">Us</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-black/50 p-8 rounded-lg border border-gray-800 hover:border-red-500/50 transition-all">
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Faculty</h3>
              <p className="text-gray-400">
                Learn from accomplished musicians and educators with decades of experience
              </p>
            </div>
            <div className="bg-black/50 p-8 rounded-lg border border-gray-800 hover:border-red-500/50 transition-all">
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                <Music2 className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Premium Instruments</h3>
              <p className="text-gray-400">
                Access to world-class instruments and recording equipment
              </p>
            </div>
            <div className="bg-black/50 p-8 rounded-lg border border-gray-800 hover:border-red-500/50 transition-all">
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Award Winning</h3>
              <p className="text-gray-400">
                Our students consistently win prestigious music competitions
              </p>
            </div>
            <div className="bg-black/50 p-8 rounded-lg border border-gray-800 hover:border-red-500/50 transition-all">
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Regular Events</h3>
              <p className="text-gray-400">
                Concerts, recitals, and masterclasses throughout the year
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
