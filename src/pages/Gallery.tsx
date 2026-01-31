import { useState, useEffect } from 'react';
import { Image, Video, Filter } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { GalleryItem } from '../types';

export default function Gallery() {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [filter, setFilter] = useState<'all' | 'image' | 'video'>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGalleryItems();
  }, []);

  const fetchGalleryItems = async () => {
    try {
      const { data, error } = await supabase
        .from('gallery_items')
        .select('*')
        .order('order_index', { ascending: true });

      if (error) throw error;
      setGalleryItems(data || []);
    } catch (error) {
      console.error('Error fetching gallery items:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredItems = galleryItems.filter(
    (item) => filter === 'all' || item.media_type === filter
  );

  const placeholderItems = [
    {
      id: '1',
      title: 'Concert Performance',
      description: 'Annual music concert featuring student performances',
      media_url: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800',
      media_type: 'image' as const,
      category: 'performance',
    },
    {
      id: '2',
      title: 'Orchestra Practice',
      description: 'Symphony orchestra rehearsal session',
      media_url: 'https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg?auto=compress&cs=tinysrgb&w=800',
      media_type: 'image' as const,
      category: 'practice',
    },
    {
      id: '3',
      title: 'Jazz Ensemble',
      description: 'Student jazz ensemble performing live',
      media_url: 'https://images.pexels.com/photos/995301/pexels-photo-995301.jpeg?auto=compress&cs=tinysrgb&w=800',
      media_type: 'image' as const,
      category: 'performance',
    },
    {
      id: '4',
      title: 'Piano Recital',
      description: 'Solo piano recital showcase',
      media_url: 'https://images.pexels.com/photos/210764/pexels-photo-210764.jpeg?auto=compress&cs=tinysrgb&w=800',
      media_type: 'image' as const,
      category: 'performance',
    },
    {
      id: '5',
      title: 'Guitar Workshop',
      description: 'Guitar masterclass with renowned artist',
      media_url: 'https://images.pexels.com/photos/1751731/pexels-photo-1751731.jpeg?auto=compress&cs=tinysrgb&w=800',
      media_type: 'image' as const,
      category: 'workshop',
    },
    {
      id: '6',
      title: 'Choir Performance',
      description: 'Student choir at regional competition',
      media_url: 'https://images.pexels.com/photos/8191603/pexels-photo-8191603.jpeg?auto=compress&cs=tinysrgb&w=800',
      media_type: 'image' as const,
      category: 'performance',
    },
  ];

  const displayItems = filteredItems.length > 0 ? filteredItems : placeholderItems;

  return (
    <div className="bg-black text-white min-h-screen pt-16">
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute top-10 left-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-red-500">Gallery</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore memorable moments from our performances, events, and daily musical journey
            </p>
          </div>

          <div className="flex items-center justify-center space-x-4 mb-12">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                filter === 'all'
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              <Filter className="w-4 h-4 inline-block mr-2" />
              All
            </button>
            <button
              onClick={() => setFilter('image')}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                filter === 'image'
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              <Image className="w-4 h-4 inline-block mr-2" />
              Photos
            </button>
            <button
              onClick={() => setFilter('video')}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                filter === 'video'
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              <Video className="w-4 h-4 inline-block mr-2" />
              Videos
            </button>
          </div>

          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayItems.map((item) => (
                <div
                  key={item.id}
                  className="group relative bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-red-500/50 transition-all"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    {item.media_type === 'image' ? (
                      <img
                        src={item.media_url}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <video
                        src={item.media_url}
                        className="w-full h-full object-cover"
                        controls
                      />
                    )}
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
          )}
        </div>
      </section>
    </div>
  );
}
