import { Guitar, Music, Radio, Drum } from 'lucide-react';

export default function Instruments() {
  const instruments = [
    {
      category: 'String Instruments',
      icon: Guitar,
      items: [
        { name: 'Acoustic Guitar', description: 'Perfect for folk, country, and fingerstyle music' },
        { name: 'Electric Guitar', description: 'Ideal for rock, jazz, and contemporary music' },
        { name: 'Violin', description: 'Classical and modern string instrument' },
        { name: 'Cello', description: 'Deep, rich tones for orchestral and solo performances' },
        { name: 'Bass Guitar', description: 'Foundation of rhythm and groove' },
      ],
    },
    {
      category: 'Wind Instruments',
      icon: Music,
      items: [
        { name: 'Flute', description: 'Elegant woodwind instrument for classical and jazz' },
        { name: 'Clarinet', description: 'Versatile woodwind with warm tone' },
        { name: 'Saxophone', description: 'Essential for jazz and contemporary music' },
        { name: 'Trumpet', description: 'Bright, powerful brass instrument' },
        { name: 'Trombone', description: 'Smooth, sliding brass instrument' },
      ],
    },
    {
      category: 'Percussion',
      icon: Drum,
      items: [
        { name: 'Drum Kit', description: 'Complete set for rock, jazz, and pop music' },
        { name: 'Timpani', description: 'Orchestral kettle drums' },
        { name: 'Xylophone', description: 'Melodic percussion instrument' },
        { name: 'Congas', description: 'Latin percussion for rhythm' },
        { name: 'Cajon', description: 'Box drum for acoustic performances' },
      ],
    },
    {
      category: 'Keyboard Instruments',
      icon: Radio,
      items: [
        { name: 'Grand Piano', description: 'Premium acoustic piano for classical and jazz' },
        { name: 'Digital Piano', description: 'Modern alternative with authentic sound' },
        { name: 'Synthesizer', description: 'Electronic sound creation and design' },
        { name: 'Organ', description: 'Traditional and modern organ music' },
        { name: 'Keyboard', description: 'Versatile portable instrument' },
      ],
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen pt-16">
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute top-10 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-red-500">Instruments</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore our extensive collection of professional-grade instruments available for students and performers
            </p>
          </div>

          <div className="space-y-16">
            {instruments.map((category) => (
              <div key={category.category} className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-8 border border-gray-800">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-14 h-14 bg-red-500/20 rounded-lg flex items-center justify-center">
                    <category.icon className="w-7 h-7 text-red-500" />
                  </div>
                  <h2 className="text-3xl font-bold">{category.category}</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="bg-black/50 p-6 rounded-lg border border-gray-800 hover:border-red-500/50 transition-all group"
                    >
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-red-500 transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-xl p-8 border border-red-500/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Want to Learn?</h3>
              <p className="text-gray-300 mb-6">
                All instruments are available for lessons with our expert instructors
              </p>
              <button className="px-8 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md transition-all">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
